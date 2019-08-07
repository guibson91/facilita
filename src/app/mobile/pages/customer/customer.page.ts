import { Observable, of, from, combineLatest, Subscription, pipe } from 'rxjs';
import { map, tap, flatMap, first, catchError, mergeMap } from 'rxjs/operators';
import { NavController, ModalController, AlertController, ToastController, IonApp } from '@ionic/angular';
import { OrderStatus, Order } from '../../../../models/order';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { AuthenticationService } from '../../../services/authentication.service';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { User } from '../../../../models/user';
import * as moment from 'moment';
import { EvaluateOrderPage } from '../evaluate-order/evaluate-order.page';
import { PhoneEditPage } from '../phone-edit/phone-edit.page';
import { CustomerAddressPage } from '../customer-address/customer-address.page';
import { ActivatedRoute } from '@angular/router';
import { getDistanceBetweenPoints } from '../../../util/util';
import { Location } from '../../../panel/components/nano-address/nano-address.component';
import { PlacesService } from '../../../services/places.service';
import { Company } from '../../../../models/company';
import { OrderPromotion } from '../../../../models/order-promotion';
import { Promotion } from '../../../../models/promotion';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage {

  segment: 'favorites' | 'orders' | 'coupon' = "orders";
  loadingFavorites: boolean = true;
  loadingOrders: boolean = true;
  loadingCoupons: boolean = true;
  existsFavorites: boolean = true
  existsOrders: boolean = true
  existsCoupon: boolean = true;

  //auxiliar para controlar click de elementos html filho-pai
  clickEvaluate: boolean = false;

  OrderStatus = OrderStatus

  //Array de filials favoritas
  public filials$: Observable<Filial[]>;

  public orders$: Observable<Order[]>;

  public pageBefore;

  public error: {
    code: number,
    title: string,
    message: string
  };

  public userSubscription: Subscription

  public filials: Filial[];

  public coupons

  get locationUser(): Location {
    return this.shared.locationUser
  }

  constructor(private auth: AuthenticationService,
    public navCtrl: NavController,
    public change: ChangeDetectorRef,
    public modalCtrl: ModalController,
    public shared: SharedService,
    public alertCtrl: AlertController,
    public placesProvider: PlacesService,
    public toastCtrl: ToastController,
    public route: ActivatedRoute,
    public app: IonApp,
    public system: SystemService) {
    this.loadFavorites()
    this.loadOldOrders();
    this.loadCoupons();

    this.route.paramMap.subscribe((params) => {
      this.pageBefore = params.get('pageBefore');
    })
  }

  ionViewDidEnter(): void {
    this.system.setScreenName("CustomerPage")
  }

  private loadCoupons() {
    console.log("1");
    this.shared.user$.pipe(flatMap((user) => {
      console.log("Obtido user: ", user)
      return OrderPromotion.list([{
        name: 'user.id',
        operator: '==',
        value: user.id
      }])
    }))
      .pipe(flatMap((coupons: OrderPromotion[]) => {
        console.log("cupons: ", coupons);
        if (!coupons || coupons.length == 0) return of([])
        this.coupons = coupons
        return combineLatest(coupons.map((coupon) => Filial.object(coupon.filial.id)))
      }))
      //Obter a filial de cada cupom
      .pipe(flatMap((filials: Filial[]) => {
        console.log("3 - filials: ", filials);
        if (!filials || filials.length == 0) return of([])
        for (let i = 0; i < this.coupons.length; i++) {
          this.coupons[i].filial_full = filials[i];
        }
        return combineLatest(this.coupons.map((coupon) => Promotion.object(coupon.promotion.id)))
      }))
      //Obter a promoção de cada cupom
      .pipe(map((promotions: Promotion[]) => {
        if (!promotions || promotions.length == 0) return of([])
        console.log("4 - promotions", promotions);
        for (let i = 0; i < this.coupons.length; i++) {
          this.coupons[i].promotion_full = promotions[i];
        }
        return this.coupons;
      }))
      .subscribe(() => {
        console.log("Os cupons carregados são: ", this.coupons);
        // Verificar SE EXISTE CUPONS
        if (!this.coupons || this.coupons.length <= 0) {
          this.existsCoupon = false;
          this.loadingCoupons = false;
          this.change.detectChanges();
        }
        //EXIBIR CUPONS
        else {
          this.existsCoupon = true;
          this.loadingCoupons = false;
          setTimeout(() => {
            this.change.detectChanges()
          }, 10)
        }
      }, pipe(catchError((err) => {
        console.log("ocorreu um erro", err);
        this.system.logEvent("filials_not_found")
        if (err.code == 1) {
          this.error = {
            code: 1,
            title: "Geolocalização não autorizada",
            message: "Por favor autorize o aplicativo Facilita a obtê-la ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
          }
        }
        else if (err.code == 2) {
          this.error = {
            code: 2,
            title: "Geolocalização indisponível",
            message: "Por favor habilite seu GPS ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
          }
        }
        else if (err.code == 3) {
          this.error = {
            code: 3,
            title: "Tempo para obter geolocalização foi excedido",
            message: "Por favor verifique se seu GPS está habilitado e tente novamente, ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
          }
        }
        this.loadingCoupons = false;
        this.change.detectChanges()
        return of([]);
      }))
      )
  }

  /**
   * Carrega os restaurantes favoritos do usuário
   */
  loadFavorites() {
    this.loadingFavorites = true;
    this.filials$ = this.shared.user$.pipe(flatMap((user) => {
      this.existsFavorites = true
      this.loadingFavorites = true
      if (!user) {
        return of([]);
      }
      return User.favorites.list(user.id)
    })).pipe(tap((filials: Filial[]) => {
      if (!filials || filials.length <= 0) this.existsFavorites = false
      else {
        this.existsFavorites = true
        for (let filial of filials) {
          Filial.checkBusinessHours(filial, this.shared.now)
        }
      }
      this.loadingFavorites = false;
      console.log("Loading favoriteS: ", this.loadingFavorites);
      setTimeout(() => {
        this.change.detectChanges();
      })
    }))
  }

  loadOldOrders() {
    this.orders$ = this.shared.user$.pipe(first()).pipe(flatMap((user) => {
      this.existsOrders = true
      this.loadingOrders = true
      return User.orders.list(user.id, undefined, [{ name: "created_at", type: "desc" }])
    })).pipe(flatMap((orders: Order[]) => {
      if (!orders || orders.length <= 0) {
        return of([])
      }
      return combineLatest(orders.map((order) => Filial.object(order.filial.id)))
        .pipe(map((filials: Filial[]) => {
          for (let i = 0; i < filials.length; i++) {
            orders[i].filial_full = filials[i]
          }
          return orders
        }))
    })).pipe(map((orders: Order[]) => {
      return orders.filter((order: Order) => {
        return order.status === OrderStatus.done || order.status === OrderStatus.away ||
          order.status === OrderStatus.incomplete || order.status === OrderStatus.refused
      })
    })).pipe(tap((orders: Order[]) => {
      if (!orders || orders.length <= 0) {
        this.existsOrders = false;
      } else {
        this.existsOrders = true
      }
      this.loadingOrders = false;
      console.log("loading orders: ", this.loadingOrders);
      setTimeout(() => {
        this.change.detectChanges();
      })
    }))
  }

  /**
   * Abre um modal com formulário pra editar endereço do usuário
   */
  async editAddress() {
    let modal = await this.modalCtrl.create({
      component: CustomerAddressPage
    })
    modal.present()
  }

  async editPhone() {
    let modal = await this.modalCtrl.create({
      component: PhoneEditPage,
      componentProps: {
        user: this.shared.user
      }
    });
    modal.present();
  }

  async goFilialMenu(filial: Filial) {
    Filial.checkBusinessHours(filial, this.shared.now)
    if (filial.open) {
      this.navCtrl.navigateForward(['mobile/filial-stock', {
        id: filial.id
      }])
    }
    else {

      let prompt = await this.alertCtrl.create({
        header: 'Restaurante está fechado',
        message: "Você ainda pode visualizar as informações do restaurante, mas não poderá realizar um pedido.",
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
            }
          },
          {
            text: 'Continuar',
            handler: () => {
              this.navCtrl.navigateForward(['mobile/filial-stock', {
                id: filial.id
              }])
            }
          }
        ]
      });
      prompt.present();
    }
  }

  viewEvaluate(order) {

  }

  /**
   * Realizar logout de usuário
   */
  async logout() {
    let confirm = await this.alertCtrl.create({
      header: 'Deslogar usuário',
      message: 'Você tem certeza que gostaria de sair de sua conta? Caso tenha produtos adicionados no carrinho, eles serão perdidos.',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.auth.logout().subscribe(() => {
              this.navCtrl.navigateRoot(this.shared.firstPage)
            }, error => {
              this.system.showErrorAlert(error, 'logout');
            })
          }
        }
      ]
    });
    confirm.present()
  }

  dismiss() {
    if (this.pageBefore && this.pageBefore == 'HomeApp') {
      this.navCtrl.navigateRoot(['home-app'])
    }
    else {
      this.navCtrl.navigateRoot(['mobile/filial-search']);
    }
  }

  getDateFormat(timestamp: any) {
    moment.locale('pt-BR');
    return moment(timestamp.toDate()).format('LLL')
  }

  async help() {
    let alert = await this.alertCtrl.create({
      header: "Sobre o seu perfil",
      message: "Aqui você encontrará informações sobre seus pedidos antigos e restaurantes favoritos.",
      buttons: ["Ok"]
    });
    alert.present();
  }

  goDetailOrder(order: Order) {
    if (!this.clickEvaluate) {
      this.navCtrl.navigateForward(['mobile/detail-order', {
        order_id: order.id //@todo DETAIL ORDER DEVE RECEBER O ID DE ORDER
      }])
    }
    this.clickEvaluate = false;
  }

  async evaluate(order: Order) {
    this.clickEvaluate = true;
    let modal = await this.modalCtrl.create({
      component: EvaluateOrderPage,
      componentProps: {
        order: order
      }
    });
    modal.present();
  }

}