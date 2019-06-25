import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionDetailAppPage } from './promotion-detail-app.page';
import { MobileComponentsModule } from '../../components/mobile-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MobileComponentsModule,
    PipesModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PromotionDetailAppPage],
  entryComponents: [PromotionDetailAppPage]
})
export class PromotionDetailAppPageModule {}
