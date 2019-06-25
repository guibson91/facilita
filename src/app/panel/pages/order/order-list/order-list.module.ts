import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import { IonicModule } from '@ionic/angular';

import { OrderListPage } from './order-list.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../../../../pipes/pipes.module';
import { OrderDetailPage } from '../order-detail/order-detail.page';
import { OrderDetailPageModule } from '../order-detail/order-detail.module';

const routes: Routes = [
  {
    path: '',
    component: OrderListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    NgPipesModule,
    PipesModule,
    MomentModule,
    RouterModule.forChild(routes),
    OrderDetailPageModule
  ],
  declarations: [
    OrderListPage
  ]
})
export class OrderListPageModule { }
