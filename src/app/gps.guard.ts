import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SystemService } from './services/system.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GpsGuard implements CanActivate {

  constructor(public platform: Platform, public diagnostic: Diagnostic, public system: SystemService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    console.log("Verificação se a página pode entrar...")
    return new Promise<boolean>((resolve, reject) => {

      //Se não for em plataforma cordova, permitir imediatamente a classe entrar
      if (!this.platform.is('cordova')) {
        console.log("Não é cordova")
        resolve(true);
      }

      //Verificação de GPS ativo
      this.diagnostic.isLocationEnabled().then((enabled) => {
        //GPS está ativo
        if (enabled) {
          console.log("GPS está ativo");
          //Verificação de autorização de geolocalização
          this.diagnostic.isLocationAuthorized().then((success) => {
            console.log("Resultado do Diagnóstico se está autorizado: ", success);
            //Usuário permitiu a sua localização
            if (success) {
              console.log("Deu tudo certo! Pode entrar na classe");
              resolve(true);
            }
            //Usuário não permitiu sua localização
            else {
              console.log("Usuário não permitiu sua localização")
              this.diagnostic.requestLocationAuthorization().then((status) => {
                console.log("requestLocationAuthorization status: ", status)
                switch (status) {
                  case this.diagnostic.permissionStatus.GRANTED:
                  case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    console.log("Permitido")
                    resolve(true)
                    break;
                  case this.diagnostic.permissionStatus.NOT_REQUESTED:
                  case this.diagnostic.permissionStatus.DENIED:
                  case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                    this.system.showErrorAlert("Permissão bloqueada! Vá para Configurações -> Aplicativos -> Konnect-Consumidor -> Permissões e então habilite o Local");
                    console.log("Negado")
                    resolve(false)
                    break;
                }
              }).catch((error) => {
                console.log("Ocorreu um erro no requestLocationAuthorization", error);
                resolve(false);
              });
            }
          }).catch((error) => {
            console.log("Ocorreu um erro. ", error);
            resolve(false);
          })
        }
        //GPS não está ativo
        else {
          console.log("GPS não está ativo");
          this.diagnostic.switchToLocationSettings();
          resolve(false);
        }
      }).catch((err) => {
        console.log("Ocorreu um erro. ", err);
        resolve(false);
      });
    });
  }

}
