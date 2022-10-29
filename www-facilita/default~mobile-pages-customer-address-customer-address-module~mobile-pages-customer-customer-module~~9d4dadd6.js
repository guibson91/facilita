(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~9d4dadd6"],{

/***/ "./src/app/mobile/components/card-filial-list/card-filial-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/mobile/components/card-filial-list/card-filial-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"filial\" [ngClass]=\"{'closed': !filial.open}\">\r\n  <div class=\"container\">\r\n\r\n    <div>\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"filial.image\" />\r\n      </ion-avatar>\r\n    </div>\r\n\r\n    <div style=\"width: 80%; margin-left: 4px;\">\r\n\r\n      <div class=\"top-right\">\r\n        <h1>{{filial.name}}</h1>\r\n        <div class=\"container-star\">\r\n          <ion-icon name=\"star\" *ngIf=\"filial?.rating?.quantity >= 5\"></ion-icon>\r\n          <span id=\"star-number\" *ngIf=\"filial?.rating?.quantity >= 5\">{{filial.rating.rate | number : '1.1-1'}}</span>\r\n          <span class=\"quantity\" *ngIf=\"!filial?.rating || !filial?.rating?.quantity || filial?.rating?.quantity < 5\">\r\n            <strong class=\"new-filial-rate\">Novo</strong>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"description\" text-wrap>{{filial.description}}</p>\r\n\r\n      <p class=\"details\" *ngIf=\"filial.delivery\">\r\n        <span *ngIf=\"filial.delivery.timeMin && filial.delivery.timeMax\">{{filial.delivery.timeMin}} min a\r\n          {{filial.delivery.timeMax}} min - </span>\r\n        <span *ngIf=\"filial.distance && filial.distance >= 1\" class=\"distance\">\r\n          {{filial.distance | number: '1.2-2' }} km\r\n        </span>\r\n        <span *ngIf=\"filial.distance && filial.distance < 1\" class=\"distance\">\r\n          {{filial.distance | formatDistance }} m\r\n        </span>\r\n      </p>\r\n      <p *ngIf=\"filial.subtypes?.length > 0\" class=\"subtype\" text-wrap>\r\n        <span *ngFor=\"let subtype of filial.subtypes; let i = index\" class=\"subtype\">\r\n          {{subtype.name}}\r\n          <br *ngIf=\"i == 3 || i == 6\" />\r\n        </span>\r\n      </p>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/mobile/components/card-filial-list/card-filial-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/mobile/components/card-filial-list/card-filial-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  --background: white;\n  background: white !important;\n  box-shadow: none;\n  margin-top: -8px;\n  border-radius: 0px !important; }\n  ion-card div.container {\n    padding: 5px;\n    display: flex;\n    justify-content: start;\n    align-items: center; }\n  ion-card div.container ion-avatar {\n      margin-left: 0.5em;\n      margin-right: 0.5em; }\n  ion-card div.container h1 {\n      font-size: 1em;\n      color: black;\n      font-weight: bold;\n      width: 80%;\n      margin-bottom: 0px; }\n  ion-card div.container p.description {\n      margin-top: 5px;\n      margin-bottom: 2px;\n      color: #aaa; }\n  ion-card div.container p.details {\n      margin-top: 5px;\n      color: #777;\n      font-size: 0.9em;\n      font-weight: bold; }\n  ion-card div.container .container-star {\n      color: goldenrod;\n      font-size: 1em; }\n  ion-card div.container div.top-right div.container-star {\n      position: absolute;\n      top: 1em;\n      right: 1em; }\n  ion-card div.container div.bottom-right {\n      font-size: 1em;\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      margin-right: 1em; }\n  ion-card div.container div.distance {\n      font-size: 0.9em; }\n  ion-card div.container p {\n      margin-right: 10px; }\n  ion-card div.container p.subtype {\n      line-height: 2.3em;\n      margin-top: 0px;\n      margin-bottom: 10px; }\n  ion-card div.container span.subtype {\n      border: 1px solid #ddd;\n      border-radius: 5px;\n      margin-right: 4px;\n      padding: 4px;\n      color: var(--ion-color-primary); }\n  ion-card.closed {\n  opacity: 0.70 !important;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n  ion-card.closed h1 {\n    font-weight: 600 !important; }\n"

/***/ }),

