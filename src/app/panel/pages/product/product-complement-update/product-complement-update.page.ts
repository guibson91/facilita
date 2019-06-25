import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Complement, ComplementOption } from '../../../../../models/product';
import { isObjectEmpty } from '../../../../util/util';
import { PopoverController, NavParams, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddOptionsComplementPage } from '../add-options-complement/add-options-complement.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-product-complement-update',
  templateUrl: './product-complement-update.page.html',
  styleUrls: ['./product-complement-update.page.scss'],
})
export class ProductComplementUpdatePage implements OnInit {

  /**
   * Formulário
   */
  form: FormGroup;

  /**
   * Dados do complemento a ser editado
   */
  @Input()
  complement: Complement;

  /**
   * Array com as opções do complemento.
   */
  options: ComplementOption[] = [];

  complementAux: Complement;

  constructor(private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    public ref: ChangeDetectorRef,
    private popoverCtrl: PopoverController) {
  }

  ngOnInit() {

    // Criar o formulário.
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      required: [false, Validators.required],
      min: [0],
      max: [0]
    });

    this.form.valueChanges.subscribe(() => {
      this.ref.detectChanges()
    })

    if (this.complement) {
      this.complementAux = JSON.parse(JSON.stringify(this.complement));
    }
    if (this.complement) {
      this.options = []
      if (this.complement.options) {
        this.complement.options.forEach(op => {
          this.options.push(op);
        });
      }
      this.form.patchValue(this.complement);
    }

  }

  /**
   * Dispara evento se as teclas alt + n for pressionado
   * @param event evento
   */
  hotkeys(event) {
    if (event.keyCode == 79 && event.altKey) {
      this.addOption();
    } else if (event.keyCode == 83 && event.altKey) {
      this.save();
    }
  }

  /**
   * Adicionar uma nova opção ao complemento.
   */
  async addOption() {

    const popover = await this.popoverCtrl.create({
      component: AddOptionsComplementPage,
      cssClass: "editOptionsComplementPage"
    });

    popover.onDidDismiss().then((ev: OverlayEventDetail) => {
      console.log("Evento OnDidDismiss: ", ev);
      if (ev && ev.data) {
        this.options.push(ev.data)
      }
    })
    popover.present()
  }

  /**
   * Remover opção selecionada do array local
   * @param option Opção selecionada
   */
  removeOption(option: ComplementOption) {
    let index: number = this.options.indexOf(option);
    this.options.splice(index, 1);
  }

  /**
   * Editar opção selecionada do array local
   * @param option Opção selecionada
   */
  async editOption(option: ComplementOption) {
    let index: number = this.options.indexOf(option);
    const popover = await this.popoverCtrl.create({
      component: AddOptionsComplementPage,
      componentProps: {
        option: option
      },
      cssClass: "editOptionsComplementPage"
    });
    popover.onDidDismiss().then((ev: OverlayEventDetail) => {
      if (ev && ev.data) {
        this.options[index] = ev.data
      }
    })
    popover.present()
  }

  /**
   * Ativar ou desativar opção do complemento
   */
  updateActiveOption(option: ComplementOption) {
    if (option.active === undefined) {
      option.active = true;
    }
    option.active = !option.active;
    // let index: number = this.options.indexOf(option)
    // let active: boolean = option.active
    // this.options[index].active = !active
  }

  /**
   * Subir complemento uma posição
   * @param complement complemento que se deseja subir
   * @param index index do complemento que se deseja subir
   */
  upOption(option, index) {

    if (!this.options[index - 1]) return;

    let aux = this.options[index - 1];
    this.options[index - 1] = this.options[index];
    this.options[index] = aux;

  }

  /**
   * Descer complemento uma posição
   * @param complement complemento que se deseja descer
   * @param index index do complemento que se deseja descer
   */
  downOption(option, index) {

    if (!this.options[index + 1]) return;

    let aux = this.options[index + 1];
    this.options[index + 1] = this.options[index];
    this.options[index] = aux;

  }

  /**
   * Voltar sem enviar nada para página pai
   */
  cancel(): void {
    if (!this.complement || isObjectEmpty(this.complement)) {
      this.modalCtrl.dismiss();
    }
    else {
      this.modalCtrl.dismiss({
        new_complement: this.complementAux
      });
    }
  }

  /**
   * Enviar para página pai as novas informações do complemento.
   */
  save(): void {

    let complement: Complement = this.form.value;
    complement.options = this.options;
    complement.min = +complement.min;
    complement.max = +complement.max;
    // Remove os valores null do array
    if (complement.options) {
      complement.options.filter((value) => {
        return value != null;
      });
    }
    // Remove os valores null do array
    if (complement.options) {
      complement.options.filter((value) => {
        return value != null;
      })
    }
    this.modalCtrl.dismiss({
      new_complement: complement
    });
  }

}