import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilialSearchPage } from './filial-search.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { CustomerAddressPageModule } from '../customer-address/customer-address.module';
import { AddressEditPageModule } from '../address-edit/address-edit.module';

const routes: Routes = [
  {
    path: '',
    component: FilialSearchPage
  }
];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    CustomerAddressPageModule,
    AddressEditPageModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilialSearchPage]
})
export class FilialSearchPageModule { }
