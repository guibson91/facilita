import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import { Platform, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';
import { SharedService } from '../../../services/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.page.html',
  styleUrls: ['./phone-edit.page.scss'],
})
export class PhoneEditPage implements OnInit {

  error: {
    code: number,
    title: string,
    message: string
  };

  @Input()
  user: User;

  form: FormGroup;

  constructor(
    public platform: Platform,
    public navParams: NavParams,
    private system: SystemService,
    private shared: SharedService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.system.setScreenName("PhoneEditPage")
    this.form = new FormGroup({
      phone: new FormControl(this.shared.user.phone || '', Validators.required),
    });
  }

  async showWarning() {
    let alert = await this.alertCtrl.create({
      header: 'Ops!',
      subHeader: 'Você precisa digitar um telefone válido',
      buttons: ['OK']
    });
    alert.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({ phone: '' });
  }

  async help() {
    const alert = await this.alertCtrl.create({
      header: 'Ajuda',
      message: 'Com o número do telefone aumenta a chance de eficácia de entrega.',
      buttons: [{ role: 'cancel', text: 'ok' }]
    })
    alert.present()
  }

  /**
   * Voltar página sem salvar alterações
   */
  cancel() {
    this.dismiss();
  }

  /**
   * Salvar alterações e redirecionar para página anterior
   */

  get isNewPhone() {
    if (this.shared.user.phone == this.form.value.phone) {
      return false
    } else {
      return true
    }

  }

  async registerPhone() {

    if (this.form.value.phone.length < 14) {
      this.showWarning();
    } else {

      let loading = await this.loadingCtrl.create({});
      loading.present();
      User.update(this.shared.user.id, { phone: this.form.value.phone }).subscribe(() => {
        loading.dismiss();
        this.modalCtrl.dismiss({ phone: this.form.value.phone });
        this.system.logEvent("save_phone")
      }, error => {
        loading.dismiss();
        this.system.showErrorAlert(error);
      });
    }
  }

}