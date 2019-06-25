import { Component } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-created-message',
  templateUrl: './order-created-message.page.html',
  styleUrls: ['./order-created-message.page.scss'],
})
export class OrderCreatedMessagePage {

  totalPrice: number

  filial: Filial

  //Valor de descontos do cupom
  couponDiscounts: number;

  constructor(public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.totalPrice = this.navParams.get("totalPrice");
    this.filial = this.navParams.get("filial");
    this.couponDiscounts = this.navParams.get("couponDiscounts");
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}