/***/ "./src/app/mobile/components/card-filial-list/card-filial-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/components/card-filial-list/card-filial-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CardFilialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFilialListComponent", function() { return CardFilialListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardFilialListComponent = /** @class */ (function () {
    function CardFilialListComponent() {
    }
    CardFilialListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"])
    ], CardFilialListComponent.prototype, "filial", void 0);
    CardFilialListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-filial-list',
            template: __webpack_require__(/*! ./card-filial-list.component.html */ "./src/app/mobile/components/card-filial-list/card-filial-list.component.html"),
            styles: [__webpack_require__(/*! ./card-filial-list.component.scss */ "./src/app/mobile/components/card-filial-list/card-filial-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardFilialListComponent);
    return CardFilialListComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/card-promotion/card-promotion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/card-promotion/card-promotion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Se for passado a filial com todas as suas promoções -->\r\n<ion-card *ngIf=\"filial?.promotions_full?.length > 0\">\r\n  <div class=\"container\" tappable (click)=\"openDetail(filial, promotion)\" *ngFor=\"let promotion of filial.promotions_full\">\r\n    <div class=\"left\" slot=\"start\">\r\n      <img src=\"{{promotion.image}}\" />\r\n    </div>\r\n    <div class=\"right\">\r\n      <h1 *ngIf=\"promotion.name\">{{promotion.name}}</h1>\r\n      <p class=\"distance\" *ngIf=\"filial.distance && filial.distance >= 1\">{{filial.distance | number: '1.2-2' }} km</p>\r\n      <p class=\"distance\" *ngIf=\"filial.distance && filial.distance < 1\">{{filial.distance | formatDistance }} m</p>\r\n      <p *ngIf=\"promotion.description\" class=\"max-lines\">{{promotion.description}}</p>\r\n      <div class=\"container-bottom\">\r\n        <ion-card-subtitle>por apenas\r\n          <span class=\"money\" *ngIf=\"promotion.promotionPercentage\">{{ (100 - promotion.promotionPercentage)/100\r\n            * promotion.priceBase | noNegative |\r\n            currency:'BRL':'symbol':'1.2'}}</span>\r\n          <span class=\"money\" *ngIf=\"promotion.promotionPrice\">{{ promotion.priceBase - promotion.promotionPrice\r\n            | noNegative |\r\n            currency:'BRL':'symbol':'1.2'}}</span>\r\n        </ion-card-subtitle>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-card>\r\n\r\n<!-- Passado as promoções que o usuário possui -->\r\n<ion-card *ngIf=\"coupons\">\r\n  <div class=\"container\" tappable (click)=\"openDetail(coupon.filial_full, coupon.promotion_full)\" *ngFor=\"let coupon of coupons\">\r\n    <div class=\"left\" slot=\"start\">\r\n      <img src=\"{{coupon.promotion_full.image}}\" />\r\n    </div>\r\n    <div class=\"right\">\r\n      <h1 *ngIf=\"coupon.promotion_full.name\">{{coupon.promotion_full.name}}</h1>\r\n      <p class=\"distance\">{{coupon.promotion_full.code }}</p>\r\n      <p *ngIf=\"coupon.promotion_full.description\" class=\"max-lines\">{{coupon.promotion_full.description}}</p>\r\n      <div class=\"container-bottom\">\r\n        <ion-card-subtitle>por apenas\r\n          <span class=\"money\" *ngIf=\"coupon.promotion_full.promotionPercentage\">{{ (100 -\r\n            coupon.promotion_full.promotionPercentage)/100\r\n            * coupon.promotion_full.priceBase | noNegative |\r\n            currency:'BRL':'symbol':'1.2'}}</span>\r\n          <span class=\"money\" *ngIf=\"coupon.promotion_full.promotionPrice\">{{ coupon.promotion_full.priceBase -\r\n            coupon.promotion_full.promotionPrice\r\n            | noNegative |\r\n            currency:'BRL':'symbol':'1.2'}}</span>\r\n        </ion-card-subtitle>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/mobile/components/card-promotion/card-promotion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/card-promotion/card-promotion.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  --background: white;\n  padding: 4px;\n  box-shadow: none;\n  margin-top: -8px; }\n  ion-card h1 {\n    margin-top: 2px;\n    margin-bottom: 2px;\n    margin-right: 4px;\n    color: #555;\n    font-weight: bold;\n    font-size: 1em;\n    width: 70%; }\n  ion-card p {\n    margin-top: 4px;\n    margin-bottom: 4px; }\n  ion-card div.container {\n    display: flex;\n    align-items: center;\n    margin-top: 0.3em; }\n  ion-card div.left {\n    min-width: 90px;\n    min-height: 90px; }\n  ion-card div.left img {\n      width: 90px;\n      height: 90px; }\n  ion-card div.right {\n    margin-left: 1em; }\n  ion-card div.right p.distance {\n      color: var(--ion-color-primary);\n      font-size: 0.8em;\n      font-weight: bold;\n      position: absolute;\n      top: 0.7em;\n      right: 0.7em; }\n  ion-card div.right h2 {\n      font-size: 0.9em !important;\n      color: #555;\n      font-weight: bold;\n      margin-top: 0; }\n  ion-card div.right div.container-bottom {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-bottom: 0.5em; }\n  ion-card div.right div.code {\n      color: var(--ion-color-primary);\n      font-weight: bold;\n      font-size: 1.1em; }\n  ion-card .margin-right {\n    margin-right: 0.5em; }\n  ion-card span.money {\n    color: darkgreen;\n    margin-left: 4px;\n    font-weight: bold; }\n  ion-card .giveMeEllipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    /* number of lines to show (n) */\n    line-height: 2;\n    /* (h) */\n    max-height: 6;\n    /* (n*h) */ }\n  ion-card .max-lines {\n    display: block;\n    /* or inline-block */\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    overflow: hidden;\n    max-height: 4.2em;\n    line-height: 1.4em; }\n"

/***/ }),

/***/ "./src/app/mobile/components/card-promotion/card-promotion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mobile/components/card-promotion/card-promotion.component.ts ***!
  \******************************************************************************/
/*! exports provided: CardPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPromotionComponent", function() { return CardPromotionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _pages_promotion_detail_app_promotion_detail_app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/promotion-detail-app/promotion-detail-app.page */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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




var CardPromotionComponent = /** @class */ (function () {
    function CardPromotionComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CardPromotionComponent.prototype.ngOnInit = function () {
    };
    CardPromotionComponent.prototype.openDetail = function (filial, promotion) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_promotion_detail_app_promotion_detail_app_page__WEBPACK_IMPORTED_MODULE_2__["PromotionDetailAppPage"],
                            componentProps: {
                                filial: filial,
                                promotion: promotion
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"])
    ], CardPromotionComponent.prototype, "filial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardPromotionComponent.prototype, "coupons", void 0);
    CardPromotionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-promotion',
            template: __webpack_require__(/*! ./card-promotion.component.html */ "./src/app/mobile/components/card-promotion/card-promotion.component.html"),
            styles: [__webpack_require__(/*! ./card-promotion.component.scss */ "./src/app/mobile/components/card-promotion/card-promotion.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CardPromotionComponent);
    return CardPromotionComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/coin-real/coin-real.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/components/coin-real/coin-real.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <img class=\"img-coin\" src=\"./assets/img/money.png\">\r\n  <span class=\"value\"> {{ value | number : '1.2-2' }} </span>\r\n</div>"

/***/ }),

/***/ "./src/app/mobile/components/coin-real/coin-real.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/components/coin-real/coin-real.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .content .img-coin {\n    width: 25px; }\n  .content .value {\n    padding: 2.5px 2.5px;\n    color: white !important; }\n"

/***/ }),

/***/ "./src/app/mobile/components/coin-real/coin-real.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/components/coin-real/coin-real.component.ts ***!
  \********************************************************************/
/*! exports provided: CoinRealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinRealComponent", function() { return CoinRealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoinRealComponent = /** @class */ (function () {
    function CoinRealComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CoinRealComponent.prototype, "value", void 0);
    CoinRealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coin-real',
            template: __webpack_require__(/*! ./coin-real.component.html */ "./src/app/mobile/components/coin-real/coin-real.component.html"),
            styles: [__webpack_require__(/*! ./coin-real.component.scss */ "./src/app/mobile/components/coin-real/coin-real.component.scss")]
        })
    ], CoinRealComponent);
    return CoinRealComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/fab-order/fab-order.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/components/fab-order/fab-order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"primary\" *ngIf=\"!empty\" [ngClass]=\"{'up-fab': (pending_orders && pending_orders.length > 0)}\"\r\n  [style.marginBottom]=\"moveItem ? '54px' : '0'\">\r\n  <ion-fab-button (click)=\"openCart()\">\r\n    <ion-icon name=\"ios-cart\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"primary\" *ngIf=\"pending_orders?.length > 0 && empty\"\r\n  [ngClass]=\"{'up-fab': (pending_orders && pending_orders.length > 0)}\">\r\n  <ion-fab-button (click)=\"openTrackOrder()\">\r\n    <ion-icon name=\"calendar\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" color=\"primary\" *ngIf=\"pending_orders?.length > 0 && !empty\"\r\n  [ngClass]=\"{'up-fab': (pending_orders && pending_orders.length > 0)}\">\r\n  <ion-fab-button (click)=\"openTrackOrder()\">\r\n    <ion-icon name=\"calendar\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>"

/***/ }),

/***/ "./src/app/mobile/components/fab-order/fab-order.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/components/fab-order/fab-order.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fab-order {\n  transition: 0.5s; }\n  fab-order ion-fab[bottom] .up-fab {\n    bottom: 37px; }\n"

/***/ }),

/***/ "./src/app/mobile/components/fab-order/fab-order.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/components/fab-order/fab-order.component.ts ***!
  \********************************************************************/
/*! exports provided: FabOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabOrderComponent", function() { return FabOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _pages_login_app_login_app_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/login-app/login-app.page */ "./src/app/mobile/pages/login-app/login-app.page.ts");
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






