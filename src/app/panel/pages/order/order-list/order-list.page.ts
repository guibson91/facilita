import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Observable, of, combineLatest, Subscription } from 'rxjs';
import { Order, OrderStatus } from '../../../../../models/order';
import { NavController, MenuController, AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../../../services/authentication.service';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../../../../../models/company';
import { switchMap, first, flatMap, map, catchError, tap } from 'rxjs/operators';
import { User } from '../../../../../models/user';
import { Filial } from '../../../../../models/filial';
import { firestore } from "firebase"
import { OrderDetailPage } from '../order-detail/order-detail.page';
import "firebase/firestore"

//Definindo calendário (pipe amCalendar)
moment.updateLocale('pt-br', {
  calendar: {
    lastDay: '[Ontem]',
    sameDay: '[Hoje]',
    nextDay: '[Amanhã]',
    lastWeek: 'dddd',
    nextWeek: '[Próxima] dddd',
    sameElse: 'DD/MM/YYYY'
  }
});

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit, OnDestroy {

	/**
	 * Observable com a lista de pedidos do restaurante ou da filial
	 */
  orders$: Observable<Order[]>;

  /**
   * Lista de pedidos
   */
  orders: Order[];

  /**
   * Subscription do observable de pedidos
   */
  ordersSubscription: Subscription;

	/**
	 * Se está carregando os elementos da página.
	 */
  loading: boolean = true;

	/**
	 * Verifica se existe pediddos
	 */
  existsOrders: boolean = true


	/**
	 * Data do input
	 */
  modeFilterDate: string
  dateInput = moment().format();

	/**
	 * Data para filtrar os pedidos
	 */
  dateStart: Date = new Date();
  dateEnd: Date;

	/**
	 * Valor do Segmento selecionado
	 */
  segment_value: OrderStatus | 'all' = 'all';
  // segment_value: any

	/**
	 * Referência dos tipos de status do pedido para ser usado no HTML.
	 */
  get orderStatus(): typeof OrderStatus {
    return OrderStatus;
  }

	/**
	 * Input de pesquisa
	 */
  input_search: string


  constructor(
    public navCtrl: NavController,
    public authentication: AuthenticationService,
    public shared: SharedService,
    public menuCtrl: MenuController,
    public system: SystemService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

	/**
	 * Inicializando estruturas após entrar na página.
	 */
  ngOnInit(): void {
    this.modeFilterDate = 'day'
    this.dateFilter(this.dateStart)

    this.menuCtrl.enable(true);
    this.load();
  }

  ngOnDestroy() {
    if (this.ordersSubscription) this.ordersSubscription.unsubscribe()
  }

  change() {
    this.ref.detectChanges()
  }
	/**
	 * Carrega a lista da página
	 */
  load() {
    this.loading = true
    this.existsOrders = true

    if (this.ordersSubscription) this.ordersSubscription.unsubscribe()
    this.ordersSubscription = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else if (this.shared.isManager || this.shared.isFilialManager)
          return this.shared.company$
        else
          return of(null)
      }))
      .pipe(first())
      .pipe(switchMap((company: Company) => {
        //GERENTE GERAL
        /**
         * @todo fix permissões
         */
        if (this.shared.isManager || this.shared.isTeam) {
          let obj$: Observable<Order[]>
          if (this.shared.isManager || company) {
            obj$ = Company.orders.list(company.id,
              [
                { name: "created_at", operator: ">=", value: this.dateStart },
                { name: "created_at", operator: "<", value: this.dateEnd }
              ]
              , [
                {
                  name: "created_at",
                  type: "desc"
                }, {
                  name: "status"
                }
              ])
          } else { // Deve ser perfil de TEAM
            obj$ = Order.list(
              [
                { name: "created_at", operator: ">=", value: this.dateStart },
                { name: "created_at", operator: "<", value: this.dateEnd }
              ]
              , [
                {
                  name: "created_at",
                  type: "desc"
                }, {
                  name: "status"
                }
              ])
          }
          return obj$.pipe(flatMap((orders: Order[]) => {
            if (!orders || orders.length <= 0) return of([])

            return combineLatest(orders.map((order) => User.object(order.user.id)))
              .pipe(map((users: User[]) => {
                for (let i = 0; i < users.length; i++) {
                  orders[i].user_full = users[i]
                }
                return orders
              }))
              .pipe(flatMap((orders: Order[]) => {
                if (!orders || orders.length <= 0) return of([])
                return combineLatest(orders.map((order) => Filial.object(order.filial.id)))
                  .pipe(map((filials: Filial[]) => {
                    for (let i = 0; i < filials.length; i++) {
                      orders[i].filial_full = filials[i]
                    }
                    return orders
                  }))
              }))
          }))
        }
        //GERENTE DE FILIAL
        else if (this.shared.isFilialManager) {
          return this.shared.filial$.pipe(switchMap((filial: Filial) => {
            return Filial.orders.list(filial.id, [
              { name: "created_at", operator: ">=", value: this.dateStart },
              { name: "created_at", operator: "<", value: this.dateEnd }
            ]
              , [
                {
                  name: "created_at",
                  type: "desc"
                }, {
                  name: "status"
                }
              ]).pipe(flatMap((orders: Order[]) => {
                if (!orders || orders.length <= 0) return of([])
                return combineLatest(orders.map((order) => User.object(order.user.id)))
                  .pipe(map((users: User[]) => {
                    for (let i = 0; i < users.length; i++) {
                      orders[i].user_full = users[i]
                      orders[i].filial_full = filial
                    }
                    return orders
                  }))
              }))
          }))
        } else {
          const error: Error = Error("Página de pedidos só pode ser acessada por Gerente Geral, Gerente de Filial ou TEAM");
          this.system.showErrorAlert(error);
        }
        return of([])
      }))
      .subscribe((orders: Order[]) => {
        if (!orders || orders.length <= 0) this.existsOrders = false
        else this.existsOrders = true
        console.log("Pedidos", orders)
        this.orders = orders || []
        this.loading = false
        this.ref.detectChanges()
      }, err => {
        this.loading = false
        this.orders = []
        this.ref.detectChanges()
        this.system.showErrorAlert(err);
      })

  }

	/**
	 * Denunciar usuário
	 */
  async reportUser(user) {

    let confirm = await this.alertCtrl.create({
      header: 'Denunciar usuário',
      message: `Você tem certeza que deseja abrir uma denúncia contra o <b>${user.name}</b>? Você só deve fazer isso caso o usuário tenha agido de má fé ao realizar o pedido.`,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: async () => {
            let prompt = await this.alertCtrl.create({
              header: 'Qual o motivo da denúncia?',
              inputs: [
                {
                  name: 'reason',
                  placeholder: 'Descreva o que aconteceu...'
                },
              ],
              buttons: [
                {
                  text: 'Cancelar'
                },
                {
                  text: 'Confirmar',
                  handler: data => {
                    if (!user.denunciations) {
                      user.denunciations = [];
                      user.hasDenunciation = true;
                    }
                    user.denunciations.push(data.reason);
                    let userObj: User = {};
                    userObj.denunciations = user.denunciations;
                    User.update(user.id, userObj).subscribe(async (res) => {
                      let toast = await this.toastCtrl.create({
                        message: 'Sua denúncia foi encaminhada com sucesso',
                        duration: 1500
                      });
                      toast.present();
                    })
                  }
                }
              ]
            });
            prompt.present();
          }
        }
      ]
    });
    confirm.present();
  }


  async refusedChangeStatus(order: Order) {
    let alert = await this.alertCtrl.create({
      header: 'Tem certeza que deseja cancelar o pedido?',
      inputs: [{
        name: 'reason',
        placeholder: 'Por favor, informe o motivo.',
        type: 'text',
      }],
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: (data) => {
            this.changeStatus(order, false, data.reason);
          }
        }
      ]
    });
    alert.present();
  }
	/**
	 * Altera o status do pedido
	 */
  async changeStatus(order: Order, refused?: boolean, reason?: string) {
    let text: string;
    let new_status: {
      status?: OrderStatus,
      accepted_at?: Date | firestore.FieldValue,
      doing_at?: Date | firestore.FieldValue,
      delivery_at?: Date | firestore.FieldValue,
      done_at?: Date | firestore.FieldValue,
      refused_at?: Date | firestore.FieldValue
    } = {}
    if (refused === false) {
      // new_status.status = OrderStatus.refused;
      // new_status.refused_at = new Date()
      // updateObject.new_status = new_status;
      // text = "Confirma alterar status para RECUSADO?";
      Order.update<Order>(order.id, {
        cancellation_reason: reason,
        status: OrderStatus.refused,
        refused_at: firestore.FieldValue.serverTimestamp()
      }).subscribe((res) => {
      }, error => {
        console.error("Deu errado", error);
      });
      return;
    } else if (order.status === OrderStatus.delivery) {
      new_status.status = OrderStatus.done;
      new_status.done_at = firestore.FieldValue.serverTimestamp()
      text = "Confirma alterar status para CONCLUÍDO?";
    } else if (order.status === OrderStatus.accepted) {
      new_status.status = OrderStatus.delivery;
      new_status.delivery_at = firestore.FieldValue.serverTimestamp()
      text = "Confirma alterar status para SAIU PARA ENTREGA?";
    } else if (order.status === OrderStatus.created) {
      new_status.status = OrderStatus.accepted;
      new_status.accepted_at = firestore.FieldValue.serverTimestamp()
      text = "Confirma alterar status para ACEITO?";
    }
    if (new_status.status === OrderStatus.refused) {
      let alert = await this.alertCtrl.create({
        header: 'Tem certeza que deseja cancelar o pedido?',
        inputs: [{
          name: 'reason',
          placeholder: 'Por favor, informe o motivo.',
          type: 'text',
        }],
        buttons: [
          {
            text: 'Não',
            role: 'cancel'
          },
          {
            text: 'Confirmar',
            handler: async (data) => {
              let load = await this.loadingCtrl.create();
              load.present()
              if (order) {
                Order.update<Order>(order.id, {
                  cancellation_reason: data.reason,
                  status: OrderStatus.refused,
                  incomplete_at: firestore.FieldValue.serverTimestamp()
                }).subscribe(() => {
                  load.dismiss()
                }, err => {
                  this.system.showErrorAlert(err)
                });
              } else {
                load.dismiss()
                this.system.showErrorAlert(Error("Pedido inválido"))
              }
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = await this.alertCtrl.create({
        header: 'Alerta',
        message: text,
        buttons: [
          {
            text: 'Não'
          },
          {
            text: 'Sim',
            handler: () => {
              Order.update(order.id, new_status).subscribe();
              this.load()
            }
          }
        ]
      })
      alert.present();
    }
  }

  changeOrders() {
    this.dateFilter(this.dateInput)
    this.load()
  }

  changeModeFilterDate(mode: 'day' | 'month') {
    this.modeFilterDate = mode
    let newDate = new Date()
    if (mode == 'month') {
      newDate.setDate(1)
    } else {
      this.dateInput = moment().format()
    }
    this.dateFilter(newDate)
    this.load()
  }

  dateFilter(date) {
    this.dateStart = new Date(date)
    this.dateStart.setHours(0, 0, 0)
    this.dateEnd = new Date(this.dateStart)
    if (this.modeFilterDate == 'month') {

      let aux = this.dateStart.getMonth()
      this.dateStart.setDate(1)
      if (aux == 12) {
        this.dateEnd.setMonth(1)
      } else {
        this.dateEnd.setMonth(aux + 1)
      }

    } else {
      this.dateEnd.setDate(this.dateEnd.getDate() + 1)
    }
    //console.log("DATE END: ", this.dateEnd)

  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    })
  }

  actualDateFormated() {
    let data = new Date();
    let sDay = ''
    let sMonth = ''
    let dia = data.getDate();
    if (dia.toString().length == 1)
      sDay = "0" + dia
    let mes = data.getMonth() + 1;
    if (mes.toString().length == 1)
      sMonth = "0" + mes
    let year = data.getFullYear();
    return sDay + "/" + sMonth + "/" + year;
  }

	/**
	 * Verifica se o dia é:
	 * Hoje = retornando 1
	 * Ontem = retoranndo 2
	 * Caso nenhum dos dos = retornando 3
	 * @param day
	 */
  verifyDate(day: String) {
    let data = new Date();
    let sDay = ''
    let sMonth = ''
    let dia = data.getDate();
    if (dia.toString().length == 1)
      sDay = "0" + dia
    let mes = data.getMonth() + 1;
    if (mes.toString().length == 1)
      sMonth = "0" + mes
    let year = data.getFullYear();

    let formattedDate = sDay + "/" + sMonth + "/" + year;
    if (formattedDate == day) {
      return '1'
    } else {

      if (dia == (parseInt(day.substring(0, 2)) + 1)) {
        return '2'
      } else {
        return '3'
      }
    }

  }

  getLabelDay(day: String) {

    let resultDate: String = ''

    switch (this.verifyDate(day)) {
      case '1':
        resultDate = "Hoje"
        break
      case '2':
        resultDate = "Ontem"
        break
      case '3':
        resultDate = day
        break
    }

    return resultDate
  }

	/**
	 * Modal que detalha o pedido
	 */
  async presentModal(order: Order) {
    let modal = await this.modalCtrl.create({
      component: OrderDetailPage,
      componentProps: {
        order: order
      }
    });
    modal.present();
  }
}
