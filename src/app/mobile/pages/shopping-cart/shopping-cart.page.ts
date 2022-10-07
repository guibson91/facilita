import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  NgZone,
} from "@angular/core";
import {
  Filial,
  CardType,
  CardFoodType,
  CARDS,
  CARDS_FOOD,
} from "../../../../models/filial";
import { Entry, PaymentMethod } from "../../../../models/order";
import { CouponOrder, CouponFilial, Coupon } from "../../../../models/coupon";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  elementIsInsideArray,
  getDistanceBetweenPoints,
} from "../../../util/util";
import {
  NavController,
  ToastController,
  ModalController,
  LoadingController,
  AlertController,
  PopoverController,
  IonContent,
} from "@ionic/angular";
import { CartService } from "../../../services/cart.service";
import { SharedService } from "../../../services/shared.service";
import { Location } from "../../../../models/utils/location";
import { Money } from "../../../util/money";
import { SystemService } from "../../../services/system.service";
import { first } from "rxjs/operators";
import { User } from "../../../../models/user";
import { CustomerAddressPage } from "../customer-address/customer-address.page";
import { AddressEditPage } from "../address-edit/address-edit.page";
import { OverlayEventDetail } from "@ionic/core";
import { PhoneEditPage } from "../phone-edit/phone-edit.page";
import { OrderItemEditPage } from "../order-item-edit/order-item-edit.page";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.page.html",
  styleUrls: ["./shopping-cart.page.scss"],
})
export class ShoppingCartPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  /**
   * Filial escolhida para solicitar o delivery
   * Todos os produtos do carrinho devem ser dessa filial
   */
  get filial(): Filial {
    return this.cart.filial;
  }

  get order(): Entry[] {
    return this.cart.order.entries;
  }

  get subTotal(): number {
    return this.cart.totalPrice;
  }

  set subTotal(subTotal: number) {
    this.cart.totalPrice = subTotal;
  }

  public changedSubtotal: boolean = false;
  public auxSubtotal: number;

  get totalPrice(): number {
    let p = this.subTotal + this.delivery;
    if (this.couponDiscounts) {
      p -= this.couponDiscounts;
      if (p < 0) p = 0;
    }
    return p;
  }

  get location(): Location {
    return this.shared.user
      ? this.shared.user.location
      : this.shared.locationUser;
  }

  get isCard(): boolean {
    if (
      this.paymentMethod == this.paymentType.credit_card ||
      this.paymentMethod == this.paymentType.auxCard ||
      this.paymentMethod == this.paymentType.debit_card
    ) {
      return true;
    }
  }

  //Preciso de troco
  needChange: boolean = false;

  couponInput: string = "";

  //Cupom (undefined caso não seja encontrado)
  coupon: CouponOrder;

  get isMoney(): boolean {
    if (this.paymentMethod == this.paymentType.money) {
      return true;
    }
  }

  get isFoodStamps(): boolean {
    if (this.paymentMethod == this.paymentType.food_stamps) {
      return true;
    }
  }

  get paymentMethod(): PaymentMethod {
    return this.cart.order.payment_method;
  }

  //Valor do frete
  delivery: number = 0;
  observation: string;

  //Valor de descontos do cupom
  couponDiscounts: number;

  cardsFlag: any[] = [];
  paymentMethods: PaymentMethod[];

  cards: {
    text: string;
    value: CardType;
  }[] = [];

  cards_food: {
    text: string;
    value: CardFoodType;
  }[] = [];

  cardFlag: CardType;
  cardFoodFlag: CardFoodType;
  form: FormGroup;

  buttonDisabled: boolean;

  paymentType = PaymentMethod;

  constructor(
    public navCtrl: NavController,
    public ngZone: NgZone,
    public toastController: ToastController,
    public cart: CartService,
    public shared: SharedService,
    public toast: ToastController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public changeRef: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private money: Money,
    public system: SystemService
  ) {}

  ngOnInit() {
    this.system.setScreenName("ShoppingCartPage");
    this.calculateDelivery();
    this.getFilialCards();
    this.getFilialFoodCards();

    this.form = new FormGroup({
      troco: new FormControl("", Validators.required),
    });
  }

  hasCard(): boolean {
    if (!this.filial.paymentMethods) return false;
    return (
      elementIsInsideArray(
        PaymentMethod.credit_card,
        this.filial.paymentMethods
      ) ||
      elementIsInsideArray(PaymentMethod.debit_card, this.filial.paymentMethods)
    );
  }

  hasMoney(): boolean {
    if (!this.filial.paymentMethods) return false;
    return elementIsInsideArray(
      PaymentMethod.money,
      this.filial.paymentMethods
    );
  }

  async verifyCoupon() {
    if (this.couponInput.trim().length < 1) {
      this.couponDiscounts = undefined;
      this.couponInput = "";
      return;
    }
    this.couponInput = this.couponInput.toUpperCase();

    let loading = await this.loadingCtrl.create({});
    loading.present();
    if (this.filial) {
      Filial.coupons
        .list(this.filial.id)
        .pipe(first())
        .subscribe((coupons_filial: CouponFilial[]) => {
          let founded: boolean = false;
          coupons_filial.forEach((coupon_filial) => {
            if (
              coupon_filial.enable &&
              coupon_filial.name == this.couponInput
            ) {
              founded = true;
              //Se o cupom não estiver vencido
              if (coupon_filial.finished_at.toDate() >= new Date()) {
                User.coupons
                  .list(this.shared.user.id)
                  .pipe(first())
                  .subscribe((coupons_user: Coupon[]) => {
                    for (let coupon_user of coupons_user) {
                      if (coupon_user.name === coupon_filial.name) {
                        this.showAlertCouponInvalid(undefined, true);
                        this.couponDiscounts = undefined;
                        this.coupon = undefined;
                        this.couponInput = "";
                        loading.dismiss();
                        return;
                      }
                    }
                    // Nao foi encontrado o cupom no usuário atual
                    this.coupon = coupon_filial;
                    this.calcCouponDiscounts(coupon_filial);
                    loading.dismiss();
                    return;
                  });
                return;
              } else {
                this.showAlertCouponInvalid(true);
                this.couponDiscounts = undefined;
                this.coupon = undefined;
                loading.dismiss();
                return;
              }
            }
          });

          if (!founded) {
            loading.dismiss();
            this.showAlertCouponInvalid();
            this.couponDiscounts = undefined;
            this.coupon = undefined;
            // this.changeRef.detectChanges();
          }
        });
    }
  }

  /**
   * Calcular os descontos de um CUPOM válido
   */
  private async calcCouponDiscounts(coupon: CouponFilial) {
    this.coupon = coupon;

    //Frete grátis, o desconto será o valor da taxa de entrega
    if (coupon.freeShipping) {
      this.couponDiscounts = this.delivery;
    }
    //Desconto em dinheiro
    else if (coupon.money) {
      this.couponDiscounts = coupon.money;
    }
    //Desconto em porcentagem
    else if (coupon.percentage) {
      this.couponDiscounts = (coupon.percentage / 100) * this.totalPrice;
    }
    this.coupon.discounts = this.couponDiscounts;

    let formatted = this.money.convertDecimalBrazillian(this.couponDiscounts);

    this.changeRef.detectChanges();

    const alert = await this.alertCtrl.create({
      header: "Parabéns!",
      subHeader: `Você acaba de adquirir R$ ${formatted} de desconto`,
      buttons: ["OK"],
    });
    alert.present();
  }

  removeCoupon() {
    this.coupon = undefined;
    this.couponDiscounts = undefined;
    this.couponInput = "";
  }

  /**
   * Exibir um alerta se o CUPOM não for válido
   * Tanto se não for encontrado, quanto se estiver vencido o prazo de validade
   */
  private async showAlertCouponInvalid(invalid?: boolean, user_used?: boolean) {
    let text: string;
    if (invalid) {
      text = `O cupom ${this.couponInput} está fora do prazo de validade.`;
    }
    if (user_used) {
      text = `O cupom ${this.couponInput} já foi usado por essa conta.`;
    }
    const alert = await this.alertCtrl.create({
      header: "Ops!",
      subHeader: text ? text : `O cupom ${this.couponInput} não é válido.`,
      buttons: ["OK"],
    });
    alert.present();
    alert.onDidDismiss().then(() => {
      this.couponInput = "";
    });
  }

  hasFoodStamps(): boolean {
    if (!this.filial.paymentMethods) return false;
    return elementIsInsideArray(
      PaymentMethod.food_stamps,
      this.filial.paymentMethods
    );
  }

  hasCreditCard(): boolean {
    if (!this.filial.paymentMethods) return false;
    return elementIsInsideArray(
      PaymentMethod.credit_card,
      this.filial.paymentMethods
    );
  }

  hasDebitCard(): boolean {
    if (!this.filial.paymentMethods) return false;
    return elementIsInsideArray(
      PaymentMethod.debit_card,
      this.filial.paymentMethods
    );
  }

  change() {
    setTimeout(() => {
      if (this.content) {
        // this.content.scrollToBottom();
      }
    }, 50);
  }

  getFilialCards() {
    if (!this.filial.cards) {
      this.filial.cards = [];
    }

    this.cards = CARDS.filter((card) => {
      return elementIsInsideArray(card.value, this.filial.cards);
    });
    // this.changeDetector.detectChanges();
  }

  getFilialFoodCards() {
    if (!this.filial.cards_food) {
      this.filial.cards_food = [];
    }

    this.cards_food = CARDS_FOOD.filter((card) => {
      return elementIsInsideArray(card.value, this.filial.cards_food);
    });
  }

  calculateDelivery() {
    this.shared.user$.pipe(first()).subscribe((user: User) => {
      this.delivery = this.cart.calculateDelivery(this.filial, user);
    });
  }

  async setPayment(type) {
    if (type == PaymentMethod.money && !this.hasMoney()) {
      let alert = await this.alertCtrl.create({
        header: "Ops!",
        subHeader:
          "Esse restaurante não aceita pagamento em dinheiro! Por favor, escolha outra forma de pagamento.",
        buttons: ["OK"],
      });
      alert.present();
      return;
    } else if (type == PaymentMethod.auxCard && !this.hasCard()) {
      let alert = await this.alertCtrl.create({
        header: "Ops!",
        subHeader:
          "Esse restaurante não aceita pagamento com cartão de crédito ou débito! Por favor, escolha outra forma de pagamento.",
        buttons: ["OK"],
      });
      alert.present();
      return;
    } else if (type == PaymentMethod.credit_card && !this.hasCreditCard()) {
      let alert = await this.alertCtrl.create({
        header: "Ops!",
        subHeader:
          "Esse restaurante não aceita pagamento com cartão de crédito! Por favor, escolha outra forma de pagamento.",
        buttons: ["OK"],
      });
      alert.present();
      return;
    } else if (type == PaymentMethod.debit_card && !this.hasDebitCard()) {
      let alert = await this.alertCtrl.create({
        header: "Ops!",
        subHeader:
          "Esse restaurante não aceita pagamento com cartão de débito! Por favor, escolha outra forma de pagamento.",
        buttons: ["OK"],
      });
      alert.present();
      return;
    } else if (type == PaymentMethod.food_stamps && !this.hasFoodStamps()) {
      let alert = await this.alertCtrl.create({
        header: "Ops!",
        subHeader:
          "Esse restaurante não aceita pagamento com vale Alimentação! Por favor, escolha outra forma de pagamento.",
        buttons: ["OK"],
      });
      alert.present();
      return;
    } else {
      setTimeout(() => {
        if (this.content) {
          // this.content.scrollToBottom();
        }
      }, 50);
      this.cart.order.payment_method = type;
    }
  }

  setTypeCard(type: "débito" | "crédito") {
    setTimeout(() => {
      if (this.content) {
        // this.content.scrollToBottom();
      }
    }, 50);

    if (type == "débito") {
      this.cart.order.payment_method = this.paymentType.debit_card;
    } else {
      this.cart.order.payment_method = this.paymentType.credit_card;
    }
  }
  setCardName(cardName: CardType) {
    this.cart.order.payment_cardType = cardName;
  }
  setCardFoodName(cardFoodType: CardFoodType) {
    this.cart.order.payment_cardType = cardFoodType;
  }

  async tryFinishOrder() {
    this.buttonDisabled = true;
    if (this.needChange) this.cart.order.change = this.form.value.troco;
    this.shared.user$.pipe(first()).subscribe(async (user) => {
      //Caso localização seja proveniente do GPS (necessário definir endereço preciso)
      if (user.location.isGps) {
        this.buttonDisabled = false;
        let alert = await this.alertCtrl.create({
          header: "Ops!",
          subHeader:
            "Esse endereço é proveniente de GPS. Você precisa cadastrar seu endereço por nosso formulário.",
          buttons: [
            {
              text: "Ok",
              handler: async () => {
                let modal = await this.modalCtrl.create({
                  component: AddressEditPage,
                });
                modal.onDidDismiss().then(() => {
                  if (this.filial) {
                    this.calculateDelivery();
                  }
                  this.cart.totalPriceCalculate();
                });
                modal.present();
              },
            },
          ],
        });
        alert.present();
        return;
      }

      //Localização correta
      //Se o pedido não for válido
      if (!this.orderValidation.valid) {
        this.buttonDisabled = false;
        const alert = await this.alertCtrl.create({
          header: "Atenção",
          subHeader: this.orderValidation.msg,
          buttons: [
            {
              text: "Ok",
            },
          ],
        });
        alert.present();
        return;
      }

      if (!this.locationIsValid()) {
        let alert = await this.alertCtrl.create({
          header: "ATENÇÃO",
          subHeader: `${this.cart.filial.name} não faz entrega para esta região. Você precisa estar em um endereço dentro da área de entrega para efetuar o pedido`,
          buttons: ["Ok"],
        });
        alert.present();
        this.buttonDisabled = false;
        return;
      }

      // Verificar se o preço é menor que o preço mínimo
      if (
        this.filial.orderMin &&
        this.subTotal + this.delivery < this.filial.orderMin
      ) {
        let minOrder: string = this.filial.orderMin
          .toFixed(2)
          .replace(".", ",");
        const alert = await this.alertCtrl.create({
          header: "Atenção",
          subHeader: `O pedido mínimo desse estabelecimento é de R$ ${minOrder}. Deseja continuar mesmo assim?`,
          buttons: [
            {
              text: "Não",
              role: "cancel",
              handler: (blah) => {
                this.changedSubtotal = false;
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Sim",
              handler: () => {
                console.log("Confirm Okay");
                this.auxSubtotal = this.subTotal;
                this.subTotal = this.filial.orderMin - this.delivery;
                console.log("Subtotal agora é: ", this.subTotal);
                this.changedSubtotal = true;
                this.tryFinishOrder();
              },
            },
          ],
        });
        this.buttonDisabled = false;
        alert.present();
        return;
      }

      if (!this.shared.user.phone) {
        console.log("User não tem telefone!");
        let modal = await this.modalCtrl.create({
          component: PhoneEditPage,
          componentProps: { user: this.shared.user },
        });
        modal.onDidDismiss().then((ev: OverlayEventDetail) => {
          if (ev && ev.data && ev.data.phone) {
            // Tudo certo com o pedido atual, então tentar efetuar o pedido
            this.finishOrder();
          } else {
            this.buttonDisabled = false;
            return;
          }
        });
        modal.present();
      } else {
        this.finishOrder();
      }
    });
  }

  async finishOrder() {
    let header = "Confirmar pedido";
    let msg = "Deseja confirmar seu pedido ?";

    let difference: string = (this.subTotal - this.auxSubtotal)
      .toFixed(2)
      .replace(".", ",");
    let subTotalString: string = this.subTotal.toFixed(2).replace(".", ",");

    if (this.changedSubtotal) {
      header = `Atenção!`;
      msg = `O valor do subtotal do seu pedido foi alterado para R$ ${subTotalString} para cumprir o valor mínimo de pedido desse estabelecimento (acréscimo de R$ ${difference}). Deseja confirmar seu pedido ainda assim?`;
    }
    console.log("Finish Order!");
    let alert = await this.alertCtrl.create({
      header: header,
      message: msg || null,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            this.buttonDisabled = false;
            if (this.auxSubtotal) {
              this.subTotal = this.auxSubtotal;
              this.system.showAlert(
                "Pedido cancelado",
                null,
                "O valor do seu pedido não foi alterado."
              );
            }
          },
        },
        {
          text: "Confirmar",
          handler: async () => {
            console.log("1");
            this.system.logEvent("ecommerce_purchase", {
              value: this.cart.totalPrice + this.delivery,
            });
            let loading = await this.loadingCtrl.create({});
            loading.present();
            // Tudo certo com o pedido atual, então tentar efetuar o pedido
            console.log("2");
            this.ngZone.run(
              () => {
                console.log("3");
                this.cart
                  .send(this.observation, this.delivery, this.coupon)
                  .subscribe(async () => {
                    loading.dismiss();
                    const toast = await this.toastController.create({
                      message: "Seu pedido foi realizado com sucesso",
                      duration: 600,
                      position: "bottom",
                    });
                    toast.present();
                    setTimeout(() => {
                      console.log("4");
                      this.navCtrl.navigateRoot(['home-app']);
                      // this.navCtrl.navigateRoot("mobile/filial-search");
                    }, 100);
                  });
              },
              (err) => {
                console.log("ocorreu um erro", err);
                loading.dismiss();
                this.buttonDisabled = false;
                this.system.showErrorAlert(err);
              }
            );
          },
        },
      ],
    });
    alert.present();
  }

  locationIsValid() {
    //Avaliação do delivery feita por bairros
    if (this.cart.filial.deliveryByDistrict) {
      let hasUserDistrict: boolean = false;
      this.cart.filial.deliveryDistricts.forEach((deliveryDistrict) => {
        if (
          deliveryDistrict.location.state_short ==
            this.shared.user.location.state_short &&
          deliveryDistrict.location.city == this.shared.user.location.city &&
          deliveryDistrict.location.district ==
            this.shared.user.location.district
        ) {
          hasUserDistrict = true;
          return;
        }
      });
      return hasUserDistrict;
    }

    //Avaliação de delivery feita por distância
    var valid: boolean = true;
    const start = {
      lat: this.shared.user.location.latitude,
      lng: this.shared.user.location.longitude,
    };
    const end = {
      lat: this.cart.filial.location.latitude,
      lng: this.cart.filial.location.longitude,
    };
    const distance = getDistanceBetweenPoints(start, end);
    // Distância atual não compativel com a área de entrega da filial
    if (distance > this.cart.filial.delivery.distanceMax) {
      valid = false;
    }
    return valid;
  }

  plusOne(entry: Entry) {
    this.cart.increment(entry, +1);
  }

  async minusOne(entry: Entry) {
    if (entry.quantity == 1) {
      let alert = await this.alertCtrl.create({
        header: "Remoção de item?",
        message: "Você tem certeza que deseja remover este item do carrinho?",
        buttons: [
          {
            text: "Não",
            role: "cancel",
          },
          {
            text: "Sim",
            handler: () => {
              this.cart.increment(entry, -1);
            },
          },
        ],
      });
      alert.present();
    } else if (entry.quantity > 1) {
      this.cart.increment(entry, -1);
    }
  }

  async editLocation() {
    let modal = await this.modalCtrl.create({
      component: CustomerAddressPage,
    });
    modal.onDidDismiss().then(() => {
      this.cart.totalPriceCalculate();
      this.calculateDelivery();
    });
    modal.present();
  }

  addProduct() {
    // this.modalCtrl.dismiss();
    this.navCtrl.navigateRoot(["mobile/filial-stock", { id: this.filial.id }]);
  }

  async entryEdit(entry: Entry) {
    let modal = await this.modalCtrl.create({
      component: OrderItemEditPage,
      componentProps: { entry: entry },
    });
    modal.present();

    await modal.onDidDismiss();
    this.calculateDelivery();
    this.cart.totalPriceCalculate();
  }

  async removeItemCart(entry: Entry) {
    const alert = await this.alertCtrl.create({
      message: `Tem certeza que deseja remover ${entry.product.name} do seu carrinho ?`,
      buttons: [
        {
          role: "cancel",
          text: "Cancelar",
        },
        {
          text: "Confimar",
          handler: async () => {
            this.cart.remove(entry);
            let toast = await this.toast.create({
              message: `${entry.product.name} removido com sucesso`,
              position: "bottom",
              duration: 1500,
            });
            toast.present();
            setTimeout(() => {
              this.changeRef.detectChanges();
            }, 100);
          },
        },
      ],
    });
    alert.present();
  }

  get orderValidation() {
    let msg: string;
    let valid: boolean;
    if (this.paymentMethod) {
      if (this.isMoney) {
        if (this.needChange) {
          if (this.form.value.troco) {
            valid = true;
          } else {
            msg = "Opção troco selecionada, por favor informe a quantidade";
          }
        } else {
          valid = true;
        }
      } else if (this.isCard) {
        if (
          this.paymentMethod == this.paymentType.credit_card ||
          this.paymentMethod == this.paymentType.debit_card
        ) {
          if (this.cardFlag) {
            valid = true;
          } else {
            msg = "Selecione a bandeira do cartão";
          }
        } else {
          msg = "Selecione crédito ou débito";
        }
      } else if (this.cardFoodFlag) {
        valid = true;
      } else {
        msg = "Selecione a bandeira do vale-alimentação";
      }
    } else {
      msg = "Selecione método de pagamento";
    }

    return { msg: msg, valid: valid };
  }

  async clear() {
    let alert = await this.alertCtrl.create({
      header: "Cancelar pedido",
      message: "Você tem certeza que deseja cancelar o pedido",
      buttons: [
        {
          text: "Não",
          role: "cancel",
        },
        {
          text: "Sim",
          handler: () => {
            this.cart.clearCart();
          },
        },
      ],
    });
    alert.present();
  }

  dismiss() {
    this.navCtrl.goBack();
  }

  async help() {
    let alert = await this.alertCtrl.create({
      header: "Seu carrinho",
      message: `<ul><li>Verifique seu endereço selecionado</li><li>Você pode remover itens do carrinho(se ficar sem nenhum item, o carrinho será excluido)</li>
      <li>Você pode voltar para comprar mais clicando em 'Adicionar produto'</li>
      <li>Selecione seu método de pagamento e caso seja dinheiro e precise de troco, não esqueça de informar no campo 'troco'</li></ul>`,
      buttons: ["Ok"],
    });
    alert.present();
  }
}
