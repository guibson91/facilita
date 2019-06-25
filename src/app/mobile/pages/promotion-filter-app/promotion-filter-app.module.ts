import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionFilterAppPage } from './promotion-filter-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PromotionFilterAppPage],
  entryComponents: [PromotionFilterAppPage]
})
export class PromotionFilterAppPageModule { }
