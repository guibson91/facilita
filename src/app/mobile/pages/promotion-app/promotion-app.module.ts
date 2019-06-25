import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PromotionAppPage } from './promotion-app.page';
import { PromotionFilterAppPageModule } from '../promotion-filter-app/promotion-filter-app.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { PromotionDetailAppPageModule } from '../promotion-detail-app/promotion-detail-app.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';

const routes: Routes = [
  {
    path: '',
    component: PromotionAppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    PromotionFilterAppPageModule,
    PromotionDetailAppPageModule,
    MobileComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PromotionAppPage]
})
export class PromotionAppPageModule { }
