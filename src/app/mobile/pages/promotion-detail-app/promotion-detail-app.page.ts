import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';
import { Filial } from '../../../../models/filial';
import { Promotion } from '../../../../models/promotion';
import { OrderPromotion } from '../../../../models/order-promotion';
import { makeRandomAlfaNumber } from '../../../util/util';
import { firestore } from "firebase"
import { SharedService } from '../../../services/shared.service';
import { LoginAppPage } from '../login-app/login-app.page';

@Component({
  selector: 'app-promotion-detail-app',
  templateUrl: './promotion-detail-app.page.html',
  styleUrls: ['./promotion-detail-app.page.scss'],
})
export class PromotionDetailAppPage implements OnInit {

  @Input()
  filial: Filial;

  @Input()
  promotion: Promotion;

  code: string;

  constructor(public modalCtrl: ModalController, public shared: SharedService) {

  }

  ngOnInit() {
    console.log("Filial: ", this.filial);
    console.log("Promoção: ", this.promotion);

    if (this.promotion.code) {
      this.code = this.promotion.code
    }

    this.shared.user$.pipe(flatMap((user) => {
      if (!user) return of(null)
      return OrderPromotion.list([{
        name: 'filial.id',
        operator: '==',
        value: this.filial.id
      },
      {
        name: 'user.id',
        operator: '==',
        value: user.id
      },
      {
        name: 'promotion.id',
        operator: '==',
        value: this.promotion.id
      }])
    }))
      .subscribe((orderPromotions: OrderPromotion[]) => {
        if (orderPromotions && orderPromotions.length > 0) {
          this.code = orderPromotions[0].code;
          console.log("Código: ", this.code);
        }
      })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  generateCoupon() {
    let orderPromotion: OrderPromotion = {};
    orderPromotion.code = makeRandomAlfaNumber(6);
    orderPromotion.created_at = firestore.Timestamp.fromDate(new Date())
    console.log("Gerar cupom");

    this.shared.user$.pipe(flatMap((user) => {

      console.log("Usuário logado: ", user);

      if (!user) return of(null)

      return OrderPromotion.add(orderPromotion, [
        {
          relationship: OrderPromotion.promotion,
          id: this.promotion.id
        },
        {
          relationship: OrderPromotion.filial,
          id: this.filial.id
        },
        {
          relationship: OrderPromotion.company,
          id: this.filial.company.id
        },
        {
          relationship: OrderPromotion.user,
          id: user.id
        }
      ])
    }))
      .pipe(first())
      .subscribe(async (res) => {
        console.log("Res: ", res);
        if (res === null) {
          console.log("Usuário não está logado.");
          let modalLogin = await this.modalCtrl.create({
            component: LoginAppPage,
            componentProps: {
              page: 'PromotionDetailPage'
            }
          });
          modalLogin.present();
        }
        else {
          this.code = orderPromotion.code;
          console.log("Pedido de promoção cadastrado com sucesso");
        }
      })
  }

}