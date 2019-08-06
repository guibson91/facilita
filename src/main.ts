import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from "firebase"
import { firestore } from "firebase";

/**
 * @todo Adicionar as url de produção e de homologação
 */
export const BASE_URL = environment.production ? 'https://us-central1-facilita-production.cloudfunctions.net/' : 'https://us-central1-facilita-homologation.cloudfunctions.net/';

export const FIREBASE_CONFIG = environment.production ? {
  apiKey: "AIzaSyCgFSiMcZvrTvZB5R4VU4ojy0_cc-XUxiM",
  authDomain: "facilita-production.firebaseapp.com",
  databaseURL: "https://facilita-production.firebaseio.com",
  projectId: "facilita-production",
  storageBucket: "facilita-production.appspot.com",
  messagingSenderId: "409247652916"
} : {
    apiKey: "AIzaSyDg1e-RNigAXoDZjsOT_pF0y7Nxusrqklo",
    authDomain: "facilita-homologation.firebaseapp.com",
    databaseURL: "https://facilita-homologation.firebaseio.com",
    projectId: "facilita-homologation",
    storageBucket: "facilita-homologation.appspot.com",
    messagingSenderId: "10498885020"
  }

if (environment.production) {
  enableProdMode();
}
firebase.initializeApp(FIREBASE_CONFIG);
// firestore().settings({
//   timestampsInSnapshots: true
// })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
