import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Promotion } from '../../../../../models/promotion';
import { Company } from '../../../../../models/company';
import { NavController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { of, combineLatest, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.page.html',
  styleUrls: ['./promotion-edit.page.scss'],
})
export class PromotionEditPage implements OnInit {

  /**
   * Formulário
   */
  form: FormGroup;

  /**
   * Dados da promoção a ser editada.
   */
  promotion: Promotion;

  loading: boolean;

  // "money" ou "percentage"
  promotionType: string;

  /**
   * Verifica se foi salvo os dados editados. Isso serve para verificar se o usuário pode sair da tela
   */
  saveChange: boolean = false;

  /**
   * Empresa atual
   */
  company: Company;

  constructor(private navCtrl: NavController,
    public alert: AlertController,
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.loading = true;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      priceBase: [null, Validators.required],
      promotionPrice: [null],
      promotionPercentage: [null],
      promotionActive: [false],
    });

    this.form.valueChanges.subscribe((data) => {
      this.ref.detectChanges()
    })

    let company$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))

    let promotion$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('promotion_id'))
          return Promotion.object(params.get('promotion_id'))
        else
          return of(null)
      }))

    combineLatest([
      company$,
      promotion$
    ]).subscribe((arr: [Company, Promotion]) => {
      this.company = arr[0]
      this.promotion = arr[1]
      //Página de edição de produto
      if (this.promotion) {

        if (this.promotion.promotionActive) {
          if (this.promotion.promotionPrice) {
            this.promotionType = 'money';
          }
          else {
            this.promotionType = 'percentage';
          }
        }

        this.form.patchValue(this.promotion)
      }

      this.loading = false
      console.log("Detect changes")
      this.ref.detectChanges()
    })
  }

  detect() {
    this.ref.detectChanges()
  }

  /**
   * @todo CAN DEACTIVE ATUALIZAR PARA O METODO DO ANGULAR: https://angular.io/api/router/CanDeactivate
   
  ionViewCanLeave() {
    /**
     * Verifica se o form foi alterado
     *
    let change: boolean
    if (this.product) {
      if (JSON.stringify(this.complements) == JSON.stringify(this.product.complements)) {
        for (let key in this.form.value) {
          if (this.form.value.category != this.product.category.id) {
            change = true
          } else if (this.form.value[key] != this.product[key] && key != 'category') {
            change = true
          }
        }
      } else {
        change = true
      }
    } else {
      if (this.complements.length < 1) {
        for (let key in this.form.value) {
          if (this.form.value[key]) change = true
        }
      } else {
        change = true
      }
    }
    /**
     * Verifica se o usuário pode sair da pagina antes de salvar as alterações
     *
    return new Promise(async (resolve: Function, reject: Function) => {
      if (this.saveChange) {
        resolve()
      } else if (change) {
        let alert = await this.alert.create({
          header: 'Deseja sair sem salvar suas alterações ?',
          buttons: [{
            role: 'cancel',
            text: 'Cancelar',
            handler: () => {
              reject()
            }
          }, {
            text: 'Confirmar',
            handler: () => {
              resolve()
            }
          }]
        })
        alert.present()
      } else {
        resolve();
      }
    });
  }*/

  /**
   * Voltar página sem salvar alterações
   */
  cancel(): void {
    this.navCtrl.navigateRoot(['promotion/list', { company_id: this.company.id }])
  }

  /**
   * Remove produto do database
   */
  remove(): Observable<any> {
    if (this.promotion) {
      return Promotion.remove(this.promotion.id, [
        {
          relationship: Promotion.company,
          removeId: this.company.id
        }
      ])
        .pipe(tap(() => {
          this.cancel()
        }))
    }
  }

  /**
   * Salvar alterações e redirecionar para página anterior
   */
  save(): Observable<any> {

    if (this.form.value.promotionActive && !this.promotionType) {
      return throwError(Error("Você precisa escolher como deseja definir a promoção"));
    }

    if (this.form.value.promotionActive && this.promotionType == 'money' && !this.form.value.promotionPrice) {
      return throwError(Error("Você precisa definir o valor do desconto"));
    }

    if (this.form.value.promotionActive && this.promotionType == 'percentage' && !this.form.value.promotionPercentage) {
      return throwError(Error("Você precisa definir a porcentagem de desconto"));
    }

    if (!this.form.value.promotionActive) {
      let obj = {
        promotionPercentage: null,
        promotionPrice: null
      }
      this.form.patchValue(obj);
    }
    else if (this.promotionType == 'money') {
      let obj = {
        promotionPrice: this.form.value.promotionPrice >= 0 ? this.form.value.promotionPrice : -1 * this.form.value.promotionPrice,
        promotionPercentage: null
      }
      this.form.patchValue(obj);
    }
    else {
      let obj = {
        promotionPrice: null
      }
      this.form.patchValue(obj);
    }
    console.log("promoção a ser salva: ", this.form.value);
    let new_promotion: Promotion = this.form.value;
    // Convertendo o priceBase de string para número
    new_promotion.priceBase = +new_promotion.priceBase;
    // Página de edição, atualizar objeto no database
    if (this.promotion) {
      this.saveChange = true;
      return Promotion.update(this.promotion.id, new_promotion)
        .pipe(tap(() => {
          this.cancel()
        }))
    }
    //Página de registro, criar novo objeto no database
    else {
      this.saveChange = true;
      return Promotion.add(new_promotion, [
        {
          relationship: Promotion.company,
          id: this.company.id
        }
      ])
        .pipe(tap(() => {
          this.cancel()
        }))
    }

  }

}
