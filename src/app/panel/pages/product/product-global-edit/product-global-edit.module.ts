import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductGlobalEditPage } from './product-global-edit.page';
import { PipesModule } from '../../../../pipes/pipes.module';
import { NgPipesModule } from 'ngx-pipes';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { CategorySelectPageModule } from '../category-select/category-select.module';

const routes: Routes = [
  {
    path: '',
    component: ProductGlobalEditPage
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
    CategorySelectPageModule,
    NgPipesModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductGlobalEditPage]
})
export class ProductGlobalEditPageModule { }
