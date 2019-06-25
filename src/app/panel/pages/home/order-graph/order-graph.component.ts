import { Component, ViewChild, OnDestroy, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
/**
 * @todo
 * Adicionar página
 */
//import { OrderListPage } from '../../pages/pages';
import { Observable, Subscription, of, combineLatest } from 'rxjs';
import { map, tap, first, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { Company } from '../../../../../models/company';
import { OrderStatistics } from '../../../../../models/statistics/order-statistic';
import { Filial } from '../../../../../models/filial';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';

@Component({
  selector: 'order-graph',
  templateUrl: './order-graph.component.html',
  styleUrls: ['./order-graph.component.scss']
})
export class OrderGraphComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('lineCanvas') lineCanvas;

  loading: boolean = true

  lineChart: any;

  periodType: "day" | "month" | "week" = "day";

  pendentOrders: number = 0;
  finishOrders: number = 0;
  averageTime: number = 0;

  load_subscription: Subscription

  constructor(public navCtrl: NavController,
    public shared: SharedService,
    private ref: ChangeDetectorRef,
    public system: SystemService) { }

  ngOnInit() {
    this.shared.company$.pipe(first()).subscribe((company: Company) => {
      this.load("day", company)
    })
  }

  /**
   * Criar um gráfico padrão
   */
  ngAfterViewInit() {
    this.changeChart("day")
  }

  /**
   * Carrega as informações do gráfico baseado no tipo do gráfico e na empresa
   * @param type Tipo do gráfico
   * @param company Empresa atual
   */
  load(type: "day" | "week" | "month", company: Company): void {
    this.loading = true
    this.periodType = type

    let obs$: Observable<Filial[]>
    if (this.shared.isTeam) {
      obs$ = Filial.list()
    } else {
      obs$ = Company.filials.list(company ? company.id : "").pipe(first())
    }
    if (this.load_subscription) this.load_subscription.unsubscribe()
    this.load_subscription = obs$
      .pipe(switchMap((filials: Filial[]) => {
        switch (type) {
          case "day":
            return this.loadChartDay(filials)
          case "week":
            return this.loadChartWeek(filials)
          case "month":
            return this.loadChartMonth(filials)
          default:
            throw Error("load chamado com type errado")
        }
      }))
      .pipe(map((points: ChartPoint[]) => {
        if (!points) points = []
        return points.filter((point => point))
      }))
      .subscribe((points: ChartPoint[]) => {
        this.changeChart(type, points)
        this.loading = false;
        this.ref.detectChanges()
      }, err => {
        this.loading = false;
        this.ref.detectChanges()
        this.system.showErrorAlert(err)
      })

  }

  /**
   * Baixa as estatísticas de um dia.
   * Une as informações de todas filiais para gerar uma estatística global(com todas somadas)
   * @param filials Conjunto de filiais
   */
  loadChartDay(filials: Filial[]): Observable<ChartPoint[]> {
    let obs$: Observable<OrderStatistics[]>;
    if (filials && filials.length > 0) {
      obs$ = combineLatest(
        filials.map((filial: Filial) => {
          return OrderStatistics.getDay(filial.id, new Date())
        })
      )
    } else {
      obs$ = of([])
    }
    return obs$.pipe(
      map((orderStatistics: OrderStatistics[]) => {
        let statistics: OrderStatistics
        this.finishOrders = 0
        this.averageTime = 0
        for (let statisticsFilial of orderStatistics) {
          if (statisticsFilial) {
            statistics = OrderStatistics.join(statisticsFilial, statistics)
            this.finishOrders += (statistics && statistics.done && statistics.done.quantity ? statistics.done.quantity : 0)
            this.averageTime += (statistics && statistics.duration_accepted_to_done ? statistics.duration_accepted_to_done : 0)
          }
        }
        if (this.finishOrders > 0) this.averageTime = (this.averageTime / this.finishOrders) / 60
        return statistics
      })
    ).pipe(
      map((statistics: OrderStatistics) => {
        statistics = statistics || {}
        statistics.hours = statistics.hours || {}
        let points: ChartPoint[] = []
        for (let h = 0; h <= 23; h++) {
          points.push({
            name: (h < 10 ? "0" + h.toString() + ":00" : h.toString() + ":00"),
            value: (statistics.hours[h] ? statistics.hours[h] : 0)
          })
        }
        return points
      }))
  }

  /**
   * Baixa as estatísticas de uma semana. Consulta o dia de hoje e 6 dias atrás.
   * Une as informações de todas filiais para gerar uma estatística global(com todas somadas)
   * @param filials Conjunto de filiais
   */
  loadChartWeek(filials: Filial[]): Observable<ChartPoint[]> {
    let date = new Date()
    // Array com as datas dos últimos 7 dias
    let days: Date[] = []
    for (let i = 0; i < 7; i++) {
      days.push(date)
      date = new Date(date)
      date.setDate(date.getDate() - 1)
    }
    days.reverse()
    this.finishOrders = 0
    this.averageTime = 0
    return combineLatest(
      days.map((day) => {
        let obs$: Observable<OrderStatistics[]>
        if (filials && filials.length > 0) {
          obs$ = combineLatest(
            filials.map((filial: Filial) => {
              return OrderStatistics.getDay(filial.id, day)
            })
          )
        } else {
          obs$ = of([])
        }
        return obs$.pipe(
          map((orderStatistics: OrderStatistics[]) => {
            let statistics: OrderStatistics
            for (let statisticsFilial of orderStatistics) {
              if (statisticsFilial) {
                statistics = OrderStatistics.join(statisticsFilial, statistics)
              }
            }
            this.finishOrders += (statistics && statistics.done && statistics.done.quantity ? statistics.done.quantity : 0)
            this.averageTime += (statistics && statistics.duration_accepted_to_done ? statistics.duration_accepted_to_done : 0)
            moment.locale('pt-BR');
            return {
              name: moment(day).format("dddd"),
              value: (statistics && statistics.done && statistics.done.quantity ? statistics.done.quantity : 0)
            }
          })
        )
      })
    ).pipe(
      tap((points: ChartPoint[]) => {
        if (this.finishOrders) {
          this.averageTime = Math.round((this.averageTime / this.finishOrders) / 60)
        }
      }))
  }


  /**
   * Baixa as estatísticas um mês. Consulta todos os dia do mês atual.
   * Une as informações de todas filiais para gerar uma estatística global(com todas somadas)
   * @param filials Conjunto de filiais
   */
  loadChartMonth(filials: Filial[]): Observable<ChartPoint[]> {
    let all_days: {
      [key: string]: OrderStatistics
    } = {}
    let obs$: Observable<OrderStatistics[][]>
    if (filials && filials.length > 0) {
      obs$ = combineLatest(
        filials.map((filial: Filial) => {
          return OrderStatistics.getDays(filial.id, new Date())
            .pipe(tap((statistics: OrderStatistics[]) => {
              statistics = statistics || []
              for (let statistic of statistics) {
                all_days[statistic.id] = OrderStatistics.join(statistic, all_days[statistic.id])
              }
            }))
        })
      )
    } else {
      obs$ = of([])
    }
    return obs$.pipe(
      map(() => {
        let points: ChartPoint[] = []
        let date: Date = new Date()
        let month: number = date.getMonth()
        date.setDate(1)
        // Passar por todos os dias do mês
        while (date.getMonth() === month) {
          points.push({
            name: date.getDate().toString(),
            value: (all_days[date.toISOString().substr(0, 10)] ? all_days[date.toISOString().substr(0, 10)].done.quantity : 0)
          })
          date.setDate(date.getDate() + 1)
        }
        return points
      })
    )
  }

  /**
   * Ir para a página de pedidos
   * @todo Adicionar página
   */
  goToOrderPage() {
    //this.navCtrl.setRoot(OrderListPage);
  }

  /**
   * Efetua a mudança no tipo do gráfico.
   * @param type Novo tipo
   */
  changePeriodType(type: "day" | "week" | "month") {
    this.shared.company$.pipe(first()).subscribe((company: Company) => {
      this.load(type, company)
    })
  }

  /**
   * Muda o gráfico atual.
   * @param type Tipo do gráfico
   * @param points Conjunto de pontos
   */
  changeChart(type: "day" | "week" | "month", points?: ChartPoint[]) {
    const labels = {
      day: "Nº de pedidos / horário",
      week: "Nº de pedidos / dia da semana",
      month: "Nº de pedidos / dia do mês (Fevereiro)"
    }
    const chartLabel: string = labels[type]
    let chartLabels: string[] = []
    let dataLabels: number[] = []

    if (points) {
      chartLabels = points.map(point => point.name)
      dataLabels = points.map(point => point.value)
    }
    if (this.lineChart) this.lineChart.destroy()

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: chartLabel,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(56, 128, 255, 0.4)",
            borderColor: "rgba(56, 128, 255, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(56, 128, 255, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(192, 15, 50, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataLabels,
            spanGaps: false,
          }
        ]
      },

      options: {
        // This chart will not respond to mousemove, etc
        maintainAspectRatio: false,
        events: ['click']
      }

    });

    this.lineChart.update()

  }

  ngOnDestroy() {
    if (this.load_subscription) this.load_subscription.unsubscribe()
  }

}

interface ChartPoint {
  name: string,
  value: number
}
