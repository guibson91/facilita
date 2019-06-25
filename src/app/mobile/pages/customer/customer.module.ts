import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerPage } from './customer.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { PhoneEditPageModule } from '../phone-edit/phone-edit.module';
import { CustomerAddressPageModule } from '../customer-address/customer-address.module';
import { EvaluateOrderPageModule } from '../evaluate-order/evaluate-order.module';
import { PromotionDetailAppPageModule } from '../promotion-detail-app/promotion-detail-app.module';
import { PromotionDetailAppPage } from '../promotion-detail-app/promotion-detail-app.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  }
];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    PipesModule,
    PhoneEditPageModule,
    CustomerAddressPageModule,
    EvaluateOrderPageModule,
    PromotionDetailAppPageModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerPage],
  entryComponents: [PromotionDetailAppPage]
})
export class CustomerPageModule { }
