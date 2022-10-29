(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-filial-stock-filial-stock-module"],{

/***/ "./src/app/mobile/pages/filial-stock/filial-stock.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/filial-stock/filial-stock.module.ts ***!
  \******************************************************************/
/*! exports provided: FilialStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialStockPageModule", function() { return FilialStockPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _filial_stock_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filial-stock.page */ "./src/app/mobile/pages/filial-stock/filial-stock.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _order_item_edit_order_item_edit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../order-item-edit/order-item-edit.module */ "./src/app/mobile/pages/order-item-edit/order-item-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _filial_stock_page__WEBPACK_IMPORTED_MODULE_5__["FilialStockPage"]
    }
];
var FilialStockPageModule = /** @class */ (function () {
    function FilialStockPageModule() {
    }
    FilialStockPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _order_item_edit_order_item_edit_module__WEBPACK_IMPORTED_MODULE_9__["OrderItemEditPageModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_filial_stock_page__WEBPACK_IMPORTED_MODULE_5__["FilialStockPage"]]
        })
    ], FilialStockPageModule);
    return FilialStockPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/filial-stock/filial-stock.page.html":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/filial-stock/filial-stock.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n</ion-header>\r\n\r\n<ion-content class=\"hideScrollbar\">\r\n\r\n  <section class=\"cover shadow shadow-3\">\r\n    <header>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-icon name=\"ios-arrow-back\" tappable (click)=\"goBack()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col text-right *ngIf=\"!isFavorite && !loading\" (click)=\"clickFavorite()\">\r\n          <ion-icon name=\"ios-heart\" style=\"font-size: 2rem; margin-top: -5px;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col text-right *ngIf=\"isFavorite && !loading\" (click)=\"clickFavorite()\">\r\n          <ion-icon name=\"ios-heart\" style=\"font-size: 2rem; color: red;margin-top: -5px;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </header>\r\n\r\n    <footer>\r\n      <h1 ion-text>{{filial?.name || \"...\"}}</h1>\r\n    </footer>\r\n\r\n    <div class=\"cover-fade\"></div>\r\n    <nano-thumb [cover_picture]=\"true\" [src]=\"filial?.cover\"></nano-thumb>\r\n    <nano-thumb [profile_picture]=\"true\" class=\"shadow shadow-light\" [src]=\"filial?.image\" [large]=\"true\" [banner]=\"true\"></nano-thumb>\r\n  </section>\r\n\r\n  <section class=\"details\">\r\n    <header>\r\n      <ion-grid class=\"grid-details\">\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <!--<h5 class=\"my-font-bold\" ion-text>{{filial?.subtype?.name || \"Tipo do restaurante\"}}</h5>-->\r\n            <p class=\"time\" ion-text>{{filial?.delivery?.timeMin || \"-\"}} min ~ {{filial?.delivery?.timeMax || \"-\"}}\r\n              min</p>\r\n            <div class=\"price-delivery\">\r\n              <img src=\"./assets/img/motinha_sem_fogo.png\">\r\n              <span class=\"text-new-price\">\r\n                <strong class=\"price-value\" *ngIf=\"priceDelivery\">R$ {{ priceDelivery | number : '1.2-2'}}</strong>\r\n                <strong class=\"price-value\" *ngIf=\"!priceDelivery\">Grátis</strong>\r\n              </span>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p ion-text class=\"rating\" *ngIf=\"(filial?.rating?.quantity || 0) < 5\">\r\n              <ion-icon name=\"md-star\"></ion-icon>Novo\r\n            </p>\r\n\r\n            <p ion-text class=\"rating\" *ngIf=\"(filial?.rating?.quantity || 0) >= 5\">\r\n              <ion-icon name=\"md-star\"></ion-icon>{{filial.rating.rate | number : '1.1-1'}}\r\n            </p>\r\n          </ion-col>\r\n          <ion-col></ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"filial\">\r\n          <ion-col>\r\n            <p ion-text class=\"open-container\">\r\n              <span *ngIf=\"filial.open\" class=\"open\">Aberto</span>\r\n              <span *ngIf=\"!filial.open && !filial.next_open_hour\" class=\"close\">Fechado</span>\r\n              <span *ngIf=\"!filial.open && filial.next_open_hour\" class=\"hour\">{{filial.next_open_hour}}</span>\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </header>\r\n    <footer>\r\n      <p ion-text text-wrap class=\"description\">{{filial?.description}}</p>\r\n    </footer>\r\n  </section>\r\n\r\n  <!-- Recomendações do Chefe -->\r\n  <!-- <section class=\"recomendations\" *ngIf=\"!loading && recomendationProductsStock && recomendationProductsStock.length > 0\">\r\n    <ion-item-divider class=\"divider-clean-clean\">\r\n      <h5 ion-text>Recomendações do chefe</h5>\r\n    </ion-item-divider>\r\n    <ion-slides ion-slides [pager]=\"true\">\r\n      <ion-slide *ngFor=\"let product of recomendationProductsStock | filterBy:['name', 'description']:searchString | matchesCategory:categoriesSelected; let i = index\"\r\n        (click)=\"orderProduct(product)\">\r\n        <card-product [product]=\"product\" [filial]=\"filial\"> </card-product>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </section> -->\r\n\r\n  <!-- Lista de produtos e categorias -->\r\n  <ion-grid class=\"products\" *ngIf=\"!loading && productsStock\">\r\n    <div *ngFor=\"let product of productsStock | filterBy:['name', 'description']:searchString | matchesCategory:categoriesSelected; let i = index\"\r\n      (click)=\"orderProduct(product)\" tappable>\r\n      <div class=\"list-products\" *ngIf=\"i == 0 || product.category != tempCategory\" class=\"divider-clean-clean\">\r\n        <h5 text-wrap>{{getCategoryName(product)}}</h5>\r\n      </div>\r\n      <card-product class=\"card-item\" [product]=\"product\" [filial]=\"filial\">\r\n      </card-product>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <!-- Auxiliar para renderizar loading dos componentes -->\r\n  <div *ngIf=\"loading\">\r\n    <section class=\"placeholder\" *ngFor=\"let id of [1, 2, 3]\">\r\n      <ion-row class=\"title\">\r\n        <h5 ion-text class=\"placeholder-animation placeholder-text-p-60\"></h5>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"placeholder-animation placeholder-image\"></div>\r\n        </ion-col>\r\n        <ion-col size=\"9\">\r\n          <h5 ion-text class=\"placeholder-animation placeholder-text-p-80\"></h5>\r\n          <p ion-text class=\"placeholder-animation placeholder-text-p-60\"></p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </section>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- Float button do(s) pedido(s) -->\r\n<fab-order></fab-order>"

