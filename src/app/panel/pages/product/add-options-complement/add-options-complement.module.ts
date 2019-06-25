import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOptionsComplementPage } from './add-options-complement.page';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { PipesModule } from '../../../../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PipesModule,
    GlobalComponentsModule
  ],
  declarations: [AddOptionsComplementPage],
  entryComponents: [AddOptionsComplementPage]
})
export class AddOptionsComplementPageModule { }
