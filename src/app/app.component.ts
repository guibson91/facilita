import {
  AlertController,
  Platform,
  MenuController
} from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
/**
 * @todo Adicionar página
 */
//import { TutorialPage } from './../pages/pages';
import { SharedService } from './services/shared.service';
import { SystemService } from './services/system.service';
import { AuthenticationService } from './services/authentication.service';
import { NanoPushService } from './services/nano-push.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  /**
   * Página raiz
   */
  rootPage: string;

  /**
   * Controla o spinner de loading da página
   */
  showLoading: boolean = false;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navCtrl: NavController,
    public auth: AuthenticationService,
    public shared: SharedService,
    public system: SystemService,
    public alert: AlertController,
    public route: Router,
    public screenOrientation: ScreenOrientation,
    public storage: Storage,
    public ref: ChangeDetectorRef,
    public menuCtrl: MenuController,
    public nanoPush: NanoPushService) {
  }

  ngOnInit() {
    this.route.events.subscribe((event) => {
      // Por causa do aviso de "Navigation triggered outside Angular zone"
      // Existia bug na detectação de mudanças em algumas navegações
      // Isso conserta esses bugs.
      if (event instanceof NavigationEnd) {
        this.ref.detectChanges()
      }
      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    })
    this.initializeApp()
    //this.setRootPage();
    this.nanoPush.init()
    this.menuCtrl.enable(false)
  }
  /**
   * Inicializar platform e plugins nativos
   */
  private initializeApp(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {

        if (this.platform.is('ios')) {
          this.statusBar.overlaysWebView(false);
        }

        // this.statusBar.styleDefault();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#C00F32');
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.hideSplashScreen();
      }
    });
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 5); //delay de esconder splashscreen pós plataforma ser carregada
    }
  }

  /**
   * Definir página de acordo com autenticação do usuário
  
  private setRootPage(): void {
    this.showLoading = true;
    
    this.auth.authState$.pipe(first()).subscribe((user: User) => {
      //Deslogar usuário que não tenha permissão de acessar o aplicativo mobile
      if (user && ENV.APP && user.permissions.indexOf(Permission.CUSTOMER) < 0) {
        this.auth.logout().subscribe(() => { this.showLoading = false },
          () => { this.showLoading = false });
        return;
      }

      // Se não existe nenhuma página na pilha
      // E o nav não está em transição para acesso de uma página
      if (this.nav.first() === undefined &&
        !this.nav.isTransitioning()) {
        // Ir para página raiz.
        this.storage.get('hideTutorial').then(val => {
          if (!val && ENV.APP) {
            this.app.getRootNav().setRoot(TutorialPage)
              .then(() => { this.showLoading = false })
              .catch(() => { this.showLoading = false })
          } else {
            this.app.getRootNav().setRoot(this.shared.rootPage)
              .then(() => { this.showLoading = false })
              .catch(() => { this.showLoading = false })
          }
        })
      } else { this.showLoading = false; }
    }, error => {
      this.system.showErrorAlert(error);
      this.showLoading = false;
    });
  }
 */

}