var FabOrderComponent = /** @class */ (function () {
    function FabOrderComponent(modalCtrl, cartProvider, shared, navCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.cartProvider = cartProvider;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.moveItem = false;
        this.isFirst = true;
        this.cartProvider.newProductAddToCart$.subscribe(function () {
            _this.moveItem = true;
            setTimeout(function () {
                _this.moveItem = false;
                console.log(_this.moveItem);
            }, 1500);
            _this.isFirst = false;
        });
    }
    Object.defineProperty(FabOrderComponent.prototype, "pending_orders", {
        get: function () {
            return this.shared.pending_orders || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabOrderComponent.prototype, "empty", {
        /**
         * Se o carrinho está vazio
         */
        get: function () {
            return !this.cartProvider.order.entries || this.cartProvider.order.entries.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Abrir carrinho
     */
    FabOrderComponent.prototype.openCart = function () {
        var _this = this;
        this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user) return [3 /*break*/, 1];
                        this.navCtrl.navigateRoot('mobile/cart');
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_login_app_login_app_page__WEBPACK_IMPORTED_MODULE_5__["LoginAppPage"],
                            componentProps: {
                                page: 'ShoppingCartPage'
                            }
                        })];
                    case 2:
                        modal = _a.sent();
                        modal.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    FabOrderComponent.prototype.openTrackOrder = function () {
        var _this = this;
        console.log("CLIQUE PARA VISUALIZAR PEDIDOS");
        this.shared.pending_orders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (orders) {
            if (orders && orders.length > 1) {
                console.log("Tem mais de um pedido. Abrir a página de rastreamento de pedidos..");
                _this.navCtrl.navigateForward(['mobile/list-order']);
            }
            else {
                console.log("Só tem 1 pedido.. ir direto para o rastreamento do pedido");
                _this.navCtrl.navigateForward(['mobile/track-order', {
                        order: orders[0]
                    }]);
            }
        });
    };
    FabOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fab-order',
            template: __webpack_require__(/*! ./fab-order.component.html */ "./src/app/mobile/components/fab-order/fab-order.component.html"),
            styles: [__webpack_require__(/*! ./fab-order.component.scss */ "./src/app/mobile/components/fab-order/fab-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], FabOrderComponent);
    return FabOrderComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/mobile-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/mobile/components/mobile-components.module.ts ***!
  \***************************************************************/
/*! exports provided: MobileComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponentsModule", function() { return MobileComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coin_real_coin_real_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin-real/coin-real.component */ "./src/app/mobile/components/coin-real/coin-real.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _fab_order_fab_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fab-order/fab-order.component */ "./src/app/mobile/components/fab-order/fab-order.component.ts");
/* harmony import */ var _mr_card_filial_mr_card_filial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mr-card-filial/mr-card-filial.component */ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.ts");
/* harmony import */ var _mr_filial_item_mr_filial_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mr-filial-item/mr-filial-item.component */ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.ts");
/* harmony import */ var _mr_price_mr_price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mr-price/mr-price.component */ "./src/app/mobile/components/mr-price/mr-price.component.ts");
/* harmony import */ var _mr_status_order_mr_status_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mr-status-order/mr-status-order.component */ "./src/app/mobile/components/mr-status-order/mr-status-order.component.ts");
/* harmony import */ var _order_complement_list_order_complement_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-complement-list/order-complement-list.component */ "./src/app/mobile/components/order-complement-list/order-complement-list.component.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_login_app_login_app_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/login-app/login-app.module */ "./src/app/mobile/pages/login-app/login-app.module.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/mobile/components/rating/rating.component.ts");
/* harmony import */ var _card_promotion_card_promotion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card-promotion/card-promotion.component */ "./src/app/mobile/components/card-promotion/card-promotion.component.ts");
/* harmony import */ var _card_filial_list_card_filial_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card-filial-list/card-filial-list.component */ "./src/app/mobile/components/card-filial-list/card-filial-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MobileComponentsModule = /** @class */ (function () {
    function MobileComponentsModule() {
    }
    MobileComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_10__["GlobalComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _pages_login_app_login_app_module__WEBPACK_IMPORTED_MODULE_13__["LoginAppPageModule"]
            ],
            declarations: [
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"],
                _coin_real_coin_real_component__WEBPACK_IMPORTED_MODULE_2__["CoinRealComponent"],
                _fab_order_fab_order_component__WEBPACK_IMPORTED_MODULE_4__["FabOrderComponent"],
                _mr_card_filial_mr_card_filial_component__WEBPACK_IMPORTED_MODULE_5__["MrCardFilialComponent"],
                _mr_filial_item_mr_filial_item_component__WEBPACK_IMPORTED_MODULE_6__["MrFilialItemComponent"],
                _mr_price_mr_price_component__WEBPACK_IMPORTED_MODULE_7__["MrPriceComponent"],
                _card_promotion_card_promotion_component__WEBPACK_IMPORTED_MODULE_15__["CardPromotionComponent"],
                _mr_status_order_mr_status_order_component__WEBPACK_IMPORTED_MODULE_8__["MrStatusOrderComponent"],
                _order_complement_list_order_complement_list_component__WEBPACK_IMPORTED_MODULE_9__["OrderComplementListComponent"],
                _card_filial_list_card_filial_list_component__WEBPACK_IMPORTED_MODULE_16__["CardFilialListComponent"]
            ],
            exports: [
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"],
                _coin_real_coin_real_component__WEBPACK_IMPORTED_MODULE_2__["CoinRealComponent"],
                _fab_order_fab_order_component__WEBPACK_IMPORTED_MODULE_4__["FabOrderComponent"],
                _mr_card_filial_mr_card_filial_component__WEBPACK_IMPORTED_MODULE_5__["MrCardFilialComponent"],
                _mr_filial_item_mr_filial_item_component__WEBPACK_IMPORTED_MODULE_6__["MrFilialItemComponent"],
                _card_promotion_card_promotion_component__WEBPACK_IMPORTED_MODULE_15__["CardPromotionComponent"],
                _mr_price_mr_price_component__WEBPACK_IMPORTED_MODULE_7__["MrPriceComponent"],
                _mr_status_order_mr_status_order_component__WEBPACK_IMPORTED_MODULE_8__["MrStatusOrderComponent"],
                _order_complement_list_order_complement_list_component__WEBPACK_IMPORTED_MODULE_9__["OrderComplementListComponent"],
                _card_filial_list_card_filial_list_component__WEBPACK_IMPORTED_MODULE_16__["CardFilialListComponent"]
            ],
            providers: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonApp"]
            ]
        })
    ], MobileComponentsModule);
    return MobileComponentsModule;
}());



/***/ }),

/***/ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-card-filial/mr-card-filial.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"card-filial shadow shadow-light\" *ngIf=\"filial\">\r\n  <div class=\"info-filial\">\r\n    <p class=\"title\">\r\n      {{filial?.name}}\r\n    </p>\r\n    <p class=\"detail\" *ngIf=\"order?.code\" style=\"margin-top: -0.5em; margin-left: 1.5em\">\r\n      <span>Pedido:\r\n        <strong>{{ order.code }}</strong>\r\n      </span>\r\n    </p>\r\n    <p class=\"detail\">\r\n      <ion-icon class=\"space-right\" color=\"primary\" name=\"pin\"> </ion-icon>\r\n      {{ filial?.location.street }}, {{ filial?.location.number }}\r\n      <span *ngIf=\"filial?.location?.district\">, {{filial.location.district}}</span>\r\n      <span *ngIf=\"filial?.location?.city\">, {{filial.location.city}}</span>\r\n      <span *ngIf=\"filial?.location?.state_short\">- {{filial.location.state_short}}</span>\r\n      <span *ngIf=\"filial?.location?.complement\">, {{filial.location.complement}}</span>\r\n    </p>\r\n    <p class=\"detail\" *ngIf=\"phone && filial?.phone1\">\r\n      <ion-icon class=\"space-right\" color=\"primary\" name=\"md-call\"> </ion-icon>\r\n      <a href=\"tel: {{filial?.phone1}}\">{{ filial?.phone1}}</a>\r\n    </p>\r\n    <p class=\"detail\" *ngIf=\"phone && filial?.phone2\">\r\n      <ion-icon class=\"space-right\" color=\"primary\" name=\"md-call\"> </ion-icon>\r\n      <a href=\"tel: {{filial?.phone2}}\">{{ filial?.phone2}}</a>\r\n    </p>\r\n    <p class=\"detail\" *ngIf=\"!order?.created_at && showDelivery\">\r\n      <ion-icon class=\"space-right\" color=\"primary\" name=\"ios-time\"> </ion-icon>\r\n      Entrega: {{ filial?.delivery.timeMin}} min ~ {{ filial?.delivery.timeMax}} min\r\n    </p>\r\n    <p class=\"detail\" *ngIf=\"order?.created_at\">\r\n      <ion-icon class=\"space-right\" color=\"primary\" name=\"ios-time\"> </ion-icon>\r\n      Pedido realizado às\r\n      <strong style=\"font-size: 1.1em\">{{order.created_at | timestampToDate | date: 'HH:mm'}}</strong>\r\n      <br />\r\n      <span style=\"margin-left: 20px\">Entrega: {{ filial?.delivery.timeMin}} min ~ {{ filial?.delivery.timeMax}} min</span>\r\n    </p>\r\n\r\n  </div>\r\n  <ion-avatar item-end class=\"logo-filial\">\r\n    <img [src]=\"filial?.image\">\r\n  </ion-avatar>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-card-filial/mr-card-filial.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card.card-filial {\n  background: white;\n  --background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0px 10px 0;\n  width: 100%; }\n  ion-card.card-filial .info-filial {\n    padding: 10px 0; }\n  ion-card.card-filial .info-filial .title {\n      color: #666;\n      font-size: 1.2em;\n      font-weight: bold;\n      margin-left: 15px; }\n  ion-card.card-filial .info-filial .detail {\n      color: black;\n      margin-left: 15px;\n      font-size: 1em;\n      padding: 3px 0; }\n  ion-card.card-filial .info-filial .detail ion-icon {\n        font-size: 1em !important; }\n  ion-card.card-filial .info-filial .detail ion-icon.space-right {\n          margin-right: 3px; }\n  ion-card.card-filial .logo-filial {\n    width: 90px;\n    margin-right: 1em; }\n"

