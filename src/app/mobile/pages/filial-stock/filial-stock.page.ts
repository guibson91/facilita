import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { ProductService, ProductStock } from '../../../services/product.service';
import { Observable, Subscription, of, from, combineLatest, timer } from 'rxjs';
import { map, tap, flatMap, first, catchError, switchMap } from 'rxjs/operators';
import { ModalController, LoadingController, MenuController, AlertController, NavController } from '@ionic/angular';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { CartService } from '../../../services/cart.service';
import { User } from '../../../../models/user';
import { Category } from '../../../../models/category';
import { Product } from '../../../../models/product';
import { elementIsInsideArray } from '../../../../modules/firestore/utils';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrderItemEditPage } from '../order-item-edit/order-item-edit.page';

@Component({
  selector: 'app-filial-stock',
  templateUrl: './filial-stock.page.html',
  styleUrls: ['./filial-stock.page.scss'],
})
export class FilialStockPage implements OnDestroy, OnInit {

  /**
   * define se a navbar tem searchbar ou nao
   */
  searchMode: boolean = false;

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Filial atual que será listado os produtos
   */
  filial: Filial;

  /**
   * Status de aberto ou fechado da filial antes da nova edição
   */
  old_open: boolean;

  /**
   * Lista de todos os produtos do restaurante,
   * mas com o atributo active(se está presente na filial)
   */
  productsStock: ProductStock[];

  /**
   * Lista de recomendações do restaurante
   */
  recomendationProductsStock: ProductStock[]

  /**
   * Subscription da requisição do estoque
   */
  productsStockSubscription: Subscription;

  /**
   * Subscription da requisição do estoque
   */
  filialSubscription: Subscription;

  /**
   * Objeto que contém todas as categorias ordenadas com a estrutura:
   * categories[key].name (nome da filial)
   * categories[key].priority (número relativo a prioridade da filial)
   * Obtido por meio do provider Product
   */
  categories: any = {};

  /**
   * variavel auxiliar para o ngfor que guarda o id
   * da categoria do produto anterior
   */
  tempCategory: Category;

  /**
   * Id das categorias selecionadas no filtro
   */
  categoriesSelected: string[] = [];

  /**
   * Exibir loading quando a lista estiver sendo carregada
   */
  loading: boolean = true;

  /**
   * Id do restaurante
   */
  restaurantId: string;

  isFavorite: boolean = false;

  //Filiais favoritas do usuário
  favoritesFilials: string[] = [];

  intervalSubscription: Subscription

  user: User;

  priceDelivery: number

  constructor(
    public productProvider: ProductService,
    public shared: SharedService,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    private change: ChangeDetectorRef,
    public system: SystemService,
    public route: ActivatedRoute,
    public cart: CartService,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.intervalSubscription = timer(2 * 1000, 10 * 1000)
      .subscribe(async () => {
        if (this.filial) {
          Filial.checkBusinessHours(this.filial, this.shared.now)
          if (this.old_open == true && this.filial.open == false) {
            let alert = await this.alertCtrl.create({
              header: "Ops, o estabelecimento acabou de fechar.",
              subHeader: "Por favor verifique o horário de funcionamento do estabelecimento e volte mais tarde.",
              buttons: ["Ok"]
            })
            alert.present()
          }
          this.old_open = this.filial.open
        }
      })
  }

  ngOnDestroy() {
    if (this.productsStockSubscription) this.productsStockSubscription.unsubscribe()
    if (this.intervalSubscription) this.intervalSubscription.unsubscribe()
    if (this.filialSubscription) this.filialSubscription.unsubscribe()
  }

