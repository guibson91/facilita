import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlacesService } from '../../../services/places.service';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { Platform, LoadingController, AlertController, ModalController } from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STATES } from '../../../util/util';
import { Log, LogOriginTypes } from '../../../../models/log';
import { Location } from '../../../../models/utils/location';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.page.html',
  styleUrls: ['./address-edit.page.scss'],
})
export class AddressEditPage implements OnInit {

  showForm: boolean;
  toUpdateDB: boolean;
  @ViewChild('suggestionscity') suggestionCities;

  slideOpts = {
    effect: 'flip'
  };

  autocompleteService: google.maps.places.AutocompleteService = new google.maps.places.AutocompleteService()
  placesService: google.maps.places.PlacesService


  form: FormGroup;
  enableStreet: boolean = false;
  enableNumber: boolean = false;

  states: { value: string, title: string }[] = STATES
  search_city: string;
  search_district: string;
  search_street: string;
  search_address: string;

  nextFromCep: boolean

  city_not_found: boolean;
  district_not_found: boolean;
  street_not_found: boolean;
  address_not_found: boolean

  search_city_error: boolean;
  search_district_error: boolean;
  search_street_error: boolean;
  search_address_error: boolean

  address_suggestions: any[]
  city_suggestions: {
    name: string,
    latitude?: number,
    longitude?: number
  }[]

  district_suggestions: {
    name: string,
    latitude?: number,
    longitude?: number
  }[]

  street_suggestions: {
    name: string,
    latitude: number,
    longitude: number
  }[]

  error: {
    code: number,
    title: string,
    message: string
  };

  @Input()
  location_user: Location

  /**
   * Auxiliares para evitar requisições anteriores não sobrescrevam requisições posteriores
   */
  search_index: number = 1
  search_received_index: number = 0
  search_loading: boolean = false

  new_address: boolean

  @Input()
  location: Location

  _activeIndex: number = 0

  get activeIndex() {
    return this._activeIndex
  }

  set activeIndex(number: number) {
    this._activeIndex = number
    this.change.detectChanges()
  }
  constructor(
    public platform: Platform,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    private system: SystemService,
    private shared: SharedService,
    public loadingCtrl: LoadingController,
    private placesProvider: PlacesService,
    private change: ChangeDetectorRef,
    public alertCtrl: AlertController) {

  }

  ngOnInit(): void {
    this.initForm()
    this.system.setScreenName("AddressEditPage")
    // Service usado para fazer as requisições do Places Service
    this.placesService = new google.maps.places.PlacesService(this.suggestionCities.nativeElement)
    // Editar endereço
    this.new_address = true
    if (this.location) {
      this.new_address = false
      this.form.patchValue({
        location: location
      });
      this.goToLastSlide()
    }
  }

