import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Filial } from '../../../../../models/filial';
import { Company } from '../../../../../models/company';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../../../../services/authentication.service';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filial-list',
  templateUrl: './filial-list.page.html',
  styleUrls: ['./filial-list.page.scss'],
})
export class FilialListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa.
   */
  searchString: string = "";

  /**
   * Observable que contém a lista de filiais
   */
  filials: Filial[];

  initSubscription: Subscription

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Se não possui filiais.
   * Se após baixar não vier filiais aí sim podemos garantir que não existem filiais atualmente.
   * Usada para mostrar mensagem "Você não possui filiais".
   */
  existsFilials: boolean = true;

  company: Company;

  get isTEAM(): boolean {
    return this.shared.isTeam
  }

  constructor(public navCtrl: NavController,
    public authentication: AuthenticationService,
    public menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    public loadingCtrl: LoadingController,
    public shared: SharedService,
    private route: ActivatedRoute,
    public system: SystemService) { }

  /**
   * Inicializar a lista de relacionamentos.
   * @todo Tirar dos comentarios
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true)
    this.loading = true
    this.existsFilials = true

    this.initSubscription = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else if (this.shared.isManager)
          return this.shared.company$
        else
          return of(null)
      }))
      .pipe(first())
      .pipe(switchMap((company: Company) => {
        let filials$: Observable<Filial[]>
        if (company) {
          this.company = company;
          console.log(this.company)
          filials$ = Company.filials
            .list(company.id)
        } else {
          filials$ = Filial.list()
        }

        return filials$
      }))
      .subscribe((filials: Filial[]) => {
        this.filials = filials;
        // Verificar se não existe categorias.
        if (filials && filials.length === 0) {
          this.existsFilials = false
        } else {
          this.existsFilials = true
        }
        // Não está mais carregando.
        this.loading = false;
        this.ref.detectChanges()
      }, err => {
        this.loading = false
        this.ref.detectChanges()
        this.system.showErrorAlert(err);
      })
  }

  detect() {
    this.ref.detectChanges()
  }

  ngOnDestroy() {
    if (this.initSubscription) this.initSubscription.unsubscribe()
  }

  /**
   * Ir para página de adição
   */
  add() {
    this.navCtrl.navigateRoot(['filial/edit', { company_id: this.company.id }])
  }

  /**
   * Ir para a página FilialEditPage para editar uma filial
   * @param filial filial a ser editada
   */
  async edit(filial: Filial) {
    this.navCtrl.navigateRoot(['filial/edit', { company_id: filial.company.id, filial_id: filial.id }])
  }

  /**
   * Abrir o estoque de uma determinada filial
   * @param filial Filial escolhida
   * @todo OPEN CARDAPIO
   */
  openStock(filial: Filial) {
    this.navCtrl.navigateRoot(['stock/list', { filial_id: filial.id, company_id: filial.company.id }])
  }

  openStockPromotion(filial: Filial) {
    this.navCtrl.navigateRoot(['stock/promotion/list', { filial_id: filial.id, company_id: filial.company.id }])
  }

  openInvoice(filial: Filial) {
    this.navCtrl.navigateRoot(['invoice/list', { filial_id: filial.id, company_id: filial.company.id }])
  }

  openStatistics(filial: Filial) {
    this.navCtrl.navigateRoot(['statistic/orders', { filial_id: filial.id, company_id: filial.company.id }])
  }

  changeActiveStatus(filial: Filial) {
    Filial.changeActive(filial, filial.active).subscribe()
  }

}
