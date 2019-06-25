import { Component } from '@angular/core';
import { Order } from '../../../../models/order';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../../../services/cart.service';
import { first } from 'rxjs/operators';
import { SharedService } from '../../../services/shared.service';
import { User } from '../../../../models/user';
import { LoginAppPage } from '../../pages/login-app/login-app.page';

@Component({
  selector: 'fab-order',
  templateUrl: './fab-order.component.html',
  styleUrls: ['./fab-order.component.scss']
})
export class FabOrderComponent {

  moveItem: boolean = false
  isFirst = true

  get pending_orders(): Order[] {
    return this.shared.pending_orders || []
  }

  constructor(public modalCtrl: ModalController,
    public cartProvider: CartService,
    public shared: SharedService,
    public navCtrl: NavController) {


    this.cartProvider.newProductAddToCart$.subscribe(() => {
      this.moveItem = true
      setTimeout(() => {
        this.moveItem = false
        console.log(this.moveItem)
      }, 1500);
      this.isFirst = false
    })
  }

  /**
   * Se o carrinho está vazio
   */
  get empty(): boolean {
    return !this.cartProvider.order.entries || this.cartProvider.order.entries.length == 0
  }

  /**
   * Abrir carrinho
   */
  openCart() {
    this.shared.user$.pipe(first()).subscribe(async (user: User) => {
      if (user) {
        this.navCtrl.navigateRoot('mobile/cart')
      }
      else {
        const modal = await this.modalCtrl.create({
          component: LoginAppPage,
          componentProps: {
            page: 'ShoppingCartPage'
          }
        });
        modal.present();
      }
    })
  }

  openTrackOrder() {
    console.log("CLIQUE PARA VISUALIZAR PEDIDOS");
    this.shared.pending_orders$.pipe(first()).subscribe(orders => {
      if (orders && orders.length > 1) {
        console.log("Tem mais de um pedido. Abrir a página de rastreamento de pedidos..");
        this.navCtrl.navigateForward(['mobile/list-order']);
      }
      else {
        console.log("Só tem 1 pedido.. ir direto para o rastreamento do pedido");
        this.navCtrl.navigateForward(['mobile/track-order', {
          order: orders[0]
        }]);
      }
    })
  }

}