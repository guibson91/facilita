import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddressEditPage } from './address-edit.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    ReactiveFormsModule,
    PipesModule,
    ReactiveFormsModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AddressEditPage],
  entryComponents: [AddressEditPage]
})
export class AddressEditPageModule { }