/***/ }),

/***/ "./src/app/mobile/pages/filial-stock/filial-stock.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/filial-stock/filial-stock.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: myFontRegular;\n  src: url('Avenir.ttc');\n  font-weight: normal;\n  font-style: normal; }\n\nsection.cover {\n  position: relative;\n  background-color: #464646;\n  color: white;\n  height: 40vw; }\n\nsection.cover header {\n    z-index: 90;\n    position: relative; }\n\nsection.cover header ion-icon {\n      padding: 10px;\n      font-size: 1.5rem;\n      margin: 0px 5px;\n      z-index: 100;\n      /*\r\n            &.ripple {\r\n                background-position: center;\r\n                transition: background 0.5s;\r\n                &:hover {\r\n                    background: $focus-color radial-gradient(circle, transparent 1%, $focus-color 1%) center/15000%;\r\n                }\r\n                &:active {\r\n                    background-color: $active-color;\r\n                    background-size: 100%;\r\n                    transition: background 0s;\r\n                }\r\n            }*/ }\n\nsection.cover footer {\n    position: absolute;\n    bottom: 0px;\n    margin-left: 2rem;\n    z-index: 10;\n    color: white;\n    margin-right: 40vw; }\n\nsection.cover .cover-fade {\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 3;\n    height: 40vw;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n\nsection.details {\n  background: white;\n  position: relative;\n  box-shadow: 0px 0px 5px 0.2px rgba(158, 158, 158, 0.5) !important; }\n\nsection.details header {\n    min-height: 17vw; }\n\nsection.details .grid-details {\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 0px; }\n\nsection.details .grid-details .price-delivery {\n      display: flex;\n      align-items: center; }\n\nsection.details .grid-details .price-delivery img {\n        width: 25px;\n        height: 25px; }\n\nsection.details .grid-details .price-delivery span {\n        margin-left: 5px;\n        font-size: 14px;\n        color: var(--color-price); }\n\nsection.details .rating {\n    color: #e04433;\n    font-weight: bold; }\n\nsection.details .time {\n    font-size: 4vw;\n    margin-bottom: 0px !important; }\n\nsection.details .open-container {\n    color: white;\n    font-weight: bold;\n    font-size: 0.9em !important;\n    letter-spacing: 1px; }\n\nsection.details .open-container span {\n      padding: 3px 10px;\n      border-radius: 5px; }\n\nsection.details .open-container .open {\n      background-color: var(--color-price); }\n\nsection.details .open-container .close {\n      background-color: lightcoral;\n      color: #ffffff; }\n\nsection.details .open-container .close p {\n        margin-left: -2px !important; }\n\nsection.details .open-container .hour {\n      background-color: #404040; }\n\nsection.details footer {\n    padding: 0px 1rem;\n    margin-top: -1em;\n    padding-bottom: 0.6em; }\n\nsection.details footer .description {\n      margin-left: 7px;\n      margin-right: 7px;\n      color: var(--ion-color-medium); }\n\nsection.recomendations {\n  margin-top: 10px !important; }\n\nsection.recomendations ion-slides {\n    background: white;\n    margin-top: 10px !important;\n    height: auto;\n    padding: 20px 0px;\n    padding-top: 5px;\n    box-shadow: 0px 0px 5px 0.2px rgba(158, 158, 158, 0.5) !important; }\n\nsection.recomendations ion-slides ion-slide {\n      margin-bottom: 20px;\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content; }\n\nsection.recomendations ion-slides ion-slide card-product .card-item {\n        box-shadow: none !important;\n        margin: 0px !important;\n        padding-left: 16px !important; }\n\nsection.recomendations ion-slides ion-slide card-product .card-item .from-price {\n          display: block !important; }\n\nsection.recomendations ion-slides ion-slide card-product .card-item ion-label h5 {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 1;\n          min-height: 1.2em;\n          max-height: 1.2em; }\n\nsection.recomendations ion-slides ion-slide card-product .card-item ion-label p {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 3;\n          min-height: 4em;\n          max-height: 4em; }\n\nsection.recomendations ion-slides ion-col.col {\n      text-align: left; }\n\nsection.recomendations ion-slides button.swiper-pagination-bullet-active {\n      background: #e04433; }\n\nsection.recomendations ion-slides .swiper-pagination {\n      padding-top: 10px;\n      bottom: 0px; }\n\nsection.recomendations ion-slides h5.text {\n      font-family: myFontRegular !important;\n      font-weight: bold;\n      font-variant-caps: all-petite-caps;\n      padding: 0px;\n      margin-top: 5px; }\n\nsection.recomendations ion-slides div.thumb {\n      height: 15vw;\n      width: 15vw;\n      margin: 1.5vw;\n      margin-left: 1.5vw; }\n\nsection.recomendations ion-slides .swiper-wrapper {\n      margin-bottom: 10px; }\n\nsection.placeholder .title {\n  background: white;\n  margin-top: 10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n\nsection.placeholder .placeholder-image {\n  width: 15vw;\n  height: 15vw;\n  padding-left: 1vw;\n  margin-left: 4vw; }\n\nsection.placeholder ion-row {\n  height: auto;\n  padding: 20px 0px;\n  padding-top: 5px;\n  background: white;\n  margin-bottom: 10px; }\n\nsection.placeholder ion-row h5 {\n    padding: 0px;\n    margin-top: 5px; }\n\ndiv.divider-clean-clean h5 {\n  font-family: myFontRegular !important;\n  font-size: 1.2em !important;\n  font-weight: bold !important; }\n\nion-grid.products {\n  padding: 0px;\n  padding-bottom: 30px; }\n\nion-grid.products div.list-products {\n    margin-top: 10px !important; }\n\nion-grid.products div.thumb {\n    height: 15vw;\n    width: 15vw;\n    margin: 1.5vw;\n    margin-left: 1.5vw;\n    margin-right: 1vw !important; }\n\nion-grid.products .card-item {\n    background: white;\n    margin-top: 10px; }\n\nion-grid.products .card-item .from-price {\n      display: block !important;\n      top: 8px !important; }\n\nion-grid.products .card-item .coin.with-from-price {\n      padding: 23px 8px 23px 10px !important; }\n\nion-grid.products .card-item h5 {\n      margin-top: 0px !important;\n      margin-left: 1em !important; }\n\nion-grid.products .card-item p {\n      min-height: 40px; }\n\nion-grid.products .card-item p.goneDescription {\n        display: none !important; }\n\n.divider-clean-clean {\n  background: none !important; }\n\n.divider-clean-clean .text {\n    font-size: 1.5em !important; }\n\n.divider-clean-clean h5 {\n    margin-left: 1em !important; }\n\np.text {\n  color: #6e6e71;\n  margin-top: 0px;\n  font-size: 1.5rem; }\n\n.recomendations card-product ion-item {\n  background: none !important;\n  box-shadow: none !important; }\n\nh5.text {\n  margin-top: 0px;\n  font-size: 2rem; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/filial-stock/filial-stock.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/mobile/pages/filial-stock/filial-stock.page.ts ***!
  \****************************************************************/
