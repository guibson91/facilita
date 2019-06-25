import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { of, combineLatest, Subscription } from 'rxjs';
import { OrderStatistics } from '../../../../../models/statistics/order-statistic';
import { MenuController, NavController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Filial } from '../../../../../models/filial';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first, map } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import * as moment from 'moment';


@Component({
  selector: 'app-statistic-orders',
  templateUrl: './statistic-orders.page.html',
  styleUrls: ['./statistic-orders.page.scss'],
})
export class StatisticOrdersPage implements OnInit, OnDestroy {

  /**
   * Se está carregando os elementos da página
   */
  loading: boolean = true

  /**
   * Se existe alguma fatura
   */
  existsInvoice: boolean = true

  /**
   * Order statistics, estatísticas aglomeradas sobre os pedidos
   */
  orderStatistics: OrderStatistics[]

  orderStatisticsSubscription: Subscription

  constructor(public menuCtrl: MenuController,
    public shared: SharedService,
    public system: SystemService,
    private ref: ChangeDetectorRef,
    public route: ActivatedRoute,
    public authentication: AuthenticationService,
    public navCtrl: NavController) { }

  /**
	 * Inicializando estruturas após entrar na página.
	 */
  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.load();
  }

  ngOnDestroy(): void {
    if (this.orderStatisticsSubscription) this.orderStatisticsSubscription.unsubscribe()
  }

	/**
	 * Carrega a lista da página
	 */
  load() {
    this.loading = true
    this.existsInvoice = true

    let company$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))

    let filial$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('filial_id'))
          return Filial.object(params.get('filial_id'))
        else
          return of(null)
      }))

    if (this.orderStatisticsSubscription) this.orderStatisticsSubscription.unsubscribe()
    this.orderStatisticsSubscription = combineLatest([
      company$,
      filial$
    ])
      .pipe(switchMap((arr: [Company, Filial]) => {
        let company = arr[0]
        let filial = arr[1]

        if (filial) return of([filial])
        else if (company) return Company.filials.list(company.id, undefined, undefined, undefined, true)
        else return Filial.list(undefined, undefined, undefined, true)
      }))
      .pipe(first())
      .pipe(switchMap((filials: Filial[]) => {
        return of(filials)
          .pipe(switchMap((filials: Filial[]) => {
            if (!filials || filials.length <= 0) return of([])
            return combineLatest(filials.map((filial: Filial) => OrderStatistics.getMonths(filial.id)))
              .pipe(first())
              .pipe(map((filialsStatistics: OrderStatistics[][]) => [].concat.apply([], filialsStatistics)))
          }))
          .pipe(map((statistics: OrderStatistics[]) => {
            let months: {
              [key: string]: OrderStatistics
            } = {}
            /**
             * Fazendo o merge das estatística de todas as estatisticas diferentes agrupadas por mês
             */
            for (let statistic of statistics) {
              months[statistic.id] = OrderStatistics.join(statistic, months[statistic.id])
            }
            let aux: OrderStatistics[] = []
            for (let month in months) {
              months[month].id_name = this.getStringMonth(months[month].id.split('-')[1])
              aux.push(months[month])
            }

            console.log("Aux", aux)
            return aux.reverse()
          }))
      }))
      .subscribe((ordersStatistics: OrderStatistics[]) => {
        if (!ordersStatistics || ordersStatistics.length <= 0) this.existsInvoice = false
        else this.existsInvoice = true
        this.orderStatistics = ordersStatistics
        this.loading = false
        this.ref.detectChanges()
      }, err => {
        this.loading = false
        this.ref.detectChanges()
        this.system.showErrorAlert(err);

      })
  }

  getStringMonth(id: string) {
    moment.locale('pt-BR');
    return moment({ month: Number(id) - 1 }).format('MMMM')
  }

}
