(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-filial-stock-filial-stock-module~mobile-pages-order-item-edit-order-item-edit-m~0aea3000"],{

/***/ "./src/app/mobile/pages/order-item-edit/order-item-edit.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/mobile/pages/order-item-edit/order-item-edit.module.ts ***!
  \************************************************************************/
/*! exports provided: OrderItemEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemEditPageModule", function() { return OrderItemEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_item_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-item-edit.page */ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// const routes: Routes = [
//   {
//     path: '',
//     component: OrderItemEditPage
//   }
// ];
var OrderItemEditPageModule = /** @class */ (function () {
    function OrderItemEditPageModule() {
    }
    OrderItemEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                //Default Modules
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            declarations: [_order_item_edit_page__WEBPACK_IMPORTED_MODULE_4__["OrderItemEditPage"]],
            entryComponents: [_order_item_edit_page__WEBPACK_IMPORTED_MODULE_4__["OrderItemEditPage"]]
        })
    ], OrderItemEditPageModule);
    return OrderItemEditPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.html":
/*!************************************************************************!*\
  !*** ./src/app/mobile/pages/order-item-edit/order-item-edit.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button icon-only (click)=\"dismiss()\">\r\n        <ion-icon name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>SEU PEDIDO</h3>\r\n    </ion-title>\r\n\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button icon-only (click)=\"help()\">\r\n        <ion-icon class=\"help-toolbar\" name=\"md-help\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div class=\"background-toolbar-right\"></div>\r\n    -->\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <header>\r\n    <div class=\"product-name\">\r\n      <h5 text-wrap padding-horizontal class=\"my-font-bold\">{{entry?.product?.name}}</h5>\r\n    </div>\r\n    <ion-grid class=\"info shadow shadow-light\" no-padding padding-horizontal no-lines>\r\n      <ion-row class=\"money\">\r\n        <ion-col size=\"12\" no-padding>\r\n          <p class=\"text-new-price\"><strong class=\"price-value\">R$ {{ entry?.price | number : '1.2-2' }}</strong></p>\r\n        </ion-col>\r\n        <!-- <ion-col></ion-col> -->\r\n      </ion-row>\r\n      <ion-row class=\"description\">\r\n        <ion-col size=\"12\">\r\n          <p ion-text text-wrap>{{entry?.product?.description}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <nano-thumb [src]=\"entry?.product?.image\" [product_image]=\"true\" class=\"product-image shadow shadow-light\"></nano-thumb>\r\n  </header>\r\n\r\n  <div class=\"quantity-card shadow shadow-light\">\r\n    <h6> Quantidade </h6>\r\n    <div class=\"quantity-buttons\">\r\n      <ion-button fill=\"clear\" (click)=\"decrement()\">\r\n        <ion-icon slot=\"icon-only\" name=\"md-remove\"></ion-icon>\r\n      </ion-button>\r\n      <span> {{ entry.quantity }} </span>\r\n      <ion-button fill=\"clear\" (click)=\"increment()\">\r\n        <ion-icon slot=\"icon-only\" name=\"md-add\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <order-complement-list *ngFor=\"let complement of entry?.complements\" [complement]=\"complement\" (change)=\"calculateEntry()\"></order-complement-list>\r\n\r\n  <ion-item no-lines class=\"obs-product shadow shadow-light\">\r\n    <ion-label position=\"stacked\">Observações do produto</ion-label>\r\n    <ion-textarea [(ngModel)]=\"entry.observation\" placeholder=\"Ex: apenas orgânicos\"></ion-textarea>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n  <ion-row class=\"add-button\" tappable color=\"primary\" (click)=\"addToCart()\" color=\"primary\" text-center>\r\n    <ion-col size=\"3\">\r\n      <coin-real [value]=\"totalPriceEntry\"></coin-real>\r\n    </ion-col>\r\n    <ion-col>\r\n      <h4 class=\"my-font-logo\">{{ edit || 'ADICIONAR'}} </h4>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/mobile/pages/order-item-edit/order-item-edit.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: white !important;\n  background: white !important; }\n\nion-grid {\n  --background: white !important;\n  background: white !important; }\n\n.text {\n  padding: 0px;\n  margin: 0px; }\n\nion-header .help-toolbar {\n  margin-right: 10px; }\n\n.price-value {\n  font-size: 15px;\n  color: green !important; }\n\nheader .product-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; }\n\nheader .product-name h5 {\n    line-height: 1.3em; }\n\nheader .product-image {\n  position: absolute;\n  z-index: 1;\n  top: 5vw;\n  right: 5vw; }\n\nheader nano-thumb .thumb {\n  height: 34vw;\n  width: 34vw;\n  max-width: 120px;\n  max-height: 120px; }\n\n.quantity-card {\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0;\n  padding: 5px 10px; }\n\n.quantity-card h6 {\n    margin: 10px 0;\n    font-weight: bold; }\n\n.quantity-card .quantity-buttons {\n    display: flex;\n    align-items: center; }\n\n.obs-product {\n  margin: 10px 0; }\n\nion-footer {\n  background: var(--ion-color-primary); }\n\nion-footer span.value {\n    color: white !important; }\n\nion-footer ion-row ion-col {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\nion-footer ion-row ion-col h4 {\n      font-size: 1.2em !important;\n      color: white !important;\n      vertical-align: center !important; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/pages/order-item-edit/order-item-edit.page.ts ***!
  \**********************************************************************/