/***/ }),

/***/ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mobile/components/mr-card-filial/mr-card-filial.component.ts ***!
  \******************************************************************************/
/*! exports provided: MrCardFilialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrCardFilialComponent", function() { return MrCardFilialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MrCardFilialComponent = /** @class */ (function () {
    function MrCardFilialComponent() {
        this.showDelivery = true;
        /**
         * Se é para mostrar o telefone ou não
         */
        this.phone = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"])
    ], MrCardFilialComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"])
    ], MrCardFilialComponent.prototype, "filial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MrCardFilialComponent.prototype, "showDelivery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MrCardFilialComponent.prototype, "phone", void 0);
    MrCardFilialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mr-card-filial',
            template: __webpack_require__(/*! ./mr-card-filial.component.html */ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.html"),
            styles: [__webpack_require__(/*! ./mr-card-filial.component.scss */ "./src/app/mobile/components/mr-card-filial/mr-card-filial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MrCardFilialComponent);
    return MrCardFilialComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-filial-item/mr-filial-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section margin-top class=\"container-filials\" [ngClass]=\"{'closed': !filial.open}\" *ngIf=\"filial?.type\">\r\n    <aside class=\"shadow shadow-light-2\">\r\n        <nano-thumb [src]=\"filial.image\" large=\"true\" white=\"true\" *ngIf=\"filial.image\"></nano-thumb>\r\n    </aside>\r\n\r\n    <div class=\"container-name\">\r\n        <h4 ion-text text-wrap padding-horizontal *ngIf=\"filial.name\" class=\"my-font-bold max-lines max-lines-2\">{{filial.name}}</h4>\r\n    </div>\r\n    <ion-card padding>\r\n\r\n        <h2 *ngIf=\"filial.type\">{{filial.subtype.name}}</h2>\r\n\r\n        <div class=\"container-star\">\r\n            <ion-icon name=\"star\"></ion-icon>\r\n            <span id=\"star-number\" *ngIf=\"filial?.rating?.quantity >= 5\">{{filial.rating.rate | number : '1.1-1'}}</span>\r\n            <span class=\"quantity\" *ngIf=\"filial?.rating?.quantity >= 5\">\r\n                <strong>({{filial?.rating?.quantity | number: '1.0-0'}} {{filial?.rating?.quantity > 1 ? 'avaliações' :\r\n                    'avaliação'}})</strong>\r\n            </span>\r\n            <span class=\"quantity\" *ngIf=\"!filial?.rating || !filial?.rating?.quantity || filial?.rating?.quantity < 5\">\r\n                <strong class=\"new-filial-rate\">Novo</strong>\r\n            </span>\r\n        </div>\r\n        <p *ngIf=\"filial.delivery\">{{filial.delivery.timeMin}} min ~ {{filial.delivery.timeMax}} min</p>\r\n        <div class=\"container-distance-open\">\r\n            <div *ngIf=\"filial.distance && filial.distance >= 1\">\r\n                <strong>{{filial.distance | number: '1.2-2' }} km</strong>\r\n            </div>\r\n            <div *ngIf=\"filial.distance && filial.distance < 1\">\r\n                <strong>{{filial.distance | formatDistance }} m</strong>\r\n            </div>\r\n            <div class=\"status\" [ngClass]=\"{'closed': !filial.open}\" *ngIf=\"!filial.next_open_hour\">\r\n                <p>{{filial.open ? 'Aberto' : 'Fechado'}}</p>\r\n            </div>\r\n            <div class=\"status hours\" *ngIf=\"filial.next_open_hour\">\r\n                <p ion-text>{{filial.next_open_hour}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Recomendação do Chefe -->\r\n        <article class=\"special-product product\" *ngIf=\"filial.product_recomendated\">\r\n\r\n            <div class=\"special-product-infos\">\r\n                <div class=\"left-side\" style=\"margin-bottom: 5px\">\r\n                    <h2>{{filial.product_recomendated.name}}</h2>\r\n                    <p class=\"descrition-recomended\">{{filial.product_recomendated.description}}</p>\r\n                    <div class=\"content value-price-product\">\r\n                        <p *ngIf=\"!newPrice && filial.product_recomendated?.minimumPrice !== filial.product_recomendated?.priceBase\">\r\n                            <strong>A partir de </strong>\r\n                            <strong class=\"price-value\">R$ {{ filial.product_recomendated?.minimumPrice | number :\r\n                                '1.2-2' }}</strong>\r\n                        </p>\r\n                        <p *ngIf=\"!newPrice && !(filial.product_recomendated?.minimumPrice !== filial.product_recomendated?.priceBase)\"\r\n                            class=\"text-new-price\" class=\"text-new-price\">\r\n                            <strong class=\"price-value\">R$ {{ filial.product_recomendated?.minimumPrice | number :\r\n                                '1.2-2' }}</strong>\r\n                        </p>\r\n                        <p class=\"value line\" *ngIf=\"newPrice\">De\r\n                            <strong class=\"price-old-value\">R$ {{ filial.product_recomendated?.minimumPrice | number :\r\n                                '1.2-2' }}</strong> Por\r\n                            <strong class=\"price-value\">R$ {{ newPrice | number : '1.2-2' }}</strong>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n\r\n        <article class=\"special-product\" *ngIf=\"!filial.product_recomendated && filial.description\">\r\n            <p ion-text class=\"special-description max-lines max-lines-3\">{{filial.description}}</p>\r\n        </article>\r\n    </ion-card>\r\n</section>"

/***/ }),

/***/ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-filial-item/mr-filial-item.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.container-filials {\n  position: relative;\n  margin-top: 2em !important; }\n  section.container-filials .container-name {\n    height: 50px;\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end; }\n  section.container-filials .container-name h4 {\n      margin-top: 0px !important;\n      margin-bottom: -2px !important; }\n  section.container-filials aside {\n    position: absolute;\n    z-index: 1000;\n    top: 10px;\n    right: 30px; }\n  section.container-filials aside img {\n      width: 110px;\n      height: auto; }\n  section.container-filials ion-card {\n    --background: white;\n    margin-top: 7px !important;\n    padding: 16px 16px 0px 16px !important; }\n  section.container-filials ion-card .container-distance-open {\n      display: flex;\n      align-items: center; }\n  section.container-filials ion-card .container-distance-open div.status {\n        margin-left: 1em; }\n  section.container-filials ion-card h1 {\n      font-weight: bold;\n      color: var(--ion-color-primary) !important; }\n  section.container-filials ion-card h2 {\n      font-weight: bold;\n      font-size: 0.95em;\n      margin-bottom: 5px;\n      color: var(--ion-color-primary) !important; }\n  section.container-filials ion-card img {\n      width: 25px; }\n  section.container-filials ion-card .container-star {\n      color: var(--ion-color-primary);\n      font-size: 1.2em;\n      margin-top: 4px;\n      margin-bottom: 4px; }\n  section.container-filials ion-card .container-star .new-filial-rate {\n        font-size: 16px !important; }\n  section.container-filials ion-card .status {\n      background-color: var(--color-price);\n      margin-top: 4px;\n      font-size: 0.8em;\n      padding-top: 2px;\n      padding-bottom: 2px;\n      padding-left: 4px;\n      padding-bottom: 4px;\n      color: white;\n      font-weight: 500;\n      border-radius: 4px;\n      width: 65px;\n      text-align: center;\n      display: flex;\n      justify-content: space-around;\n      align-items: center; }\n  section.container-filials ion-card .status p {\n        font-weight: bold;\n        margin: 0px !important;\n        margin-top: 2px !important;\n        font-size: 1em !important;\n        letter-spacing: 1px;\n        color: white; }\n  section.container-filials ion-card .status.closed {\n      background-color: lightcoral; }\n  section.container-filials ion-card .status.closed p {\n        margin-left: -2px !important; }\n  section.container-filials ion-card .status.hours {\n      width: auto;\n      padding: 3px 10px;\n      background-color: #242323; }\n  section.container-filials ion-card .status.hours p {\n        margin-left: -2px !important; }\n  section.container-filials article.product {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    min-height: 3.5em !important; }\n  section.container-filials article.product p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 3; }\n  section.container-filials article.product p.descrition-recomended {\n        font-size: 1.2rem !important; }\n  section.container-filials article.special-product {\n    border-top: 2px solid rgba(2, 2, 2, 0.18) !important;\n    margin-top: 0.8em; }\n  section.container-filials article.special-product div.left-side h2 {\n      font-weight: bold;\n      color: #333 !important; }\n  section.container-filials article.special-product div.left-side p {\n      padding-right: 24px;\n      color: var(--color-discret);\n      line-height: 1.2em; }\n  section.container-filials article.special-product .value-price-product {\n      margin-top: 5px; }\n  section.container-filials article.special-product .price-value {\n      color: green !important; }\n  section.container-filials article.special-product .price-old-value {\n      color: red !important;\n      text-decoration: line-through !important; }\n  section.container-filials article.special-product .special-description {\n      margin-bottom: 15px;\n      padding-top: 12px !important; }\n  section.container-filials article.special-product .special-product-infos {\n      display: flex;\n      justify-content: space-between; }\n  section.container-filials article.special-product div.right-side {\n      float: right; }\n  section.container-filials article.special-product div.right-side span {\n        display: -webkit-inline-box;\n        margin-bottom: 1em; }\n  section.container-filials article.special-product div.right-side span img {\n          margin-right: 4px; }\n  section.container-filials article.special-product .coin {\n      position: relative;\n      margin: 0px;\n      margin-right: 8px !important;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n  section.container-filials article.special-product .coin p.from-price {\n        margin: 0;\n        padding: 0px;\n        min-height: 0px;\n        font-size: 12px;\n        text-align: center;\n        position: absolute;\n        width: 70px;\n        color: var(--color-discret); }\n  section.container-filials article.special-product .coin p.price-old {\n        text-decoration: line-through; }\n  section.container-filials article.special-product .coin coin-real .content span {\n        padding-left: 4px; }\n  section.container-filials article.special-product .coin coin-ranguitos .content {\n        margin-top: 4px !important; }\n  section.container-filials article.special-product .coin coin-ranguitos .content span {\n          padding-left: 4px; }\n  section.container-filials.closed {\n  opacity: 0.85 !important; }\n  section.container-filials.closed h1,\n  section.container-filials.closed h2 {\n    color: gray !important; }\n  section.container-filials.closed .filial-name {\n    color: gray; }\n  section.container-filials.closed aside {\n    opacity: 0.8;\n    z-index: 1000; }\n  section.container-filials.closed .container-name {\n    opacity: 0.8; }\n  section.container-filials.closed ion-card {\n    opacity: 0.8; }\n  .quantity {\n  color: #666;\n  font-size: 0.8em;\n  margin-top: -6px; }\n"

/***/ }),

