import { Component, Input } from '@angular/core';
import { Observable, isObservable } from 'rxjs';
import { NavController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'nano-buttons',
  templateUrl: './nano-buttons.component.html',
  styleUrls: ['./nano-buttons.component.scss']
})
export class NanoButtonsComponent {

  /**
   * define se o botão "salvar" está enabled
   */
  @Input() canSave: boolean = false

  /**
   * define se o botão "remover" está presente
   */
  @Input() canRemove: boolean = false

  /**
   * função que deve vir com bind
   */
  @Input() save: () => Observable<any>

  /**
   * função que deve vir com bind
   */
  @Input() remove: () => Observable<any>

  /**
   * Função que deve ir com bind
   */
  @Input() cancel: () => any;

  error: string

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public system: SystemService
  ) { }

  cancel_button(): void {
    if (this.cancel) {
      this.cancel();
    }
  }

  /**
   * Efetuar uma adição ou edição.
   */
  async click_save() {
    if (this.save) {
      try {
        let result = this.save();
        if (isObservable(result)) {
          let load = await this.loadingCtrl.create()
          load.present()
          result.subscribe(async (res) => {
            if (res === null) return;
            load.dismiss()
            let toast = await this.toastCtrl.create({
              message: "Edição feita com sucesso",
              duration: 2000
            })
            toast.present()
          }, (err: Error) => {
            this.error = err.message
            console.error(err)
            load.dismiss()
          })

        }
      } catch (err) {
        this.error = err.message
      }
    }
  }

  /**
   * Efetuar a remoção
   */
  async click_remove() {
    let alert = await this.alertCtrl.create({
      header: "Remover",
      subHeader: "Tem certeza que deseja remover?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: "Remover",
          handler: async () => {

            let result = this.remove();
            if (isObservable(result)) {

              let load = await this.loadingCtrl.create({})
              load.present()

              result.subscribe(() => {
                load.dismiss()
              }, (err: Error) => {
                load.dismiss()
                this.error = err.message
                console.error(err)
              })

            }
          }
        }
      ]
    })
    alert.present()

  }
}
