import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoiceListPage } from './invoice-list.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { NgPipesModule } from 'ngx-pipes';
import { PipesModule } from '../../../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    NgPipesModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoiceListPage]
})
export class InvoiceListPageModule { }
