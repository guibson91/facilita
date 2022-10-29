(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-statistic-invoice-list-invoice-list-module"],{

/***/ "./src/app/panel/pages/statistic/invoice-list/invoice-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/invoice-list/invoice-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: InvoiceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListPageModule", function() { return InvoiceListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _invoice_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-list.page */ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.ts");
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
        component: _invoice_list_page__WEBPACK_IMPORTED_MODULE_5__["InvoiceListPage"]
    }
];
var InvoiceListPageModule = /** @class */ (function () {
    function InvoiceListPageModule() {
    }
    InvoiceListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoice_list_page__WEBPACK_IMPORTED_MODULE_5__["InvoiceListPage"]]
        })
    ], InvoiceListPageModule);
    return InvoiceListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/invoice-list/invoice-list.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Fatura\" icon=\"menus-icon-credit-card\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <nano-loading [loading]=\"loading\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col col6 *ngFor=\"let item of invoices; let i = index\" class=\"content-month\" no-padding>\r\n          <ion-list no-padding>\r\n            <span class=\"month-title\" ion-text padding>{{item.id_name}}</span>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Comissão </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">Foi vendido <strong>R$ {{item.sales}}</strong> e a taxa de comissão é <strong>{{(item.fee*100) | number : '1.0-1'}}%</strong></p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap class=\"green\" slot=\"end\">\r\n                <strong> R$ {{(item.sales * item.fee ) | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Mensalidade </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">O valor da mensalidade é <strong>{{item.monthly_payment}}</strong> e\r\n                  foi passado <strong>{{(item.days*100) | number : '1.0-1'}}%</strong> do mês.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{(item.monthly_payment * item.days ) | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n            <ion-item no-lines>\r\n              <div>\r\n                <h5 ion-text text-wrap no-margin>\r\n                  <strong> Fatura a ser paga </strong>\r\n                </h5>\r\n                <p ion-text text-wrap no-margin class=\"description\">O maior valor entre a mensalidade e a comissão.</p>\r\n              </div>\r\n              <h5 ion-text item-right text-wrap slot=\"end\">\r\n                <strong> R$ {{item.total | number : '1.2-2'}}</strong>\r\n              </h5>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card class=\"content-card\" text-center padding *ngIf=\"!existsInvoice\">\r\n      <p>Você ainda não possui faturas</p>\r\n    </ion-card>\r\n\r\n  </nano-loading>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/invoice-list/invoice-list.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-month {\n  --background: white;\n  background: white;\n  min-width: 278px;\n  margin: 10px;\n  box-shadow: 1px 1px 10px #ccc; }\n  .content-month h2.text {\n    margin-top: 0px !important; }\n  .content-month .month-title {\n    background: var(--ion-color-primary);\n    text-transform: capitalize;\n    color: white;\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .content-month .info {\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 0.55px solid #ddd; }\n  .content-month .info:last-child {\n      border: none; }\n  .content-month .info .info-name {\n      width: 75%; }\n  .content-month .info .info-value {\n      white-space: nowrap;\n      display: flex;\n      align-items: center; }\n  ion-item {\n  --background: white;\n  padding-top: 20px; }\n  ion-list {\n  --background: white;\n  background: white;\n  margin-bottom: 20px; }\n  .green {\n  color: var(--ion-color-success-shade); }\n  .description {\n  color: var(--ion-color-medium-shade); }\n"

/***/ }),

/***/ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/statistic/invoice-list/invoice-list.page.ts ***!
  \*************************************************************************/
/*! exports provided: InvoiceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListPage", function() { return InvoiceListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InvoiceListPage = /** @class */ (function () {
    function InvoiceListPage(menuCtrl, shared, system, ref, route, authentication, navCtrl) {
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
    InvoiceListPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    InvoiceListPage.prototype.ngOnDestroy = function () {
        if (this.invoicesSubscription)
            this.invoicesSubscription.unsubscribe();
    };
    /**
     * Carrega a lista da página
     */
    InvoiceListPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsInvoice = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_8__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_9__["Filial"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        if (this.invoicesSubscription)
            this.invoicesSubscription.unsubscribe();
        this.invoicesSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            company$,
            filial$,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (arr) {
            _this.company = arr[0];
            _this.filial = arr[1];
            return _this.filial;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (filial) {
            return _models_filial__WEBPACK_IMPORTED_MODULE_9__["Filial"].invoices.list(filial.id);
        })).subscribe(function (invoices) {
            if (!invoices || invoices.length <= 0)
                _this.existsInvoice = false;
            else
                _this.existsInvoice = true;
            _this.invoices = invoices;
            for (var _i = 0, _a = _this.invoices; _i < _a.length; _i++) {
                var invoice = _a[_i];
                invoice.id_name = _this.getStringMonth(invoice.month.split('-')[1]);
            }
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    InvoiceListPage.prototype.getStringMonth = function (id) {
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('pt-BR');
        return moment__WEBPACK_IMPORTED_MODULE_10__({ month: Number(id) - 1 }).format('MMMM');
    };
    InvoiceListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-list',
            template: __webpack_require__(/*! ./invoice-list.page.html */ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.html"),
            styles: [__webpack_require__(/*! ./invoice-list.page.scss */ "./src/app/panel/pages/statistic/invoice-list/invoice-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], InvoiceListPage);
    return InvoiceListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-statistic-invoice-list-invoice-list-module.js.map