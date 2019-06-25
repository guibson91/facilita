import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, of, combineLatest } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { switchMap, first, map } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import { Filial } from '../../../../../models/filial';
import * as moment from 'moment';
import { Invoice } from '../../../../../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.page.html',
  styleUrls: ['./invoice-list.page.scss'],
})
export class InvoiceListPage implements OnInit, OnDestroy {

  /**
   * Se está carregando os elementos da página
   */
  loading: boolean = true

  /**
   * Se existe alguma fatura
   */
  existsInvoice: boolean = true

  invoicesSubscription: Subscription

  company: Company

  filial: Filial

  invoices: (Invoice & { id_name?: string })[]

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
    if (this.invoicesSubscription) this.invoicesSubscription.unsubscribe()
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

    if (this.invoicesSubscription) this.invoicesSubscription.unsubscribe()
    this.invoicesSubscription = combineLatest([
      company$,
      filial$,
    ])
      .pipe(map((arr: [Company, Filial]) => {
        this.company = arr[0]
        this.filial = arr[1]
        return this.filial
      }))
      .pipe(switchMap((filial: Filial) => {
        return Filial.invoices.list(filial.id)
      })).subscribe((invoices: Invoice[]) => {
        if (!invoices || invoices.length <= 0) this.existsInvoice = false
        else this.existsInvoice = true
        this.invoices = invoices
        for (let invoice of this.invoices) {
          invoice.id_name = this.getStringMonth(invoice.month.split('-')[1])
        }
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
