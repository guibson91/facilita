import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderPromotion } from '../../../../../models/order-promotion';
import { Observable, Subscription, of, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap, first } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { Company } from '../../../../../models/company';
import { SharedService } from '../../../../services/shared.service';
import * as moment from 'moment';
import { Filial } from '../../../../../models/filial';
import { SystemService } from '../../../../services/system.service';
import { User } from '../../../../../models/user';
import { Promotion } from '../../../../../models/promotion';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-order-promotion-list',
  templateUrl: './order-promotion-list.page.html',
  styleUrls: ['./order-promotion-list.page.scss'],
})
export class OrderPromotionListPage implements OnInit {
  /**
     * Observable com a lista de promoções geradas do restaurante ou da filial
     */
  orders$: Observable<OrderPromotion[]>;

  /**
   * Lista de promoções geradas
   */
  orders: OrderPromotion[];

  /**
   * Subscription do observable de pedidos
   */
  ordersSubscription: Subscription;

	/**
	 * Se está carregando os elementos da página.
	 */
  loading: boolean = true;

	/**
	 * Verifica se existe promoções geradas
	 */
  existsOrders: boolean = true

	/**
	 * Input de pesquisa
	 */
  input_search: string

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

  company: Company

  filial: Filial

  constructor(private menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private shared: SharedService,
    private system: SystemService) { }

  /**
	 * Inicializando estruturas após entrar na página.
	 */
  ngOnInit(): void {
    this.modeFilterDate = 'month'
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

    let company$: Observable<Company> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
            .pipe(first())
        else if (this.shared.isManager || this.shared.isFilialManager)
          return this.shared.company$
        else
          return of(null)
      }))

    let filial$: Observable<Filial> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('filial_id'))
          return Filial.object(params.get('filial_id'))
            .pipe(first())
        else if (this.shared.isManager || this.shared.isFilialManager)
          return this.shared.filial$
        else
          return of(null)
      }))

    if (this.ordersSubscription) this.ordersSubscription.unsubscribe()
    this.ordersSubscription =
      combineLatest([
        company$,
        filial$
      ])
        .pipe(tap((arr: [Company, Filial]) => {
          this.company = arr[0]
          this.filial = arr[1]
        }))
        .pipe(switchMap(() => {
          let promotions$: Observable<OrderPromotion[]>
          if (this.filial) {
            promotions$ = Filial.orders_promotions.list(this.filial.id,
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
          } else if (this.company) {
            promotions$ = Company.orders_promotions.list(this.company.id,
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
            promotions$ = OrderPromotion.list([
              { name: "created_at", operator: ">=", value: this.dateStart },
              { name: "created_at", operator: "<", value: this.dateEnd }
            ])
          } else {
            throw Error("Nem é TEAM nem tem filial nem company")
          }
          return promotions$
        }))
        .pipe(switchMap((orders: OrderPromotion[]) => {
          if (!orders || orders.length <= 0) return of([])
          return combineLatest(
            orders.map((order: OrderPromotion) => {
              if (order && order.user && order.promotion && order.company && order.filial) {
                const user$ = User.object<User>(order.user.id, true)
                const promotion$ = Promotion.object<Promotion>(order.promotion.id, true)

                let company$: Observable<Company>;
                if (this.company) company$ = of(this.company)
                else company$ = Company.object(order.company.id, true)

                let filial$: Observable<Filial>;
                if (this.filial) filial$ = of(this.filial)
                else filial$ = Filial.object(order.filial.id, true)

                return combineLatest(
                  user$,
                  promotion$,
                  company$,
                  filial$
                ).pipe(map((arr: [User, Promotion, Company, Filial]) => {
                  order.user_full = arr[0]
                  order.promotion_full = arr[1]
                  order.company_full = arr[2]
                  order.filial_full = arr[3]
                  return order
                }))
              } else {
                console.error("Algo de errado aconteceu, um pedido de promoção não tem um dos elementos: Company, Filial, User, Promotion")
                return of(null)
              }
            })
          )
        }))
        .pipe(map((orders: OrderPromotion[]) => {
          return orders.filter((order) => order)
        }))
        .subscribe((orders: OrderPromotion[]) => {
          if (!orders || orders.length <= 0) this.existsOrders = false
          else this.existsOrders = true
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
  }

}
