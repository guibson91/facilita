import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Filial, FILIAL_TYPES, FilialType, CARDS, CARDS_FOOD, CardType, CardFoodType, IntervalHours, RESTAURANT_SUBTYPES, FilialSubType, FilialTypeOption } from '../../../../../models/filial';
import { PaymentMethod } from '../../../../../models/order';
import { NavController, MenuController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../../services/authentication.service';
import { SharedService } from '../../../../services/shared.service';
import { Money } from '../../../../util/money';
import { SystemService } from '../../../../services/system.service';
import { PlacesService } from '../../../../services/places.service';
import { setLongitudeLatitude, elementIsInsideArray } from '../../../../util/util';
import { Location } from '../../../../../models/utils/location';
import { Observable, of, combineLatest } from 'rxjs';
import { flatMap, map, tap, first, switchMap } from 'rxjs/operators';
import { CascadeRelationship } from '../../../../../modules/firestore/collection';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../../../../../models/company';
import { SelectIntervalHoursPage } from './select-interval-hours/select-interval-hours.page';
import { firestore } from "firebase"
import "firebase/firestore";
import { DEFAULT_FACILITA_FEE } from '../../../../util/global';

@Component({
  selector: 'app-filial-edit',
  templateUrl: './filial-edit.page.html',
  styleUrls: ['./filial-edit.page.scss'],
})
export class FilialEditPage implements OnInit {

	/**
	 * Formulário para criação de uma nova filial
	 */
  form: FormGroup;

	/**
	 * Dados do produto a ser editado
	 */
  filial: Filial; // undefined se for página de cadastro

	/**
	 * Carregando as informações da filial
	 */
  loading: boolean = true;

  // districtsEnabled: {
  // 	value: string,
  // 	title: string,
  // 	state: string,
  // 	city: string
  // }[] = [];

  FilialType: typeof FilialType = FilialType
  filial_types: FilialTypeOption[] = FILIAL_TYPES

  index_current_subtypes: boolean[] = []
  restaurant_subtypes: (FilialSubType & { selected?: boolean })[] = JSON.parse(JSON.stringify(RESTAURANT_SUBTYPES))

  cardsFlag: any[] = CARDS;
  cardsFoodFlag: any[] = CARDS_FOOD;


  typesPayment: any = [
    {
      value: PaymentMethod.credit_card,
      text: 'CRÉDITO'
    },
    {
      value: PaymentMethod.debit_card,
      text: 'DÉBITO'
    },
    {
      value: PaymentMethod.money,
      text: 'DINHEIRO'
    },
    {
      value: PaymentMethod.food_stamps,
      text: 'VALE-ALIMENTAÇÃO'
    }
  ]

  //Devem ser salvo na filial
  paymentMethods: PaymentMethod[] = [];
  cards: CardType[] = [];
  cards_food: CardFoodType[] = [];

  company: Company;

  business_hours: {
    0: IntervalHours[] // Domingo
    1: IntervalHours[] // Segunda
    2: IntervalHours[] // Terça
    3: IntervalHours[] // Quarta
    4: IntervalHours[] // Quinta
    5: IntervalHours[] // Sexta
    6: IntervalHours[] // Sábado
  } = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    }

  deliveryDistricts?: {
    location: Location, //representa o bairro
    value: any //valor de delivery
  }[] = [];

  constructor(private navCtrl: NavController,
    private shared: SharedService,
    private menuCtrl: MenuController,
    private money: Money,
    private system: SystemService,
    private placesProvider: PlacesService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.initForm()
    this.load()
    this.menuCtrl.enable(true);
  }

  get isTEAM(): boolean {
    return this.shared.isTeam
  }

	/**
	 * Inicializar formulário
	 */
  initForm() {
    let defaultTax = DEFAULT_FACILITA_FEE;

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      deliveryByDistrict: new FormControl(false),
      image: new FormControl('', Validators.required),
      cover: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      phone1: new FormControl('', Validators.required),
      phone2: new FormControl(''),
      have_delivery: new FormControl(false),
      delivery: new FormGroup({
        fee: new FormControl(''),
        feeMin: new FormControl(''),
        feeMax: new FormControl(''),
        distanceMax: new FormControl(),
        timeMin: new FormControl(),
        timeMax: new FormControl()
      }),
      orderMin: new FormControl(''),

      fee: new FormGroup({
        to_facilita: new FormControl(defaultTax)
      }),
      location: new FormGroup({
        street: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required),
        complement: new FormControl(''),
        cep: new FormControl('', Validators.required),
        latitude: new FormControl(''),
        longitude: new FormControl(''),
        district: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
      }),
      stateSelected: new FormControl(""),
      citySelected: new FormControl(""),
      districtSelected: new FormControl("")
    });

    this.form.valueChanges.subscribe(() => {
      this.ref.detectChanges();
    })
  }

	/**
	 * Carregar restaurante e filial.
	 * Atribuir os valores ao formulário
	 */
  load() {
    this.loading = true

    let company$: Observable<Company> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (this.shared.isManager)
          return this.shared.company$
        else if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))

    let filial$: Observable<Filial> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('filial_id'))
          return Filial.object(params.get('filial_id'))
        else
          return of(null)
      }))

    combineLatest([
      company$.pipe(first()).pipe(tap((company: Company) => {
        this.company = company;
        if (!company) {
          console.error("Sem empresa")
          //this.navCtrl.setRoot(HomePage)
          return;
        }
      })),
      filial$.pipe(first()).pipe(tap((filial: Filial) => {
        this.filial = filial
        console.log("Filial", this.filial)
        //NA EDIÇÃO DE FILIAL
        if (this.filial) {
          if (this.filial.deliveryDistricts) {
            this.deliveryDistricts = this.filial.deliveryDistricts;
          }
          //Settar bandeiras de cartões na edição de filial
          if (this.filial.cards) {
            this.cards = this.filial.cards;
          }
          //Settar métodos de pagamentos na edição da filial
          if (this.filial.paymentMethods) {
            this.paymentMethods = this.filial.paymentMethods;
          }
          //Settar cartões de vales-alimentação na edição da filial
          if (this.filial.cards_food) {
            this.cards_food = this.filial.cards_food;
          }
          // Settar os horários de funcionamento
          if (this.filial.business_hours) {
            this.business_hours = this.filial.business_hours
          }
          //Settar Tipo da filial
          if (this.filial.type === FilialType.RESTAURANT && this.filial.subtypes) {
            this.restaurant_subtypes.forEach(element => {
              element.selected = false;
              for (let st of this.filial.subtypes) {
                if (element.name === st.name) {
                  element.selected = true;
                }
              }
            });
          }
          this.form.patchValue(this.filial);
        }
      }))
    ]).pipe(first()).subscribe(() => {
      this.loading = false
      this.ref.detectChanges()
    }, err => {
      this.loading = false
      this.ref.detectChanges()
      this.system.showErrorAlert(err)
    })
  }

  changeDelivery() {
    let obj = {
      deliveryByDistrict: !this.form.value.deliveryByDistrict
    }
    this.form.patchValue(obj);
  }

  async removeDistrict(deliveryDistrict) {
    let confirm = await this.alertCtrl.create({
      header: 'Remoção de bairro',
      message: `Você tem certeza que gostaria de remover o bairro ${deliveryDistrict.location.district}?`,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: () => {
            let index = this.deliveryDistricts.indexOf(deliveryDistrict);
            this.deliveryDistricts.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }


	/**
	 * Observable que cria/edita uma filial
	 */
  save(): Observable<void | string> {
    return setLongitudeLatitude(this.form).pipe(flatMap(() => {
      let filialObject: Filial = {};
      filialObject.active = true;
      filialObject = this.form.value;

      //Salvar bairros de entrega e seus respectivos valores de delivery
      if (this.form.value.deliveryByDistrict && this.deliveryDistricts) {
        //Salvar os valores de delivery de cada bairro como número no DB
        this.deliveryDistricts.forEach(delivery => {
          delivery.value = Number(String(delivery.value).replace(',', '.'));
        });
        filialObject.deliveryDistricts = this.deliveryDistricts;
      }

      console.log(filialObject)
      if (filialObject.have_delivery) {
        if (!filialObject.deliveryByDistrict) {
          if (!filialObject.delivery.feeMin) filialObject.delivery.feeMin = 0
          if (!filialObject.delivery.feeMax) filialObject.delivery.feeMax = 0
        }
        else {
          if (!filialObject.deliveryDistricts || filialObject.deliveryDistricts.length < 1) {
            throw Error("Você precisa definir pelo menos um bairro para entrega")
          }
        }
      }

      //Formas de pagamento aceitas pela filial
      if (this.paymentMethods) {
        filialObject.paymentMethods = this.paymentMethods;
      }

      //Bandeiras aceitas pela filial
      if (this.cards) {
        filialObject.cards = this.cards;
      }

      // Horários de funcionamento
      if (this.business_hours) {
        filialObject.business_hours = this.business_hours
      }

      //Bandeiras de vales-alimentação
      if (this.cards_food) {
        filialObject.cards_food = this.cards_food;
      }

      // Ajustar geopoint para ser usado em consultas
      if (filialObject.location && filialObject.location.latitude && filialObject.location.longitude) {
        filialObject.location.geopoint = new firestore.GeoPoint(filialObject.location.latitude, filialObject.location.longitude)
      }

      filialObject.subtypes = this.restaurant_subtypes.filter((subtype) => subtype.selected)

      //Editar filial existente
      if (this.filial) {
        return Filial.update(this.filial.id, filialObject)
          .pipe(tap(() => {
            this.goToFilialList()
          }))
      }
      //Adicionar nova filial
      else {
        return Filial.add(filialObject, [
          {
            relationship: Filial.company,
            id: this.company.id
          }
        ])
          .pipe(tap(() => {
            this.goToFilialList()
          }))
      }
    }))
  }

	/**
	 * Remove produto do database
	 */
  remove(): Observable<void> {
    if (!this.filial) return;
    //Verificar se a filial possui funcionários antes de remover
    return Filial.user_employees.list(this.filial.id)
      .pipe(map(objs => objs.map(obj => obj.id)))
      .pipe(tap((keys: string[]) => {
        if (keys && keys.length > 0) {
          throw Error("A filial que possui funcionários não pode ser removida")
        }
      }))
      .pipe(flatMap(() => {
        //Obter todos os ID's dos relacionamento product_stock
        return Filial.product_stock.listRelation(this.filial.id)
          .pipe(map(objs => objs.map(obj => obj.id)))
          .pipe(flatMap((ids: string[]) => {
            let relationships: CascadeRelationship[] = [];

            //Adicionar o relacionamento 11 com uma empresa
            relationships.push({
              relationship: Filial.company,
              removeId: this.filial.company.id
            });

            //Adicionar todos os relacionamentos com o menu para ser removidos bidirecionalmente
            ids.forEach(id => {
              relationships.push({
                relationship: Filial.product_stock,
                removeId: id
              })
            });
            return Filial.remove(this.filial.id, relationships);
          }))
      }))
      .pipe(tap(() => {
        this.goToFilialList()
      }))
  }

	/**
	 * Verifica se em um array de intervalos existe um intervalo dentro do outro. Se existir, une eles.
	 * @param intervals Array de intervalos
	 */
  mergeIntervals(intervals: IntervalHours[]): IntervalHours[] {
    for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
        if (intervals[i].start >= intervals[j].start && intervals[i].start <= intervals[j].end ||
          intervals[i].end <= intervals[j].end && intervals[i].end >= intervals[j].start ||
          intervals[j].start >= intervals[i].start && intervals[j].start <= intervals[i].end ||
          intervals[j].end <= intervals[i].end && intervals[j].end >= intervals[i].start) {

          if (intervals[j].start < intervals[i].start) {
            intervals[i].start = intervals[j].start
          }

          if (intervals[j].end > intervals[i].end) {
            intervals[i].end = intervals[j].end;
          }
          intervals.splice(j, 1);
          return this.mergeIntervals(intervals)
        }
      }
    }
    return intervals
  }

	/**
	 * Realiza a edição de um intervalo ou cria um novo intervalo.
	 * @param week Dia da semana
	 * @param id Id no array de intervalos se for edição de intervalo
   * @todo COMO CRIAR MODAL
	 */
  async editIntervalHours(week: number, id?: number) {
    let modal = await this.modalCtrl.create({
      component: SelectIntervalHoursPage,
      componentProps: {
        interval: id !== undefined ? this.business_hours[week][id] : undefined
      }

    })
    modal.present();
    let data: IntervalHours = (await modal.onDidDismiss()).data;

    if (data) {
      if (id !== undefined) this.business_hours[week].splice(id, 1)
      if (data.open) {
        this.business_hours[week].push(data)
        this.business_hours[week] = this.mergeIntervals(this.business_hours[week])
      }
    }
  }

  async getCurrentPosition() {
    let loading = await this.loadingCtrl.create({});
    loading.present();
    this.placesProvider.getCurrentLocation().pipe(first()).subscribe((location: Location) => {
      location.isGps = true;
      let loc: any = {};
      loc.location = location;
      this.form.patchValue(loc);
      loading.dismiss();
    }, error => {
      this.system.showErrorAlert(error);
      loading.dismiss();
    })
  }

  detect() {
    this.ref.detectChanges()
  }

  hasFoodStamps() {
    return elementIsInsideArray(PaymentMethod.food_stamps, this.paymentMethods);
  }

  hasCard() {
    return elementIsInsideArray(PaymentMethod.credit_card, this.paymentMethods) || elementIsInsideArray(PaymentMethod.debit_card, this.paymentMethods);
  }

  amountFeeMinChange(valor) {
    this.form.patchValue({ delivery: { feeMin: this.money.detectAmount(valor) } })
  }
  amountFeeChange(valor) {
    this.form.patchValue({ delivery: { fee: this.money.detectAmount(valor) } })
  }
  amountFeeMaxChange(valor) {
    this.form.patchValue({ delivery: { feeMax: this.money.detectAmount(valor) } })
  }

  handlePlace(location) {
    let loc: any = {};
    loc.location = location;
    this.form.patchValue(loc);
  }

  async handleDistrict(location: Location) {
    let districtExist: boolean = false;
    this.deliveryDistricts.forEach(delivery => {
      if (delivery.location.city == location.city && delivery.location.district == location.district) {
        districtExist = true;
        return;
      }
    });

    if (districtExist) {
      let alert = await this.alertCtrl.create({
        header: 'Ops!',
        subHeader: 'Bairro já cadastrado!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.deliveryDistricts.push({
      location: location,
      value: 0.0
    })

    //Recalcula os elemntos da view (detectando as alterações no array)
    this.ref.detectChanges();
  }
  goToFilialList() {
    this.navCtrl.navigateRoot(['filial/list', { company_id: this.company.id }]);
  }
	/**
	 * Cancela a edição/criação
	 */
  cancel() {
    this.goToFilialList();
  }

  cardsValid() {
    return ((this.hasCard() ? !!this.cards[0] : true) &&
      (this.hasFoodStamps() ? !!this.cards_food[0] : true));
  }
}