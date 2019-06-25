import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilialStockPage } from './filial-stock.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { OrderItemEditPageModule } from '../order-item-edit/order-item-edit.module';

const routes: Routes = [
  {
    path: '',
    component: FilialStockPage
  }
];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    OrderItemEditPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilialStockPage]
})
export class FilialStockPageModule {}
