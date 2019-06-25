import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Filial, IntervalHours } from '../../../../models/filial';
import * as moment from 'moment';
import { Subscription, of } from 'rxjs';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { NavController } from '@ionic/angular';
import { flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'card-filial-open',
  templateUrl: './card-filial-open.component.html',
  styleUrls: ['./card-filial-open.component.scss']
})
export class CardFilialOpenComponent implements OnInit, OnDestroy {


  filials: Filial[];
  _filial: Filial;

  @Input() filial: Filial;

  old_type_open: "working_hours" | "free" = "free"

  type_open: "working_hours" | "free" = "free"

  open_filial: boolean

  old_open_filial: boolean

  loading: boolean;

  @Input() inside: boolean

  business_hours: IntervalHours[] = []

  subscription: Subscription

  get existChange(): boolean {
    return this.type_open !== this.old_type_open || this.open_filial !== this.old_open_filial
  }

  get threeColumns(): boolean {
    if (this.type_open === "free" && this.filials && this.filials.length > 1) return true
    else return null
  }

  get twoColumns(): boolean {
    if ((this.type_open === "free" && (!this.filials || this.filials.length <= 1)) ||
      (this.type_open === "working_hours" && this.filials && this.filials.length > 1))
      return true
    else return null
  }

  constructor(public shared: SharedService,
    public system: SystemService,
    private ref: ChangeDetectorRef,
    public navCtrl: NavController) { }

  /**
   * inicializar dados
   */
  ngOnInit() {
    if (this.filial) {
      this.setFilial(this.filial)
    } else {
      this.load()
    }
  }

  /**
   * Destruir os subscribes
   */
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe()
  }

  /**
   * Carregar informações
   */
  load(): void {
    this.loading = true
    if (this.subscription) this.subscription.unsubscribe()

    this.subscription = this.shared.filials$.pipe(flatMap((filials: Filial[]) => {
      if (filials && filials.length > 0) {
        this.setFilial(filials[0]);
        this.filials = filials;
        return of(null)
      } else {
        return this.shared.filial$.pipe(tap((filial: Filial) => {
          if (filial) {
            this.setFilial(filial)
          }
        }))
      }
    })).subscribe(() => {
      this.loading = false;
      this.ref.detectChanges()
    })
  }

  /**
   * Atualizar a filial atual
   * @param filial Nova filial
   */
  setFilial(filial: Filial) {
    this._filial = filial
    if (this._filial.open_on_business_hours) {
      this.type_open = this.old_type_open = "working_hours"
    } else {
      this.type_open = this.old_type_open = "free"
    }
    this.open_filial = this.old_open_filial = this._filial.open
    if (this._filial.business_hours && this._filial.business_hours[new Date().getDay()]) {
      this.business_hours = this._filial.business_hours[new Date().getDay()]
    } else {
      this.business_hours = []
    }
  }

  detect(){
    this.ref.detectChanges()
  }

  /**
   * Dia da semana no formato de texto:
   * Domingo, Segunda-feira, Terça-feira, ...
   */
  dayWeek(): string {
    moment.locale('pt-BR')
    return moment().format("dddd")
  }

  /**
   * Salvar edições no método de abertura da filial
   */
  save() {
    let obj: Filial = {}
    if (this.type_open === "free") {
      obj.open_on_business_hours = false
      obj.open = this.open_filial
    } else if (this.type_open === "working_hours") {
      obj.open_on_business_hours = true
      obj.open = false
    } else {
      throw Error("Método de abertura de filial inválido")
    }

    this.loading = true
    this.ref.detectChanges()
    Filial.update(this._filial.id, obj).subscribe(() => {
      this.loading = false
      //this.ref.detectChanges()
      this.old_type_open = this.type_open
      this.old_open_filial = this.open_filial
    }, err => {
      this.loading = false
      //this.ref.detectChanges()
      this.system.showErrorAlert(err)
    })
  }

  /**
   * Ir para a página para editar o horário de funcionamento
   * @todo AJUSTAR
   */
  editWorkingHours() {
    throw Error("Função não implementada!!!")
    /*this.navCtrl.setRoot(FilialEditPage, {
      filial: this._filial,
      id_filial: this._filial.id,
      restaurant: this.shared.restaurant,
      id_restaurant: this.shared.restaurant ? this.shared.restaurant.id : this._filial.restaurant.id
    });*/
  }
}
