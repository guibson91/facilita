import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from '../../../../../models/company';
import { Product } from '../../../../../models/product';
import { NavController, MenuController } from '@ionic/angular';
import { FilialType } from '../../../../../models/filial';

@Component({
  selector: 'app-product-global',
  templateUrl: './product-global.page.html',
  styleUrls: ['./product-global.page.scss'],
})
export class ProductGlobalPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Lista de produtos ordenados
   */
  products: Product[]

  /**
   * Subscription do subscribe inicial que carrega os produtos
   */
  subscriptionProducts: Subscription

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Verifica se existem produtos
   */
  existsProducts: boolean = true;

  /**
   * Empresa atual
   */
  company: Company;

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    private ref: ChangeDetectorRef) { }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true)
    this.load()
  }

  ngOnDestroy() {
    if (this.subscriptionProducts) {
      this.subscriptionProducts.unsubscribe()
    }
  }

  load() {
    this.existsProducts = true
    this.loading = true

    this.subscriptionProducts = Product.list([{
      name: 'global.type',
      operator: '==',
      value: FilialType.WAREHOUSE
    }])
      .subscribe((products: Product[]) => {
        if (!products || products.length <= 0) this.existsProducts = false
        this.products = products;
        this.loading = false
        this.change()
      })
  }

  change() {
    this.ref.detectChanges()
  }

  add() {
    this.navCtrl.navigateRoot(['product/global/edit'])
  }

  edit(product: Product) {
    this.navCtrl.navigateRoot(['product/global/edit', { product_id: product.id }])
  }

}