import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { of, combineLatest, Subscription, timer } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Filial, FilialSubType, RESTAURANT_SUBTYPES, FilialType } from '../../../../models/filial';
import { NavController, MenuController, ModalController, AlertController, ToastController } from '@ionic/angular';
import { SharedService } from '../../../services/shared.service';
import { ProductService } from '../../../services/product.service';
import { PlacesService } from '../../../services/places.service';
import { SystemService } from '../../../services/system.service';
import { Location } from '../../../../models/utils/location';
import { User } from '../../../../models/user';
import { Company } from '../../../../models/company';
import { getDistanceBetweenPoints } from '../../../util/util';
import { Product } from '../../../../models/product';
import { LogOriginTypes, Log } from '../../../../models/log';
import { elementIsInsideArray } from '../../../../modules/firestore/utils';
import { LoginAppPage } from '../login-app/login-app.page';
import { ActivatedRoute } from '@angular/router';
import { firestore } from "firebase"
import { CustomerAddressPage } from '../customer-address/customer-address.page';
import { AddressEditPage } from '../address-edit/address-edit.page';

@Component({
  selector: 'app-filial-search',
  templateUrl: './filial-search.page.html',
  styleUrls: ['./filial-search.page.scss'],
})
export class FilialSearchPage implements OnDestroy, OnInit {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa.
   */
  searchString: string = "";

  /**
   * define se a navbar tem searchbar ou nao
   */
  searchMode: boolean = false;

  /**
   * Observable que contém a lista de filiais
   */
  // filials$: Observable<Filial[]>;

  filials: Filial[];

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Se não possui filiais.
   * Se após baixar não vier filiais aí sim podemos garantir que não existem filiais atualmente.
   * Usada para mostrar mensagem "Não existem filiais próximas a você".
   */
  existsFilials: boolean = true;

  filial_subtypes: FilialSubType[] = [];

  //Array dos NOMES dos tipos de cada restaurante
  typesSelecteds: string[] = [];

  timerSubscription: Subscription;

  get locationUser(): Location {
    return this.shared.locationUser
  }

  error: {
    code: number,
    title: string,
    message: string
  };

  userSubscription: Subscription

  type;

