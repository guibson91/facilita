import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { NgModule, LOCALE_ID } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { PanelComponentsModule } from './panel/components/panel-components.module';
import { RouteReuseStrategy } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { GlobalComponentsModule } from './components/global-components.module';
import { PipesModule } from './pipes/pipes.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import 'moment/locale/pt';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

registerLocaleData(localePt);


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    AppRoutingModule,
    HttpClientModule,
    PanelComponentsModule,
    PipesModule,
    GlobalComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    Vibration,
    Facebook,
    GooglePlus,
    NativeAudio,
    ScreenOrientation,
    Diagnostic,
    Geolocation,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }