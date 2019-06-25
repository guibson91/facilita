import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductComplementUpdatePage } from './product-complement-update.page';
import { AddOptionsComplementPageModule } from '../add-options-complement/add-options-complement.module';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PipesModule,
    AddOptionsComplementPageModule
  ],
  declarations: [ProductComplementUpdatePage],
  entryComponents: [ProductComplementUpdatePage]
})
export class ProductComplementUpdatePageModule { }