/***/ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mobile/components/mr-filial-item/mr-filial-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: MrFilialItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrFilialItemComponent", function() { return MrFilialItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MrFilialItemComponent = /** @class */ (function () {
    function MrFilialItemComponent(productProvider) {
        this.productProvider = productProvider;
    }
    MrFilialItemComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.productProvider.getBestRecomendation(this.filial)
            .subscribe(function (bestRecomendation) {
            if (!bestRecomendation)
                return;
            _this.filial.product_recomendated = bestRecomendation;
            if (_this.filial.product_recomendated.promotionActive) {
                if (_this.filial.product_recomendated.promotionPrice) {
                    _this.newPrice = _this.filial.product_recomendated.minimumPrice - _this.filial.product_recomendated.promotionPrice;
                }
                else {
                    _this.newPrice = ((100 - _this.filial.product_recomendated.promotionPercentage) / 100) * _this.filial.product_recomendated.minimumPrice;
                }
            }
            else {
                _this.newPrice = undefined;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"])
    ], MrFilialItemComponent.prototype, "filial", void 0);
    MrFilialItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mr-filial-item',
            template: __webpack_require__(/*! ./mr-filial-item.component.html */ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.html"),
            styles: [__webpack_require__(/*! ./mr-filial-item.component.scss */ "./src/app/mobile/components/mr-filial-item/mr-filial-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], MrFilialItemComponent);
    return MrFilialItemComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/mr-price/mr-price.component.html":
/*!********************************************************************!*\
  !*** ./src/app/mobile/components/mr-price/mr-price.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"total shadow shadow-light\">\r\n  <div class=\"total-info\">\r\n\r\n    <p *ngIf=\"price.subtotal\">\r\n      <strong>Subtotal</strong>\r\n    </p>\r\n    <p>Taxa de entrega </p>\r\n    <p *ngIf=\"price?.couponDiscounts\">Descontos de Cupom</p>\r\n    <p class=\"total-text\">\r\n      <strong>Total </strong>\r\n    </p>\r\n  </div>\r\n  <div class=\"total-price\" text-right>\r\n    <p *ngIf=\"price.subtotal\">\r\n      <strong> R$ {{price.subtotal | number: '1.2-2'}} </strong>\r\n    </p>\r\n    <p class=\"delivery-price\">\r\n      <strong>+ R$ {{price.delivery | number: '1.2-2'}} </strong>\r\n    </p>\r\n    <p class=\"delivery-price\" *ngIf=\"price.couponDiscounts\">\r\n      <strong>- R$ {{price.couponDiscounts | number: '1.2-2'}} </strong>\r\n    </p>\r\n    <p class=\"total-price-text\">\r\n      <strong>R$ {{ price.total| number: '1.2-2'}} </strong>\r\n    </p>\r\n  </div>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/mobile/components/mr-price/mr-price.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/mobile/components/mr-price/mr-price.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card.total {\n  background: white;\n  --background: white;\n  width: 100% !important;\n  margin-right: 0px;\n  margin-left: 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  margin: 10px 0px 5px 0px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n  ion-card.total p {\n    margin: 6px 0;\n    margin-left: 0.5em; }\n  ion-card.total .total-text {\n    font-size: 1.2em; }\n  ion-card.total .total-price {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 137px;\n    height: 105%;\n    padding-top: 3px;\n    padding-right: 10px;\n    color: black; }\n  ion-card.total .total-price .delivery-price {\n      color: #666; }\n  ion-card.total .total-price .total-price-text {\n      font-size: 1.2em; }\n"

/***/ }),

/***/ "./src/app/mobile/components/mr-price/mr-price.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/components/mr-price/mr-price.component.ts ***!
  \******************************************************************/
/*! exports provided: MrPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrPriceComponent", function() { return MrPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MrPriceComponent = /** @class */ (function () {
    function MrPriceComponent(cart) {
        this.cart = cart;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MrPriceComponent.prototype, "price", void 0);
    MrPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mr-price',
            template: __webpack_require__(/*! ./mr-price.component.html */ "./src/app/mobile/components/mr-price/mr-price.component.html"),
            styles: [__webpack_require__(/*! ./mr-price.component.scss */ "./src/app/mobile/components/mr-price/mr-price.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], MrPriceComponent);
    return MrPriceComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/mr-status-order/mr-status-order.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-status-order/mr-status-order.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"status-label\" text-center color=\"primary\">Status do pedido</h5>\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.created_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated' : order.status === OrderStatus.created}\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <p>Pedido realizado</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon><span class=\"time\">{{order.created_at | timestampToDate | date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.accepted_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated' : order.status === OrderStatus.accepted}\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <p>Confirmado</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon><span class=\"time\">{{order.accepted_at | timestampToDate |\r\n        date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.delivery_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated'  : order.status === OrderStatus.delivery}\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info \">\r\n    <p>Saiu para entrega</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon><span class=\"time\">{{order.delivery_at | timestampToDate | date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.done_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated' : order.status === OrderStatus.done}\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <p>Concluído</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon> <span class=\"time\">{{order.done_at | timestampToDate |\r\n        date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.refused_at || order.away_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated' :  order.status === OrderStatus.away || order.status === OrderStatus.refused}\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <p>Recusado</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon> <span class=\"time\">{{(order.refused_at || order.away_at) |\r\n        timestampToDate | date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>\r\n\r\n<ion-card class=\"status shadow shadow-light\" *ngIf=\"order.incomplete_at\">\r\n  <div class=\"circle\" [ngClass]=\"{'activated' : order.status === OrderStatus.incomplete }\">\r\n    <div class=\"sub-circle\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <p>Cancelado</p>\r\n    <span>\r\n      <ion-icon name=\"md-time\"></ion-icon><span class=\"time\">{{ order.incomplete_at | timestampToDate |\r\n        date:'shortTime'}}</span>\r\n    </span>\r\n  </div>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/mobile/components/mr-status-order/mr-status-order.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-status-order/mr-status-order.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white;\n  --background: white;\n  width: 100% !important;\n  margin-left: 0 !important; }\n\nspan {\n  color: #666 !important; }\n\nspan.time {\n  margin-top: -1em; }\n\nh2 {\n  color: var(--ion-color-primary); }\n\n.status-label {\n  color: #595959;\n  font-family: myFontBold !important;\n  font-weight: normal;\n  padding: 0px;\n  margin: 0px;\n  float: left !important;\n  margin-left: 16px;\n  margin-top: 32px;\n  padding-bottom: 8px;\n  font-size: 1.2em;\n  line-height: 1em; }\n\n.status {\n  display: flex;\n  align-items: center;\n  padding: 15px; }\n\n.status .circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 24px;\n    height: 24px;\n    border: 2px solid var(--ion-color-primary);\n    border-radius: 50%; }\n\n.status .circle.activated .sub-circle {\n      background-color: var(--ion-color-primary);\n      width: 80%;\n      border-radius: 50%;\n      height: 80%; }\n\n.status .info {\n    padding: 0 20px; }\n\n.status .info p {\n      color: var(--ion-color-primary);\n      font-size: 15px;\n      font-weight: bold; }\n\n.status .info span {\n      color: #666; }\n"

/***/ }),

/***/ "./src/app/mobile/components/mr-status-order/mr-status-order.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/components/mr-status-order/mr-status-order.component.ts ***!
  \********************************************************************************/
/*! exports provided: MrStatusOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrStatusOrderComponent", function() { return MrStatusOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MrStatusOrderComponent = /** @class */ (function () {
    function MrStatusOrderComponent() {
        this.OrderStatus = _models_order__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"];
    }
    MrStatusOrderComponent.prototype.ngAfterContentInit = function () {
        console.log("Order: ", this.order);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('order'),
        __metadata("design:type", _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"])
    ], MrStatusOrderComponent.prototype, "order", void 0);
    MrStatusOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mr-status-order',
            template: __webpack_require__(/*! ./mr-status-order.component.html */ "./src/app/mobile/components/mr-status-order/mr-status-order.component.html"),
            styles: [__webpack_require__(/*! ./mr-status-order.component.scss */ "./src/app/mobile/components/mr-status-order/mr-status-order.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MrStatusOrderComponent);
    return MrStatusOrderComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/order-complement-list/order-complement-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/mobile/components/order-complement-list/order-complement-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item-divider color=\"primary\">\r\n  <h3 ion-text text-wrap class=\"my-font-bold\">{{complement.title}}\r\n    <p ion-text class=\"required my-font-regular\" *ngIf=\"complement.type === TYPE_SINGLE && complement.required\">Obrigatório</p>\r\n    <p ion-text class=\"required my-font-regular\" *ngIf=\"complement.type !== TYPE_SINGLE && complement.min > 0\">Mínimo\r\n      {{complement.min}}</p>\r\n  </h3>\r\n  <div class=\"counts\" slot=\"end\">\r\n    <h5 ion-text color=\"primary\" class=\"my-font-bold\" *ngIf=\"complement.type === TYPE_SINGLE\">Único</h5>\r\n    <h5 ion-text color=\"primary\" class=\"my-font-bold\" *ngIf=\"complement.type !== TYPE_SINGLE\">{{(total_sum_quantity||0)}}/{{complement.max}}</h5>\r\n  </div>\r\n  <div class=\"background-toolbar-right\"></div>\r\n  <div class=\"background-toolbar-right-white\"></div>\r\n</ion-item-divider>\r\n\r\n\r\n<ion-radio-group *ngIf=\"complement.type === TYPE_SINGLE\" [(ngModel)]=\"option_single_selected\" (ionChange)=\"singleChange($event)\">\r\n  <ion-item no-lines *ngFor=\"let option of complement.options\">\r\n    <ion-label text-wrap>\r\n      <h2 ion-text>{{option.name}}</h2>\r\n      <h3 ion-text *ngIf=\"option?.price && option.price > 0\"><strong class=\"price-value\">+ R$ {{option.price | number :\r\n          '1.2-2'}}</strong></h3>\r\n      <p ion-text text-wrap>{{option.description}}</p>\r\n    </ion-label>\r\n    <ion-radio [value]=\"option\"></ion-radio>\r\n  </ion-item>\r\n</ion-radio-group>\r\n\r\n<div *ngIf=\"complement.type === TYPE_MULTIPLE\">\r\n  <ion-item no-lines *ngFor=\"let option of complement.options\">\r\n    <ion-label text-wrap>\r\n      <h2 ion-text>{{option.name}}</h2>\r\n      <h3 ion-text *ngIf=\"option?.price && option.price > 0\"><strong class=\"price-value\">+ R$ {{option.price | number :\r\n          '1.2-2'}}</strong></h3>\r\n      <p ion-text text-wrap>{{option.description}}</p>\r\n    </ion-label>\r\n    <ion-checkbox [(ngModel)]=\"option.quantity\" (ionChange)=\"multipleChange(option, $event)\" item-end></ion-checkbox>\r\n  </ion-item>\r\n</div>\r\n\r\n<div *ngIf=\"complement.type === TYPE_QUANTITY\">\r\n  <ion-item no-lines *ngFor=\"let option of complement.options\">\r\n    <ion-label text-wrap>\r\n      <h2 ion-text>{{option.name}}</h2>\r\n      <h3 ion-text *ngIf=\"option?.price && option.price > 0\"><strong class=\"price-value\">+ R$ {{option.price | number :\r\n          '1.2-2'}}</strong></h3>\r\n      <p ion-text text-wrap>{{option.description}}</p>\r\n    </ion-label>\r\n    <div item-right class=\"quantity-buttons\">\r\n      <ion-button fill=\"clear\" icon-only (click)=\"quantityChange(option, -1)\" *ngIf=\"option.quantity > 0\">\r\n        <ion-icon name=\"md-remove\"></ion-icon>\r\n      </ion-button>\r\n      <p ion-text>{{option.quantity || 0}}</p>\r\n      <ion-button fill=\"clear\" icon-only (click)=\"quantityChange(option, 1)\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </ion-item>\r\n</div>"

/***/ }),

/***/ "./src/app/mobile/components/order-complement-list/order-complement-list.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/mobile/components/order-complement-list/order-complement-list.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  height: 3.5em !important; }\n  ion-item-divider h3 {\n    font-size: 1em !important; }\n  ion-item-divider h3.text {\n    font-size: 1em;\n    padding: 0; }\n  ion-item-divider .text {\n    z-index: 1; }\n  ion-item-divider .background-toolbar-right {\n    z-index: -1; }\n  ion-item-divider .background-toolbar-right-white {\n    background: white;\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    z-index: -1; }\n  ion-item-divider .counts h5 {\n    margin-right: 10px !important; }\n  .price-value {\n  color: green !important; }\n  .required {\n  margin-left: 5px;\n  display: inline-block;\n  padding: 2px 5px !important;\n  background: white;\n  color: #505050;\n  border-radius: 8px; }\n  .background-toolbar-right {\n  width: 75px;\n  margin-right: 15px; }\n  .quantity-buttons {\n  width: 75px;\n  margin-right: 5px !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .quantity-buttons p.text {\n    display: flex;\n    align-items: center; }\n  .quantity-buttons h1 {\n    font-family: myFontBold !important; }\n  .quantity-buttons .text {\n    padding: 0px 10px;\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/mobile/components/order-complement-list/order-complement-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/mobile/components/order-complement-list/order-complement-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrderComplementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComplementListComponent", function() { return OrderComplementListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/product */ "./src/models/product.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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



var OrderComplementListComponent = /** @class */ (function () {
    function OrderComplementListComponent(alertCtrl, changeDetect) {
        this.alertCtrl = alertCtrl;
        this.changeDetect = changeDetect;
        /**
         * Evento emitido sempre que for editado alguma quantidade das opções selecionadas
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Total soma das quantidades das opções
         */
        this.total_sum_quantity = 0;
        /**
         * Valores usados pelo template
         */
        this.TYPE_QUANTITY = _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].quantity;
        this.TYPE_SINGLE = _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].single;
        this.TYPE_MULTIPLE = _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].multiple;
    }
    OrderComplementListComponent.prototype.ngOnInit = function () {
        this.complement.options = this.complement.options
            .filter(function (option) { return option.active !== false; });
        switch (this.complement.type) {
            case _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].single:
                this.initSingle();
                break;
            case _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].multiple:
                this.calculateTotalSum();
                break;
            case _models_product__WEBPACK_IMPORTED_MODULE_1__["ComplementType"].quantity:
                this.calculateTotalSum();
                break;
            default:
                console.error(this.complement);
                throw Error("Order Complement List Component chamado sem um complemento com tipo válido");
        }
    };
    /**
     * Inicializa a variavel this.option_single_selected
     * que armazena a opção selecionada
     */
    OrderComplementListComponent.prototype.initSingle = function () {
        for (var _i = 0, _a = this.complement.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.quantity && option.quantity > 0 && !this.option_single_selected) {
                this.option_single_selected = option;
            }
            option.quantity = 0;
        }
    };
    /**
     * Calcula a soma atual de todas as quantidades das opções
     */
    OrderComplementListComponent.prototype.calculateTotalSum = function () {
        this.total_sum_quantity = 0;
        for (var _i = 0, _a = this.complement.options; _i < _a.length; _i++) {
            var option = _a[_i];
            this.total_sum_quantity += (option.quantity || 0);
        }
    };
    /**
     * Mudança no complemento de tipo single
     * @param event Evento de javascript
     */
    OrderComplementListComponent.prototype.singleChange = function (event) {
        for (var _i = 0, _a = this.complement.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.quantity = 0;
        }
        if (this.option_single_selected) {
            this.option_single_selected.quantity = 1;
        }
        this.change.emit();
    };
    /**
     * Mudança no complemento de tipo multiple
     * @param option Opção clicada
     * @param event Evento de javascript
     */
    OrderComplementListComponent.prototype.multipleChange = function (option, event) {
        var _this = this;
        setTimeout(function () {
            console.log("Opção múltipla: ", option);
            console.log("Complement: ", _this.complement);
            console.log("Soma total: ", _this.total_sum_quantity);
            console.log("Evento: ", event);
            console.log("Evento valor: ", event.value);
            if (event.detail.checked && _this.complement.max != 0 && _this.total_sum_quantity >= _this.complement.max) {
                event.preventDefault();
                option.quantity = 0;
                event.detail.checked = false;
                _this.changeDetect.detectChanges();
                _this.showAlertQuantityMax();
            }
            // O campo quantity é usado como booleano no Checkbox
            // Converter para numero
            _this.complement.options.map(function (option) {
                if (option.quantity) {
                    option.quantity = 1;
                }
                else {
                    option.quantity = 0;
                }
            });
            _this.calculateTotalSum();
            _this.change.emit();
        }, 50);
    };
    /**
     * Mudança no complemento de tipo quantity
     * @param option Opção a ser editada
     * @param increment quantidade do incremento, pode ser 1 ou -1
     */
    OrderComplementListComponent.prototype.quantityChange = function (option, increment) {
        if (this.complement.max != 0 && increment > 0 && this.total_sum_quantity >= this.complement.max) {
            this.showAlertQuantityMax();
            return;
        }
        option.quantity = option.quantity || 0;
        option.quantity += increment;
        if (option.quantity < 0)
            option.quantity = 0;
        this.calculateTotalSum();
        this.change.emit();
    };
    /**
     * Alerta para avisar que ele já selecionou o máximo de quantidade de opções neste determinado complemento.
     */
    OrderComplementListComponent.prototype.showAlertQuantityMax = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "Você já selecionou o máximo de opções desse complemento!",
                            buttons: [
                                {
                                    text: "Ok"
                                }
                            ]
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
        __metadata("design:type", Object)
    ], OrderComplementListComponent.prototype, "complement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderComplementListComponent.prototype, "change", void 0);
    OrderComplementListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-complement-list',
            template: __webpack_require__(/*! ./order-complement-list.component.html */ "./src/app/mobile/components/order-complement-list/order-complement-list.component.html"),
            styles: [__webpack_require__(/*! ./order-complement-list.component.scss */ "./src/app/mobile/components/order-complement-list/order-complement-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], OrderComplementListComponent);
    return OrderComplementListComponent;
}());



/***/ }),

