import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { ComplementOption, ComplementType, Complement } from '../../../../models/product';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'order-complement-list',
  templateUrl: './order-complement-list.component.html',
  styleUrls: ['./order-complement-list.component.scss']
})
export class OrderComplementListComponent implements OnInit {

  /**
   * Complemento
   */
  @Input() complement: Complement

  /**
   * Evento emitido sempre que for editado alguma quantidade das opções selecionadas
   */
  @Output() change = new EventEmitter<void>();

  /**
   * Opção selecionada
   */
  option_single_selected: ComplementOption

  /**
   * Total soma das quantidades das opções
   */
  total_sum_quantity: number = 0

  /**
   * Valores usados pelo template
   */
  TYPE_QUANTITY: ComplementType = ComplementType.quantity

  TYPE_SINGLE: ComplementType = ComplementType.single

  TYPE_MULTIPLE: ComplementType = ComplementType.multiple

  constructor(public alertCtrl: AlertController, public changeDetect: ChangeDetectorRef) { }

  ngOnInit() {

    this.complement.options = this.complement.options
      .filter((option) => option.active !== false)

    switch (this.complement.type) {
      case ComplementType.single:
        this.initSingle()
        break;
      case ComplementType.multiple:
        this.calculateTotalSum()
        break;
      case ComplementType.quantity:
        this.calculateTotalSum()
        break;
      default:
        console.error(this.complement)
        throw Error("Order Complement List Component chamado sem um complemento com tipo válido")
    }
  }

  /**
   * Inicializa a variavel this.option_single_selected
   * que armazena a opção selecionada
   */
  initSingle(): void {
    for (let option of this.complement.options) {
      if (option.quantity && option.quantity > 0 && !this.option_single_selected) {
        this.option_single_selected = option
      }
      option.quantity = 0
    }
  }
  /**
   * Calcula a soma atual de todas as quantidades das opções
   */
  calculateTotalSum(): void {
    this.total_sum_quantity = 0
    for (let option of this.complement.options) {
      this.total_sum_quantity += (option.quantity || 0)
    }
  }

  /**
   * Mudança no complemento de tipo single
   * @param event Evento de javascript
   */
  singleChange(event): void {
    for (let option of this.complement.options) {
      option.quantity = 0
    }
    if (this.option_single_selected) {
      this.option_single_selected.quantity = 1
    }
    this.change.emit()
  }

  /**
   * Mudança no complemento de tipo multiple
   * @param option Opção clicada
   * @param event Evento de javascript
   */
  multipleChange(option: ComplementOption, event): void {
    setTimeout(() => {
      console.log("Opção múltipla: ", option);
      console.log("Complement: ", this.complement)
      console.log("Soma total: ", this.total_sum_quantity)
      console.log("Evento: ", event);
      console.log("Evento valor: ", event.value);
      if (event.detail.checked && this.complement.max != 0 && this.total_sum_quantity >= this.complement.max) {
        event.preventDefault();
        option.quantity = 0
        event.detail.checked = false;
        this.changeDetect.detectChanges();
        this.showAlertQuantityMax()
      }
      // O campo quantity é usado como booleano no Checkbox
      // Converter para numero
      this.complement.options.map((option) => {
        if (option.quantity) {
          option.quantity = 1
        } else {
          option.quantity = 0
        }
      })
      this.calculateTotalSum()
      this.change.emit()
    }, 50)
    
  }


  /**
   * Mudança no complemento de tipo quantity
   * @param option Opção a ser editada
   * @param increment quantidade do incremento, pode ser 1 ou -1
   */
  quantityChange(option: ComplementOption, increment: 1 | -1): void {
    if (this.complement.max != 0 && increment > 0 && this.total_sum_quantity >= this.complement.max) {
      this.showAlertQuantityMax()
      return
    }
    option.quantity = option.quantity || 0
    option.quantity += increment
    if (option.quantity < 0) option.quantity = 0

    this.calculateTotalSum()
    this.change.emit()
  }

  /**
   * Alerta para avisar que ele já selecionou o máximo de quantidade de opções neste determinado complemento.
   */
  async showAlertQuantityMax() {
    let alert = await this.alertCtrl.create({
      message: "Você já selecionou o máximo de opções desse complemento!",
      buttons: [
        {
          text: "Ok"
        }
      ]
    })
    alert.present();
  }

}
