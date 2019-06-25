import { Component, OnInit } from '@angular/core';
import { Entry } from '../../../../models/order';
import { NavParams, NavController, AlertController, ToastController, ModalController } from '@ionic/angular';
import { CartService } from '../../../services/cart.service';
import { SystemService } from '../../../services/system.service';
import { Filial } from '../../../../models/filial';

@Component({
  selector: 'app-order-item-edit',
  templateUrl: './order-item-edit.page.html',
  styleUrls: ['./order-item-edit.page.scss'],
})
export class OrderItemEditPage {

  filial: Filial;

  entry: Entry;
  edit: string;
  get totalPriceEntry() {
    return this.entry.price * this.entry.quantity
  }

  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public cartProvider: CartService,
    public alertCtrl: AlertController,
    public toast: ToastController,
    public system: SystemService,
    public modalCtrl: ModalController) {

    if (this.navParams.get('entry')) {
      this.entry = this.navParams.get('entry')
      this.edit = 'EDITAR PEDIDO'
    }

    else this.entry = Entry.entryFromProduct(this.navParams.get('product'))

    if (this.navParams.get('filial')) this.filial = this.navParams.get('filial')
    else this.filial = this.cartProvider.filial

    this.calculateEntry();
  }

  ionViewDidEnter(): void {
    this.system.setScreenName("OrderItemEditPage")
  }

  async addToCart() {
    if (!this.entry.valid) {
      let alert = await this.alertCtrl.create({
        header: "Você precisa selecionar os complementos obrigatórios",
        buttons: [
          {
            text: "Ok"
          }
        ]
      })
      alert.present();
      return;
    }
    if (this.navParams.get('entry')) {
      this.cartProvider.updateStorage()
      this.navCtrl.goBack();
      let toast = await this.toast.create({
        message: `${this.entry.product.name} editado com sucesso`,
        position: 'bottom',
        duration: 1500
      })
      toast.present();
    } else {
      this.cartProvider.add(this.entry, this.filial, this.modalCtrl);
    }
  }

  increment() {
    this.cartProvider.increment(this.entry, 1)
  }

  decrement() {
    this.cartProvider.increment(this.entry, -1)
  }

  calculateEntry() {
    Entry.calculateEntryValues(this.entry)
  }

  async help() {
    let alert = await this.alertCtrl.create({
      header: "Especificações de um produto",
      message: "Você pode escolher dentre diversas opções para melhor personalizar seu produto. Algumas opções são obrigatórias e necessárias para a realização do pedido.",
      buttons: ["Ok"]
    })
    alert.present()
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}