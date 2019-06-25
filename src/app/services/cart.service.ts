import { Injectable } from '@angular/core';
import { Filial } from '../../models/filial';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Observable, ReplaySubject, of } from 'rxjs';
import { tap, flatMap, first } from 'rxjs/operators';
import { Order } from '../../models/order';
import { Entry, OrderStatus } from '../../models/order';
import { Storage } from '@ionic/storage';
import { firestore } from "firebase"
import "firebase/firestore";
import { User } from '../../models/user';
import { CouponOrder, Coupon } from '../../models/coupon';
import { SharedService } from './shared.service';
import { SystemService } from './system.service';
import { getDistanceBetweenPoints, makeRandomAlfaNumber, cleanObject } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * Valor total da compra com dinheiro.
   * Deve ser recalculada com totalPriceCalculate()
   * sempre que for fazer uma alteração no carrinho
   */
  public totalPrice: number = 0;

  newProductAddToCart$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  /**
   * Empresa de onde está sendo feito as compras.
   * Se o usuário tentar adicionar no carrinho produtos de outra
   * empresa, o programa tentará limpar o carrinho primeiro
   */
  public filial: Filial;

  /**
   * Configurações do pedido a ser realizado
   */
  public order: Order = {
    entries: []
  };

  constructor(
    private alertCtrl: AlertController,
    private storage: Storage,
    private shared: SharedService,
    private system: SystemService,
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
    //storage.clear().then(()=>{
    storage.get('cart').then((data) => {
      if (data) {
        this.filial = data.filial;
        this.order = {
          entries: data.entries || []
        };
        this.totalPriceCalculate();
      } else {

        this.order = {};
        this.order.entries = [];
        this.filial = undefined;

      }
    });
    //});

  }

  /**
   * Atualiza o carrinho no storage com os dados atuais de filial e order.
   */
  public updateStorage() {
    if (!this.order.entries || this.order.entries.length == 0) this.filial = undefined;
    this.storage.set('cart', { filial: this.filial, entries: this.order.entries });
  }

  /**
   * Adiciona um novo item pedido no carrinho atual.
   * @param entry Item do pedido a ser adicionado no carrinho atual.
   * @param filial Filial do item a ser adicionado no carrinho.
   */
  public async add(entry: Entry, filial: Filial, view: ModalController) {
    if (entry.quantity <= 0) {
      const error: Error = Error('A quantidade do item pedido é inválida');
      this.system.showErrorAlert(error);
      return of(false);
    }

    if (!this.filial) {
      this.filial = filial;
      this.system.logEvent("new_cart", { name: filial.name })
    }
    this.system.logEvent("add_product", { name: entry.product.name })

    //Produtos a adicionar fazem parte da mesma filial dos produtos do carrinho
    if (filial.id == this.filial.id) {
      //Adicionar produto ao carrinho existente
      this.order.entries.push(Object.assign({}, entry));
      this.totalPriceCalculate();
      this.updateStorage();
      let toast = await this.toastCtrl.create({
        message: entry.quantity + "x " + entry.product.name + ' adicionado com sucesso!',
        duration: 1500
      });
      view.dismiss()
      toast.present();
      this.newProductAddToCart$.next(true)
      return;
    }
    //Produtos a adicionar NÃO fazem parte da filial dos demais produtos do carrinho
    let alert = await this.alertCtrl.create({
      header: 'Limpar carrinho?',
      message: 'Seu carrinho já contém produtos de outra loja. Gostaria de limpar o carrinho para adicionar os produtos desta loja?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            //Ignorar adição do produto
          }
        },
        {
          text: 'Sim',
          handler: async () => {
            //Limpar carrinho e adicionar o produto
            this.filial = filial;
            this.order.entries = [Object.assign({}, entry)];
            this.totalPriceCalculate();
            this.updateStorage();
            let toast = await this.toastCtrl.create({
              message: entry.quantity + "x " + entry.product.name + ' adicionado com sucesso!',
              duration: 1500
            });
            view.dismiss()
            this.newProductAddToCart$.next(true)
            toast.present();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Remover um item do carrinho.
   * @param orderItem Item a ser removido do carrinho.
   * @param updateStorage define se no final deve atualizar storage.
   */
  public remove(entry: Entry): void {
    let index: number = this.order.entries.indexOf(entry);
    this.order.entries.splice(index, 1);
    this.totalPriceCalculate();
    this.updateStorage();
  }

  /**
   * Verifica a moeda utilizada e
   * calcula o valor total dos produtos.
   * Deve ser chamado sempre que for feita alguma
   * alteração no carrinho.
   */
  public totalPriceCalculate(): void {
    this.totalPrice = 0;
    for (let entry of this.order.entries) {
      this.totalPrice += entry.price * entry.quantity
    }

  }

  /**
   * Limpar Carrinho
   */
  public clearCart(): void {
    this.storage.set('cart', null).then(() => {
      this.order = {};
      this.order.entries = [];
      this.filial = undefined;
      this.totalPriceCalculate();
    });
  }

  /**
   * Atualiza a quantidade de um produto no carrinho.
   * @param product Referencia para o produto que vai ser atualizado
   * @param inc Valor a ser incrementado no produto. Pode ser negativo
   */
  public increment(entry: Entry, inc: number): void {
    if (entry.quantity + inc <= 0) {
      return;
    }
    entry.quantity += inc;
    this.totalPriceCalculate();
    this.updateStorage();
  }

  calculateDelivery(filial?: Filial, userLogged?: User) {
    let user: User;
    let delivery = 0

    if (userLogged) {
      user = userLogged
    } else {
      user = {
        location: this.shared.locationUser
      }
    }
    let start = {
      lat: user.location.latitude,
      lng: user.location.longitude
    }
    let end = {
      lat: filial.location.latitude,
      lng: filial.location.longitude
    }
    filial.distance = getDistanceBetweenPoints(start, end); //distância em km do usuário à filial
    //Delivery definido por bairros
    if (filial.deliveryByDistrict) {
      let districtUser = user.location.district;
      filial.deliveryDistricts.forEach(deliveryDistrict => {
        if (deliveryDistrict.location.district == districtUser) {
          delivery = Number(deliveryDistrict.value)
          return
        }
      });
    }
    //Delivery definido por distância ao usuário
    else {
      //Valor do frete FIXO
      if (filial.delivery.feeMax == filial.delivery.feeMin) {
        delivery = filial.delivery.feeMax;
        if (!delivery) {
          return delivery = 0
        }
      }
      //Valor do frete VARIÁVEL
      else {
        let deliveryParcial = Math.round(Number(filial.delivery.fee) * Number(filial.distance));
        if (deliveryParcial > filial.delivery.feeMax) {
          delivery = filial.delivery.feeMax;
        }
        else if (deliveryParcial < filial.delivery.feeMin) {
          delivery = filial.delivery.feeMin;
        }
        else {
          delivery = deliveryParcial;
        }
        if (!delivery) {
          delivery = 0
        }
        return delivery
      }
    }
    return delivery

  }


  /**
   * Cria o novo pedido no banco.
   */
  public send(obs: string, delivery: number, coupon?: CouponOrder): Observable<any> {

    let discounts: number = 0;

    console.log("Enviando pedido: ", this.order);

    if (coupon) {
      console.log("Cupom identificado: ", coupon);
      discounts = coupon.discounts;
      this.order.coupon = coupon;
    }

    this.order.code = makeRandomAlfaNumber(6);
    return Filial.object(this.filial.id).pipe(first()).pipe(flatMap((filial: Filial) => {
      // Impedir que o usuário realize um pedido em uma filial fechada
      Filial.checkBusinessHours(filial, this.shared.now)
      if (!filial.open) throw Error("Este estabelecimento não está mais aberto. Tente novamente mais tarde ou procure outro estabelecimento.")
      return Order.list([
        {
          name: 'company.id',
          operator: "==",
          value: this.filial.company.id
        },
        {
          name: 'code',
          operator: "==",
          value: this.order.code
        }
      ]).pipe(first())
    }))
      .pipe(flatMap((list) => {

        //Não foi encontrado pedido dessa empresa com o código gerado
        //Portanto, deve-se registrar o pedido normalmente
        if (list.length == 0) {
          this.order.created_at = firestore.FieldValue.serverTimestamp()
          this.order.observation = obs
          this.order.status = OrderStatus.created
          this.order.location = this.shared.user.location
          this.order.price = {
            subtotal: this.totalPrice,
            delivery: delivery,
            discounts: discounts || 0,
            total: (this.totalPrice + delivery - discounts) > 0 ? (this.totalPrice + delivery - discounts) : 0
          }
          return Order.add(cleanObject(this.order), [
            {
              relationship: Order.filial,
              id: this.filial.id
            },
            {
              relationship: Order.company,
              id: this.filial.company.id
            },
            {
              relationship: Order.user,
              id: this.shared.user.id
            }
          ])
        }
        //Já existe pedido dessa empresa com o código gerado
        else {
          return this.send(obs, delivery, coupon);
        }
      }))
      .pipe(flatMap((id_order: string) => {
        console.log("Id da order: ", id_order);
        if (!coupon) return of(null)
        return Coupon.update((coupon.id), {}, [
          {
            relationship: Coupon.order,
            id: id_order
          },
          {
            relationship: Coupon.user,
            id: this.shared.user.id
          }
        ])
      }))
      .pipe(tap(() => {
        this.clearCart();
      }));
  }

}