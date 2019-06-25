import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { Coupon } from '../../../../../models/coupon';
import { AuthenticationService } from '../../../../services/authentication.service';
import { CouponService } from '../../../../services/coupon.service';
import { SharedService } from '../../../../services/shared.service';
import { MenuController, NavController } from '@ionic/angular';
import { Company } from '../../../../../models/company';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Filial } from '../../../../../models/filial';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.page.html',
  styleUrls: ['./coupon-list.page.scss'],
})
export class CouponListPage implements OnInit {

  coupons$: Observable<Coupon[]>;

  searchString: string;

  existsCoupons: boolean

  loading: boolean = true;

  /**
   * A empresa se for um funcionário da empresa ou dono de filial e null se for TEAM
   */
  company: Company

  /**
   * A filial se for um funcionári oda filial ou null se for TEAM ou funcionário da empresa
   */
  filial: Filial

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    public shared: SharedService,
    private ref: ChangeDetectorRef,
    public authentication: AuthenticationService,
    private route: ActivatedRoute,
    public couponProvider: CouponService) { }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true)
    this.load()
  }

  load() {
    this.loading = true

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
          return Company.object(params.get('filial_id'))
        else
          return of(null)
      }))

    this.coupons$ = combineLatest([
      company$,
      filial$
    ])
      .pipe(switchMap((arr: [Company, Filial]) => {
        this.company = arr[0]
        this.filial = arr[1]

        if (this.filial) {
          return this.couponProvider.getCouponsFromFilial(this.filial.id)
        } else if (this.company) {
          return this.couponProvider.getCouponsFromCompany(this.company.id)
        } else {
          return Coupon.list()
        }
      }))
      .pipe(tap((coupons) => {
        this.loading = false;
        this.ref.detectChanges()
        if (coupons && coupons.length > 0) {
          this.existsCoupons = true;
        } else {
          this.existsCoupons = false;
        }
      }))
  }

  async edit(coupon: Coupon) {
    await this.navCtrl.navigateRoot(['coupon/edit', { company_id: (this.company ? this.company.id : ''), coupon_id: coupon.id }])
  }

  changeActiveStatus(coupon: Coupon) {
    console.log("Cupom a ser editado: ", coupon);
    let couponObject: Coupon = {};
    couponObject.enable = coupon.enable;
    Coupon.update(coupon.id, couponObject).subscribe(() => {
      console.log("Cupom atualizado com sucesso");
    }, error => {
      console.error("Error", error);
    })
  }

  async add() {
    await this.navCtrl.navigateRoot(['coupon/edit', { company_id: (this.company ? this.company.id : '') }])
  }

}