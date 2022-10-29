(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-detail-order-detail-order-module~mobile-pages-track-order-track-order-module"],{

/***/ "./src/app/mobile/pages/detail-order/detail-order.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/detail-order/detail-order.module.ts ***!
  \******************************************************************/
/*! exports provided: DetailOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOrderPageModule", function() { return DetailOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-order.page */ "./src/app/mobile/pages/detail-order/detail-order.page.ts");
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
//     component: DetailOrderPage
//   }
// ];
var DetailOrderPageModule = /** @class */ (function () {
    function DetailOrderPageModule() {
    }
    DetailOrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            declarations: [_detail_order_page__WEBPACK_IMPORTED_MODULE_4__["DetailOrderPage"]],
            entryComponents: [_detail_order_page__WEBPACK_IMPORTED_MODULE_4__["DetailOrderPage"]]
        })
    ], DetailOrderPageModule);
    return DetailOrderPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/detail-order/detail-order.page.html":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/detail-order/detail-order.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar class=\"header-toolbar\" color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <h3 ion-text text-uppercase color=\"light\" class=\"my-font-logo\">DETALHES PEDIDO</h3>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"order\">\r\n\r\n  <mr-card-filial [filial]=\"filial\" [phone]=\"true\"></mr-card-filial>\r\n\r\n  <span class=\"obs-delivery\">Entrega realizada em:</span>\r\n  <ion-card class=\"shadow shadow-light card-delivery-address\">\r\n    <div class=\"info-delivery\">\r\n      <p class=\"title-delivery\">\r\n        {{ order?.location.street }}, {{ order?.location.number }}\r\n        <span *ngIf=\"order?.location?.district\">, {{order.location.district}}</span>\r\n        <span *ngIf=\"order?.location?.city\">, {{order.location.city}}</span>\r\n        <span *ngIf=\"order?.location?.state_short\">- {{order.location.state_short}}</span>\r\n        <span *ngIf=\"order?.location?.complement\">, {{order.location.complement}}</span>\r\n      </p>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <div *ngFor=\"let entry of order.entries; let i = index\" padding style=\"background-color: white\">\r\n    <ion-badge id=\"notifications-badge\" color=\"danger\">x{{ entry.quantity }}</ion-badge>\r\n    <card-product [product]=\"entry.product\" [filial]=\"filial\" [entry]=\"entry\"> </card-product>\r\n    <div class=\"shadow shadow-light-2 text-complements\" *ngIf=\"entry.complement_resume && entry.complement_resume.length\"\r\n      style=\"padding-top: 1em\" padding-bottom>\r\n      <h4 ion-text padding-left>Complementos escolhidos: </h4>\r\n      <p ion-text class=\"list-complement\" color=\"discret\" padding-horizontal>\r\n        <span ion-text *ngFor=\"let resume of entry.complement_resume; let i = index\">\r\n          {{resume}}</span>\r\n      </p>\r\n      <h4 ion-text padding-left *ngIf=\"entry.observation\">Observações: </h4>\r\n      <p ion-text class=\"list-complement\" color=\"discret\" padding-horizontal *ngIf=\"entry.observation\">\r\n        {{entry.observation}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-item no-lines class=\"shadow shadow-light payment\" margin-top>\r\n    <b>Forma de pagamento: </b>\r\n    <span [ngSwitch]=\"order.payment_method\" style=\"margin-top: 5px; margin-left: 4px\">\r\n      <span *ngSwitchCase=\"'debit_card'\"> Débito\r\n        <span> | {{order.payment_cardType | uppercase}} </span>\r\n      </span>\r\n      <span *ngSwitchCase=\"'credit_card'\"> Crédito\r\n        <span> | {{order.payment_cardType | uppercase}} </span>\r\n      </span>\r\n      <span *ngSwitchCase=\"'money'\"> Dinheiro\r\n        <span *ngIf=\"order.change\">, troco para: {{order.change | number: '1.2-2'}} </span>\r\n      </span>\r\n      <span *ngSwitchCase=\"'food_stamps'\">\r\n        Vale-Alimentação\r\n        <span> | {{order.payment_cardType | uppercase}} </span>\r\n      </span>\r\n      <span *ngSwitchDefault>Outro</span>\r\n    </span>\r\n  </ion-item>\r\n  <mr-price [price]=\"order.price\"></mr-price>\r\n\r\n  <mr-status-order [order]=\"order\"></mr-status-order>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/detail-order/detail-order.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/detail-order/detail-order.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white;\n  --background: white; }\n\nion-item {\n  --background: white; }\n\n.text-complements {\n  background-color: white !important; }\n\n#notifications-badge {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  border-radius: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0px;\n  padding: 0px;\n  z-index: 10; }\n\n.obs-delivery {\n  color: var(--ion-color-primary);\n  padding-left: 15px; }\n\n.card-delivery-address {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0px 20px 0px;\n  width: 100%; }\n\n.card-delivery-address .info-delivery {\n    padding: 8px 15px; }\n\n.card-delivery-address .info-delivery .title-delivery {\n      color: var(--ion-color-medium-shade);\n      font-size: 1.2em; }\n\n.card-delivery-address .info-delivery .subtitle-delivery {\n      color: var(--ion-color-medium); }\n\n.payment-method {\n  padding: 10px;\n  width: 100%;\n  margin: 10px 0; }\n\n.payment ion-label {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/detail-order/detail-order.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/mobile/pages/detail-order/detail-order.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOrderPage", function() { return DetailOrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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





var DetailOrderPage = /** @class */ (function () {
    function DetailOrderPage(navCtrl, system, modalCtrl, alertCtrl) {
        // this.order = this.navParams.get('order');
        this.navCtrl = navCtrl;
        this.system = system;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    DetailOrderPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Order: ", this.order);
        if (this.order && this.order.filial && this.order.filial.id) {
            this.subscription_filial = _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].object(this.order.filial.id).subscribe(function (filial) {
                _this.filial = filial;
            });
        }
        if (this.order && this.order.id) {
            this.subscription_order = _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"].object(this.order.id).subscribe(function (order) {
                _this.order = order;
                console.log("Order após subscription: ", _this.order);
            });
        }
    };
    DetailOrderPage.prototype.ngOnDestroy = function () {
        if (this.subscription_filial) {
            this.subscription_filial.unsubscribe();
        }
        if (this.subscription_order) {
            this.subscription_order.unsubscribe();
        }
    };
    DetailOrderPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("DetailOrderPage");
    };
    DetailOrderPage.prototype.dismiss = function () {
        // this.navCtrl.pop();
        this.modalCtrl.dismiss();
    };
    DetailOrderPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ajuda',
                            message: "<ul><li>Endere\u00E7o onde vai ser entregue</li><li>Itens do pedido</li>\n      <li>M\u00E9todo de pagamento</li>\n      <li>Valores do pedido</li>\n      <li>Status no qual o pedido se encontra</li></ul>",
                            buttons: [{ role: 'cancel', text: 'ok' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"])
    ], DetailOrderPage.prototype, "order", void 0);
    DetailOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-order',
            template: __webpack_require__(/*! ./detail-order.page.html */ "./src/app/mobile/pages/detail-order/detail-order.page.html"),
            styles: [__webpack_require__(/*! ./detail-order.page.scss */ "./src/app/mobile/pages/detail-order/detail-order.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], DetailOrderPage);
    return DetailOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-detail-order-detail-order-module~mobile-pages-track-order-track-order-module.js.map