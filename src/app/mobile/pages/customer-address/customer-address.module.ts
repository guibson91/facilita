import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../../pipes/pipes.module';
import { CustomerAddressPage } from './customer-address.page';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { AddressEditPageModule } from '../address-edit/address-edit.module';

@NgModule({
  imports: [
    //Custom Modules
    ReactiveFormsModule,
    MobileComponentsModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
    AddressEditPageModule,
  ],
  entryComponents: [CustomerAddressPage],
  declarations: [CustomerAddressPage],
})
export class CustomerAddressPageModule { }