import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from './services/shared.service';
import { Company } from '../models/company';
import { Filial } from '../models/filial';
import { elementIsInsideArray } from './util/util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {

  constructor(public shared: SharedService, public route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return combineLatest([
      this.shared.company$,
      this.shared.filial$
    ])
      .pipe(map((arr: [Company, Filial]) => {
        let company: Company = arr[0];
        let filial: Filial = arr[1];
        let params_needed: string[] = next.data.params
        let params_url: any = JSON.parse(JSON.stringify(next.params))

        let change: boolean = false

        if (elementIsInsideArray("company_id", params_needed || []) && company && company.id != params_url['company_id']) {
          params_url['company_id'] = company.id;
          change = true;
        }

        if (elementIsInsideArray("filial_id", params_needed || []) && filial && filial.id != params_url['filial_id']) {
          params_url['filial_id'] = filial.id;
          change = true;
        }

        if (change) {
          this.route.navigate([next.url.map((x) => x.path).join("/"), params_url])
        }

        return true;
      }))
  }
}
