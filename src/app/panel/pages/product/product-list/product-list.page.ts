import { Component, OnInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { NavController, PopoverController, MenuController, LoadingController } from "@ionic/angular";
import { SharedService } from "../../../../services/shared.service";
import { AuthenticationService } from "../../../../services/authentication.service";
import { ProductService, ProductStock } from "../../../../services/product.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, first, map, tap } from "rxjs/operators";
import { Company } from "../../../../../models/company";
import { Product } from "../../../../../models/product";
import { Category } from "../../../../../models/category";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Lista de produtos ordenados
   */
  products: ProductStock[]

  /**
   * Subscription do subscribe inicial que carrega os produtos
   */
  subscriptionProducts: Subscription

  /**
   * variavel auxiliar para o ngfor que guarda o id
   * da categoria do produto anterior
   */
  tempCategory: string;

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Verifica se existem produtos
   */
  existsProducts: boolean = true;

  /**
   * Id das categorias selecionadas no filtro
   */
  categoriesSelected: string[] = [];

  /**
   * Empresa atual
   */
  company: Company;

  constructor(public navCtrl: NavController,
    public shared: SharedService,
    public authentication: AuthenticationService,
    public popoverCtrl: PopoverController,
    private menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    public loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private productProvider: ProductService) { }

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

    this.subscriptionProducts = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))
      .pipe(first()).pipe(switchMap((company: Company) => {
        this.company = company;

        return this.productProvider.getProductsStockCompany(company.id)
          .pipe(map((products_menu: ProductStock[]) => {
            return products_menu.sort(this.productProvider.comparatorProductStock)
          }))
      }))
      .subscribe((products: ProductStock[]) => {
        if (!products || products.length <= 0) this.existsProducts = false
        this.products = products;
        console.log("Produtos: ", this.products);
        this.loading = false
        this.change()
      })
  }

  change() {
    this.ref.detectChanges()
  }

  /**
   * Dispara evento se as teclas alt + n for pressionado
   * @param event evento
   */
  hotkeys(event) {
    if (event.keyCode == 80 && event.altKey) {
      this.add();
    }
  }

  /**
   * Ir para página ProductEditPage para adicionar um novo produto
   */
  add() {
    this.navCtrl.navigateRoot(['product/edit', { company_id: this.company.id }])
  }

  /** 
   * Ir para a página ProductEditPage para editar um produto
   * @param product produto a ser editado
   */
  edit(product: Product) {
    this.navCtrl.navigateRoot(['product/edit', { company_id: this.company.id, product_id: product.id }])
  }

  /**
   * Cria uma cópia do produto
   * @param product produto
   */
  copy(product) {
    this.navCtrl.navigateRoot(['product/edit', { company_id: this.company.id, product_id: product.id, copy: true }])
  }

  /**
   * @param category é a categoria que se quer receber o nome
   */
  getCategoryName(category: Category) {
    if (!category) return;
    this.tempCategory = category.id;
    if (!category.name) return "Categoria sem nome"
    return category.name;
  }

}