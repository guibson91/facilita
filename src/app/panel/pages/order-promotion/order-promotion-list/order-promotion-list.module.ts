import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderPromotionListPage } from './order-promotion-list.page';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../../../../pipes/pipes.module';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: OrderPromotionListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    NgPipesModule,
    PipesModule,
    MomentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderPromotionListPage]
})
export class OrderPromotionListPageModule { }
