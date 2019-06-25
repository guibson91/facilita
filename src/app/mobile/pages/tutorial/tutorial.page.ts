import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, MenuController, LoadingController, IonApp } from '@ionic/angular';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private shared: SharedService,
    public system: SystemService,
    private app: IonApp) { }

  ionViewDidEnter(): void {
    this.system.setScreenName("TutorialPage")
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
  }

  slideChanged() {
    this.slides.getActiveIndex();
  }

  async closeTutorial() {
    let loading = await this.loadingCtrl.create()
    loading.present()
    // this.app.getRootNav().setRoot(this.shared.rootPage).then(() => {
    //   loading.dismiss()
    //   this.storage.set('hideTutorial', true).then(() => {
    //   })
    // })
  }

}