/***/ "./src/app/mobile/components/rating/rating.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mobile/components/rating/rating.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-stars\" *ngIf=\"stars\" [ngClass]=\"{'small': isSmall(), 'medium': isMedium(), 'large' : isLarge()}\">\r\n  <div *ngFor=\"let star of stars\" (click)=\"select(star)\">\r\n    <ion-icon name=\"star\" *ngIf=\"star?.active\"></ion-icon>\r\n    <ion-icon name=\"star-outline\" *ngIf=\"!star?.active\"></ion-icon>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobile/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/mobile/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container-stars {\n  font-size: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.small {\n  font-size: 1em !important; }\n\n.medium {\n  font-size: 2em !important; }\n\n.large {\n  font-size: 3em !important; }\n\nion-icon {\n  color: goldenrod; }\n"

/***/ }),

/***/ "./src/app/mobile/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mobile/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.quantity = 5; //quantidade de estrelas
        this.changeStar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * small = 1em
         * medium = 2em
         * large = 3em
         *
        */
        this.size = "large";
        this.stars = [];
    }
    RatingComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= this.quantity; i++) {
            this.stars.push({
                rating: i,
                active: this.initial ? i <= this.initial : false
            });
        }
    };
    RatingComponent.prototype.select = function (selectedStar) {
        this.stars.forEach(function (star) {
            if (star.rating <= selectedStar.rating) {
                star.active = true;
            }
            else {
                star.active = false;
            }
        });
        this.changeStar.emit(selectedStar.rating);
    };
    RatingComponent.prototype.isSmall = function () {
        return this.size == 'small';
    };
    RatingComponent.prototype.isMedium = function () {
        return this.size == 'medium';
    };
    RatingComponent.prototype.isLarge = function () {
        return this.size == 'large';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "changeStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/mobile/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/mobile/components/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>{{promotion.name || 'Promoção'}}</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>LOJA</h1>\r\n  <mr-card-filial [showDelivery]=\"false\" [filial]=\"filial\"></mr-card-filial>\r\n\r\n  <section>\r\n    <h1 class=\"info\" style=\"margin-top: -0.4em!important;\">INFORMAÇÕES</h1>\r\n    <p padding-horizontal padding-bottom>{{promotion.description}}</p>\r\n  </section>\r\n  <section>\r\n    <h1>VALOR</h1>\r\n\r\n    <p padding-horizontal padding-bottom>De <span class=\"real-money\">{{promotion.priceBase | noNegative |\r\n        currency:'BRL':'symbol':'1.2'}}</span> por apenas\r\n      <span class=\"money\" *ngIf=\"promotion.promotionPercentage\">{{ (100 - promotion.promotionPercentage)/100\r\n        * promotion.priceBase | noNegative |\r\n        currency:'BRL':'symbol':'1.2'}}</span>\r\n      <span class=\"money\" *ngIf=\"promotion.promotionPrice\">{{ promotion.priceBase - promotion.promotionPrice\r\n        | noNegative |\r\n        currency:'BRL':'symbol':'1.2'}}</span></p>\r\n  </section>\r\n\r\n  <section *ngIf=\"code\">\r\n    <h1>CÓDIGO DO CUPOM</h1>\r\n    <p padding-horizontal padding-bottom>Apresente o código <b>{{code}}</b> para o lojista para obter os descontos</p>\r\n  </section>\r\n\r\n  <ion-button *ngIf=\"!code\" expand=\"block\" color=\"primary\" class=\"do-order-button my-font-logo\" (click)=\"generateCoupon()\">\r\n    GERAR CUPOM\r\n  </ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 0.5em !important;\n  margin-bottom: 0em;\n  font-size: 1em;\n  font-weight: bold;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  padding: 0.7em;\n  background-color: bisque;\n  color: var(--ion-color-primary); }\n\nh1.info {\n  margin-top: -0.4em !important; }\n\nh1:first-child {\n  margin-top: 0em !important;\n  margin-bottom: -0.45em !important; }\n\nsection {\n  background: white; }\n\np {\n  margin-bottom: 0; }\n\n.do-order-button {\n  font-size: 1.4em;\n  padding: 0px !important;\n  margin: 0px !important;\n  position: absolute;\n  bottom: 0.5em;\n  width: 100%; }\n\nspan.money {\n  color: darkgreen;\n  font-size: 1.1em;\n  margin-left: 4px;\n  font-weight: bold; }\n\nspan.real-money {\n  color: #666;\n  text-decoration: line-through;\n  font-weight: bold;\n  font-size: 0.9em; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.ts ***!
  \********************************************************************************/
/*! exports provided: PromotionDetailAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionDetailAppPage", function() { return PromotionDetailAppPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_promotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/promotion */ "./src/models/promotion.ts");
/* harmony import */ var _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/order-promotion */ "./src/models/order-promotion.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login-app/login-app.page */ "./src/app/mobile/pages/login-app/login-app.page.ts");
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











