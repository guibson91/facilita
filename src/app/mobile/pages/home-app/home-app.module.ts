import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAppPage } from './home-app.page';
import { LoginAppPageModule } from '../login-app/login-app.module';
import { MobileComponentsModule } from '../../components/mobile-components.module';

const routes: Routes = [
  {
    path: '',
    component: HomeAppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAppPageModule,
    MobileComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeAppPage]
})
export class HomeAppPageModule {}
