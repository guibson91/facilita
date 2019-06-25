import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Promotion } from '../../../../../models/promotion';
import { Subscription, of } from 'rxjs';
import { Company } from '../../../../../models/company';
import { NavController, PopoverController, MenuController, LoadingController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.page.html',
  styleUrls: ['./promotion-list.page.scss'],
})
export class PromotionListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  /**
   * Lista de produtos ordenados
   */
  promotions: Promotion[]

  /**
   * Subscription do subscribe inicial que carrega os produtos
   */
  subscriptionPromotions: Subscription

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Verifica se existem promoções
   */
  existsPromotions: boolean = true;

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
    private route: ActivatedRoute) { }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true)
    this.load()
  }

  ngOnDestroy() {
    if (this.subscriptionPromotions) {
      this.subscriptionPromotions.unsubscribe()
    }
  }

  load() {
    this.existsPromotions = true
    this.loading = true

    this.subscriptionPromotions = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))
      .pipe(first()).pipe(switchMap((company: Company) => {
        this.company = company;

        return Company.promotions.list(company.id)
      }))
      .subscribe((promotions: Promotion[]) => {
        if (!promotions || promotions.length <= 0) this.existsPromotions = false
        this.promotions = promotions;
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
   * Ir para página para adicionar um nova promoção
   */
  add() {
    this.navCtrl.navigateRoot(['promotion/edit', { company_id: this.company.id }])
  }

  /** 
   * Ir para a página ProductEditPage para editar um produto
   * @param promotion produto a ser editado
   */
  edit(promotion: Promotion) {
    this.navCtrl.navigateRoot(['promotion/edit', { company_id: this.company.id, promotion_id: promotion.id }])
  }

}