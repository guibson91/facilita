import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { NavController, MenuController } from '@ionic/angular'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Company } from '../../../../../models/company'
import { SharedService } from '../../../../services/shared.service';
//import { RestaurantEditPage, FilialListPage, OrderListPage, InvoicePage, ProductListPage } from '../../pages';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.page.html',
  styleUrls: ['./company-list.page.scss'],
})
export class CompanyListPage implements OnInit {

  searchString: string

  companies$: Observable<Company[]> = Company.list<Company>().pipe(tap(() => {
    this.loading = false
    setTimeout(() => {
      this.ref.detectChanges()
    }, 30);
  }));

  loading: boolean = true

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    public shared: SharedService) { }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true);
  }

  detect() {
    this.ref.detectChanges()
  }

  add() {
    this.navCtrl.navigateRoot('company/edit')
  }

  edit(company: Company) {
    this.navCtrl.navigateRoot(['company/edit', { id: (company ? company.id : undefined) }])
  }

  openFiliais(company: Company) {
    this.navCtrl.navigateRoot(['filial/list', { company_id: company.id }])
  }

  openOrders(company: Company) {
    this.navCtrl.navigateRoot(['order/list', { company_id: company.id }])
  }

  openOrdersPromotion(company: Company) {
    this.navCtrl.navigateRoot(['order/promotion/list', { company_id: company.id }])
  }

  openFinancial(company: Company) {
    this.navCtrl.navigateRoot(['statistic/orders', { company_id: company.id }])
  }

  openProducts(company: Company) {
    this.navCtrl.navigateRoot(['product/list', { company_id: company.id }])
  }

  openPromotions(company: Company) {
    this.navCtrl.navigateRoot(['promotion/list', { company_id: company.id }])
  }

  openEmployee(company: Company) {
    this.navCtrl.navigateRoot(['employee/list', { company_id: company.id }])
  }

  openEvaluate(company: Company) {
    this.navCtrl.navigateRoot(['evaluation/list', { company_id: company.id }])
  }

  changeActiveStatus(company) {
    let rest: Company = {};
    rest.active = company.active;
    Company.update(company.id, rest).subscribe()
  }

}
