import { Injectable } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OneSignal, OSNotification, OSNotificationOpenedResult, OSDisplayType } from '@ionic-native/onesignal/ngx';
import { Blacklist } from '../../models/blacklist';
import { User } from '../../models/user';
import { from } from 'rxjs';
import { flatMap, first } from 'rxjs/operators';
import { OrderStatus } from '../../models/order';
import { SharedService } from './shared.service';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class NanoPushService {

  constructor(public platform: Platform,
    public oneSignal: OneSignal,
    public alertCtrl: AlertController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public shared: SharedService,
    public system: SystemService) { }

  /**
   * Inicializa os dados para notificação.
   * Salva no usuário atual o seu respectivo push_token. Independente se é Mobile ou Web
   */
  public init() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.initializeOneSignalMobile();
      }
      else {
        /**
         * @todo One Signal Web
         */
        // this.initializeOneSignalWeb();
      }
    });
  }

  /**
   * Recebe o push token se for web.
   * Utiliza função que está no index.html
   */
  private initializeOneSignalWeb() {
    throw Error("Não funciona OneSignal web ainda")
    /*WebUserIdOneSignal.then((userId) => {
      if (!userId) {
      }
      var push_notification: OneSignalPushIds = {
        userId: userId,
        pushToken: ""
      }
      this.checkBlackList(push_notification)
      this.savePushNotification(push_notification)
    }).catch((err) => {
      console.error("Erro one signal web", err)
    })*/
  }

  /**
   * Recebe o push token se for mobile
   * Utiliza o plugin do OneSignal
   */
  private initializeOneSignalMobile() {
    this.oneSignal.startInit("8a62e8a2-7f92-470e-bb37-03b3445ef540", "409247652916");
    this.oneSignal.getIds().then((push_notification: OneSignalPushIds) => {
      // Verificar se o UserId do push notification, esta na blacklist
      this.checkBlackList(push_notification)
      this.savePushNotification(push_notification)
    }).catch(err => {
      console.error('erro ids:', JSON.stringify(err))
    })
    this.oneSignal.inFocusDisplaying(OSDisplayType.None)
    this.oneSignal.handleNotificationReceived().subscribe((notification: OSNotification) => {
      if (notification && notification.payload && notification.payload.body) {
        this.showToast(notification.payload.body, (notification.payload.additionalData && notification.payload.additionalData.status ? notification.payload.additionalData.status : undefined))
      }
    }, error => {
      console.error("handleNotificationReceived error: ", error);
    })
    this.oneSignal.handleNotificationOpened().subscribe((data: OSNotificationOpenedResult) => {
    }, error => {
      console.error("handleNotificationOpened error", error);
    });
    this.oneSignal.endInit();
  }

  /**
   * Se o usuário estiver na blacklist automaticamente fechar a aplicação.
   * Não deve funcionar se for Web.
   */
  private checkBlackList(push_notification: OneSignalPushIds) {
    Blacklist.object(push_notification.userId).pipe(first()).subscribe(async (black_user: Blacklist) => {
      if (black_user) {
        let alert = await this.alertCtrl.create({
          header: "Atenção",
          subHeader: black_user.reason,
          message: black_user.comments,
          buttons: [{
            text: "Ok",
            handler: () => {
              navigator['app'].exitApp()
            }
          }]
        })
        alert.present()
      }
    }, error => {
      console.error("ERRO ao requisitar black list", error)
    })
  }

  /**
   * Salva no usuário atual o respectivo push_notification atual
   */
  private savePushNotification(push_notification: OneSignalPushIds) {
    var userBefore: User;

    this.storage.get('push_notification').then((push_notificationLocal: OneSignalPushIds) => {
      if (!push_notificationLocal || push_notificationLocal.userId != push_notification.userId) {
        this.shared.user$.subscribe((user: User) => {
          if (user && !userBefore) {
            User.update(user.id, { push_notification: push_notification })
              .pipe(flatMap(() => {
                return from(this.storage.set('push_notification', push_notification))
              })).subscribe(() => {

              }, err => this.system.showErrorAlert(err))
          }
          userBefore = user;
        })
      }
    })
  }

  private async showToast(msg: string, status: OrderStatus) {
    let toast = await this.toastCtrl.create({
      duration: 5000,
      message: msg,
      cssClass: (status === OrderStatus.refused ? "toast-error" : "toast-success")
    })
    toast.present()
  }
}

interface OneSignalPushIds {
  userId: string;
  pushToken: string;
}