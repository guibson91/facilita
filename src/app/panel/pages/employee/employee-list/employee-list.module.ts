import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPage } from './employee-list.page';
import { NgPipesModule } from 'ngx-pipes';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { PipesModule } from '../../../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListPage
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
  declarations: [EmployeeListPage]
})
export class EmployeeListPageModule { }
