import { Component, OnInit } from '@angular/core'
import { first, flatMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { MenuController } from '@ionic/angular';
import { SharedService } from '../../../services/shared.service';
import { Company } from '../../../../models/company';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  company: Company;

  get isTEAM(): boolean {
    return this.shared.isTeam
  }
  
  constructor(private menuCtrl: MenuController,
    private shared: SharedService) { }

  /**
  * Inicializando estruturas após entrar na página.
  */
  ngOnInit(): void {
    this.menuCtrl.enable(true)

    this.shared.company$
      .pipe(first())
      .subscribe((c: any) => {
        this.company = c
      })
  }

}
