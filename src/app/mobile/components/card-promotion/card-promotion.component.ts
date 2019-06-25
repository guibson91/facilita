import { Component, OnInit, Input } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { PromotionDetailAppPage } from '../../pages/promotion-detail-app/promotion-detail-app.page';
import { ModalController } from '@ionic/angular';
import { OrderPromotion } from '../../../../models/order-promotion';

@Component({
  selector: 'card-promotion',
  templateUrl: './card-promotion.component.html',
  styleUrls: ['./card-promotion.component.scss']
})
export class CardPromotionComponent implements OnInit {

  @Input()
  filial: Filial;

  @Input()
  coupons: OrderPromotion[];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openDetail(filial, promotion) {
    let modal = await this.modalCtrl.create({
      component: PromotionDetailAppPage,
      componentProps: {
        filial: filial,
        promotion: promotion
      }
    })
    modal.present();
  }

}