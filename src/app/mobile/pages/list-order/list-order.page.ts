import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../../../../models/order';
import { NavController, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';
import { Filial } from '../../../../models/filial';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.page.html',
  styleUrls: ['./list-order.page.scss'],
})
export class ListOrderPage {

  orders: Order[];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public shared: SharedService,
    public system: SystemService,
    public loadingCtrl: LoadingController,
    public change: ChangeDetectorRef,
    public modalCtrl: ModalController) {

    this.shared.pending_orders$.pipe(first()).subscribe(async (orders) => {

      let loading = await this.loadingCtrl.create({});
      loading.present();

      this.orders = orders;
      if (this.orders) {
        combineLatest(this.orders.map((order: Order) => Filial.object(order.filial.id)))
          .subscribe((filials: Filial[]) => {
            for (let i = 0; i < this.orders.length; i++) {
              this.orders[i].filial_full = filials[i];
              setTimeout(() => {
                this.change.detectChanges();
              }, 10)
              console.log("Pedidos pendentes: ", orders);
              loading.dismiss();
            }
          })
      }
      else {
        loading.dismiss();
        this.system.showErrorAlert(Error('Ops! Você não possui múltiplos pedidos. Tente novamente.'));
        this.modalCtrl.dismiss();
      }
    })

  }

  ionViewDidEnter(): void {
    this.system.setScreenName("ListOrderPage")
  }

  async help() {
    const alert = await this.alertCtrl.create({
      header: 'Ajuda',
      message: 'Lista dos seus pedidos realizados que ainda estão em aberto. Clique no pedido para mais detalhes.',
      buttons: [{ role: 'cancel', text: 'ok' }]
    })
    alert.present()
  }

  back() {
    this.navCtrl.goBack();
  }

  goTrackOrder(order) {
    console.log("Foi clicado no pedido: ", order);
    this.navCtrl.navigateForward(['mobile/track-order', {
      index_order: this.orders.findIndex((item) => {
        return order.id == item.id
      })
    }]);
  }

}