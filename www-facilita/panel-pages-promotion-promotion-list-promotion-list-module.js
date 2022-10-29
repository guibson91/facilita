(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-promotion-promotion-list-promotion-list-module"],{

/***/ "./src/app/panel/pages/promotion/promotion-list/promotion-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-list/promotion-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PromotionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionListPageModule", function() { return PromotionListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _promotion_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotion-list.page */ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["PromotionListPage"]
    }
];
var PromotionListPageModule = /** @class */ (function () {
    function PromotionListPageModule() {
    }
    PromotionListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["PromotionListPage"]]
        })
    ], PromotionListPageModule);
    return PromotionListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-list/promotion-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Promoções\" icon=\"menus-icon-ecommerce-41\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"change()\">\r\n    </ion-searchbar>\r\n\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n        <div *ngFor=\"let promotion of promotions | filterBy:['name', 'description']:searchString; let i = index\">\r\n          <ion-item no-lines padding text-wrap class=\"product\">\r\n            <!-- Imagem -->\r\n            <nano-thumb [ngClass]=\"{ 'goneImage' : !promotion?.image }\" item-left [src]=\"promotion.image\"></nano-thumb>\r\n            <!-- Nome -->\r\n            <h2 text-wrap padding-top padding-horizontal>\r\n              {{promotion.name}}\r\n            </h2>\r\n            <!-- Descrição -->\r\n            <p text-wrap padding-horizontal>{{promotion.description}}</p>\r\n\r\n            <p text-wrap padding-horizontal>\r\n              R$ {{promotion.priceBase | number : '1.2-2'}}\r\n            </p>\r\n            <div item-right>\r\n              <ion-button (click)=\"edit(promotion)\" fill=\"clear\" color=\"proceed\">\r\n                <ion-icon name=\"md-create\"></ion-icon> Editar\r\n              </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-item text-center padding *ngIf=\"!existsPromotions\">\r\n          <p ion-text>Você ainda não possui nenhuma promoção</p>\r\n        </ion-item>\r\n      </ion-list>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-list/promotion-list.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f8f8f8 !important; }\n\nion-grid ion-icon {\n  margin-top: 14px;\n  font-size: 2.2em; }\n\nion-item-divider {\n  border-bottom: none !important; }\n\nion-item-divider ion-label {\n    margin-bottom: 0px !important; }\n\nion-item-divider h1 {\n    color: #333333 !important;\n    font-family: myFontBold !important;\n    padding-top: 16px;\n    font-size: 2.0em;\n    text-align: left !important;\n    margin: 0 0.7em;\n    border-bottom: 1px dashed #999; }\n\nion-item {\n  padding: 8px 16px 8px 16px !important; }\n\n@media (max-width: 400px) {\n    ion-item {\n      display: flex;\n      flex-direction: column;\n      margin-top: 10px; } }\n\nion-item ion-label {\n    padding-left: 8px !important; }\n\nion-item ion-label h2 {\n      font-weight: bold !important; }\n\nion-item nano-thumb.goneImage {\n    display: none !important; }\n\nion-item button {\n    padding: 8px !important; }\n\n.category-name {\n  font-family: myFontBold;\n  padding-top: 16px;\n  font-size: 2.0em;\n  text-align: left;\n  margin: 0 0.7em;\n  border-bottom: 1px dashed #999;\n  margin-bottom: 10px !important; }\n\n.products {\n  margin: auto; }\n\n.products .list-item {\n    display: flex;\n    margin: 0.6em 0 0.6em 1.6em;\n    background-color: white !important; }\n\n.products .list-item .product-item {\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-right: 1.2em; }\n\n.products .list-item .product-item .name {\n        font-size: 1.4em;\n        color: #666; }\n\n.products .list-item .product-item .description {\n        font-size: 1em;\n        color: #999; }\n\n.products .list-item .product-item .price {\n        white-space: nowrap;\n        font-size: 1.4em;\n        color: #4c4; }\n\n.myfilter {\n  display: flex; }\n\n.myfilter button {\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 8px !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-list/promotion-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PromotionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionListPage", function() { return PromotionListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromotionListPage = /** @class */ (function () {
    function PromotionListPage(navCtrl, shared, authentication, popoverCtrl, menuCtrl, ref, loadingCtrl, route) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.authentication = authentication;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Verifica se existem promoções
         */
        this.existsPromotions = true;
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    PromotionListPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    PromotionListPage.prototype.ngOnDestroy = function () {
        if (this.subscriptionPromotions) {
            this.subscriptionPromotions.unsubscribe();
        }
    };
    PromotionListPage.prototype.load = function () {
        var _this = this;
        this.existsPromotions = true;
        this.loading = true;
        this.subscriptionPromotions = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_2__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (company) {
            _this.company = company;
            return _models_company__WEBPACK_IMPORTED_MODULE_2__["Company"].promotions.list(company.id);
        }))
            .subscribe(function (promotions) {
            if (!promotions || promotions.length <= 0)
                _this.existsPromotions = false;
            _this.promotions = promotions;
            _this.loading = false;
            _this.change();
        });
    };
    PromotionListPage.prototype.change = function () {
        this.ref.detectChanges();
    };
    /**
     * Dispara evento se as teclas alt + n for pressionado
     * @param event evento
     */
    PromotionListPage.prototype.hotkeys = function (event) {
        if (event.keyCode == 80 && event.altKey) {
            this.add();
        }
    };
    /**
     * Ir para página para adicionar um nova promoção
     */
    PromotionListPage.prototype.add = function () {
        this.navCtrl.navigateRoot(['promotion/edit', { company_id: this.company.id }]);
    };
    /**
     * Ir para a página ProductEditPage para editar um produto
     * @param promotion produto a ser editado
     */
    PromotionListPage.prototype.edit = function (promotion) {
        this.navCtrl.navigateRoot(['promotion/edit', { company_id: this.company.id, promotion_id: promotion.id }]);
    };
    PromotionListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-list',
            template: __webpack_require__(/*! ./promotion-list.page.html */ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.html"),
            styles: [__webpack_require__(/*! ./promotion-list.page.scss */ "./src/app/panel/pages/promotion/promotion-list/promotion-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], PromotionListPage);
    return PromotionListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-promotion-promotion-list-promotion-list-module.js.map