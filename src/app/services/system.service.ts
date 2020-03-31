import { Injectable } from '@angular/core';
import { Log } from '../../models/log';
import { Platform, AlertController } from '@ionic/angular';
import { firestore } from "firebase";
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(public alertCtrl: AlertController,
    public platform: Platform) { }

  public async showNanoErrorAlert(error: NanoError) {
    if (error.report) {
      this.logEvent("nanoerror", {
        name: error.message
      })
      let log: Log = {
        date: firestore.FieldValue.serverTimestamp(),
        description: JSON.stringify(error.message) || "Stringfy não funcionou",
        origin: "nanoerror",
        title: JSON.stringify(error.title) || "Sem title"
      };
      Log.add(log).subscribe()
    }

    let alert = await this.alertCtrl.create({
      header: error.title,
      subHeader: error.message,
      buttons: ['OK']
    });
    alert.present();
  }

  public async showAlert(header, subHeader, message): Promise<void> {

    let obj: any = {};

    obj.buttons = ['OK'];

    if (header) obj.header = header;
    if (subHeader) obj.subHeader = subHeader;
    if (message) obj.message = message;
    let alert = await this.alertCtrl.create(obj)
    alert.present();

  }

  public async showErrorAlert(error?, origin?: string, log_backend?: boolean) {
    if (error.nanoerror) return this.showNanoErrorAlert(error)
    var know_issue: boolean = false
    console.error("Ocorreu um erro: ", error);

    if (origin && origin == 'logout') return;

    //Mensagem genérica para erro desconhecido ou não mapeado
    let title = 'Falha de comunicação!';
    let msg = 'Ocorreu uma falha de comunicação! Tente novamente mais tarde.';

    if (error && error.message) {
      title = "Ops!";
      msg = error.message;
    }
    else if (error) {
      title = "Ops!";
      msg = JSON.stringify(error);
    }

    if (error && error.title) {
      title = error.title;
    }

    if (msg == 'Missing or insufficient permissions.') {
      know_issue = true
      title = "Permissão inválida"
      msg = "Usuário não tem permissão para realizar essa ação! Por favor contate o administrador."
    }

    //Tratamento com base no código de erros específicos
    if (error && error.code == 'auth/account-exists-with-different-credential') {
      know_issue = true
      title = 'Conta já existe'
      msg = 'Uma conta já existe com o mesmo endereço de e-mail, mas credenciais de login diferentes. Faça login usando um provedor associado a este endereço de e-mail.'
    }
    else if (error && error.code == 'auth/popup-closed-by-user') {
      know_issue = true
      title = 'Erro de autenticação';
      msg = 'Janela fechada pelo usuário antes de concluir a autenticação. Tente novamente.'
    }
    else if (error && error.code == 'auth/email-already-exists') {
      know_issue = true
      title = 'Email já cadastrado';
      msg = 'Essa conta de email já foi cadastrada no painel administrativo ou no aplicativo. Por favor, escolha outro email e tente novamente.'
    }

    /**
     * Se não é um problema conhecido e deve avisar o backend
     */
    if (!know_issue && log_backend) {
      let log: Log = {
        date: firestore.FieldValue.serverTimestamp(),
        description: JSON.stringify(error) || "Stringfy não funcionou",
        description_error: JSON.stringify(error.msg) || "Sem msg",
        origin: origin || "Sem origem",
        title: JSON.stringify(error.title) || "Sem title"
      };
      Log.add(log).subscribe()
    }

    let alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: ['OK']
    });
    alert.present();

  }


  setScreenName(name: string) {
    // if (this.platform.is('cordova')) {
    //   this.firebase.setScreenName(name).then((data) => {
    //   })
    // }
  }

  logEvent(name: string, data?: any) {
    // if (this.platform.is('cordova')) {
    //   this.firebase.logEvent(name, data || {}).then((data) => {
    //   })
    // }
  }

  setUserId(userId) {
    // if (this.platform.is('cordova')) {
    //   this.firebase.setUserId(userId).then((data) => {
    //   })
    // }
  }

  setUserProperty(name?: string, data?: any) {
    // if (this.platform.is('cordova')) {
    //   this.firebase.setUserProperty(name, data || {}).then((data) => {
    //   })
    // }
  }

}

/**
 * Interface com erros controlados pela nanocode.
 * Contem traduções dos erros de diversos plugins
 */
export interface NanoError {
  nanoerror: true,
  title: string,
  message: string,
  report: boolean // Se deve ser registrado no log ou não
}
