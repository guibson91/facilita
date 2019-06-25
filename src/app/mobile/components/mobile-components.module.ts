import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinRealComponent } from './coin-real/coin-real.component';
import { IonicModule, IonApp } from '@ionic/angular';
import { FabOrderComponent } from './fab-order/fab-order.component';
import { MrCardFilialComponent } from './mr-card-filial/mr-card-filial.component';
import { MrFilialItemComponent } from './mr-filial-item/mr-filial-item.component';
import { MrPriceComponent } from './mr-price/mr-price.component';
import { MrStatusOrderComponent } from './mr-status-order/mr-status-order.component';
import { OrderComplementListComponent } from './order-complement-list/order-complement-list.component';
import { GlobalComponentsModule } from '../../components/global-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAppPageModule } from '../pages/login-app/login-app.module';
import { RatingComponent } from './rating/rating.component';
import { CardPromotionComponent } from './card-promotion/card-promotion.component';
import { CardFilialListComponent } from './card-filial-list/card-filial-list.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GlobalComponentsModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    LoginAppPageModule
  ],
  declarations: [
    RatingComponent,
    CoinRealComponent,
    FabOrderComponent,
    MrCardFilialComponent,
    MrFilialItemComponent,
    MrPriceComponent,
    CardPromotionComponent,
    MrStatusOrderComponent,
    OrderComplementListComponent,
    CardFilialListComponent
  ],
  exports: [
    RatingComponent,
    CoinRealComponent,
    FabOrderComponent,
    MrCardFilialComponent,
    MrFilialItemComponent,
    CardPromotionComponent,
    MrPriceComponent,
    MrStatusOrderComponent,
    OrderComplementListComponent,
    CardFilialListComponent
  ],
  providers: [
    IonApp
  ]
})
export class MobileComponentsModule { }