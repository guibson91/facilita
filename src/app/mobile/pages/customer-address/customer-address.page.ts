import { Observable, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError } from 'rxjs/operators';
import { Location } from '../../../../models/utils/location';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { SystemService } from '../../../services/system.service';
import { NavController } from '@ionic/angular';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { SharedService } from '../../../services/shared.service';
import { PlacesService } from '../../../services/places.service';
import { getDistanceBetweenPoints } from '../../../util/util';
import { User } from '../../../../models/user';
import { AddressEditPage } from '../address-edit/address-edit.page';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.page.html',
  styleUrls: ['./customer-address.page.scss'],
})
export class CustomerAddressPage implements OnInit {

  get location(): Location {
    return this.shared.user ? this.shared.user.location : this.shared.locationUser;
  }

  constructor(
    public shared: SharedService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public system: SystemService,
    public cart: CartService,
    public placesProvider: PlacesService) {
  }

  ngOnInit() {
    this.system.setScreenName("CustomerAddressPage")
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  async getCurrentLocation() {
    let loading = await this.loadingCtrl.create({});
    loading.present();
    this.placesProvider.getCurrentLocation().pipe(first())
      .pipe(flatMap((location: Location) => {
        return this.placesProvider.saveLocationHistory(location)
      })).subscribe(() => {
        loading.dismiss();
      }, error => {
        this.system.showErrorAlert(error);
        loading.dismiss();
      });
  }

  /**
   * Tenta mudar a localização do usuário atual.
   * Caso ele possua um carrinho e a localização nova não for atendida pela filial do carrinho, avisar o usuário.
   * @param location Nova localização
   */
  async changeLocation(location: Location) {

    /**
     * Verifica se o novo endereço é atendido pela filial do carrinho atual.
     */
    if (this.cart.filial) {
      /**
       * Se a filial atender por bairros, fazer a verificação por bairros
       */
      if (this.cart.filial.deliveryByDistrict) {
        let hasUserDistrict: boolean = false;

        this.cart.filial.deliveryDistricts.forEach(deliveryDistrict => {
          if (deliveryDistrict.location.state == location.state &&
            deliveryDistrict.location.city == location.city &&
            deliveryDistrict.location.district == location.district) {
            hasUserDistrict = true;
            return;
          }
        });

        if (!hasUserDistrict) {
          this.alertDoesNotDelivery(this.cart.filial.name)
          return
        }
        /**
         * Se ela não atender por bairros, ela atende por km. Verificar a distancia e se a filial atende pro km
         */
      } else {
        const start = {
          lat: location.latitude,
          lng: location.longitude
        }
        const end = {
          lat: this.cart.filial.location.latitude,
          lng: this.cart.filial.location.longitude
        }
        const distance = getDistanceBetweenPoints(start, end);

        if (distance > this.cart.filial.delivery.distanceMax) {
          this.alertDoesNotDelivery(this.cart.filial.name)
          return
        }
      }

    }

    this.alertConfirmChangeLocation(location)
  }

  /**
   * Foi verificado e não existiu nenhum impeditivo para o usuário mudar para a nova localização
   * Alerta apenas para confirmar se é isso que o usuário realmente quer.
   * @param location Nova localização
   */
  async alertConfirmChangeLocation(location: Location) {
    (await this.alertCtrl.create({
      header: 'Alterar destino',
      subHeader: `Você deseja alterar sua localização atual para ${location.street}`,
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.placesProvider.changeLocationCurrent(location).subscribe(() => {
            this.dismiss()
          }, err => this.system.showErrorAlert(err))
        }
      }]
    })).present()

  }

  /**
   * Exibe um alerta informando o usuário que esse novo endereço não recebe delivery do carrinho atual.
   * @param name Nome da filial
   */
  async alertDoesNotDelivery(name: string) {
    (await this.alertCtrl.create({
      header: 'Ops!',
      subHeader: `${name} não faz entrega para esta região`,
      buttons: ['OK']
    })).present()
  }

  async removeLocationHistory(location: Location) {

    let alert = await this.alertCtrl.create({
      header: `Você deseja excluir ${location.street} do seu histórico ?`,
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
        handler: async () => {
          let loading = await this.loadingCtrl.create({
          })
          loading.present()

          let index = this.shared.user.locations_history.indexOf(location)
          if (index > -1) {
            this.shared.user.locations_history.splice(index, 1)
          }
          User.update(this.shared.user.id, {
            locations_history: this.shared.user.locations_history
          }).subscribe(() => {
            loading.dismiss()
          }, err => console.error(err))
        }
      }]
    })
    alert.present()
  }

  async newAddress() {
    console.log("Clique newAddress()");
    let modal = await this.modalCtrl.create({
      component: AddressEditPage
    });
    modal.present();
  }

  async editAddress() {
    let modal = await this.modalCtrl.create({
      component: AddressEditPage,
      componentProps: {
        location: this.location
      }
    });
    modal.present();
  }

}