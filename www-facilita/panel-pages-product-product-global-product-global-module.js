(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-product-product-global-product-global-module"],{

/***/ "./src/app/panel/pages/product/product-global/product-global.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global/product-global.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductGlobalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGlobalPageModule", function() { return ProductGlobalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_global_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-global.page */ "./src/app/panel/pages/product/product-global/product-global.page.ts");
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
        component: _product_global_page__WEBPACK_IMPORTED_MODULE_5__["ProductGlobalPage"]
    }
];
var ProductGlobalPageModule = /** @class */ (function () {
    function ProductGlobalPageModule() {
    }
    ProductGlobalPageModule = __decorate([
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
            declarations: [_product_global_page__WEBPACK_IMPORTED_MODULE_5__["ProductGlobalPage"]]
        })
    ], ProductGlobalPageModule);
    return ProductGlobalPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/product-global/product-global.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global/product-global.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Produtos globais\" icon=\"menus-icon-ecommerce-43\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"change()\">\r\n    </ion-searchbar>\r\n\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n        <div *ngFor=\"let product of products | filterBy:['name', 'description']:searchString; let i = index\">\r\n          <ion-item no-lines padding text-wrap class=\"product\">\r\n            <!-- Imagem -->\r\n            <nano-thumb [ngClass]=\"{ 'goneImage' : !product?.image }\" item-left [src]=\"product.image\"></nano-thumb>\r\n            <!-- Nome -->\r\n            <h2 text-wrap padding-top padding-horizontal>\r\n              {{product.name}}\r\n            </h2>\r\n            <!-- Descrição -->\r\n            <p text-wrap padding-horizontal>{{product.description}}</p>\r\n\r\n            <p text-wrap padding-horizontal>\r\n              R$ {{product.priceBase | number : '1.2-2'}}\r\n            </p>\r\n            <div item-right>\r\n              <ion-button (click)=\"edit(product)\" fill=\"clear\" color=\"proceed\">\r\n                <ion-icon name=\"md-create\"></ion-icon> Editar\r\n              </ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-item text-center padding *ngIf=\"!existsProducts\">\r\n          <p ion-text>Você ainda não possui nenhum produto</p>\r\n        </ion-item>\r\n      </ion-list>\r\n    </nano-loading>\r\n  </ion-card>\r\n  \r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/product/product-global/product-global.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global/product-global.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f8f8f8 !important; }\n\nion-grid ion-icon {\n  margin-top: 14px;\n  font-size: 2.2em; }\n\nion-item-divider {\n  border-bottom: none !important; }\n\nion-item-divider ion-label {\n    margin-bottom: 0px !important; }\n\nion-item-divider h1 {\n    color: #333333 !important;\n    font-family: myFontBold !important;\n    padding-top: 16px;\n    font-size: 2.0em;\n    text-align: left !important;\n    margin: 0 0.7em;\n    border-bottom: 1px dashed #999; }\n\nion-item {\n  padding: 8px 16px 8px 16px !important; }\n\n@media (max-width: 400px) {\n    ion-item {\n      display: flex;\n      flex-direction: column;\n      margin-top: 10px; } }\n\nion-item ion-label {\n    padding-left: 8px !important; }\n\nion-item ion-label h2 {\n      font-weight: bold !important; }\n\nion-item nano-thumb.goneImage {\n    display: none !important; }\n\nion-item button {\n    padding: 8px !important; }\n\n.category-name {\n  font-family: myFontBold;\n  padding-top: 16px;\n  font-size: 2.0em;\n  text-align: left;\n  margin: 0 0.7em;\n  border-bottom: 1px dashed #999;\n  margin-bottom: 10px !important; }\n\n.products {\n  margin: auto; }\n\n.products .list-item {\n    display: flex;\n    margin: 0.6em 0 0.6em 1.6em;\n    background-color: white !important; }\n\n.products .list-item .product-item {\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-right: 1.2em; }\n\n.products .list-item .product-item .name {\n        font-size: 1.4em;\n        color: #666; }\n\n.products .list-item .product-item .description {\n        font-size: 1em;\n        color: #999; }\n\n.products .list-item .product-item .price {\n        white-space: nowrap;\n        font-size: 1.4em;\n        color: #4c4; }\n\n.myfilter {\n  display: flex; }\n\n.myfilter button {\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 8px !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/product-global/product-global.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global/product-global.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProductGlobalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGlobalPage", function() { return ProductGlobalPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/product */ "./src/models/product.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductGlobalPage = /** @class */ (function () {
    function ProductGlobalPage(navCtrl, menuCtrl, ref) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Verifica se existem produtos
         */
        this.existsProducts = true;
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    ProductGlobalPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    ProductGlobalPage.prototype.ngOnDestroy = function () {
        if (this.subscriptionProducts) {
            this.subscriptionProducts.unsubscribe();
        }
    };
    ProductGlobalPage.prototype.load = function () {
        var _this = this;
        this.existsProducts = true;
        this.loading = true;
        this.subscriptionProducts = _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"].list([{
                name: 'global.type',
                operator: '==',
                value: _models_filial__WEBPACK_IMPORTED_MODULE_3__["FilialType"].WAREHOUSE
            }])
            .subscribe(function (products) {
            if (!products || products.length <= 0)
                _this.existsProducts = false;
            _this.products = products;
            _this.loading = false;
            _this.change();
        });
    };
    ProductGlobalPage.prototype.change = function () {
        this.ref.detectChanges();
    };
    ProductGlobalPage.prototype.add = function () {
        this.navCtrl.navigateRoot(['product/global/edit']);
    };
    ProductGlobalPage.prototype.edit = function (product) {
        this.navCtrl.navigateRoot(['product/global/edit', { product_id: product.id }]);
    };
    ProductGlobalPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-global',
            template: __webpack_require__(/*! ./product-global.page.html */ "./src/app/panel/pages/product/product-global/product-global.page.html"),
            styles: [__webpack_require__(/*! ./product-global.page.scss */ "./src/app/panel/pages/product/product-global/product-global.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProductGlobalPage);
    return ProductGlobalPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-product-product-global-product-global-module.js.map