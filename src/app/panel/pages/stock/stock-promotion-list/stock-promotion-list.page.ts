import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Company } from '../../../../../models/company';
import { Filial } from '../../../../../models/filial';
import { PromotionStock, PromotionService } from '../../../../services/promotion.service';
import { Subscription, of, combineLatest } from 'rxjs';
import { NavController, PopoverController, AlertController, MenuController, LoadingController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SystemService } from '../../../../services/system.service';
import { switchMap, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-stock-promotion-list',
  templateUrl: './stock-promotion-list.page.html',
  styleUrls: ['./stock-promotion-list.page.scss'],
})
export class StockPromotionListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Empresa no qual está sendo listado as promoções
   */
  company: Company;

  /**
   * Filial atual que será listado as promoções
   */
  filial: Filial;

  /**
   * Lista de todas as promoções da empresa,
   * mas com o atributo active(se está presente na filial)
   */

  promotionsStock: PromotionStock[];

  /**
   * Subscription do observable que consulta promoções
   */
  promotionsStockSubscription: Subscription

  /**
   * Verifica se existe promoções
   */
  existsPromotions: boolean = false

  /**
   * Exibir loading quando a lista estiver sendo carregada
   */
  loading: boolean = true;

  /**
   * Subscription do observable que carrega as categorias
   */
  initSubscription: Subscription

  constructor(private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private ref: ChangeDetectorRef,
    private promotionService: PromotionService,
    private shared: SharedService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private system: SystemService) { }

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
      .subscribe((arr: [Company, Filial]) => {
        this.company = arr[0];
        this.filial = arr[1];

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
    if (this.promotionsStockSubscription) this.promotionsStockSubscription.unsubscribe()

    //Obtém lista de promoções de estoque de uma filial ordenados
    this.promotionsStockSubscription = this.promotionService.getPromotionsStockFilial(this.filial)
      .subscribe((promotion_stock: PromotionStock[]) => {
        this.promotionsStock = promotion_stock;

        if (!this.promotionsStock || this.promotionsStock.length <= 0) this.existsPromotions = false;
        else this.existsPromotions = true;

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
   * Adiciona a promoção no estoque.
   * @param promotion Promoção a ser adicionada
   */
  addPromotion(promotion: PromotionStock): void {
    Filial.promotion_stock.add(this.filial.id, promotion.id, { active: true, quantity: promotion.quantity || 0 })
      .subscribe(() => {
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  /**
   * Remove a promoção do estoque.
   * @param promotion Promoção a ser removida
   */
  removePromotion(promotion: PromotionStock, index: number): void {
    //Remove a relação da promoção com o estoque.
    Filial.promotion_stock.add(this.filial.id, promotion.id, { active: false, quantity: promotion.quantity || 0 })
      .subscribe(() => {
        // this.refresh()
        this.ref.detectChanges()
      }, err => {
        this.system.showErrorAlert(err);
      });
  }

  ngOnDestroy() {
    if (this.initSubscription) this.initSubscription.unsubscribe()
    if (this.promotionsStockSubscription) this.promotionsStockSubscription.unsubscribe()
  }
}