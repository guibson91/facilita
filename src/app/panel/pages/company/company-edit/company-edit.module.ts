import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyEditPage } from './company-edit.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyEditPage]
})
export class CompanyEditPageModule {}
