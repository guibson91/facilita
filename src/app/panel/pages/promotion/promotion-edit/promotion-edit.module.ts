import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PromotionEditPage } from './promotion-edit.page';
import { PipesModule } from '../../../../pipes/pipes.module';
import { NgPipesModule } from 'ngx-pipes';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { PanelComponentsModule } from '../../../components/panel-components.module';

const routes: Routes = [
  {
    path: '',
    component: PromotionEditPage
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
  declarations: [PromotionEditPage]
})
export class PromotionEditPageModule { }
