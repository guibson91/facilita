import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule, IonApp } from '@ionic/angular';

import { LoginAppPage } from './login-app.page';
import { GlobalComponentsModule } from '../../../components/global-components.module';
import { PipesModule } from '../../../pipes/pipes.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginAppPage
//   }
// ];

@NgModule({
  imports: [
    //Custom Modules
    GlobalComponentsModule,
    PipesModule,

    //Default Modules
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  entryComponents: [LoginAppPage],
  declarations: [LoginAppPage],
  providers: [IonApp]
})
export class LoginAppPageModule {}
