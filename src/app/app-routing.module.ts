import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionsGuard } from './permissions.guard';
import { Permission } from '../models/user';
import { EmployeeGuard } from './employee.guard';
import { environment } from '../environments/environment';

const routes: Routes = [

  //ROOT PAGE
  {
    path: '',
    redirectTo: environment.isApp ? "mobile/filial-search" : 'home',
    // redirectTo: environment.isApp ? "home-app" : 'home',
    pathMatch: 'full'
  },

  //Páginas APP Mobile
  {
    path: 'home-app',
    loadChildren: './mobile/pages/home-app/home-app.module#HomeAppPageModule'
  },
  {
    path: 'mobile/customer-details',
    loadChildren: './mobile/pages/customer/customer.module#CustomerPageModule'
  },
  {
    path: 'mobile/customer-address',
    loadChildren: './mobile/pages/customer-address/customer-address.module#CustomerAddressPageModule'
  },
  {
    path: 'mobile/detail-order',
    loadChildren: './mobile/pages/detail-order/detail-order.module#DetailOrderPageModule'
  },
  {
    path: 'mobile/evaluate-order',
    loadChildren: './mobile/pages/evaluate-order/evaluate-order.module#EvaluateOrderPageModule'
  },
  {
    path: 'mobile/list-order',
    loadChildren: './mobile/pages/list-order/list-order.module#ListOrderPageModule'
  },
  {
    path: 'mobile/track-order',
    loadChildren: './mobile/pages/track-order/track-order.module#TrackOrderPageModule'
  },
  {
    path: 'mobile/order-created-message',
    loadChildren: './mobile/pages/order-created-message/order-created-message.module#OrderCreatedMessagePageModule'
  },
  {
    path: 'mobile/order-item-edit',
    loadChildren: './mobile/pages/order-item-edit/order-item-edit.module#OrderItemEditPageModule'
  },
  {
    path: 'mobile/filial-search',
    loadChildren: './mobile/pages/filial-search/filial-search.module#FilialSearchPageModule'
  },
  {
    path: 'mobile/phone-edit',
    loadChildren: './mobile/pages/phone-edit/phone-edit.module#PhoneEditPageModule'
  },
  {
    path: 'mobile/cart',
    loadChildren: './mobile/pages/shopping-cart/shopping-cart.module#ShoppingCartPageModule'
  },
  {
    path: 'mobile/tutorial',
    loadChildren: './mobile/pages/tutorial/tutorial.module#TutorialPageModule'
  },
  {
    path: 'mobile/login-app',
    loadChildren: './mobile/pages/login-app/login-app.module#LoginAppPageModule'
  },
  {
    path: 'mobile/filial-stock',
    loadChildren: './mobile/pages/filial-stock/filial-stock.module#FilialStockPageModule'
  },
  {
    path: 'mobile/promotion-app',
    loadChildren: './mobile/pages/promotion-app/promotion-app.module#PromotionAppPageModule'
  },
  {
    path: 'mobile/promotion-detail-app',
    loadChildren: './mobile/pages/promotion-detail-app/promotion-detail-app.module#PromotionDetailAppPageModule'
  },


  //Páginas PAINEL
  {
    path: 'home',
    loadChildren: './panel/pages/home/home.module#HomePageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.ORDER, Permission.ORDER_READ]
    },
  },
  {
    path: 'company/list',
    loadChildren: './panel/pages/company/company-list/company-list.module#CompanyListPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM]
    }
  },
  {
    path: 'company/edit',
    loadChildren: './panel/pages/company/company-edit/company-edit.module#CompanyEditPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM]
    }
  },
  {
    path: 'filial/edit',
    loadChildren: './panel/pages/filial/filial-edit/filial-edit.module#FilialEditPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT]
    }
  },
  {
    path: 'filial/list',
    loadChildren: './panel/pages/filial/filial-list/filial-list.module#FilialListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'product/product-complement-update',
    loadChildren: './panel/pages/product/product-complement-update/product-complement-update.module#ProductComplementUpdatePageModule'
  },
  {
    path: 'product/list',
    loadChildren: './panel/pages/product/product-list/product-list.module#ProductListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }

  },
  {
    path: 'product/global/list',
    loadChildren: './panel/pages/product/product-global/product-global.module#ProductGlobalPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM]
    }
  },
  {
    path: 'product/global/edit',
    loadChildren: './panel/pages/product/product-global-edit/product-global-edit.module#ProductGlobalEditPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM]
    }
  },
  {
    path: 'product/edit',
    loadChildren: './panel/pages/product/product-edit/product-edit.module#ProductEditPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'promotion/list',
    loadChildren: './panel/pages/promotion/promotion-list/promotion-list.module#PromotionListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'promotion/edit',
    loadChildren: './panel/pages/promotion/promotion-edit/promotion-edit.module#PromotionEditPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'product/add-options-complement',
    loadChildren: './panel/pages/product/add-options-complement/add-options-complement.module#AddOptionsComplementPageModule'
  },
  {
    path: 'employee/list',
    loadChildren: './panel/pages/employee/employee-list/employee-list.module#EmployeeListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'employee/edit',
    loadChildren: './panel/pages/employee/employee-edit/employee-edit.module#EmployeeEditPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT],
      params: ['company_id']
    }
  },
  {
    path: 'stock/list',
    loadChildren: './panel/pages/stock/stock-list/stock-list.module#StockListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.ORDER, Permission.ORDER_READ],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'stock/promotion/list',
    loadChildren: './panel/pages/stock/stock-promotion-list/stock-promotion-list.module#StockPromotionListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT, Permission.ORDER, Permission.ORDER_READ],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'coupon/edit',
    loadChildren: './panel/pages/coupon/coupon-edit/coupon-edit.module#CouponEditPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'coupon/list',
    loadChildren: './panel/pages/coupon/coupon-list/coupon-list.module#CouponListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'order/list',
    loadChildren: './panel/pages/order/order-list/order-list.module#OrderListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'order/promotion/list',
    loadChildren: './panel/pages/order-promotion/order-promotion-list/order-promotion-list.module#OrderPromotionListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'evaluation/list',
    loadChildren: './panel/pages/evaluation/evaluation-list/evaluation-list.module#EvaluationListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'login-panel',
    loadChildren: './panel/pages/login-panel/login-panel.module#LoginPanelPageModule'
  },
  {
    path: 'terms',
    loadChildren: './panel/pages/terms-of-service/terms-of-service.module#TermsOfServicePageModule'
  },
  {
    path: 'denunciation/list',
    loadChildren: './panel/pages/denunciation/denunciation-list/denunciation-list.module#DenunciationListPageModule',
    canActivate: [PermissionsGuard],
    data: {
      permissions: [Permission.TEAM]
    }
  },
  {
    path: 'statistic/orders',
    loadChildren: './panel/pages/statistic/statistic-orders/statistic-orders.module#StatisticOrdersPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  },
  {
    path: 'invoice/list',
    loadChildren: './panel/pages/statistic/invoice-list/invoice-list.module#InvoiceListPageModule',
    canActivate: [PermissionsGuard, EmployeeGuard],
    data: {
      permissions: [Permission.TEAM, Permission.COMPANY_MANAGEMENT, Permission.FILIAL_MANAGEMENT],
      params: ['company_id', 'filial_id']
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }