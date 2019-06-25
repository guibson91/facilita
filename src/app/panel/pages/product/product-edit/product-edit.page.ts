import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product, Complement } from '../../../../../models/product';
import { Category } from '../../../../../models/category';
import { NavController, AlertController, MenuController, LoadingController, ModalController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { Observable, of, combineLatest, throwError } from 'rxjs';
import { switchMap, tap, first } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import { CategorySelectPage } from '../category-select/category-select.page';
import { OverlayEventDetail } from '@ionic/core';
import { ProductComplementUpdatePage } from '../product-complement-update/product-complement-update.page';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

  /**
   * Formulário
   */
  form: FormGroup;

  /**
   * Dados do produto a ser editado.
   */
  product: Product;

  /**
   * Complementos do produto.
   */
  complements: Complement[] = [];

  /**
   * Categoria no início da atualização
   */
  categoryOld: Category;

  /**
   * Categoria que será atualizada no produto
   */
  categoryActual: Category

  loading: boolean;

  saveChange: boolean;

  auxActives: boolean[] = [];

  /**
   * Se o produto veio como cópia
   */
  copy: boolean = false;

  // "money" ou "percentage"
  promotionType: string;

  /**
   * Empresa atual
   */
  company: Company;

  constructor(private navCtrl: NavController,
    public alert: AlertController,
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.loading = true;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      priceBase: [null, Validators.required],
      fixedQuantity: [false],
      promotionPrice: [null],
      promotionPercentage: [null],
      promotionActive: [false],
      category: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((data) => {
      this.ref.detectChanges()
    })


    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.get('copy'))
          this.copy = true
        else
          this.copy = false
      })

    let company$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id')).pipe(first())
        else
          return of(null)
      }))

    let product$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('product_id'))
          return Product.object(params.get('product_id')).pipe(first())
        else
          return of(null)
      }))

    combineLatest([
      company$,
      product$
    ]).subscribe((arr: [Company, Product]) => {
      this.company = arr[0]
      this.product = arr[1]
      //Página de edição de produto
      if (this.product) {
        this.form.patchValue(this.product)

        if (this.product.promotionActive) {
          if (this.product.promotionPrice) {
            this.promotionType = 'money';
          }
          else {
            this.promotionType = 'percentage';
          }
        }

        if (this.product.fixedQuantity) {
          let obj: any = {};
          obj.fixedQuantity = true;
          this.form.patchValue(obj);
        }
        if (this.product.category && this.product.category.id) {
          this.categoryActual = this.categoryOld = this.product.category
          Category.object(this.categoryActual.id)
            .pipe(first())
            .subscribe((c) => {
              this.categoryActual = c;
              this.ref.detectChanges()
            })
          this.form.patchValue({
            category: this.categoryActual.id
          })
        }

        // Inicializando a lista de complementos se o produto tiver complementos.
        // Se não tiver complementos inicializar com um array vazio.
        if (this.product.complements) {
          //Fazer uma cópia do array usando slice para alterações no this.complements não mudar no this.product.complements
          this.complements = this.product.complements.slice() || [];
          //Retira os nulls que vem do firebase
          this.complements = this.complements.filter(el => el !== null)

        }
        // Removendo do formulário a lista de complementos.
        this.form.patchValue({
          complements: null
        });
      }
      //Página de criação de produto
      else {
        if (this.shared.latest_category) {
          this.form.patchValue({
            category: this.shared.latest_category.id
          })
          this.categoryActual = this.shared.latest_category;
        }
      }

      this.loading = false
      this.ref.detectChanges()
    })
  }

  // amountChange(valor) {
  //   this.form.patchValue({ priceBase: this.money.detectAmount(valor) })
  // }

  async selectCategory() {
    const modal = await this.modalCtrl.create({
      component: CategorySelectPage,
      componentProps: {
        company: this.company,
        categoryActual: this.categoryActual
      }
    });
    modal.onDidDismiss().then((ev: OverlayEventDetail) => {
      if (ev && ev.data && ev.data.category) {
        this.form.patchValue({ category: ev.data.category.id })
        this.categoryActual = ev.data.category
        this.shared.latest_category = ev.data.category
      }
    })
    modal.present()
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
   * Dispara evento se as teclas alt + n for pressionado
   * @param event evento
   */
  hotkeys(event) {
    if (event.keyCode == 67 && event.altKey) {
      this.updateComplement();
    } else if (event.keyCode == 83 && event.altKey) {
      this.save();
    }
  }

  /**
   * Criando ou editando um complemento.
   * Chamar modal que retorna o novo complemento a ser atualizado.
   * Se o indice for undefined adiciona no fim do array.
   * Se não for undefined atualiza o novo complemento no complemento de indice especificado.
   * @param complement Complemento que será atualizado, ou se vazio adicionar um novo complemento.
   */
  async updateComplement(complement?: Complement) {

    //Se params é undefined então é para ser criado um novo complemento.
    let loading = await this.loadingCtrl.create({})
    loading.present()


    const modal = await this.modalCtrl.create({
      component: ProductComplementUpdatePage,
      componentProps: {
        complement: complement ? complement : {}
      }
    });

    modal.onDidDismiss().then((ev: OverlayEventDetail) => {
      if (ev.data) {
        let new_complement: Complement = ev.data.new_complement;
        // Se o indice não existe
        if (complement) {
          let index = this.complements.indexOf(complement);
          // Atualizar em um já existente.
          this.complements[index] = new_complement;
        } else {
          // Adicionar como novo complemento.
          this.complements.push(new_complement);
        }
      }
    })

    modal.present().then(() => {
      loading.dismiss()
    })
  }

  detect() {
    this.ref.detectChanges()
  }

  /**
   * Remover complemento
   * @param complement Complemento a ser removido.
   */
  removeComplement(complement: Complement) {
    let index: number = this.complements.indexOf(complement);
    this.complements.splice(index, 1);
    this.ref.detectChanges()
  }

  /**
   * Voltar página sem salvar alterações
   */
  cancel(): void {
    this.navCtrl.navigateRoot(['product/list', { company_id: this.company.id }])
  }

  /**
   * Subir complemento uma posição
   * @param complement complemento que se deseja subir
   * @param index index do complemento que se deseja subir
   */
  upComplement(complement, index) {

    if (!this.complements[index - 1]) return;

    let aux = this.complements[index - 1];
    this.complements[index - 1] = this.complements[index];
    this.complements[index] = aux;
    this.ref.detectChanges()
  }

  /**
   * Descer complemento uma posição
   * @param complement complemento que se deseja descer
   * @param index index do complemento que se deseja descer
   */
  downComplement(complement, index) {

    if (!this.complements[index + 1]) return;

    let aux = this.complements[index + 1];
    this.complements[index + 1] = this.complements[index];
    this.complements[index] = aux;
    this.ref.detectChanges()
  }

  /**
   * Remove produto do database
   */
  remove(): Observable<any> {
    if (this.product) {
      return Product.remove(this.product.id, [
        {
          relationship: Product.company,
          removeId: this.company.id
        },
        {
          relationship: Product.category,
          removeId: this.categoryOld.id
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

    if (!this.categoryActual) {
      return throwError(Error("Você precisa selecionar uma categoria para o produto"));
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
    console.log("produto a ser salvo: ", this.form.value);
    let new_product: Product = this.form.value;
    //Remover categoria como atributo antes de salvar
    //Será considerada apenas no relacionamento
    delete (new_product as any).category;
    // Copia os complementos atuais para que quando ele set os nulls não apareça na view
    new_product.complements = this.complements || [];
    // Convertendo o priceBase de string para número
    new_product.priceBase = +new_product.priceBase;
    new_product = Product.calculatePrice(new_product);
    // Página de edição, atualizar objeto no database
    if (this.product && !this.copy) {
      this.saveChange = true;
      return Product.update(this.product.id, new_product, [{
        relationship: Product.category,
        id: this.categoryActual.id,
        removeId: this.categoryOld.id
      }])
        .pipe(tap(() => {
          this.cancel()
        }))
    }
    //Página de registro, criar novo objeto no database
    else {
      this.saveChange = true;
      return Product.add(new_product, [
        {
          relationship: Product.company,
          id: this.company.id
        },
        {
          relationship: Product.category,
          id: this.categoryActual.id
        }
      ])
        .pipe(tap(() => {
          this.cancel()
        }))
    }

  }

}