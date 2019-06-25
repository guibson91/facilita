import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, Platform } from '@ionic/angular';
import { CustomerPage } from '../customer/customer.page';
import { FilialType } from '../../../../models/filial';
import { LoginAppPage } from '../login-app/login-app.page';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { BackButtonEmitter } from '@ionic/angular/dist/providers/platform';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';

interface Navigator {
  app: {
    exitApp: () => any; // Or whatever is the type of the exitApp function
  }
}

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.page.html',
  styleUrls: ['./home-app.page.scss'],
})
export class HomeAppPage implements OnInit {

  obsBackButton$: BackButtonEmitter;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public alertCtrl: AlertController,
    public shared: SharedService,
    public platform: Platform,
    public system: SystemService) {

  }

  ngOnInit() {

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   if (params.get('showAlert') == 'true') {
    //   }
    // })

    // this.obsBackButton$ = this.platform.backButton;

    // this.obsBackButton$.pipe(first()).subscribe(async () => {
    //   console.log("Clicked backbutton..................");
    //   const alert = await this.alertCtrl.create({
    //     header: 'Fechar aplicativo',
    //     message: 'Você tem certeza que deseja sair do aplicativo?',
    //     buttons: [
    //       {
    //         text: 'Não',
    //         role: 'cancel',
    //         handler: (blah) => {
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'Sim',
    //         handler: () => {
    //           console.log('Confirm Okay');
    //           navigator['app'].exitApp();
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // })
  }

  ngOnDestroy(): void {
    // this.obsBackButton$.unsubscribe();
  }

  async clickCategory(type: string) {

    switch (type) {
      //Resturantes e Bares
      case 'restaurant': {
        console.log("Restaurante selecionado");
        this.system.logEvent("home_restaurant")
        this.navCtrl.navigateForward(['mobile/filial-search', {
          type: FilialType.RESTAURANT
        }])
        break;
      }
      //Supermercados
      case 'supermarket': {
        console.log("Supermercado selecionado");
        // this.navCtrl.navigateForward(['mobile/filial-search', {
        //   type: FilialType.SUPERMARKET
        // }])

        this.system.logEvent("home_supermarket")
        this.system.showAlert("Aguarde!", null, "Em breve teremos supermercados cadastrados na sua região.");

        break;
      }
      //Farmácias
      case 'drogstore': {
        console.log("Farmácia selecionado");
        // this.navCtrl.navigateForward(['mobile/filial-search', {
        //   type: FilialType.DRUGSTORE
        // }])

        this.system.logEvent("home_drogstore")
        this.system.showAlert("Aguarde!", null, "Em breve teremos farmácias cadastradas na sua região.");

        break;
      }
      //Depósitos (Água, gás, bebidas alcoólicas)
      case 'warehouse': {
        console.log("Depósito selecionado");
        this.navCtrl.navigateForward(['mobile/filial-search', {
          type: FilialType.WAREHOUSE
        }])

        this.system.logEvent("home_warehouse")

        break;
      }
      //Promoções
      case 'promotion': {
        console.log("Promoção selecionado");
        this.navCtrl.navigateForward(['mobile/promotion-app'])

        this.system.logEvent("home_promotion")
        // this.system.showAlert("Ops!", null, "Ainda não temos promoções cadastradas na sua região");

        break;
      }
      //Perfil
      case 'profile': {
        this.system.logEvent("home_profile")
        console.log("Perfil selecionado");
        if (this.shared.user) {
          this.navCtrl.navigateRoot(["mobile/customer-details", {
            pageBefore: 'HomeApp'
          }]);
        }
        else {
          let modalLogin = await this.modalCtrl.create({
            component: LoginAppPage,
            componentProps: {
              page: 'CustomerPage',
              pageBefore: 'HomeApp'
            }
          });
          modalLogin.present();
        }
        break;
      }
      default: {
        console.error("Categoria selecionada não identificada");
        break;
      }
    }

  }

}