/*! exports provided: OrderItemEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemEditPage", function() { return OrderItemEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
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





var OrderItemEditPage = /** @class */ (function () {
    function OrderItemEditPage(navParams, navCtrl, cartProvider, alertCtrl, toast, system, modalCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.cartProvider = cartProvider;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.system = system;
        this.modalCtrl = modalCtrl;
        if (this.navParams.get('entry')) {
            this.entry = this.navParams.get('entry');
            this.edit = 'EDITAR PEDIDO';
        }
        else
            this.entry = _models_order__WEBPACK_IMPORTED_MODULE_1__["Entry"].entryFromProduct(this.navParams.get('product'));
        if (this.navParams.get('filial'))
            this.filial = this.navParams.get('filial');
        else
            this.filial = this.cartProvider.filial;
        this.calculateEntry();
    }
    Object.defineProperty(OrderItemEditPage.prototype, "totalPriceEntry", {
        get: function () {
            return this.entry.price * this.entry.quantity;
        },
        enumerable: true,
        configurable: true
    });
    OrderItemEditPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("OrderItemEditPage");
    };
    OrderItemEditPage.prototype.addToCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.entry.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Você precisa selecionar os complementos obrigatórios",
                                buttons: [
                                    {
                                        text: "Ok"
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [2 /*return*/];
                    case 2:
                        if (!this.navParams.get('entry')) return [3 /*break*/, 4];
                        this.cartProvider.updateStorage();
                        this.navCtrl.goBack();
                        return [4 /*yield*/, this.toast.create({
                                message: this.entry.product.name + " editado com sucesso",
                                position: 'bottom',
                                duration: 1500
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        this.cartProvider.add(this.entry, this.filial, this.modalCtrl);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderItemEditPage.prototype.increment = function () {
        this.cartProvider.increment(this.entry, 1);
    };
    OrderItemEditPage.prototype.decrement = function () {
        this.cartProvider.increment(this.entry, -1);
    };
    OrderItemEditPage.prototype.calculateEntry = function () {
        _models_order__WEBPACK_IMPORTED_MODULE_1__["Entry"].calculateEntryValues(this.entry);
    };
    OrderItemEditPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Especificações de um produto",
                            message: "Você pode escolher dentre diversas opções para melhor personalizar seu produto. Algumas opções são obrigatórias e necessárias para a realização do pedido.",
                            buttons: ["Ok"]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderItemEditPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    OrderItemEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-item-edit',
            template: __webpack_require__(/*! ./order-item-edit.page.html */ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.html"),
            styles: [__webpack_require__(/*! ./order-item-edit.page.scss */ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], OrderItemEditPage);
    return OrderItemEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-filial-stock-filial-stock-module~mobile-pages-order-item-edit-order-item-edit-m~0aea3000.js.map