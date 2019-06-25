import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOrderPage } from './list-order.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ListOrderPage
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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOrderPage]
})
export class ListOrderPageModule {}
