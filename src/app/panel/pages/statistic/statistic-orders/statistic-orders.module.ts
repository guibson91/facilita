import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatisticOrdersPage } from './statistic-orders.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../../../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: StatisticOrdersPage
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
    RouterModule.forChild(routes)
  ],
  declarations: [StatisticOrdersPage]
})
export class StatisticOrdersPageModule { }
