import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PromotionFilterAppPage } from '../promotion-filter-app/promotion-filter-app.page';
import { Subscription, of, combineLatest, pipe } from 'rxjs';
import { map, flatMap, catchError } from 'rxjs/operators';
import { SharedService } from '../../../services/shared.service';
import { User } from '../../../../models/user';
import { Location } from '../../../panel/components/nano-address/nano-address.component';
import { PlacesService } from '../../../services/places.service';
import { Filial } from '../../../../models/filial';
import { getDistanceBetweenPoints } from '../../../util/util';
import { SystemService } from '../../../services/system.service';
import { Company } from '../../../../models/company';

@Component({
  selector: 'app-promotion-app',
  templateUrl: './promotion-app.page.html',
  styleUrls: ['./promotion-app.page.scss'],
})
export class PromotionAppPage implements OnInit {

  filials: Filial[]

  loading: boolean = true;
  existsFilials: boolean = false;

  error: {
    code: number,
    title: string,
    message: string
  };

  userSubscription: Subscription

  get locationUser(): Location {
    return this.shared.locationUser
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public shared: SharedService,
    public placesProvider: PlacesService, public system: SystemService, public change: ChangeDetectorRef) {
      
    }

  ngOnInit() {
    this.loadPromotions();
  }

  private loadPromotions() {
    console.log("carregar promoções ");

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = undefined
    }
    this.loading = true
    this.existsFilials = true;
    this.error = undefined;

    this.userSubscription = this.shared.user$.subscribe((user: User) => {
      this.error = undefined;

      let obs$ = of(null)

      if (user && user.location) {
        this.shared.locationUser = user.location
      } else if (!this.locationUser) {
        obs$ = this.placesProvider.getCurrentLocation()
          .pipe(flatMap((location: Location) => {

            this.shared.locationUser = location;
            if (user && !user.location) {
              return this.placesProvider.saveLocationHistory(location)
            }
            return of(null)
          }))
      }


      //Obter filiais ativas
      obs$.pipe(flatMap(() => {
        return Filial.list([{
          name: 'active',
          operator: '==',
          value: true
        }])
      }))
        //Obter filiais com suas respectivas empresas (company_full)
        .pipe(flatMap((filials: Filial[]) => {
          if (!filials || filials.length <= 0) return of([])

          return combineLatest(filials.map((filial) => Company.object(filial.company.id)))
            .pipe(map((companies: Company[]) => {

              for (let i = 0; i < companies.length; i++) {
                filials[i].company_full = companies[i];
              }
              return filials.filter((filial: Filial) => {
                //Filtrar apenas as filiais que possuem seus restaurantes ATIVOS
                return filial.company_full.active;
              })
            }))
        }))
        //Filiais com a distância ao usuário
        .pipe(map((filials: Filial[]) => {
          if (!filials || filials.length <= 0) return []
          let start = {
            lat: this.locationUser.latitude,
            lng: this.locationUser.longitude
          }
          for (let i = 0; i < filials.length; i++) {
            let end = {
              lat: filials[i].location.latitude,
              lng: filials[i].location.longitude
            }
            filials[i].distance = getDistanceBetweenPoints(start, end); //distância em km do usuário à filial
          }

          //Caso precise de distância máxima para promoções
          // return filials.filter(filial => {
          //   return filial.distance <= MAX_DISTANCE
          // });


          return filials

        })).pipe(flatMap((filials: Filial[]) => {
          if (!filials || filials.length <= 0) return of([])
          return combineLatest(filials.map((filial) => {
            return Filial.promotion_stock.list(filial.id, [{ name: 'active', operator: '==', value: true }])
              .pipe(map((promotions_stock) => {
                filial.promotions_full = promotions_stock
                console.log("Filial com promotions: ", filial);
                this.change.detectChanges();
                return filial
              }))
          }))
        }))
        .subscribe((filials: Filial[]) => {
          this.loading = false;
          // Verificar se não existe filiais.
          if (!filials || filials.length <= 0) {
            this.existsFilials = false;
            this.change.detectChanges();
          }
          //EXIBIR PROMOÇÕES
          else {
            this.filials = filials;
            this.existsFilials = true;
            setTimeout(() => {
              this.change.detectChanges()
            }, 10)
          }
        }, pipe(catchError((err) => {
          this.system.logEvent("filials_not_found")
          if (err.code == 1) {
            this.error = {
              code: 1,
              title: "Geolocalização não autorizada",
              message: "Por favor autorize o aplicativo Konnect-Consumidor a obtê-la ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
            }
          }
          else if (err.code == 2) {
            this.error = {
              code: 2,
              title: "Geolocalização indisponível",
              message: "Por favor habilite seu GPS ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
            }
          }
          else if (err.code == 3) {
            this.error = {
              code: 3,
              title: "Tempo para obter geolocalização foi excedido",
              message: "Por favor verifique se seu GPS está habilitado e tente novamente, ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
            }
          }
          this.loading = false;
          this.change.detectChanges()
          return of([]);
        })));
      this.change.detectChanges()
    })
  }

  dismiss() {
    this.navCtrl.goBack();
  }


  async openFilter() {
    console.log("Abrir filtro");
    let modal = await this.modalCtrl.create({
      component: PromotionFilterAppPage
    })
    modal.present();
  }

}