/*! exports provided: FilialStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialStockPage", function() { return FilialStockPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _modules_firestore_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/firestore/utils */ "./src/modules/firestore/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_item_edit_order_item_edit_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../order-item-edit/order-item-edit.page */ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var FilialStockPage = /** @class */ (function () {
    function FilialStockPage(productProvider, shared, modalCtrl, navCtrl, loadingCtrl, menuCtrl, change, system, route, cart, alertCtrl) {
        this.productProvider = productProvider;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.change = change;
        this.system = system;
        this.route = route;
        this.cart = cart;
        this.alertCtrl = alertCtrl;
        /**
         * define se a navbar tem searchbar ou nao
         */
        this.searchMode = false;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        /**
         * Objeto que contém todas as categorias ordenadas com a estrutura:
         * categories[key].name (nome da filial)
         * categories[key].priority (número relativo a prioridade da filial)
         * Obtido por meio do provider Product
         */
        this.categories = {};
        /**
         * Id das categorias selecionadas no filtro
         */
        this.categoriesSelected = [];
        /**
         * Exibir loading quando a lista estiver sendo carregada
         */
        this.loading = true;
        this.isFavorite = false;
        //Filiais favoritas do usuário
        this.favoritesFilials = [];
    }
    FilialStockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(2 * 1000, 10 * 1000)
            .subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.filial) return [3 /*break*/, 3];
                        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].checkBusinessHours(this.filial, this.shared.now);
                        if (!(this.old_open == true && this.filial.open == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops, o estabelecimento acabou de fechar.",
                                subHeader: "Por favor verifique o horário de funcionamento do estabelecimento e volte mais tarde.",
                                buttons: ["Ok"]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        _a.label = 2;
                    case 2:
                        this.old_open = this.filial.open;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    FilialStockPage.prototype.ngOnDestroy = function () {
        if (this.productsStockSubscription)
            this.productsStockSubscription.unsubscribe();
        if (this.intervalSubscription)
            this.intervalSubscription.unsubscribe();
        if (this.filialSubscription)
            this.filialSubscription.unsubscribe();
    };
    /**
     * Inicializando estruturas após entrar na página
     * e passar pela verificação do ionViewCanEnter()
     */
    FilialStockPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.system.setScreenName("FilialStockPage");
        var filial$;
        this.menuCtrl.enable(false);
        filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('id') && params.get('id') != ':id') {
                return _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].object(params.get('id'));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
        // Para checar se a filial estava aberta e passou a virar fechada
        this.filialSubscription = filial$.subscribe(function (filial) { return __awaiter(_this, void 0, void 0, function () {
            var alert_2, exist$, products$;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Filial obtida: ", filial);
                        this.system.logEvent('view_filial', { name: filial.name });
                        this.filial = filial;
                        console.log("A filial que entrei foi: ", this.filial);
                        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].checkBusinessHours(this.filial, this.shared.now);
                        if (!(this.old_open == true && filial.open == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops, o estabelecimento acabou de fechar.",
                                subHeader: "Por favor verifique o horário de funcionamento do estabelecimento e volte mais tarde.",
                                buttons: ["Ok"]
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        alert_2.present();
                        _a.label = 2;
                    case 2:
                        this.old_open = filial.open;
                        this.restaurantId = this.filial.company.id;
                        if (!this.filial) {
                            throw new Error("Você deveria chegar nessa página com uma filial");
                        }
                        this.change.detectChanges();
                        exist$ = this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (user) {
                            _this.user = user;
                            _this.priceDelivery = _this.cart.calculateDelivery(_this.filial, _this.user);
                            console.log(_this.priceDelivery);
                            if (!_this.user) {
                                _this.isFavorite = false;
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                            }
                            return _models_user__WEBPACK_IMPORTED_MODULE_9__["User"].favorites.exist(user.id, filial.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                                //Foi entrado o documento na coleção
                                if (res) {
                                    _this.isFavorite = true;
                                }
                                else {
                                    _this.isFavorite = false;
                                }
                            }));
                            _this.change.detectChanges();
                        }));
                        products$ = this.productProvider
                            .getProductsStockFilial(this.filial)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products_stock) {
                            console.log("Produtos Estoque do BD: ", products_stock);
                            _this.recomendationProductsStock = products_stock
                                // Filtrando os elementos que são recomendacoes e que estão ativos
                                .filter(function (product_stock) { return (product_stock.recomendation && product_stock.active); })
                                // Ordendando pela prioridade da recomendação
                                .sort(_this.productProvider.comparatorProductStockByRecomendation);
                            console.log("Estoque de Produtos que são recomendações", _this.recomendationProductsStock);
                            _this.productsStock = products_stock
                                // Filtrando os elementos que estão em estoque
                                .filter(function (product_stock) { return product_stock.active; })
                                // Ordenando por sua prioridade
                                .sort(_this.productProvider.comparatorProductStock);
                            console.log("Estoque de produtos da Filial: ", _this.productsStock);
                            _this.change.detectChanges();
                        }));
                        this.productsStockSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([exist$, products$]).subscribe(function () {
                            _this.loading = false;
                            _this.change.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilialStockPage.prototype.goBack = function () {
        this.navCtrl.goBack();
    };
    FilialStockPage.prototype.clickFavorite = function () {
        if (this.user) {
            this.isFavorite = !this.isFavorite;
            if (this.isFavorite) {
                _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].fans.add(this.filial.id, this.user.id).subscribe();
            }
            else {
                _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].fans.remove(this.filial.id, this.user.id).subscribe();
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
    };
    /**
     * Ir para escolha do complemento
     * @param product produto selecionado
     */
    FilialStockPage.prototype.orderProduct = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, alert_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].checkBusinessHours(this.filial, this.shared.now);
                        if (!this.filial.open) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _order_item_edit_order_item_edit_page__WEBPACK_IMPORTED_MODULE_12__["OrderItemEditPage"],
                                componentProps: {
                                    product: product,
                                    filial: this.filial
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Restaurante fechado!',
                            subHeader: 'Você não pode realizar pedidos no momento. Tente novamente mais tarde',
                            buttons: ['OK']
                        })];
                    case 3:
                        alert_3 = _a.sent();
                        alert_3.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param key é a id da categoria que se quer receber o nome
     */
    FilialStockPage.prototype.getCategoryName = function (product) {
        this.tempCategory = product.category;
        return product.category.name;
    };
    FilialStockPage.prototype.showCategory = function (key) {
        if (!key)
            return false;
        if (this.categoriesSelected == [])
            return true;
        return Object(_modules_firestore_utils__WEBPACK_IMPORTED_MODULE_10__["elementIsInsideArray"])(key, this.categoriesSelected);
    };
    FilialStockPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filial-stock',
            template: __webpack_require__(/*! ./filial-stock.page.html */ "./src/app/mobile/pages/filial-stock/filial-stock.page.html"),
            styles: [__webpack_require__(/*! ./filial-stock.page.scss */ "./src/app/mobile/pages/filial-stock/filial-stock.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], FilialStockPage);
    return FilialStockPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-filial-stock-filial-stock-module.js.map