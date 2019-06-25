import * as moment from 'moment'
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { switchMap, first, map, flatMap, tap, catchError } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Company } from '../../../../../models/company';
import { of, Observable, combineLatest } from 'rxjs';
import { Order } from '../../../../../models/order';
import { User } from '../../../../../models/user';
import { Filial } from '../../../../../models/filial';
import { OrderDetailPage } from '../../order/order-detail/order-detail.page';
import { MenuController, NavController, LoadingController, ModalController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { SystemService } from '../../../../services/system.service';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.page.html',
  styleUrls: ['./evaluation-list.page.scss'],
})
export class EvaluationListPage implements OnInit {

	/**
	 * Observable com a lista de pedidos com avaliações do restaurante ou da filial
	 */
  orders$: Observable<Order[]>;

  /**
   * Se está carregando os elementos da página
   */
  loading: boolean = true

  /**
   * Se existe alguma avaliação
   */
  existsEvaluation: boolean = true

  /**
	 * Data do input
	 */
  dateInput = moment().format();

	/**
	 * Data para filtrar os pedidos
	 */
  dateStart: Date = new Date();
  dateEnd: Date;

	/**
	 * Input de pesquisa
	 */
  input_search: string

  constructor(public menuCtrl: MenuController,
    public shared: SharedService,
    public authentication: AuthenticationService,
    public system: SystemService,
    public navCtrl: NavController,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {
    this.dateFilter(this.dateStart)
  }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.load();
  }

  /**
   * Carrega a lista da página
   */
  load() {
    this.loading = true
    this.existsEvaluation = true

    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else if (this.shared.isManager)
          return this.shared.company$
        else
          return of(null)
      }))
      .pipe(first())
      .subscribe((company: Company) => {
        if (!company && !this.shared.isTeam) {
          const error: Error = Error("Restaurante não encontrado");
          this.system.showErrorAlert(error);
          this.navCtrl.navigateRoot(this.shared.rootPage)
          return;
        }
        //GERENTE GERAL
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
                }
              ])
          } else if (this.shared.isTeam) {
            obj$ = Order.list(
              [
                { name: "created_at", operator: ">=", value: this.dateStart },
                { name: "created_at", operator: "<", value: this.dateEnd }
              ]
              , [
                {
                  name: "created_at",
                  type: "desc"
                }
              ])
          } else {
            throw Error("Erro aleatório")
          }
          this.orders$ = obj$
            .pipe(map((orders: Order[]) => {
              if (!orders || orders.length <= 0) return []
              return orders.filter((order: Order) => order.evaluate)
            }))
            .pipe(flatMap((orders: Order[]) => {
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
          this.orders$ = this.shared.filial$.pipe(flatMap((filial: Filial) => {
            return Filial.orders.list(filial.id, [
              { name: "created_at", operator: ">=", value: this.dateStart },
              { name: "created_at", operator: "<", value: this.dateEnd }
            ]
              , [
                {
                  name: "created_at",
                  type: "desc"
                }
              ]).pipe(map((orders: Order[]) => {
                if (!orders || orders.length <= 0) return []
                return orders.filter((order: Order) => order.evaluate)
              }))
              .pipe(flatMap((orders: Order[]) => {
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
          const error: Error = Error("Página de avaliações só pode ser acessada por Gerente Geral ou Gerente de Filial");
          this.system.showErrorAlert(error);
        }
        this.orders$ = this.orders$.pipe(tap((orders: Order[]) => {
          if (!orders || orders.length <= 0) this.existsEvaluation = false
          else this.existsEvaluation = true
          this.loading = false
          this.ref.detectChanges()
        })).pipe(catchError((err) => {
          this.system.showErrorAlert(err)
          return []
        }))
      }, err => {
        this.loading = false
        this.ref.detectChanges()
        this.system.showErrorAlert(err);
      })
  }

  changeDate() {
    this.dateFilter(this.dateInput)
    this.load()
  }

  dateFilter(date) {
    this.dateStart = new Date(date)
    this.dateStart.setDate(1)
    this.dateStart.setHours(0, 0, 0)
    this.dateEnd = new Date(this.dateStart)
    let aux = this.dateStart.getMonth()
    if (aux == 12) {
      this.dateEnd.setMonth(1)
    } else {
      this.dateEnd.setMonth(aux + 1)
    }
  }
  /**
   * Modal que detalha o pedido
   */
  async presentModal(order: Order) {
    let loading = await this.loadingCtrl.create({})
    loading.present()
    let modal = await this.modalCtrl.create({
      component: OrderDetailPage,
      componentProps: { order: order }
    });
    modal.present().then(() => {
      loading.dismiss()
    })
  }
}