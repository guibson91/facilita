import { Component, OnInit } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { Order } from '../../../../models/order';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { SystemService } from '../../../services/system.service';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { DetailOrderPage } from '../detail-order/detail-order.page';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  filial: Filial;

  order: Order;

  index: number;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public shared: SharedService,
    public modalCtrl: ModalController,
    public route: ActivatedRoute,
    public system: SystemService) {

    // this.order = this.navParams.get('order');


  }

  subscription_filial: Subscription
  subscription_order: Subscription

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.order = params.get('order');
    // })

    this.route.paramMap.pipe(flatMap(
      (params) => {
        this.index = Number(params.get('index_order'));
        console.log("Index: ", this.index);
        return this.shared.pending_orders$
      }
    )).pipe(first()).subscribe((orders) => {
      if (this.index) {
        this.order = orders[this.index];
      }
      else {
        this.order = orders[0];
      }
    })

    if (this.order && this.order.filial && this.order.filial.id) {
      this.subscription_filial = Filial.object(this.order.filial.id).subscribe((filial: Filial) => {
        this.filial = filial;
      })
    }

    if (this.order && this.order.id) {
      this.subscription_order = Order.object(this.order.id).subscribe((order: Order) => {
        this.order = order
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
    this.system.setScreenName("TrackOrderPage")
  }

  async goDetailOrder() {
    // this.navCtrl.push(DetailOrderPage, {
    //   order: this.order
    // });

    let modal = await this.modalCtrl.create({
      component: DetailOrderPage,
      componentProps: {
        order: this.order
      }
    })
    modal.present();

  }

  async help() {
    const alert = await this.alertCtrl.create({
      header: 'Ajuda',
      message: "Status atual do seu pedido. Para mais detalhes do seu pedido, clique em 'VER DETALHES'.",
      buttons: [{ role: 'cancel', text: 'ok' }]
    })
    alert.present()
  }

  back() {
    this.navCtrl.goBack();
  }

}
