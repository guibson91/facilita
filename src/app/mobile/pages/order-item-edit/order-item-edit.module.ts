import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderItemEditPage } from './order-item-edit.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: OrderItemEditPage
//   }
// ];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    PipesModule,

    //Default Modules
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [OrderItemEditPage],
  entryComponents: [OrderItemEditPage]
})
export class OrderItemEditPageModule { }