var PromotionDetailAppPage = /** @class */ (function () {
    function PromotionDetailAppPage(modalCtrl, shared) {
        this.modalCtrl = modalCtrl;
        this.shared = shared;
    }
    PromotionDetailAppPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Filial: ", this.filial);
        console.log("Promoção: ", this.promotion);
        if (this.promotion.code) {
            this.code = this.promotion.code;
        }
        this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (user) {
            if (!user)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            return _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].list([{
                    name: 'filial.id',
                    operator: '==',
                    value: _this.filial.id
                },
                {
                    name: 'user.id',
                    operator: '==',
                    value: user.id
                },
                {
                    name: 'promotion.id',
                    operator: '==',
                    value: _this.promotion.id
                }]);
        }))
            .subscribe(function (orderPromotions) {
            if (orderPromotions && orderPromotions.length > 0) {
                _this.code = orderPromotions[0].code;
                console.log("Código: ", _this.code);
            }
        });
    };
    PromotionDetailAppPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    PromotionDetailAppPage.prototype.generateCoupon = function () {
        var _this = this;
        var orderPromotion = {};
        orderPromotion.code = Object(_util_util__WEBPACK_IMPORTED_MODULE_7__["makeRandomAlfaNumber"])(6);
        orderPromotion.created_at = firebase__WEBPACK_IMPORTED_MODULE_8__["firestore"].Timestamp.fromDate(new Date());
        console.log("Gerar cupom");
        this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (user) {
            console.log("Usuário logado: ", user);
            if (!user)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            return _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].add(orderPromotion, [
                {
                    relationship: _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].promotion,
                    id: _this.promotion.id
                },
                {
                    relationship: _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].filial,
                    id: _this.filial.id
                },
                {
                    relationship: _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].company,
                    id: _this.filial.company.id
                },
                {
                    relationship: _models_order_promotion__WEBPACK_IMPORTED_MODULE_6__["OrderPromotion"].user,
                    id: user.id
                }
            ]);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var modalLogin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Res: ", res);
                        if (!(res === null)) return [3 /*break*/, 2];
                        console.log("Usuário não está logado.");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_10__["LoginAppPage"],
                                componentProps: {
                                    page: 'PromotionDetailPage'
                                }
                            })];
                    case 1:
                        modalLogin = _a.sent();
                        modalLogin.present();
                        return [3 /*break*/, 3];
                    case 2:
                        this.code = orderPromotion.code;
                        console.log("Pedido de promoção cadastrado com sucesso");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_filial__WEBPACK_IMPORTED_MODULE_4__["Filial"])
    ], PromotionDetailAppPage.prototype, "filial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_promotion__WEBPACK_IMPORTED_MODULE_5__["Promotion"])
    ], PromotionDetailAppPage.prototype, "promotion", void 0);
    PromotionDetailAppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-detail-app',
            template: __webpack_require__(/*! ./promotion-detail-app.page.html */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.html"),
            styles: [__webpack_require__(/*! ./promotion-detail-app.page.scss */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], PromotionDetailAppPage);
    return PromotionDetailAppPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~9d4dadd6.js.map