  constructor(
    private nav: NavController,
    private menuCtrl: MenuController,
    public shared: SharedService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public productProvider: ProductService,
    public change: ChangeDetectorRef,
    public placesProvider: PlacesService,
    public route: ActivatedRoute,
    public system: SystemService) {

    console.log("constructor");
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = undefined
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined
    }
  }

  //Executar quando a página for autorizada a entrar
  ngOnInit() {
    console.log("onInit()")
    this.menuCtrl.enable(false);
    this.loading = true;
    this.system.setScreenName("FilialSearchPage")
    this.route.paramMap.subscribe(async (params) => {
      this.type = params.get('type');
      this.change.detectChanges();
      this.loadFilials(this.type);
    })
  }

  private loadFilials(type?: FilialType) {
    console.log("load filials");
    //Definir padrão de busca de filiais como restaurantes
    if (!type) type = FilialType.RESTAURANT;
    console.log('carregar filiais do tipo: ', type)
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = undefined
    }
    this.loading = true
    this.existsFilials = true;
    this.error = undefined;

    this.userSubscription = this.shared.user$.subscribe((user: User) => {
      console.log('Usuário: ', user);
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


      obs$.pipe(flatMap(() => {
        return Filial.list([{
          name: 'active',
          operator: '==',
          value: true
        }, {
          name: 'type',
          operator: '==',
          value: type
        }])
      }))
        .pipe(flatMap((filials: Filial[]) => {

          console.log('filials 1', filials)

          if (!filials || filials.length <= 0) return of([])

          return combineLatest(filials.map((filial) => Company.object(filial.company.id)))
            .pipe(map((restaurants: Company[]) => {

              console.log('restaurants', restaurants);
              for (let i = 0; i < restaurants.length; i++) {
                filials[i].company_full = restaurants[i];
              }
              return filials.filter((filial: Filial) => {
                //Filtrar apenas as filiais que possuem seus restaurantes ATIVOS
                return filial.company_full.active;
              })
            }))
        }))
        .pipe(map((filials: Filial[]) => {

          console.log('filials 2', filials)

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
          return filials.filter(filial => {
            if (filial.deliveryByDistrict) {
              let hasUserDistrict: boolean = false;
              filial.deliveryDistricts.forEach(deliveryDistrict => {
                if (deliveryDistrict.location.state_short == this.locationUser.state_short &&
                  deliveryDistrict.location.city == this.locationUser.city &&
                  deliveryDistrict.location.district == this.locationUser.district) {
                  hasUserDistrict = true;
                  return;
                }
              });
              return hasUserDistrict;
            }
            else return filial.distance <= filial.delivery.distanceMax
          });
        })).pipe(flatMap((filials: Filial[]) => {

          console.log('filials 3 ', filials)
          if (!filials || filials.length <= 0) return of([])
          return combineLatest(filials.map((filial: Filial) => this.productProvider.getBestRecomendation(filial)))
            .pipe(map((products: Product[]) => {
              for (let i = 0; i < filials.length; i++) {
                // filials[i].product_recomendated = products[i]
              }
              return filials;
            }))
        })).subscribe((filials: Filial[]) => {
          console.log('Filiais: ', filials);
          // Verificar se não existe filiais.
          if (!filials || filials.length == 0) {
            this.filials = [];
            this.existsFilials = false;
            this.loading = false;
            this.change.detectChanges();
            this.system.logEvent("filials_not_found", { name: `${this.locationUser.district}, ${this.locationUser.city}, ${this.locationUser.state}` })
            this.filial_subtypes = []
          }
          //EXIBIR FILIAIS
          else {
            this.filials = filials;
            this.existsFilials = true;
            this.system.logEvent("filials_found", { value: filials.length })

            //@TODO APARECER ESSES TIPOS APENAS O USUÁRIO ESTIVER SELECIONADO RESTAURANTES
            this.filial_subtypes = RESTAURANT_SUBTYPES
            // Filtra os tipos que possuem filiais
            this.filial_subtypes = this.filial_subtypes.filter((st: FilialSubType) => {
              return filials.some((el: Filial) => {
                let exist = false;
                el.subtypes = el.subtypes || [];
                for (let subtype of el.subtypes) {
                  if (subtype.name === st.name) exist = true
                }
                return exist;
              })
            })
            // Ordenar os que possuem mais filiais
            this.filial_subtypes.sort((a: FilialSubType, b: FilialSubType) => {
              let qtd_a: number = 0
              let qtd_b: number = 0
              filials.forEach((el: Filial) => {
                Filial.checkBusinessHours(el, this.shared.now)
                if (el.type && el.open) {
                  let exists_a = false;
                  for (let st of el.subtypes) {
                    if (st.name === a.name) exists_a = true;
                  }
                  if (exists_a) qtd_a++;

                  let exists_b = false;
                  for (let st of el.subtypes) {
                    if (st.name === b.name) exists_b = true;
                  }

                  if (exists_b) qtd_b++;
                }
              })
              return qtd_b - qtd_a
            })
            this.loading = false;
            this.change.detectChanges();
            if (this.filial_subtypes && this.filial_subtypes.length > 0) {
              while (this.filial_subtypes.length > 5) {
                this.filial_subtypes.pop()
              }
            }
          } 

          if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
            this.timerSubscription = undefined
          }

          this.checkFilialsOpen(filials)

          this.filials = filials;
          setTimeout(() => {
            this.change.detectChanges()
          }, 10)
        }, (err) => {
          console.log('Error = ', err);
          this.system.logEvent("filials_not_found")
          if (err.code == 1) {
            this.error = {
              code: 1,
              title: "Geolocalização não autorizada",
              message: "Por favor autorize o aplicativo Facilita a obtê-la ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
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
        })
      this.change.detectChanges()
    })
  }

  /**
   * Verificar de 10 em 10 segundos se a Filial está fechada (Fora do Horário de Funcionamento)
   */
  checkFilialsOpen(filials) {
    this.timerSubscription = timer(0, 10 * 1000)
      .subscribe(() => {
        let now = this.shared.now
        for (let filial of filials) {
          Filial.checkBusinessHours(filial, now)
        }
      })
  }


  async suggestRestaurant() {
    let alert = await this.alertCtrl.create({
      header: "Qual estabelecimento você gostaria de ver no Facilita?",
      inputs: [
        {
          name: "place",
          type: "text",
          placeholder: "Nome do estabelecimento",
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        }, {
          text: "Ok",
          handler: async (data) => {
            console.log("Log criado", {
              origin: LogOriginTypes.COMPANY_SUGGESTION,
              title: data.place,
              date: new Date(),
              user: this.shared.user || null
            })
            if (data.place) {
              Log.add<Log>({
                origin: LogOriginTypes.COMPANY_SUGGESTION,
                title: data.restaurant,
                date: firestore.Timestamp.fromDate(new Date()),
                user: this.shared.user || null
              }).subscribe()
            }

            let thank_you = await this.alertCtrl.create({
              header: "Obrigado",
              message: "Muito obrigado pela sugestão. Nossa equipe vai trabalhar para garantir a qualidade de nossos serviços e trazer mais estabelecimentos para melhor atendê-lo.",
              buttons: ["Ok"]
            })
            thank_you.present()
          }
        }
      ]
    })
    alert.present()
  }

  /**
   * Exibir ou não a filial de acordo com o filtro de tipo aplicado
   * Retorna true se filial possuir algum dos tipos selecionados
   * @author Guibson Martins
   */
  hasTypeSelected(filial): boolean {
    let typeFounded: boolean = false;
    if (this.typesSelecteds && this.typesSelecteds.length == 0) return true;
    if (filial.type) {
      if (elementIsInsideArray(filial.type.name, this.typesSelecteds)) {
        return typeFounded = true;
      }
    }
    return typeFounded;
  }

  async goFilialMenu(filial: Filial) {
    Filial.checkBusinessHours(filial, this.shared.now)
    if (filial.open) {
      this.nav.navigateForward(['mobile/filial-stock', {
        id: filial.id
      }])
    }
    else {
      let prompt = await this.alertCtrl.create({
        header: 'Estabelecimento fechado',
        message: "Você ainda pode visualizar as informações do estabelecimento, mas não poderá realizar um pedido.",
        buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Continuar',
            handler: () => {
              this.nav.navigateForward(['mobile/filial-stock', {
                id: filial.id
              }])
            }
          }
        ]
      });
      prompt.present();

    }

  }

  getGeolocation() {
    this.loadFilials()
  }

  async login() {
    let modal = await this.modalCtrl.create({
      component: LoginAppPage,
      componentProps: {
        page: 'CustomerPage'
      }
    })
    modal.present();
  }

  async openAddress() {
    if (this.shared.user) {
      let modal = await this.modalCtrl.create({
        component: CustomerAddressPage
      })
      modal.present();
    }
    else {
      let modal = await this.modalCtrl.create({
        component: AddressEditPage
      })
      modal.present();
      modal.onDidDismiss().then((data) => {
        console.log("Data: ", data);
        this.loadFilials();
      })
    }
  }

  async goProfile() {

    if (this.shared.user) {
      this.nav.navigateRoot(["mobile/customer-details"]);
    }
    else {
      // this.nav.navigateRoot(["mobile/login-app", {
      //   page: 'CustomerPage'
      // }]);
      let modalLogin = await this.modalCtrl.create({
        component: LoginAppPage,
        componentProps: {
          page: 'CustomerPage'
        }
      });
      modalLogin.present();
    }

  }

  /**
   * Alterna o valor de searchMode
   */
  togglesearch() {
    this.searchMode = !this.searchMode;
  }

  /**
   * Alimenta o array de tipos selecionados, 
   * adicionando ou removendo tipos escolhidos pelo usuário.
   * @author Guibson Martins
   */
  filter(str) {
    str.selected = !str.selected;
    if (str.selected) {
      //Adicionar tipo selecionado
      this.typesSelecteds.push(str.name);
    } else if (elementIsInsideArray(str.name, this.typesSelecteds)) {
      //Remover tipo selecionado
      var index = this.typesSelecteds.indexOf(str.name);
      this.typesSelecteds.splice(index, 1);
    }
  }

}