import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NanoLoadingComponent } from './nano-loading/nano-loading.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NanoThumbComponent } from './nano-thumb/nano-thumb.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import { CardProductComponent } from './card-product/card-product.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [
    NanoLoadingComponent,
    NanoThumbComponent,
    MoneyInputComponent,
    CardProductComponent
  ],
  exports: [
    NanoLoadingComponent,
    NanoThumbComponent,
    MoneyInputComponent,
    CardProductComponent
  ]
})
export class GlobalComponentsModule { }
