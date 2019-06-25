import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneEditPage } from './phone-edit.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    PipesModule,
    BrMaskerModule,
    ReactiveFormsModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PhoneEditPage],
  entryComponents: [PhoneEditPage]
})
export class PhoneEditPageModule { }
