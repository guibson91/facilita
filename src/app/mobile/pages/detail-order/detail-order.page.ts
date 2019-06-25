import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../../../../models/order';
import { Filial } from '../../../../models/filial';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.page.html',
  styleUrls: ['./detail-order.page.scss'],
})
export class DetailOrderPage implements OnInit, OnDestroy {

  @Input()
  order: Order

  filial: Filial

  constructor(public navCtrl: NavController,
    public system: SystemService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {

    // this.order = this.navParams.get('order');

  }

  subscription_filial: Subscription
  subscription_order: Subscription

  ngOnInit() {
    console.log("Order: ", this.order);
    if (this.order && this.order.filial && this.order.filial.id) {
      this.subscription_filial = Filial.object(this.order.filial.id).subscribe((filial: Filial) => {
        this.filial = filial;
      })
    }
    if (this.order && this.order.id) {
      this.subscription_order = Order.object(this.order.id).subscribe((order: Order) => {
        this.order = order
        console.log("Order após subscription: ", this.order);
      })
    }
  }

  ngOnDestroy() {
    if (this.subscription_filial) {
      this.subscription_filial.unsubscribe();
    }
    if (this.subscription_order) {
      this.subscription_order.unsubscribe();
    }
  }

  ionViewDidEnter(): void {
    this.system.setScreenName("DetailOrderPage")
  }

  dismiss() {
    // this.navCtrl.pop();
    this.modalCtrl.dismiss();
  }

  async help() {
    const alert = await this.alertCtrl.create({
      header: 'Ajuda',
      message: `<ul><li>Endereço onde vai ser entregue</li><li>Itens do pedido</li>
      <li>Método de pagamento</li>
      <li>Valores do pedido</li>
      <li>Status no qual o pedido se encontra</li></ul>`,
      buttons: [{ role: 'cancel', text: 'ok' }]
    })
    alert.present()
  }

}
