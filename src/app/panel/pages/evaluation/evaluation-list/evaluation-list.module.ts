import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvaluationListPage } from './evaluation-list.page';
import { OrderDetailPage } from '../../order/order-detail/order-detail.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../../../../pipes/pipes.module';
import { OrderDetailPageModule } from '../../order/order-detail/order-detail.module';

const routes: Routes = [
  {
    path: '',
    component: EvaluationListPage
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
    RouterModule.forChild(routes),
    OrderDetailPageModule
  ],
  declarations: [EvaluationListPage]
})
export class EvaluationListPageModule { }