  initForm() {
    this.form = new FormGroup({
      location: new FormGroup({
        latitude: new FormControl(''),
        longitude: new FormControl(''),
        country: new FormControl(''),
        country_short: new FormControl(''),
        street: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required),
        complement: new FormControl(''),
        cep: new FormControl(''),
        district: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state_short: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        landmark: new FormControl('')
      }),
    })
  }

  goToLastSlide() {
    this.activeIndex = 5;
  }

  /**
   * Seleciona o estado de uma lista predeterminada
   * @param state Estado selecionado
   */
  async selectState(state: { value: string, title: string }) {
    if (this.activeIndex === 1) {
      this.form.controls.location.patchValue({
        state: state.title,
        state_short: state.value
      })
      this.next()
    }
  }

  /**
   * Buscar Cep
   */
  searchAddress(event): void {
    this.search_index++;
    let index: number = this.search_index;
    this.search_loading = true
    this.address_not_found = false
    this.search_address_error = false

    const input: string = this.search_address && this.search_address.length > 4 ?
      `Brasil, ${this.search_address}` :
      undefined;

    this.getResults(input)
      .pipe(map((results) => {
        return results.map((result) => {
          let address = {
            text: result.formatted_address,
            address_components: result.address_components,
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng()
          }
          if (!address) return ""
          return address
        }).filter((result: any) => { return result.text.length > 0 })
      }))
      .subscribe((r) => {
        if ((!r || r.length <= 0) && (this.search_address && this.search_address.length > 2)) {
          this.address_not_found = true
          this.handlerNotFoundAddress();
        }
        if (index > this.search_received_index) {
          this.address_suggestions = r;
          this.search_received_index = index
        }
        this.search_loading = false
        this.change.detectChanges()
      }, err => {
        console.error(err)
        this.address_suggestions = []
        this.search_loading = false
        this.search_address_error = true
        this.change.detectChanges()
      })
  }

  public async handlerNotFoundAddress() {
    const confirm = await this.alertCtrl.create({
      header: 'CEP não encontrado',
      message: `Você tem certeza que o CEP <b>${this.search_address}</b> está correto?`,
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: async () => {
            const alert = await this.alertCtrl.create({
              header: 'Não se preocupe!',
              subHeader: 'Vamos localizar seu endereço preenchendo-o manualmente',
              buttons: [{
                text: 'OK',
                handler: () => {
                  this.next();
                }
              }]
            });
            alert.present();
          }
        }
      ]
    });
    confirm.present();
  }

  selectAddress(address: any) {
    let a = address.address_components
    a = a.slice(0).reverse();
    let index = 0
    for (let components of a) {
      if (components.types.indexOf("postal_code") >= 0) {
        this.form.controls.location.patchValue({
          cep: components.long_name
        })
      } else if (components.types.indexOf("country") >= 0) {
        this.form.controls.location.patchValue({
          country: components.long_name,
          country_short: components.short_name
        })
        index++
      } else if (components.types.indexOf("administrative_area_level_1") >= 0) {
        this.form.controls.location.patchValue({
          state: components.long_name,
          state_short: components.short_name
        })
        index++
      } else if (components.types.indexOf("administrative_area_level_2") >= 0) {
        this.form.controls.location.patchValue({
          city: components.long_name
        })
        index++
      } else if (components.types.indexOf("sublocality_level_1") >= 0) {
        this.form.controls.location.patchValue({
          district: components.long_name
        })
        index++
      } else if (components.types.indexOf("route") >= 0) {
        this.form.controls.location.patchValue({
          street: components.long_name
        })
        index++
      }
    }

    this.form.controls.location.patchValue({
      latitude: address.latitude,
      longitude: address.longitude,
    })
    // this.form.controls.location.patchValue({
    //   city: city,
    // })
    this.next(index)
  }

  async notFoundAddress(input: string) {
    let loading = await this.loadingCtrl.create({
      message: "Carregando"
    })
    loading.present()
    Log.add<Log>({
      origin: LogOriginTypes.ADDRESS_NOT_FOUND,
      description: `Brasil`,
      user: this.shared.user ? this.shared.user : null
    }).subscribe(async () => {
      let alert = await this.alertCtrl.create({
        header: "Obrigado",
        message: "A nossa equipe foi informada que sua cidade não foi encontrada. Por favor volte mais tarde.",
        buttons: ["Ok"]
      })
      loading.dismiss()
      alert.present()
    }, () => {
      loading.dismiss()
      this.system.showErrorAlert(Error("Falha de comunicação"))
    })
  }
  /**
   * Buscar cidade
   */
  searchCity(): void {
    this.search_index++;
    let index: number = this.search_index;
    this.search_loading = true
    this.city_not_found = false
    this.search_city_error = false

    const input: string = this.search_city && this.search_city.length > 2 ?
      `Brasil, ${this.form.value.location.state}, ${this.search_city}` :
      undefined;

    this.getResults(input, "(cities)")
      .pipe(map((results) => {
        return results.map((result) => {
          let city: string
          for (let address_component of result.address_components) {
            if (address_component.types.indexOf("administrative_area_level_2") >= 0) {
              city = address_component.long_name
              break;
            }
          }
          if (!city) return undefined
          return {
            name: city,
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng()
          }
        }).filter((result) => result)
      }))
      .subscribe((r) => {
        if ((!r || r.length <= 0) && (this.search_city && this.search_city.length > 2)) {
          this.city_not_found = true
        }
        if (index > this.search_received_index) {
          this.city_suggestions = r;
          this.search_received_index = index
        }
        this.search_loading = false
        this.change.detectChanges()
      }, () => {
        this.city_suggestions = []
        this.search_loading = false
        this.search_city_error = true
      })
  }

  selectCity(city: {
    name: string,
    latitude: number,
    longitude: number
  }) {
    this.form.controls.location.patchValue({
      city: city.name,
      latitude: city.latitude,
      longitude: city.longitude
    })
    this.next()
  }

  public async notFoundCity() {
    let loading = await this.loadingCtrl.create({
      message: "Carregando"
    })
    loading.present()
    Log.add<Log>({
      origin: LogOriginTypes.CITY_NOT_FOUND,
      description: `Brasil, ${this.form.value.location.state}, ${this.search_city}`,
      user: this.shared.user ? this.shared.user : null
    }).subscribe(async () => {
      let alert = await this.alertCtrl.create({
        header: "Obrigado",
        message: "A nossa equipe foi informada que sua cidade não foi encontrada. Por favor volte mais tarde.",
        buttons: ["Ok"]
      })
      loading.dismiss()
      alert.present()
    }, () => {
      loading.dismiss()
      this.system.showErrorAlert(Error("Falha de comunicação"))
    })
  }

  searchDistrict() {
    if (this.form.value.location.city === "Morada Nova") {
      this.district_suggestions = CUSTOM_DISTRICTS.MORADA_NOVA
        .map((district) => { return { name: district } })
        .filter((district) => {
          return district.name.indexOf(this.search_district) >= 0;
        });
      this.change.detectChanges()
      return;
    }
    this.search_index++;
    let index: number = this.search_index;
    this.search_loading = true
    this.district_not_found = false
    this.search_district_error = false

    const input: string = this.search_district && this.search_district.length > 2 ?
      `Brasil, ${this.form.value.location.state}, ${this.form.value.location.city}, ${this.search_district}` :
      undefined;
    this.getResults(input, "(regions)")
      .pipe(map((results) => {
        return results.map((result) => {
          let district: string
          for (let address_component of result.address_components) {
            if (address_component.types.indexOf("sublocality") >= 0) {
              district = address_component.long_name
              break;
            }
          }
          if (!district) return undefined
          return {
            name: district,
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng()
          }
        }).filter((result) => result)
      }))
      .subscribe((r) => {
        if ((!r || r.length <= 0) && (this.search_district && this.search_district.length > 2)) {
          this.district_not_found = true
        }
        if (index > this.search_received_index) {
          this.district_suggestions = r;
          this.search_received_index = index
        }
        this.search_loading = false
        this.change.detectChanges()
      }, () => {
        this.district_suggestions = []
        this.search_loading = false
        this.search_district_error = true
      })
  }

  selectDistrict(district: {
    name: string,
    latitude: number,
    longitude: number
  }) {
    if (district.latitude && district.longitude) {
      this.form.controls.location.patchValue({
        district: district.name,
        latitude: district.latitude,
        longitude: district.longitude
      })
    } else {
      this.form.controls.location.patchValue({
        district: district.name,
      })
    }
    this.next()
  }

  async nextSecondSlide() {
    const confirm = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Você não preencheu seu CEP! Tem certeza que deseja avançar mesmo assim?',
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.next();
          }
        }
      ]
    });
    confirm.present();
  }

  async notFoundDistrict() {
    let loading = await this.loadingCtrl.create({
      message: "Carregando"
    })
    loading.present()
    Log.add<Log>({
      origin: LogOriginTypes.DISTRICT_NOT_FOUND,
      description: `Brasil, ${this.form.value.location.state}, ${this.form.value.location.city}, ${this.search_district}`,
      user: this.shared.user ? this.shared.user : null
    }).subscribe(async () => {
      let alert = await this.alertCtrl.create({
        header: "Obrigado",
        message: "A nossa equipe foi informada que seu bairro não foi encontrado. Por favor volte mais tarde.",
        buttons: ["Ok"]
      })
      loading.dismiss()
      alert.present()
    }, () => {
      loading.dismiss()
      this.system.showErrorAlert(Error("Falha de comunicação"))
    })
  }
  searchStreet(event) {
    this.search_index++;
    let index: number = this.search_index;
    this.search_loading = true
    this.street_not_found = false
    this.search_street_error = false

    const input: string = this.search_street && this.search_street.length > 2 ?
      `Brasil, ${this.form.value.location.state}, ${this.form.value.location.city}, ${this.form.value.location.district}, ${this.search_street}` :
      undefined;

    this.getResults(input, "address")
      .pipe(map((results) => {
        return results.map((result) => {
          let street: string
          for (let address_component of result.address_components) {
            if (address_component.types.indexOf("route") >= 0 || address_component.types.indexOf("street_address") >= 0) {
              street = address_component.long_name
              break;
            }
          }
          if (!street) return undefined
          return {
            name: street,
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng()
          }
        }).filter((result) => result)
      }))
      .subscribe((r) => {
        if ((!r || r.length <= 0) && (this.search_street && this.search_street.length > 2)) {
          this.street_not_found = true
        }
        if (index > this.search_received_index) {
          this.street_suggestions = r;
          this.search_received_index = index
        }
        this.search_loading = false
        this.change.detectChanges()
      }, () => {
        this.street_suggestions = []
        this.search_loading = false
        this.search_street_error = true
      })
  }

  selectStreet(street: {
    name: string,
    latitude?: number,
    longitude?: number
  }) {
    if (street.latitude && street.longitude) {
      this.form.controls.location.patchValue({
        street: street.name,
        latitude: street.latitude,
        longitude: street.longitude
      })
      this.system.logEvent("street_found")
    } else {
      this.system.logEvent("street_not_found")
      this.form.controls.location.patchValue({
        street: street.name
      })
    }
    this.next()
  }


  /**
   * tipos da variavel type
   * geocode:
   *  instrui o serviço Place Autocomplete a retornar apenas resultados de geocodificação em vez de resultados de empresas. 
   * Geralmente, essa solicitação é usada para a desambiguação de resultados em que a localização especificada pode ser indeterminada.
   * address:
   * Instrui o serviço Place Autocomplete a retornar apenas resultados de geocodificação com um endereço preciso. Geralmente, essa solicitação é usada quando se sabe que o usuário procurará um endereço totalmente especificado.
   * establishment:
   * Instrui o serviço Place Autocomplete a retornar apenas resultados de empresas.
   * (regions):
   * A coleção de tipos (regions) instrui o serviço Places a retornar qualquer resultado que corresponda aos seguintes tipos:
   * locality
   * sublocality
   * postal_code
   * country
   * administrative_area_level_1
   * administrative_area_level_2
   * (cities):
   * A coleção de tipos (cities) instrui o serviço Places a retornar resultados que correspondam a locality ou administrative_area_level_3.
   */

  getResults(input: string, type?: "geocode" | "address" | "establishment" | "(regions)" | "(cities)"): Observable<google.maps.places.PlaceResult[]> {
    return Observable.create((observer) => {
      if (!input || input.length < 3) {
        observer.next([])
        observer.complete()
        return;
      }
      // new google.maps.places.PlacesService(this.suggestionCities.nativeElement).textSearch({
      //   query: input,
      //   type: "(cities)"
      // }, (results, status, pagination) => {
      //   console.log("Resultados", results)
      // })
      this.autocompleteService.getPlacePredictions({
        input: input,
        types: (type ? [type] : undefined)
      }, (result: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
        if (this.errorPlacesStatus(status)) {
          observer.error(status)
          return
        }
        observer.next(result || []);
        observer.complete()
      })
    }).pipe(switchMap((r: google.maps.places.AutocompletePrediction[]) => {
      if (!r || r.length <= 0) return of([])


      return combineLatest(
        r.map((e: google.maps.places.AutocompletePrediction) => {
          return Observable.create((observer) => {
            this.placesService.getDetails({
              placeId: e.place_id
            }, (result, status) => {
              if (this.errorPlacesStatus(status)) {
                observer.error(status)
                return
              }
              observer.next(result)
              observer.complete()
            })
          })
        })
      )
    }))
  }

  /**
   * Verifica se o status retornado pelo google maps é de erro ou não
   * @param status Status
   * @returns true se existe erro. e falso se não existe erros
   */
  errorPlacesStatus(status: google.maps.places.PlacesServiceStatus): boolean {
    switch (status) {
      case google.maps.places.PlacesServiceStatus.OK: //	The response contains a valid result.
      case google.maps.places.PlacesServiceStatus.ZERO_RESULTS: //	No result was found for this request.
        // Tudo certo na requisição
        return false;
      case google.maps.places.PlacesServiceStatus.INVALID_REQUEST://	This request was invalid.
      // case google.maps.places.PlacesServiceStatus.NOT_FOUND://	The place referenced was not found.
      case google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT: //	The application has gone over its request quota.
      case google.maps.places.PlacesServiceStatus.REQUEST_DENIED: //	The application is not allowed to use the PlacesService.
      case google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR: //	The PlacesService request could not be processed due to a server error.The request may succeed if you try again.
      default:
        return true
    }
  }

  next(index?: number) {
    this.search_city = this.search_district = this.search_street = ""
    this.street_suggestions = this.city_suggestions = this.district_suggestions = []
    this.search_street_error = this.search_district_error = this.search_city_error = false
    this.city_not_found = this.street_not_found = this.district_not_found = false



    if (index !== undefined) {
      this.activeIndex = index
      this.nextFromCep = true
    } else {
      this.activeIndex = this.activeIndex + 1
      this.nextFromCep = false
    }

    if (this.activeIndex === 3) {
      if (this.form.value.location.city === "Morada Nova") {
        this.district_suggestions = CUSTOM_DISTRICTS.MORADA_NOVA.map((district) => { return { name: district } });

        this.change.detectChanges()
      }
    }
  }

  prev() {
    this.search_city = this.search_district = this.search_street = ""
    this.street_suggestions = this.city_suggestions = this.district_suggestions = []
    this.search_street_error = this.search_district_error = this.search_city_error = false
    this.city_not_found = this.street_not_found = this.district_not_found = false

    if (this.nextFromCep) {
      this.activeIndex = 0
    } else {
      this.activeIndex = this.activeIndex - 1
    }
  }

  async help() {
    const alert = await this.alertCtrl.create({
      header: 'Ajuda',
      message: 'Preencha os campos com seu endereço. Caso não encontre seu estado, cidade ou bairro nos formulários por favor entre em contato com o suporte.',
      buttons: [{ role: 'cancel', text: 'ok' }]
    })
    alert.present()
  }

  /**
   * Salvar alterações e redirecionar para página anterior
   */
  async register() {
    let locationObject: Location = {};
    locationObject = this.form.value.location;
    locationObject.isGps = false;

    if (!locationObject.street) {
      let alert = await this.alertCtrl.create({
        header: "Endereço inválido",
        message: "É obrigatório preencher a rua",
        buttons: ["Ok"]
      })
      alert.present()
      return;
    }

    if (!locationObject.number) {
      let alert = await this.alertCtrl.create({
        header: "Endereço inválido",
        message: "É obrigatório preencher o número",
        buttons: ["Ok"]
      })
      alert.present()
      return;
    }

    if (!locationObject.landmark) {
      let alert = await this.alertCtrl.create({
        header: "Endereço inválido",
        message: "É obrigatório preencher o ponto de referência",
        buttons: ["Ok"]
      })
      alert.present()
      return;
    }
    this.system.logEvent("register_location")
    if (!this.shared.user) {
      this.shared.locationUser = locationObject;
      this.modalCtrl.dismiss()
      return;
    }
    let loading = await this.loadingCtrl.create({});
    loading.present();
    if (this.new_address) {
      this.placesProvider.saveLocationHistory(locationObject).subscribe(() => {
        loading.dismiss();
        this.modalCtrl.dismiss();
      }, error => {
        loading.dismiss();
        this.system.showErrorAlert(error);
      });
    } else {
      this.placesProvider.editCurrentLocation(locationObject).subscribe(() => {
        loading.dismiss();
        this.modalCtrl.dismiss();
      }, error => {
        loading.dismiss();
        this.system.showErrorAlert(error);
      });
    }
  }

  async dismiss() {
    if (this.new_address) {
      if (this.activeIndex === 0) {
        this.modalCtrl.dismiss();
      } else {
        this.prev()
      }
    } else {
      this.modalCtrl.dismiss();
    }
  }

  get isBeginning() {
    return this.activeIndex === 0
  }

  get isEnd() {
    return this.activeIndex === 5
  }
}

export const CUSTOM_DISTRICTS: { [key: string]: string[] } = {
  MORADA_NOVA: [
    "2 de Agosto",
    "Alto Tiradentes",
    "Açude Velho",
    "Centro",
    "Dnocs",
    "Fátima",
    "Girilândia",
    "Gran Ville",
    "Mutirão",
    "Nova Morada",
    "Parque de Exposição",
    "Populares",
    "Prourb",
    "São José",
    "São Francisco",
    "Setor K",
    "Vazantes",
    "Várzea",
  ]
}