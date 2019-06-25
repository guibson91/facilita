import { Company } from '../../models/company';
import { combineLatest, Observable, of } from 'rxjs';
import { Coupon, CouponFilial } from '../../models/coupon';
import { Filial } from '../../models/filial';
import { flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(public shared: SharedService) {

  }

  // Obter cupons (GERENTE DE FILIAL)
  public getCouponsFromFilial(id_filial: string): Observable<CouponFilial[]> {
    return Filial.coupons.list(id_filial)
      .pipe(flatMap((coupons: CouponFilial[]) => {
        console.log("Cupons que vou filtrar: ", coupons);
        return of(coupons.filter((coupon) => {
          return coupon.fromTeam == false
        }))
      }))
  }

  // Obter cupons (GERENTE DA EMPRESA)
  public getCouponsFromCompany(id_company: string): Observable<CouponFilial[]> {

    // Observable com lista de filiais da empresa
    let filials$: Observable<Filial[]> = Company.filials.list(id_company)

    return filials$.pipe(flatMap((filials: Filial[]) => {
      let obs = [];
      filials.forEach(filial => {
        obs.push(this.getCouponsFromFilial(filial.id))
      });
      return combineLatest(obs)
    }))
      .pipe(
        flatMap((matriz: CouponFilial[][]) => {
          let coupons: CouponFilial[] = [];
          matriz.forEach(array => {
            array.forEach(element => {
              const index = coupons.findIndex((coupon) => {
                return coupon.id == element.id;
              })
              // Adicionar CUPOM apenas se não já existir
              if (index === -1) {
                coupons.push(element);
              }
            });
          });
          console.log("Cupons:  ", coupons);
          return of(coupons);
        }))
  }

  // Obter filiais relacionadas a um CUPOM
  public getFilialsFromCoupon(id_coupon: string): Observable<Filial[]> {
    return Coupon.filial.list(id_coupon);
  }

}