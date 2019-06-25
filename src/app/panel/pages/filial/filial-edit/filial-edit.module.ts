import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilialEditPage } from './filial-edit.page';
import { PanelComponentsModule } from '../../../components/panel-components.module';
import { GlobalComponentsModule } from '../../../../components/global-components.module';
import { SelectIntervalHoursPage } from './select-interval-hours/select-interval-hours.page';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: FilialEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelComponentsModule,
    GlobalComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BrMaskerModule 
  ],
  entryComponents: [
    SelectIntervalHoursPage
  ],
  declarations: [
    SelectIntervalHoursPage,
    FilialEditPage
  ]
})
export class FilialEditPageModule { }
