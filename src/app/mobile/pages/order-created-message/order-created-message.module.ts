import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderCreatedMessagePage } from './order-created-message.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';


@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    MobileComponentsModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [OrderCreatedMessagePage],
  entryComponents: [OrderCreatedMessagePage]
})
export class OrderCreatedMessagePageModule {}
