import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion-filter-app',
  templateUrl: './promotion-filter-app.page.html',
  styleUrls: ['./promotion-filter-app.page.scss'],
})
export class PromotionFilterAppPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
