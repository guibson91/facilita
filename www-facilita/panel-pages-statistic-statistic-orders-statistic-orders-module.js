(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-statistic-statistic-orders-statistic-orders-module"],{

/***/ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/statistic-orders/statistic-orders.module.ts ***!
  \***********************************************************************************/
/*! exports provided: StatisticOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticOrdersPageModule", function() { return StatisticOrdersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _statistic_orders_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistic-orders.page */ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _statistic_orders_page__WEBPACK_IMPORTED_MODULE_5__["StatisticOrdersPage"]
    }
];
var StatisticOrdersPageModule = /** @class */ (function () {
    function StatisticOrdersPageModule() {
    }
    StatisticOrdersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_statistic_orders_page__WEBPACK_IMPORTED_MODULE_5__["StatisticOrdersPage"]]
        })
    ], StatisticOrdersPageModule);
    return StatisticOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Relatório de vendas\" icon=\"menus-icon-ecommerce-12\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <nano-loading [loading]=\"loading\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col col6 *ngFor=\"let item of orderStatistics; let i = index\" class=\"content-month\" no-padding>\r\n          <ion-list no-padding>\r\n            <span class=\"month-title\" ion-text padding>{{item.id_name}}</span>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Vendas </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Valor bruto captado de todos os pedidos, correspondente a receita em\r\n                  <strong>caixa</strong> ou em forma de\r\n                  <strong>bônus</strong>.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap class=\"green\" slot=\"end\">\r\n                <strong> R$ {{item.done.subtotal + item.done.delivery | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Caixa </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Valor recebido do consumidor em dinheiro, cartão de crédito e débito ou\r\n                  vale-alimentação.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{item.done.subtotal + item.done.delivery - item.done.discounts -\r\n                  item.done.discountsFromTeam | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Cupom da empresa </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Valor recebido do consumidor em\r\n                  <strong>cupom</strong> criado pela empresa.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{item.done.discounts | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Cupom do Facilita </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Valor recebido do consumidor em\r\n                  <strong>cupom</strong> criado pelo Facilita. Esse valor será abatido da fatura.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{item.done.discountsFromTeam | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Pedidos incompletos </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Pedidos que foram aceitos, mas por algum motivo foram cancelados pela gerência da\r\n                  empresa.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{item.incomplete.subtotal + item.incomplete.delivery | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card class=\"content-card\" text-center padding *ngIf=\"!existsInvoice\">\r\n      <p>Você ainda não possui estatística de venda</p>\r\n    </ion-card>\r\n\r\n  </nano-loading>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-month {\n  --background: white;\n  background: white;\n  min-width: 278px;\n  margin: 10px;\n  box-shadow: 1px 1px 10px #ccc; }\n  .content-month h2.text {\n    margin-top: 0px !important; }\n  .content-month .month-title {\n    background: var(--ion-color-primary);\n    text-transform: capitalize;\n    color: white;\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .content-month .info {\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 0.55px solid #ddd; }\n  .content-month .info:last-child {\n      border: none; }\n  .content-month .info .info-name {\n      width: 75%; }\n  .content-month .info .info-value {\n      white-space: nowrap;\n      display: flex;\n      align-items: center; }\n  ion-item {\n  --background: white;\n  padding-top: 20px; }\n  ion-list {\n  --background: white;\n  background: white;\n  margin-bottom: 20px; }\n  .green {\n  color: var(--ion-color-success-shade); }\n  .description {\n  color: var(--ion-color-medium-shade); }\n"

/***/ }),

/***/ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.ts ***!
  \*********************************************************************************/
/*! exports provided: StatisticOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticOrdersPage", function() { return StatisticOrdersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_statistics_order_statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/statistics/order-statistic */ "./src/models/statistics/order-statistic.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var StatisticOrdersPage = /** @class */ (function () {
    function StatisticOrdersPage(menuCtrl, shared, system, ref, route, authentication, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.system = system;
        this.ref = ref;
        this.route = route;
        this.authentication = authentication;
        this.navCtrl = navCtrl;
        /**
         * Se está carregando os elementos da página
         */
        this.loading = true;
        /**
         * Se existe alguma fatura
         */
        this.existsInvoice = true;
    }
    /**
       * Inicializando estruturas após entrar na página.
       */
    StatisticOrdersPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    StatisticOrdersPage.prototype.ngOnDestroy = function () {
        if (this.orderStatisticsSubscription)
            this.orderStatisticsSubscription.unsubscribe();
    };
    /**
     * Carrega a lista da página
     */
    StatisticOrdersPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsInvoice = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_10__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_7__["Filial"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        if (this.orderStatisticsSubscription)
            this.orderStatisticsSubscription.unsubscribe();
        this.orderStatisticsSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            company$,
            filial$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (arr) {
            var company = arr[0];
            var filial = arr[1];
            if (filial)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([filial]);
            else if (company)
                return _models_company__WEBPACK_IMPORTED_MODULE_10__["Company"].filials.list(company.id, undefined, undefined, undefined, true);
            else
                return _models_filial__WEBPACK_IMPORTED_MODULE_7__["Filial"].list(undefined, undefined, undefined, true);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (filials) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(filials)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (filials) {
                if (!filials || filials.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(filials.map(function (filial) { return _models_statistics_order_statistic__WEBPACK_IMPORTED_MODULE_2__["OrderStatistics"].getMonths(filial.id); }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (filialsStatistics) { return [].concat.apply([], filialsStatistics); }));
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (statistics) {
                var months = {};
                /**
                 * Fazendo o merge das estatística de todas as estatisticas diferentes agrupadas por mês
                 */
                for (var _i = 0, statistics_1 = statistics; _i < statistics_1.length; _i++) {
                    var statistic = statistics_1[_i];
                    months[statistic.id] = _models_statistics_order_statistic__WEBPACK_IMPORTED_MODULE_2__["OrderStatistics"].join(statistic, months[statistic.id]);
                }
                var aux = [];
                for (var month in months) {
                    months[month].id_name = _this.getStringMonth(months[month].id.split('-')[1]);
                    aux.push(months[month]);
                }
                console.log("Aux", aux);
                return aux.reverse();
            }));
        }))
            .subscribe(function (ordersStatistics) {
            if (!ordersStatistics || ordersStatistics.length <= 0)
                _this.existsInvoice = false;
            else
                _this.existsInvoice = true;
            _this.orderStatistics = ordersStatistics;
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    StatisticOrdersPage.prototype.getStringMonth = function (id) {
        moment__WEBPACK_IMPORTED_MODULE_11__["locale"]('pt-BR');
        return moment__WEBPACK_IMPORTED_MODULE_11__({ month: Number(id) - 1 }).format('MMMM');
    };
    StatisticOrdersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistic-orders',
            template: __webpack_require__(/*! ./statistic-orders.page.html */ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.html"),
            styles: [__webpack_require__(/*! ./statistic-orders.page.scss */ "./src/app/panel/pages/statistic/statistic-orders/statistic-orders.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], StatisticOrdersPage);
    return StatisticOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-statistic-statistic-orders-statistic-orders-module.js.map