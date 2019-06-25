import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../../../../../models/product';
import { switchMap, first, tap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { FilialType } from '../../../../../models/filial';
import { Category } from '../../../../../models/category';
import { OverlayEventDetail } from '@ionic/core';
import { SharedService } from '../../../../services/shared.service';
import { CategorySelectPage } from '../category-select/category-select.page';

@Component({
  selector: 'app-product-global-edit',
  templateUrl: './product-global-edit.page.html',
  styleUrls: ['./product-global-edit.page.scss'],
})
export class ProductGlobalEditPage implements OnInit {

  /**
   * Formulário
   */
  form: FormGroup;

  /**
   * Dados do produto a ser editado.
   */
  product: Product;

  /**
   * Categoria no início da atualização
   */
  categoryOld: Category;

  /**
   * Categoria que será atualizada no produto
   */
  categoryActual: Category

  loading: boolean;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private shared: SharedService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.loading = true;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image: [''],
      priceBase: [null, Validators.required],
      category: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(() => {
      this.ref.detectChanges()
    })

    let product$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('product_id'))
          return Product.object(params.get('product_id')).pipe(first())
        else
          return of(null)
      }))

    product$.subscribe((product: Product) => {
      this.product = product
      //Página de edição de produto
      if (this.product) {
        this.form.patchValue(this.product)

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
      }

      this.loading = false
      this.ref.detectChanges()
    })
  }

  async selectCategory() {
    const modal = await this.modalCtrl.create({
      component: CategorySelectPage,
      componentProps: {
        global: true,
        categoryActual: this.categoryActual
      }
    });
    modal.onDidDismiss().then((ev: OverlayEventDetail) => {
      if (ev && ev.data && ev.data.category) {
        this.form.patchValue({ category: ev.data.category.id })
        this.categoryActual = ev.data.category
      }
    })
    modal.present()
  }

  detect() {
    this.ref.detectChanges()
  }

  /**
   * Voltar página sem salvar alterações
   */
  cancel(): void {
    this.navCtrl.navigateRoot(['product/global/list'])
  }

  /**
   * Remove produto do database
   */
  remove(): Observable<any> {
    if (this.product) {
      return Product.remove(this.product.id,
        [
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
    console.log("produto a ser salvo: ", this.form.value);
    let new_product: Product = this.form.value;
    // Convertendo o priceBase de string para número
    new_product.priceBase = +new_product.priceBase;
    new_product.minimumPrice = new_product.priceBase
    // Criando um produto de tipo global para depósitos (Água, gás e bebidas)
    new_product.global = {
      type: FilialType.WAREHOUSE
    }
    if (!this.categoryActual) {
      return throwError(Error("Você precisa selecionar uma categoria para o produto"));
    }
    //Remover categoria como atributo antes de salvar
    //Será considerada apenas no relacionamento
    delete (new_product as any).category;
    // Página de edição, atualizar objeto no database
    if (this.product) {
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
      return Product.add(new_product, [
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