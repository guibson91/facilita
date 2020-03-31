import { Component, OnInit } from '@angular/core';
import { NavController, IonApp, LoadingController, MenuController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { PlacesService } from '../../../services/places.service';
import { SystemService } from '../../../services/system.service';
import { Observable, Subscription, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError, switchMap } from 'rxjs/operators';
import { User, Permission } from '../../../../models/user';
import { Location } from '../../../../models/utils/location';
import { cleanObject } from '../../../util/util';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart.page';
import { CustomerPage } from '../customer/customer.page';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.page.html',
  styleUrls: ['./login-app.page.scss'],
})
export class LoginAppPage {

  page: string;
  pageBefore: string;

  constructor(public nav: NavController,
    public authProvider: AuthenticationService,
    public app: IonApp,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController,
    private placesProvider: PlacesService,
    private system: SystemService,
    public modalCtrl: ModalController,
    private route: ActivatedRoute) {

    this.menuCtrl.enable(false);

    // this.page = this.navParams.get('page');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.page = params.get('page');
      this.pageBefore = params.get('pageBefore');
    })
  }

  ionViewDidEnter(): void {
    this.system.setScreenName("LoginAppPage");
  }

  back() {
    this.modalCtrl.dismiss();
    // this.nav.goBack();
  }

  async doLogin(method: "google" | "facebook") {
    let loading = await this.loadingCtrl.create({});
    loading.present();

    let method$: Observable<firebase.User>
    if (method === "google") {
      method$ = this.authProvider.signInGoogle()
    } else if (method === "facebook") {
      method$ = this.authProvider.signInFacebook()
    }
    method$.pipe(first())
      .pipe(flatMap((data: any) => {
        console.log('Dados recebidos do login: ', data);
        var user: User
        if (data.email) {
          user = {
            name: data.displayName as string,
            email: data.email as string,
            image: data.photoURL as string,
            phone_social: data.phoneNumber as string,
            permissions: [Permission.CUSTOMER]
          };
        }
        else if (data.user) {
          user = {
            name: data.user.displayName as string,
            email: data.user.email as string,
            image: data.user.photoURL as string,
            phone_social: data.user.phoneNumber as string,
            permissions: [Permission.CUSTOMER]
          };
        }

        console.log('User: ', user);
        //Excluir atributos undefined
        user = cleanObject(user);
        console.log('Clean USER: ', user);

        let uid = data.uid ? data.uid : data.user.uid;

        return User.object(uid).pipe(first()).pipe(flatMap((userDatabase: any) => {
          //Usuário já tem localização definida
          if (userDatabase && userDatabase.location) {
            return User.update(uid, user)
          }
          //Usuário ainda não tem localização definida
          else {
            //Atribuir ao endereço principal o último endereço adicionado no histórico
            if (user.locations_history && user.locations_history.length > 0) {
              user.location = user.locations_history[user.locations_history.length - 1];
              return User.update(uid, user)
            }
            //Obter pelo GPS
            else {
              return this.placesProvider.getCurrentLocation().pipe(first()).pipe(flatMap((locationUser: Location) => {
                locationUser.isGps = true;
                user.location = locationUser;
                user.physical_location = user.location;
                return User.update(uid, user)
              }))
                .pipe(catchError(() => {
                  console.log('algo deu errado na localizacao: ', user);
                  // ALgo deu errado ao conseguir a localização do usuário
                  return User.update(uid, user)
                }))
            }
          }

        }))
      })).subscribe(async () => {
        // this.app.getRootNav().setRoot(this.shared.rootPage)
        // this.modalCtrl.dismiss().then(() => {
        //   if (this.page) this.nav.push(this.page);
        // })
        // this.nav.goBack();
        this.modalCtrl.dismiss();

        if (this.page == 'CustomerPage') {
          // const modal = await this.modalCtrl.create({
          //   component: CustomerPage
          // });
          // modal.present();
          this.nav.navigateRoot(['mobile/customer-details', {
            pageBefore: this.pageBefore
          }])
        }
        else if (this.page == 'ShoppingCartPage') {
          this.nav.navigateRoot('mobile/cart')
        }
        else if (this.page == 'PromotionDetailPage') {
          this.modalCtrl.dismiss();
        }
        loading.dismiss()
        this.system.logEvent(`login_success_${method}`)
      }, error => {
        console.log('Deu errado auth: ', error)
        loading.dismiss()
        this.system.showErrorAlert(error, `Autenticação pelo ${method}`, true);
      });
  }

}