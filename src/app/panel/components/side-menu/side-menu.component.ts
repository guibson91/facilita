import { Component } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { of } from 'rxjs';
import { flatMap, switchMap, first } from 'rxjs/operators'
import { AuthenticationService } from '../../../services/authentication.service';
import { SharedService } from '../../../services/shared.service';
import { SystemService } from '../../../services/system.service';
import { Filial } from '../../../../models/filial';
import { PermissionType, User, Permission } from '../../../../models/user';
import { elementIsInsideArray } from '../../../../modules/firestore/utils';
import { Company } from '../../../../models/company';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  /**
   * Array de possíveis opções do menu
   */
  menuConfigs: MenuConfig[] = menuConfigs

  /**
   * Filial atual do funcionário de uma filial
   * Única filial do gerente de uma empresa(no caso da empresa ter só uma filial)
   */
  filial: Filial;

  /**
   * Filial atual do funcionário de uma filial
   * Única filial do gerente de uma empresa(no caso da empresa ter só uma filial)
   */
  company: Company

  /**
   * Permissões do usuário atual.
   */
  permissions: PermissionType[] = [];

  get isTEAM(): boolean {
    return this.shared.isTeam
  }

  /**
   * Se é um gerente de uma empresa que só possui uma filial.
   */
  onlyOneFilial: boolean = false;

  constructor(public auth: AuthenticationService,
    public shared: SharedService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public ref: ChangeDetectorRef,
    public system: SystemService) {

    this.shared.user$.pipe(flatMap((user) => {
      //Se usuário não estiver logado
      if (!user) return of(null);
      //Se houver usuário logado, obter suas permissões
      this.permissions = user.permissions;
      //Apenas Filial Manager podem ter opção de abrir/fechar filial
      if (user && !user.filial_employee) return of(null);
      //Se existir usuário e ele for gerente de filial
      return this.shared.filial$.pipe(first())
    })).subscribe((filial: Filial) => {
      if (!filial) return;
      this.filial = filial;
      this.ref.detectChanges()
    })

    this.shared.company$
      .pipe(first())
      .subscribe((company: Company) => {
        this.company = company;
        this.ref.detectChanges()
      })

    this.shared.user$.pipe(flatMap((user: User) => {
      //GERENTE GERAL
      if (user && user.company_employee && user.company_employee.id) {
        return Filial.list([
          {
            name: 'company.id',
            operator: '==',
            value: user.company_employee.id
          }
        ])
      }
      else {
        return of(null);
      }
    })).subscribe((filials: Filial[]) => {
      if (filials && filials.length == 1) {
        this.filial = filials[0];
        this.onlyOneFilial = true;
      }
      else {
        this.onlyOneFilial = false;
      }
      this.ref.detectChanges()
    })
  }

  /**
   * Verifica se alguma das permissões do usuário faz parte das permissões da página (funcionalidade)
   * @param page página com permissões de acesso
   * @author Guibson Martins
   */
  showMenu(page: MenuConfig | PageModel) {
    if ((page as PageModel).component &&
      (page as PageModel).component === 'stock/list' &&
      this.onlyOneFilial &&
      this.company.delivery)
      return true;
    if ((page as PageModel).component &&
      (page as PageModel).component === 'stock/promotion/list' &&
      this.onlyOneFilial &&
      this.company.promotion)
      return true;
    for (let permissionUser of this.permissions) {
      if (elementIsInsideArray(permissionUser, page.permissions)) {
        if (this.isTEAM || (page.delivery && page.promotion)) return true
        if (!this.company) return false
        if (page.delivery && !this.company.delivery) return false
        if (page.promotion && !this.company.promotion) return false
        return true;
      }
    }
    return false;
  }

  async goHomePage() {
    await this.navCtrl.navigateRoot('home');
  }

  goOrder() {
    this.navCtrl.navigateRoot('order/list')
  }

  goOrderPromotion() {
    this.navCtrl.navigateRoot('order/promotion/list')
  }

  /**
   * Realizar o logout
   */
  public async logout() {
    let confirm = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Você tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          handler: async () => {
            let loading = await this.loadingCtrl.create();
            loading.present();
            this.auth.logout()
              .subscribe(() => {
                loading.dismiss()
                this.navCtrl.navigateRoot(this.shared.firstPage)
              }, err => {
                loading.dismiss()
                this.system.showErrorAlert(err)
              })
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * Abrir uma determinada página do menu
   * @param page Página que será aberta
  */
  public async clickPage(page: PageModel) {
    let params = {}
    if ((page as PageModel).component && (page as PageModel).component === 'stock/list' && this.onlyOneFilial) {
      params = {
        filial_id: this.filial.id
      }
    }
    if ((page as PageModel).component && (page as PageModel).component === 'stock/promotion/list' && this.onlyOneFilial) {
      params = {
        filial_id: this.filial.id
      }
    }

    try {
      if (!page.component) throw Error("Não foi definido qual a url desse menu");
      await this.navCtrl.navigateRoot([page.component, params])
    } catch (e) {
      this.system.showErrorAlert(e)
    }
  }
}


var menuConfigs: MenuConfig[] = [
  {
    title: "Estrutural",
    description: "Estabelecimentos, Funcionários, Produtos, Categorias, Estoques",
    showSubmenus: false,
    delivery: true,
    promotion: true,
    permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
    submenus: [
      {
        title: 'Empresas',
        class: 'menus-icon-building',
        component: "company/list",
        permissions: [Permission.TEAM],
        delivery: true,
        promotion: true,
      },
      {
        title: 'Estabelecimentos',
        class: 'menus-icon-shop',
        component: "filial/list",
        permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
        delivery: true,
        promotion: true,
      },
      {
        title: 'Funcionários',
        class: 'menus-icon-servant-outline',
        component: "employee/list",
        permissions: [Permission.COMPANY_MANAGEMENT],
        delivery: true,
        promotion: true,
      },
      {
        title: 'Produtos',
        class: 'menus-icon-pizza',
        component: "product/list",
        permissions: [Permission.COMPANY_MANAGEMENT],
        delivery: true,
        promotion: false,
      },
      {
        title: 'Produtos Globais',
        class: 'menus-icon-ecommerce-43',
        component: "product/global/list",
        permissions: [Permission.TEAM],
        delivery: true,
        promotion: true,
      },
      {
        title: 'Estoque',
        class: 'menus-icon-menu',
        component: "stock/list",
        permissions: [Permission.FILIAL_MANAGEMENT],
        delivery: true,
        promotion: false,
      },
      {
        title: 'Promoções',
        class: 'menus-icon-ecommerce-41',
        component: "promotion/list",
        permissions: [Permission.COMPANY_MANAGEMENT],
        delivery: false,
        promotion: true,
      },
      {
        title: 'Estoque de promoções',
        class: 'menus-icon-ecommerce-45',
        component: "stock/promotion/list",
        delivery: false,
        promotion: true,
        permissions: [Permission.FILIAL_MANAGEMENT]
      }
    ]
  },
  {
    title: "Financeiro",
    description: "Faturas",
    showSubmenus: false,
    delivery: true,
    promotion: true,
    permissions: [Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.TEAM],
    submenus: [
      {
        title: "Vendas",
        class: 'menus-icon-ecommerce-12',
        component: "statistic/orders",
        delivery: true,
        promotion: false,
        permissions: [Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.TEAM]
      },
      {
        title: "Fatura",
        class: 'menus-icon-credit-card',
        component: "statistic/orders",
        delivery: true,
        promotion: true,
        permissions: [Permission.FILIAL_MANAGEMENT]
      }
    ]
  },
  {
    title: "Relacionamento",
    description: "Avaliações, Cupons",
    showSubmenus: false,
    permissions: [Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.TEAM],
    delivery: true,
    promotion: false,
    submenus: [
      {
        title: "Cupons",
        class: 'menus-icon-ecommerce-46',
        component: "coupon/list",
        delivery: true,
        promotion: false,
        permissions: [Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.TEAM]
      },
      {
        title: "Avaliações",
        class: 'menus-icon-ecommerce-3',
        component: "evaluation/list",
        delivery: true,
        promotion: false,
        permissions: [Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.TEAM]
      },
      {
        title: "Denúncias",
        class: 'menus-icon-ecommerce-3',
        component: "denunciation/list",
        delivery: true,
        promotion: false,
        permissions: [Permission.TEAM]
      }
    ]
  }
]

interface MenuConfig {
  title: string
  description: string
  showSubmenus: boolean
  permissions: PermissionType[], //define quais os tipos de usuário que poderão acessá-la
  delivery: boolean, // Se o menu aparece para empresas que fazem delivery
  promotion: boolean, // Se o menu aparece para empresas que fazem promoções
  submenus: PageModel[]
}
/**
 * Define as características de uma página
 * ou de uma funcionalidade que será exibida no menu lateral
 */
export interface PageModel {
  title: string, //label exibido no painel
  icon?: string, //ícone exibido no painel
  class?: string, //Classe com o ícone (fonte)
  component?: string, //representa a página a ser aberta
  permissions?: PermissionType[], //define quais os tipos de usuário que poderão acessá-la
  delivery: boolean, // Se o menu aparece para empresas que fazem delivery
  promotion: boolean, // Se o menu aparece para empresas que fazem promoções
  available?: boolean, //define se essa página está habilitada o usuário logado
  active?: boolean, //define se o item está ou não ativo, ie, se foi clicado por último
}