import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { OrderGraphComponent } from './order-graph/order-graph.component';
import { PanelComponentsModule } from '../../components/panel-components.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, OrderGraphComponent]
})
export class HomePageModule {}
