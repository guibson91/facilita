import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NanoNavbarComponent } from "./nano-navbar/nano-navbar.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { NanoButtonsComponent } from "./nano-buttons/nano-buttons.component";
import { NanoErrorComponent } from "./nano-error/nano-error.component";
import { CardFilialOpenComponent } from "./card-filial-open/card-filial-open.component";
import { GlobalComponentsModule } from "../../components/global-components.module";
import { CardHourOpenComponent } from "./card-hour-open/card-hour-open.component";
import { NanoUploadimageComponent } from "./nano-uploadimage/nano-uploadimage.component";
import { NanoAutocompleteComponent } from "./nano-autocomplete/nano-autocomplete.component";
import { NanoAddressComponent } from "./nano-address/nano-address.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GlobalComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NanoNavbarComponent,
    SideMenuComponent,
    NanoButtonsComponent,
    NanoErrorComponent,
    CardFilialOpenComponent,
    CardHourOpenComponent,
    NanoUploadimageComponent,
    NanoAutocompleteComponent,
    NanoAddressComponent,
  ],
  exports: [
    NanoNavbarComponent,
    SideMenuComponent,
    NanoButtonsComponent,
    NanoErrorComponent,
    CardFilialOpenComponent,
    CardHourOpenComponent,
    NanoUploadimageComponent,
    NanoAutocompleteComponent,
    NanoAddressComponent,
  ],
})
export class PanelComponentsModule {}
