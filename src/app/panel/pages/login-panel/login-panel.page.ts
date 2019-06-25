import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.page.html',
  styleUrls: ['./login-panel.page.scss'],
})
export class LoginPanelPage implements OnInit {

  /**
   * Se está carregando algo ou não
   */
  loading: boolean = false;

  /**
   * Informações da conta a ser logada.
   */
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(private authentication: AuthenticationService,
    private navCtrl: NavController,
    private shared: SharedService,
    private ref: ChangeDetectorRef,
    public menuCtrl: MenuController,
    public system: SystemService) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

  /**
   * Realizar o login do usuário.
   */
  doLogin(): void {
    this.loading = true
    this.ref.detectChanges()
    this.authentication.login(this.account.email, this.account.password)
      .subscribe(() => {
        this.navCtrl.navigateRoot(this.shared.rootPage);
      }, (error: Error) => {
        this.system.showErrorAlert(error);
        this.loading = false;
        this.ref.detectChanges()
      });
  }
}
