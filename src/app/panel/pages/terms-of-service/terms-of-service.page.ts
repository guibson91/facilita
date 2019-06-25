import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { NavController } from '@ionic/angular';
import { User } from '../../../../models/user';
import { switchMap, tap, first } from 'rxjs/operators';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.page.html',
  styleUrls: ['./terms-of-service.page.scss'],
})
export class TermsOfServicePage {

  loading: boolean

  acceptedterms: boolean = false;

  constructor(private shared: SharedService,
    private navCtrl: NavController,
    private ref: ChangeDetectorRef,
    private system: SystemService) { }

  acceptTermsOfUse() {
    this.loading = true;
    this.ref.detectChanges();
    this.shared.user$
      .pipe(first())
      .pipe(switchMap((user: User) => {
        user.accept_terms_use = true
        return User.update(user.id, {
          accept_terms_use: true
        })
      }))
      .subscribe(() => {
        this.navCtrl.navigateRoot(this.shared.rootPage);
        this.loading = false;
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err)
        this.loading = false;
        this.ref.detectChanges()
      })
  }

}
