import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Filial } from '../../../../../models/filial';
import { ProductStock, ProductService } from '../../../../services/product.service';
import { Category } from '../../../../../models/category';
import { NavController, PopoverController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { Company } from '../../../../../models/company';
import { Observable, Subscription, of, combineLatest } from 'rxjs';
import { map, tap, first, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.page.html',
  styleUrls: ['./stock-list.page.scss'],
})
export class StockListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Empresa no qual está sendo listado os produtos
   */
  company: Company;

  /**
   * Filial atual que será listado os produtos
   */
  filial: Filial;

  /**
   * Lista de todos os produtos da empresa,
   * mas com o atributo active(se está presente na filial)
   */

  productsStock: ProductStock[];

  /**
   * Subscription do observable que consulta produtos
   */
  productsStockSubscription: Subscription

  /**
   * Verifica se existe produtos
   */
  existsProducts: boolean = false

  /**
   * Lista de todos os produtos da empresa,
   * mas que tenham recomendation como verdade
   */
  recomendationProductsStock: ProductStock[] = [];

  /**
   * Objeto que contém todas as categorias com
   * categories[id] = name
   */
  categories: any = {};

  /**
   * variavel auxiliar para o ngfor que guarda o id
   * da categoria do produto anterior
   */
  tempCategory: string;

  /**
   * Id das categorias selecionadas no filtro
   */
  categoriesSelected: string[] = [];

  /**
   * Exibir loading quando a lista estiver sendo carregada
   */
  loading: boolean = true;

  /**
   * Listar categorias para organização de prioridades
   */
  optionsCategories: Category[] = [];

  /**
   * Subscription do observable que carrega as categorias
   */
  initSubscription: Subscription

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    public productProvider: ProductService,
    public shared: SharedService,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public system: SystemService) { }

  /**
   * Inicializando estruturas após entrar na página
   * e passar pela verificação do ionViewCanEnter()
   */
  ngOnInit(): void {
    //Mostrar loading
    this.loading = true;
    this.menuCtrl.enable(true);

    let company$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))
      .pipe(first())

    let filial$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('filial_id'))
          return Filial.object(params.get('filial_id'))
        else
          return of(null)
      }))
      .pipe(first())

    this.initSubscription = combineLatest([
      company$,
      filial$
    ])
      .pipe(switchMap((arr: [Company, Filial]) => {
        this.company = arr[0];
        this.filial = arr[1];

        let firstTimeLoadCategories: boolean = true
        return Company.categories
          .list(this.company.id,
            null,
            [{
              name: "priority",
              type: "asc",
            }])
          .pipe(tap((categories: Category[]) => {
            this.optionsCategories = categories

            if (firstTimeLoadCategories) {
              let consistancePriorityUpdates: Observable<any>[] = []

              for (let i = 0; i < categories.length; i++) {
                if (i != categories[i].priority) {
                  consistancePriorityUpdates.push(Category.update(categories[i].id, { priority: i }))
                }
              }

              if (consistancePriorityUpdates.length != 0) {
                console.error("Inconsistência identificada, atualizando prioridades...")
                combineLatest(
                  consistancePriorityUpdates
                ).pipe(first()).subscribe(() => {
                }, error => {
                  console.error("Erro ao atualizar prioridades", error);
                });
              }
            }
            firstTimeLoadCategories = false
          }))
      }))
      .subscribe(() => {
        this.refresh()
      }, err => {
        this.loading = false;
        this.system.showErrorAlert(err)
        this.ref.detectChanges()
      })
  }

  refresh() {
    this.loading = true
    this.ref.detectChanges();
    if (this.productsStockSubscription) this.productsStockSubscription.unsubscribe()
    //Obtém lista de produtos de estoque de uma filial ordenados (com categorias configuradas)
    this.productsStockSubscription = this.productProvider.getProductsStockFilial(this.filial)
      //Filtrar e ordenar os produtos "Recomendação do chefe"  
      .pipe(map((products_stock: ProductStock[]) => {
        this.recomendationProductsStock = products_stock
          .filter((product_stock) => product_stock.recomendation);
        for (let i = 0; i < this.recomendationProductsStock.length; i++) {
          if (this.recomendationProductsStock[i].recomendation_priority == undefined) {
            this.recomendationProductsStock[i].recomendation_priority = i;
          }
        }
        this.recomendationProductsStock = this.recomendationProductsStock.sort(this.productProvider.comparatorProductStockByRecomendation);
        return products_stock.sort(this.productProvider.comparatorProductStock);
      }))
      .subscribe((products_stock: ProductStock[]) => {
        this.productsStock = products_stock;
        //Atribuir prioridades na primeira entrada
        let index = 0;
        for (let i = 0; i < products_stock.length; i++) {
          if (i > 0 && products_stock[i - 1].category.id == products_stock[i].category.id) {
            index = 0;
          }
          if (!products_stock[i].priority) {
            products_stock[i].priority = index;
          }
          index++;
        }
        if (!this.productsStock || this.productsStock.length <= 0) this.existsProducts = false;
        else this.existsProducts = true;

        this.loading = false;
        this.ref.detectChanges()
      }, err => {
        this.loading = false;
        this.system.showErrorAlert(err)
        this.ref.detectChanges()
      })
  }

  detect() {
    this.ref.detectChanges()
  }
  
  /**
   * Adiciona o produto no estoque.
   * @param product Produto a ser adicionado
   */
  addProduct(product: ProductStock, index: number): void {
    product.priority = this.productsStock.indexOf(product);
    Filial.product_stock.add(this.filial.id, product.id, { active: true, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 })
      .subscribe(() => {
        // this.refresh()
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  /**
   * Remove o produto do estoque.
   * @param product Produto a ser removido
   */
  removeProduct(product: ProductStock, index: number): void {
    //Remove a relação do produto com o estoque.
    Filial.product_stock.add(this.filial.id, product.id, { active: false, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 })
      .subscribe(() => {
        // this.refresh()
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  addRecomendation(product: ProductStock, index: number) {
    Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true })
      .subscribe(() => {
        // this.refresh()
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  removeRecomendation(product: ProductStock, index: number) {
    Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: false, recomendation_priority: 0 })
      .subscribe(() => {
        // this.refresh()
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  /**
   * Abrir popover do filtro de categorias
  
  async openFilter(myEvent: any) {
    let popover = await this.popoverCtrl.create({
      component: CategoriesFilterPage,
      componentProps: {
        categoriesSelected: this.categoriesSelected
      }
    });
    // popover.present({ ev: myEvent });
    popover.present();
    popover.onDidDismiss().then(((ev) => {
      if (ev && ev.data) {
        this.categoriesSelected = ev.data.categoriesId || [];
      }
    }))
  } */

  /**
   * Retorna a categoria anterior a que foi selecionada
   * @param cId Id da categoria que se quer alterar a prioridade
   */
  private getBeforeCategory(cId): any {
    let beforeItem: any = {}
    for (let i = 0; i < this.optionsCategories.length; i++) {
      if (this.optionsCategories[i].id == cId) {
        return beforeItem
      }
      beforeItem = this.optionsCategories[i]
    }
  }

  /**
   * Retorna a categoria posterior a que foi selecionada
   * @param cId Id da categoria que se quer alterar a prioridade
   */
  getAfterCategory(cId): any {

    let doReturn: boolean = false
    let afterItem: any = {}

    for (let i = 0; i < this.optionsCategories.length; i++) {
      afterItem = this.optionsCategories[i]

      if (doReturn) return afterItem;

      if (this.optionsCategories[i].id == cId) {
        doReturn = true
      }
    }
  }


  upRecomendation(product, index) {

    let previousProduct = this.recomendationProductsStock[index - 1];

    if (!previousProduct) return;


    //let highestIndex = this.recomendationProductsStock.length - 1;

    // if (index == this.recomendationProductsStock.length - 1) {
    //   this.filial.product_recomendated = product;
    // }

    let aux = previousProduct.recomendation_priority;
    previousProduct.recomendation_priority = product.recomendation_priority;
    product.recomendation_priority = aux;

    if (previousProduct.recomendation_priority == product.recomendation_priority) product.recomendation_priority++;

    combineLatest([
      Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true, recomendation_priority: product.recomendation_priority }),
      Filial.product_stock.add(this.filial.id, previousProduct.id, { active: previousProduct.active, priority: previousProduct.priority, recomendation: true, recomendation_priority: previousProduct.recomendation_priority })
    ]).subscribe((res) => {
      this.ref.detectChanges()
    }, error => {
      console.error("Ocorreu um erro", error);
    })

  }

  downRecomendation(product, index) {
    let posteriorProduct = this.recomendationProductsStock[index + 1];

    if (!posteriorProduct) return;

    let aux = posteriorProduct.recomendation_priority;
    posteriorProduct.recomendation_priority = product.recomendation_priority;
    product.recomendation_priority = aux;

    if (posteriorProduct.recomendation_priority == product.recomendation_priority) product.recomendation_priority--;

    combineLatest([
      Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true, recomendation_priority: product.recomendation_priority }),
      Filial.product_stock.add(this.filial.id, posteriorProduct.id, { active: posteriorProduct.active, priority: posteriorProduct.priority, recomendation: true, recomendation_priority: posteriorProduct.recomendation_priority })
    ]).subscribe((res) => {
      this.ref.detectChanges()
    }, error => {
      console.error("Ocorreu um erro", error);
    })
  }


  /**
   * Ação para subir um produto
   * @param product produto que se deseja subir
   */
  upProductPriority(product: ProductStock, position: number) {
    let previousProduct = this.productsStock[position - 1];

    if (!previousProduct) return;

    const aux = previousProduct.priority;
    previousProduct.priority = product.priority;
    product.priority = aux;

    //Não permitir subir um produto se adentrar em outra categoria
    if (previousProduct.category.id !== product.category.id) return;

    if (previousProduct.priority == product.priority) product.priority++;

    combineLatest([
      Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 }),
      Filial.product_stock.add(this.filial.id, previousProduct.id, { active: previousProduct.active, priority: previousProduct.priority, recomendation: previousProduct.recomendation ? previousProduct.recomendation : false, recomendation_priority: previousProduct.recomendation_priority ? previousProduct.recomendation_priority : 0 })
    ]).subscribe((res) => {
      this.ref.detectChanges()
    }, error => {
      console.error("Ocorreu um erro", error);
    })
  }

  /**
  * Ação para descer um produto
  * @param product produto que se deseja descer
  */
  downProductPriority(product: ProductStock, position: number) {

    let posteriorProduct = this.productsStock[position + 1];

    if (!posteriorProduct) return;

    const aux = posteriorProduct.priority;
    posteriorProduct.priority = product.priority;
    product.priority = aux;

    //Não permitir descer um produto se adentrar em outra categoria
    if (posteriorProduct.category.id !== product.category.id) return;

    if (posteriorProduct.priority == product.priority) posteriorProduct.priority++;

    combineLatest([
      Filial.product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 }),
      Filial.product_stock.add(this.filial.id, posteriorProduct.id, { active: posteriorProduct.active, priority: posteriorProduct.priority, recomendation: posteriorProduct.recomendation ? posteriorProduct.recomendation : false, recomendation_priority: posteriorProduct.recomendation_priority ? posteriorProduct.recomendation_priority : 0 })
    ]).subscribe((res) => {
      this.ref.detectChanges()
    }, error => {
      console.error("Ocorreu um erro", error);
    })
  }

  /**
   * Ação de subir a categoria
   * @param category
   */
  upCategoryPriority(category: Category) {
    let beforeItem: any = this.getBeforeCategory(category.id);
    combineLatest([
      Category.update(beforeItem.id, { priority: category.priority }),
      Category.update(category.id, { priority: beforeItem.priority }),
    ]).subscribe(() => {
      this.ref.detectChanges()
    }, error => {
      console.error("Erro ao atualizar prioridades", error);
    });
  }

  /**
   * Ação de descer a categoria
   * @param category
   */
  downCategoryPriority(category: Category) {
    let afterItem: any = this.getAfterCategory(category.id)
    combineLatest([
      Category.update(afterItem.id, { priority: category.priority }),
      Category.update(category.id, { priority: afterItem.priority }),
    ]).subscribe(() => {
      this.ref.detectChanges()
    }, error => {
      console.error("Erro ao atualizar prioridades");
    });
  }

  /**
   * @param category é a categoria que se quer receber o nome
   */
  getCategoryName(category: Category) {
    this.tempCategory = category.id;
    if (!category.name) return "Categoria sem nome"
    return category.name;
  }

  ngOnDestroy() {
    if (this.initSubscription) this.initSubscription.unsubscribe()
    if (this.productsStockSubscription) this.productsStockSubscription.unsubscribe()
  }
}