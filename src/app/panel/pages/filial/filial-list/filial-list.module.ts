import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NgPipesModule } from 'ngx-pipes';

import { FilialListPage } from './filial-list.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';

const routes: Routes = [
  {
    path: '',
    component: FilialListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    NgPipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilialListPage]
})
export class FilialListPageModule { }
