import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../models/order';
import { ToastController, NavController, NavParams, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';
import { firestore } from "firebase"

import "firebase/firestore"

@Component({
  selector: 'app-evaluate-order',
  templateUrl: './evaluate-order.page.html',
  styleUrls: ['./evaluate-order.page.scss'],
})
export class EvaluateOrderPage {

  order: Order;

  rate: number;

  comment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public system: SystemService, public alertCtrl: AlertController, public modalCtrl: ModalController, public toastCtrl: ToastController) {

    this.order = this.navParams.get('order');

  }

  ionViewDidEnter(): void {
    this.system.setScreenName("EvaluateOrderPage")
  }

  changeStar(ev) {
    this.rate = ev;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async finishOrder() {
    let loading = await this.loadingCtrl.create({})
    loading.present()
    if (!this.rate && !this.comment) {
      loading.dismiss()
      this.dismiss();
    }
    else {
      let objOrder: Order = {};
      objOrder.evaluate = {
        created_at: firestore.Timestamp.fromDate(new Date())
      };

      //Se houver comentário
      if (this.comment && this.comment.trim().length > 0) {
        objOrder.evaluate.comment = this.comment;
      }
      if (this.rate) {
        objOrder.evaluate.rate = this.rate;
      }

      //Deve-se atualizar Order (registrar a avaliação do usuário) e Filial (calcular nova média de satisfação)
      if (this.rate) {

        objOrder.evaluate.rate = this.rate;

        Order.update(this.order.id, objOrder).subscribe(async () => {
          let toast = await this.toastCtrl.create({
            message: `Sua avaliação foi enviada com sucesso!`,
            position: 'bottom',
            duration: 1500
          });
          toast.present()
          loading.dismiss()
          this.modalCtrl.dismiss();
        }, error => {
          this.system.showErrorAlert(error);
        })
      }
    }
  }

  async help() {
    let alert = await this.alertCtrl.create({
      message: 'Avalie e caso queira, deixe uma mensagem para ajudar o restaurante a melhorar seus servições. Apenas o restaurante poderá ver sua avaliação!',
      buttons: ['Ok']
    })
    alert.present()
  }

  onModelChange(currentRate) {
    //@todo Realizar avaliações mais elaboradas no futuro se nota menor q 5 estrelas
  }

}