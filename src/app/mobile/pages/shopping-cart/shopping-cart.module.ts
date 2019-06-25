import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShoppingCartPage } from './shopping-cart.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { CustomerAddressPageModule } from '../customer-address/customer-address.module';
import { RouterModule, Routes } from '@angular/router';
import { PhoneEditPageModule } from '../phone-edit/phone-edit.module';
import { OrderCreatedMessagePageModule } from '../order-created-message/order-created-message.module';
import { OrderItemEditPageModule } from '../order-item-edit/order-item-edit.module';


const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPage
  }
];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    ReactiveFormsModule,
    PhoneEditPageModule,
    OrderCreatedMessagePageModule,
    PipesModule,
    OrderItemEditPageModule,

    //Default Modules 
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAddressPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingCartPage]
})
export class ShoppingCartPageModule { }