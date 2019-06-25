import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';
import { SystemService } from './services/system.service';
import { first, map } from 'rxjs/operators';
import { User, PermissionType, Permission } from '../models/user';
import { elementIsInsideArray } from './util/util';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(public shared: SharedService, public route: Router, public system: SystemService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.shared.user$
      .pipe(first())
      .pipe(map((user: User) => {
        // Verifica se ele já aceitou os termos de uso, ou se for o consumidor não precisa aceitar.
        let terms: boolean = true;
        if (user && !elementIsInsideArray(Permission.CUSTOMER, user.permissions) && !user.accept_terms_use) {
          // É usuário do painel e não aceitou os termos de uso.
          console.error("Usuário do painel que não aceitou os termos de uso ainda")
          terms = false
        }

        // Ele precisa ter as permissões necessárias e ter aceitado os termos de uso se for usuário do painel.
        if (checkUserPermissions(user, (next.data ? next.data.permissions : [])) && terms) {
          return true;
        } else {
          console.error("Usuário não tem permissões para acessar essa página.")
          this.route.navigateByUrl(this.shared.rootPage)
          return false;
        }
      }))

  }
}

function checkUserPermissions(user: User, permissions: PermissionType[]): boolean {
  if (!permissions || permissions.length <= 0) throw Error("PermissionGuard não foi definido quais permissões seriam possíveis")
  if (!user || !user.permissions || user.permissions.length <= 0) return false
  for (let permissionUser of user.permissions) {
    if (elementIsInsideArray(permissionUser, permissions)) {
      return true
    }
  }
  return false
  
}