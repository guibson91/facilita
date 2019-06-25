import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackOrderPage } from './track-order.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { DetailOrderPageModule } from '../detail-order/detail-order.module';

const routes: Routes = [
  {
    path: '',
    component: TrackOrderPage
  }
];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    DetailOrderPageModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackOrderPage]
})
export class TrackOrderPageModule {}
