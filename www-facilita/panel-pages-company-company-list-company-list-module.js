(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-company-company-list-company-list-module"],{

/***/ "./src/app/panel/pages/company/company-list/company-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-list/company-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListPageModule", function() { return CompanyListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _company_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-list.page */ "./src/app/panel/pages/company/company-list/company-list.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _company_list_page__WEBPACK_IMPORTED_MODULE_5__["CompanyListPage"]
    }
];
var CompanyListPageModule = /** @class */ (function () {
    function CompanyListPageModule() {
    }
    CompanyListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_company_list_page__WEBPACK_IMPORTED_MODULE_5__["CompanyListPage"]]
        })
    ], CompanyListPageModule);
    return CompanyListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/company/company-list/company-list.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-list/company-list.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Empresas\" icon=\"menus-icon-building\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"detect()\">\r\n    </ion-searchbar>\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n        <div class=\"container\" no-lines padding *ngFor=\"let company of companies$ | async | filterBy:['name']:searchString\" text-wrap>\r\n          <h2 ion-text class=\"company-name\" [ngClass]=\"{inactive: !company?.active}\">{{company.name}}</h2>\r\n          <ion-input type=\"text\" value=\"{{company.id}}\"></ion-input>\r\n          <ion-button fill=\"clear\" (click)=\"edit(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Editar\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openFiliais(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Filiais\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openProducts(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Produtos\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openPromotions(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Promoções\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openOrders(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Pedidos\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openOrdersPromotion(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Promoções geradas\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openFinancial(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Vendas\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openEmployee(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Funcionários\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"openEvaluate(company)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Avaliações\r\n          </ion-button>\r\n          <ion-item class=\"active-button\">\r\n            <ion-label>Ativo</ion-label>\r\n            <ion-toggle [(ngModel)]=\"company.active\" (ionChange)=\"changeActiveStatus(company)\"></ion-toggle>\r\n          </ion-item>\r\n        </div>\r\n      </ion-list>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/company/company-list/company-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-list/company-list.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-name {\n  margin-top: 0px !important; }\n\ndiv.container {\n  border-bottom: 1px solid #eee;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center; }\n\ndiv.container h2 {\n    font-weight: bold;\n    color: var(--ion-color-primary); }\n\ndiv.container h2.inactive {\n    font-weight: normal;\n    color: lightgrey;\n    text-decoration: line-through; }\n\ndiv.container ion-item.active-button {\n    width: 10em; }\n\ndiv.container ion-item ion-label {\n    font-size: 1.2em;\n    font-weight: bold;\n    color: var(--ion-color-primary); }\n"

/***/ }),

/***/ "./src/app/panel/pages/company/company-list/company-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/company/company-list/company-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListPage", function() { return CompanyListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { RestaurantEditPage, FilialListPage, OrderListPage, InvoicePage, ProductListPage } from '../../pages';
var CompanyListPage = /** @class */ (function () {
    function CompanyListPage(navCtrl, menuCtrl, ref, shared) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.shared = shared;
        this.companies$ = _models_company__WEBPACK_IMPORTED_MODULE_3__["Company"].list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.loading = false;
            setTimeout(function () {
                _this.ref.detectChanges();
            }, 30);
        }));
        this.loading = true;
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    CompanyListPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
    };
    CompanyListPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    CompanyListPage.prototype.add = function () {
        this.navCtrl.navigateRoot('company/edit');
    };
    CompanyListPage.prototype.edit = function (company) {
        this.navCtrl.navigateRoot(['company/edit', { id: (company ? company.id : undefined) }]);
    };
    CompanyListPage.prototype.openFiliais = function (company) {
        this.navCtrl.navigateRoot(['filial/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openOrders = function (company) {
        this.navCtrl.navigateRoot(['order/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openOrdersPromotion = function (company) {
        this.navCtrl.navigateRoot(['order/promotion/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openFinancial = function (company) {
        this.navCtrl.navigateRoot(['statistic/orders', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openProducts = function (company) {
        this.navCtrl.navigateRoot(['product/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openPromotions = function (company) {
        this.navCtrl.navigateRoot(['promotion/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openEmployee = function (company) {
        this.navCtrl.navigateRoot(['employee/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.openEvaluate = function (company) {
        this.navCtrl.navigateRoot(['evaluation/list', { company_id: company.id }]);
    };
    CompanyListPage.prototype.changeActiveStatus = function (company) {
        var rest = {};
        rest.active = company.active;
        _models_company__WEBPACK_IMPORTED_MODULE_3__["Company"].update(company.id, rest).subscribe();
    };
    CompanyListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__(/*! ./company-list.page.html */ "./src/app/panel/pages/company/company-list/company-list.page.html"),
            styles: [__webpack_require__(/*! ./company-list.page.scss */ "./src/app/panel/pages/company/company-list/company-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], CompanyListPage);
    return CompanyListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-company-company-list-company-list-module.js.map