  /**
   * Inicializando estruturas após entrar na página
   * e passar pela verificação do ionViewCanEnter()
   */
  ionViewDidEnter(): void {
    this.system.setScreenName("FilialStockPage")

    let filial$: Observable<Filial>
    this.menuCtrl.enable(false);

    filial$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('id') && params.get('id') != ':id') {
          return Filial.object(params.get('id'))
        } else {
          return of(null)
        }
      }))

    // Para checar se a filial estava aberta e passou a virar fechada
    this.filialSubscription = filial$.subscribe(async (filial: Filial) => {
      console.log("Filial obtida: ", filial);
      this.system.logEvent('view_filial', { name: filial.name })
      this.filial = filial
      console.log("A filial que entrei foi: ", this.filial);
      Filial.checkBusinessHours(this.filial, this.shared.now)
      if (this.old_open == true && filial.open == false) {
        let alert = await this.alertCtrl.create({
          header: "Ops, o estabelecimento acabou de fechar.",
          subHeader: "Por favor verifique o horário de funcionamento do estabelecimento e volte mais tarde.",
          buttons: ["Ok"]
        })

        alert.present()
      }
      this.old_open = filial.open
      this.restaurantId = this.filial.company.id;

      if (!this.filial) {
        throw new Error("Você deveria chegar nessa página com uma filial");
      }
      this.change.detectChanges()
      //Verificar se a filial é favorita do usuário
      let exist$ = this.shared.user$.pipe(first()).pipe(flatMap((user) => {
        this.user = user;
        this.priceDelivery = this.cart.calculateDelivery(this.filial, this.user)
        console.log(this.priceDelivery)
        if (!this.user) {
          this.isFavorite = false;
          return of(null);
        }
        return User.favorites.exist(user.id, filial.id).pipe(tap((res) => {
          //Foi entrado o documento na coleção
          if (res) {
            this.isFavorite = true;
          } else {
            this.isFavorite = false;
          }
        }))
        this.change.detectChanges()
      }))

      let products$ = this.productProvider
        .getProductsStockFilial(this.filial)
        .pipe(map((products_stock: ProductStock[]) => {

          console.log("Produtos Estoque do BD: ", products_stock);

          this.recomendationProductsStock = products_stock
            // Filtrando os elementos que são recomendacoes e que estão ativos
            .filter((product_stock) => (product_stock.recomendation && product_stock.active))
            // Ordendando pela prioridade da recomendação
            .sort(this.productProvider.comparatorProductStockByRecomendation)

          console.log("Estoque de Produtos que são recomendações", this.recomendationProductsStock);
          this.productsStock = products_stock
            // Filtrando os elementos que estão em estoque
            .filter((product_stock: ProductStock) => product_stock.active)
            // Ordenando por sua prioridade
            .sort(this.productProvider.comparatorProductStock)
          console.log("Estoque de produtos da Filial: ", this.productsStock)
          this.change.detectChanges()

        }))

      this.productsStockSubscription = combineLatest([exist$, products$]).subscribe(() => {
        this.loading = false;
        this.change.detectChanges()
      })
    })
  }

  goBack() {
    this.navCtrl.goBack();
  }

  clickFavorite() {
    if (this.user) {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        Filial.fans.add(this.filial.id, this.user.id).subscribe();
      }
      else {
        Filial.fans.remove(this.filial.id, this.user.id).subscribe();
      }
    }
    else {
      // let modalLogin = this.modalCtrl.create('LoginAppPage');
      // modalLogin.present();
      // modalLogin.onDidDismiss(() => {
      //   let loading = this.loadingCtrl.create({});
      //   loading.present();
      //   this.shared.user$.first().subscribe((user) => {
      //     loading.dismiss();
      //     this.user = user;
      //     if (user) {
      //       this.clickFavorite();
      //     }
      //   }, error => {
      //     console.error("Ocorreu um erro", error);
      //     loading.dismiss();
      //   })
      // })
    }
  }

  /**
   * Ir para escolha do complemento
   * @param product produto selecionado
   */
  async orderProduct(product: Product) {
    Filial.checkBusinessHours(this.filial, this.shared.now)
    if (this.filial.open) {
      let modal = await this.modalCtrl.create({
        component: OrderItemEditPage,
        componentProps: {
          product: product,
          filial: this.filial
        }
      })
      modal.present();
    } else {
      let alert = await this.alertCtrl.create({
        header: 'Restaurante fechado!',
        subHeader: 'Você não pode realizar pedidos no momento. Tente novamente mais tarde',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  /**
   * 
   * @param key é a id da categoria que se quer receber o nome
   */
  getCategoryName(product: ProductStock): string {
    this.tempCategory = product.category;
    return product.category.name;
  }

  showCategory(key: string) {
    if (!key) return false;
    if (this.categoriesSelected == []) return true;
    return elementIsInsideArray(key, this.categoriesSelected);
  }


}