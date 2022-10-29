(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-customer-customer-module"],{

/***/ "./src/app/mobile/pages/customer/customer.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/customer/customer.module.ts ***!
  \**********************************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.page */ "./src/app/mobile/pages/customer/customer.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _phone_edit_phone_edit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../phone-edit/phone-edit.module */ "./src/app/mobile/pages/phone-edit/phone-edit.module.ts");
/* harmony import */ var _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customer-address/customer-address.module */ "./src/app/mobile/pages/customer-address/customer-address.module.ts");
/* harmony import */ var _evaluate_order_evaluate_order_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../evaluate-order/evaluate-order.module */ "./src/app/mobile/pages/evaluate-order/evaluate-order.module.ts");
/* harmony import */ var _promotion_detail_app_promotion_detail_app_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../promotion-detail-app/promotion-detail-app.module */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.module.ts");
/* harmony import */ var _promotion_detail_app_promotion_detail_app_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../promotion-detail-app/promotion-detail-app.page */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_5__["CustomerPage"]
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _phone_edit_phone_edit_module__WEBPACK_IMPORTED_MODULE_9__["PhoneEditPageModule"],
                _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_10__["CustomerAddressPageModule"],
                _evaluate_order_evaluate_order_module__WEBPACK_IMPORTED_MODULE_11__["EvaluateOrderPageModule"],
                _promotion_detail_app_promotion_detail_app_module__WEBPACK_IMPORTED_MODULE_12__["PromotionDetailAppPageModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_5__["CustomerPage"]],
            entryComponents: [_promotion_detail_app_promotion_detail_app_page__WEBPACK_IMPORTED_MODULE_13__["PromotionDetailAppPage"]]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/customer/customer.page.html":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/customer/customer.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>MEU PERFIL</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <section class=\"profile shadow shadow-light\" margin-vertical>\r\n    <header>\r\n      <ion-item no-lines>\r\n        <nano-thumb class=\"profile-img\" [round]=\"true\" [src]=\"shared.user?.image\" item-start *ngIf=\"shared.user?.image\"></nano-thumb>\r\n        <ion-label>\r\n          <h2 style=\"font-weight: bold\" ion-text class=\"name-user\">{{shared.user?.name}}</h2>\r\n          <p tappable (click)=\"logout()\" class=\"danger\">Sair</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </header>\r\n\r\n    <ion-item class=\"address\" (click)=\"editAddress()\" no-lines>\r\n      <ion-icon class=\"place-icon\" name=\"md-pin\" slot=\"start\"></ion-icon>\r\n      <p *ngIf=\"shared?.user?.location; else noAddress\" tappable>\r\n        <span class=\"line1 bold\">{{shared.user.location.street}}, {{shared.user.location.number}} </span>\r\n        <br />\r\n        <span class=\"line2\">{{shared.user.location.district}} - {{shared.user.location.city}}</span>\r\n      </p>\r\n      <ng-template #noAddress>\r\n        <p tappable>\r\n          <span class=\"line1\">Endereço não cadastrado</span>\r\n          <br />\r\n          <span class=\"line2\">Clique aqui</span>\r\n        </p>\r\n      </ng-template>\r\n      <ion-icon name=\"md-create\" slot=\"end\"></ion-icon>\r\n      <!-- <ion-icon name=\"md-create\" item-end></ion-icon> -->\r\n    </ion-item>\r\n\r\n    <ion-item class=\"phone\" (click)=\"editPhone()\" no-lines>\r\n      <ion-icon class=\"place-icon\" name=\"md-call\" slot=\"start\"></ion-icon>\r\n      <p *ngIf=\"shared?.user?.phone; else noPhone\" tappable>\r\n        <span class=\"line1 bold\">Telefone:</span>\r\n        <br />\r\n        <span class=\"line2\">{{shared.user.phone}}</span>\r\n      </p>\r\n      <ng-template #noPhone>\r\n        <p tappable>\r\n          <span class=\"line1\">Telefone não cadastrado</span>\r\n          <br />\r\n          <span class=\"line2\">Clique aqui</span>\r\n        </p>\r\n      </ng-template>\r\n      <ion-icon name=\"md-create\" slot=\"end\"></ion-icon>\r\n      <!-- <ion-icon name=\"md-create\" item-end></ion-icon> -->\r\n    </ion-item>\r\n\r\n    <footer>\r\n      <ion-segment color=\"primary\" [(ngModel)]=\"segment\">\r\n        <ion-segment-button tappable value=\"orders\">\r\n          Pedidos\r\n        </ion-segment-button>\r\n        <ion-segment-button tappable value=\"favorites\">\r\n          Favoritos\r\n        </ion-segment-button>\r\n        <ion-segment-button tappable value=\"coupon\">\r\n          Cupons\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </footer>\r\n  </section>\r\n\r\n  <!-- Lista de Pedidos -->\r\n  <ion-list [hidden]=\"segment !== 'orders'\">\r\n\r\n    <ion-item *ngIf=\"!existsOrders\" color=\"transparent\" no-lines>\r\n      <h2 ion-text text-center color=\"discret\" text-wrap>Você ainda não possui nenhum pedido no seu histórico</h2>\r\n    </ion-item>\r\n\r\n    <!-- Animação de loading -->\r\n    <div *ngIf=\"loadingOrders\">\r\n      <section margin-top class=\"placeholder\" *ngFor=\"let f of [1, 2, 3, 4]\">\r\n        <ion-card padding>\r\n          <div class=\"placeholder-animation image\"></div>\r\n          <div class=\"card-bottom\">\r\n            <h2 class=\"placeholder-animation placeholder-text-p-50\"></h2>\r\n            <p class=\"placeholder-animation placeholder-text-p-80\"></p>\r\n            <div class=\"status placeholder-animation placeholder-text-p-60\"></div>\r\n          </div>\r\n        </ion-card>\r\n      </section>\r\n    </div>\r\n\r\n    <!-- Pedido -->\r\n    <div class=\"orders shadow shadow-light\" *ngFor=\"let order of orders$ | async\" no-lines tappable (click)=\"goDetailOrder(order)\">\r\n      <div class=\"container-top\" *ngIf=\"order.filial_full\">\r\n        <div class=\"top-left\">\r\n          <nano-thumb [src]=\"order.filial_full.image\" slot=\"start\"></nano-thumb>\r\n        </div>\r\n        <div class=\"top-right\">\r\n          <div class=\"filial-name\">\r\n            <h2>{{order.filial_full.name}}</h2>\r\n          </div>\r\n          <div *ngIf=\"order?.filial_full?.rating?.rate\">\r\n            <ion-icon name=\"star\" color=\"primary\" class=\"icon-star\"></ion-icon>\r\n            <span class=\"number-star\">\r\n              <strong>{{order.filial_full.rating.rate | number : '1.1-1'}}</strong>\r\n            </span>\r\n            <span class=\"already-rated\" *ngIf=\"order?.evaluate?.rate\">(sua avaliação\r\n              <strong>{{order?.evaluate?.rate | number: '1.1-1'}})</strong>\r\n            </span>\r\n          </div>\r\n          <div class=\"order-cancel\" *ngIf=\"order?.status === OrderStatus.incomplete || order?.status === OrderStatus.away || order?.status === OrderStatus.refused\">\r\n            <span class=\"already-rated\">\r\n              Pedido cancelado\r\n            </span>\r\n            <span class=\"already-rated\" *ngIf=\"order?.cancellation_reason\">\r\n              <strong>Motivo: </strong>{{order?.cancellation_reason}}</span>\r\n          </div>\r\n          <p class=\"date\">{{getDateFormat(order.created_at)}}</p>\r\n        </div>\r\n      </div>\r\n      <footer class=\"top-product\">\r\n        <p ion-text text-wrap class=\"max-lines max-lines-1\">\r\n          <span *ngFor=\"let entrie of order.entries; let i = index\">\r\n            <span *ngIf=\"i>0\">, </span>{{entrie.product.name}}</span>\r\n        </p>\r\n      </footer>\r\n      <ion-button expand=\"block\" fill=\"clear\" (click)=\"evaluate(order)\" *ngIf=\"!order?.evaluate?.rate && order?.status === OrderStatus.done\">Avalie\r\n        esse pedido</ion-button>\r\n    </div>\r\n\r\n  </ion-list>\r\n\r\n  <!-- Lista de Favoritos -->\r\n  <ion-list [hidden]=\"segment !== 'favorites'\">\r\n    <ion-item *ngIf=\"!existsFavorites\" color=\"transparent\" no-lines>\r\n      <h2 ion-text text-center color=\"discret\" text-wrap>Você ainda não favoritou nenhum restaurante</h2>\r\n    </ion-item>\r\n\r\n    <!-- Filiais favoritadas -->\r\n\r\n    <card-filial-list *ngFor=\"let filial of filials$ | async | orderBy:'-open'\" [filial]=\"filial\" (click)=\"goFilialMenu(filial)\"\r\n      [hidden]=\"loadingFavorites\"></card-filial-list>\r\n\r\n    <!-- Efeito visual de carregando componentes -->\r\n    <div *ngIf=\"loadingFavorites\">\r\n      <section margin-top class=\"placeholder\" *ngFor=\"let f of [1, 2, 3, 4]\">\r\n        <ion-card padding>\r\n          <div class=\"placeholder-animation image\"></div>\r\n          <div class=\"card-bottom\">\r\n            <h2 class=\"placeholder-animation placeholder-text-p-50\"></h2>\r\n            <p class=\"placeholder-animation placeholder-text-p-80\"></p>\r\n            <div class=\"status placeholder-animation placeholder-text-p-60\"></div>\r\n          </div>\r\n        </ion-card>\r\n      </section>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <!-- Lista de Cupons -->\r\n  <ion-list [hidden]=\"segment !== 'coupon'\">\r\n    <ion-item *ngIf=\"!existsCoupon\" color=\"transparent\" no-lines>\r\n      <h2 ion-text text-center color=\"discret\" text-wrap>Você ainda não possui nenhum cupom.</h2>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"!loadingCoupons && existsCoupon && coupons && coupons[0].promotion_full\">\r\n      <card-promotion [coupons]=\"coupons\"></card-promotion>\r\n    </div>\r\n\r\n    <!-- Efeito visual de carregando componentes -->\r\n    <div *ngIf=\"loadingCoupons\">\r\n      <section margin-top class=\"placeholder\" *ngFor=\"let f of [1, 2, 3, 4]\">\r\n        <ion-card padding>\r\n          <div class=\"placeholder-animation image\"></div>\r\n          <div class=\"card-bottom\">\r\n            <h2 class=\"placeholder-animation placeholder-text-p-50\"></h2>\r\n            <p class=\"placeholder-animation placeholder-text-p-80\"></p>\r\n            <div class=\"status placeholder-animation placeholder-text-p-60\"></div>\r\n          </div>\r\n        </ion-card>\r\n      </section>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n</ion-content>\r\n\r\n<!-- Float button com informações sobre o pedido-->\r\n<fab-order></fab-order>"

/***/ }),

/***/ "./src/app/mobile/pages/customer/customer.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/customer/customer.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-title {\n  font-family: myFontBold !important; }\n\nion-header ion-icon {\n  font-size: 1.2em;\n  margin: 0px 5px; }\n\nion-content div.orders {\n  background: white !important;\n  margin-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\nion-content div.orders div.container-top {\n    display: flex;\n    align-items: center; }\n\nion-content div.orders div.container-top div.top-right {\n      margin-left: 8px; }\n\nion-content div.orders .filial-name {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    font-weight: bold; }\n\nion-content div.orders .number-star {\n    font-size: 0.9em;\n    color: var(--ion-color-primary); }\n\nion-content div.orders .icon-star {\n    font-size: 0.9em;\n    color: var(--ion-color-primary); }\n\nion-content div.orders .already-rated {\n    color: darkgray;\n    margin-left: 5px;\n    font-size: 0.8em; }\n\nion-content div.orders .order-cancel {\n    color: var(--ion-color-danger);\n    display: flex;\n    flex-direction: column; }\n\nion-content div.orders .order-cancel span {\n      white-space: normal; }\n\nion-content div.orders .date {\n    font-size: 0.8em;\n    color: var(--ion-color-medium); }\n\nion-content div.orders footer.top-product {\n    border-top: 2px solid rgba(2, 2, 2, 0.18) !important;\n    padding-bottom: 14px; }\n\nion-content div.orders footer.top-product p {\n      color: black !important;\n      margin-bottom: 2px; }\n\nion-content div.orders ion-button {\n    padding-bottom: 6px; }\n\nion-content ion-item {\n  --background: white;\n  --color: #666;\n  display: flex !important; }\n\nion-content h2 {\n  color: var(--color-discret);\n  font-size: 1em; }\n\nion-content .name-user {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 30px; }\n\nion-content .address {\n  border-top: solid 2px #ddd !important;\n  border-bottom: solid 2px #ddd !important; }\n\nion-content .phone {\n  border-bottom: solid 2px #ddd !important; }\n\nion-content .place-icon {\n  color: var(--ion-color-primary) !important; }\n\nion-content coin-ranguitos .content {\n  display: flex;\n  justify-content: flex-start; }\n\nion-content ion-label p.danger {\n  position: absolute;\n  top: 2em;\n  right: 1em;\n  color: var(--ion-color-danger) !important;\n  margin-top: -8px;\n  font-size: 1.2em; }\n\nion-content .scroll-content {\n  padding: 0px; }\n\nion-content section.profile {\n  background: white; }\n\nion-content section.profile .profile-img {\n    margin-top: 15px !important;\n    padding-bottom: 13px; }\n\nion-content section.profile ion-label {\n    padding: 0px 10px 0px 10px; }\n\nion-content section.profile .street {\n    border-top: 1px solid #eceff1;\n    border-bottom: 1px solid #eceff1; }\n\nion-content .center {\n  background-color: white;\n  color: #666;\n  padding: 16px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\nion-content .center article {\n    display: flex; }\n\nion-content .center article aside {\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin: 12px; }\n\nion-content .center article nano-thumb {\n      -ms-grid-row-align: center;\n          align-self: center; }\n\nion-content .center article h3,\n    ion-content .center article h5,\n    ion-content .center article h6 {\n      font-weight: 100; }\n\nion-content .center section {\n    margin: 16px; }\n\nion-content .order-item-placeholder .image {\n  width: 56px;\n  height: 56px; }\n\nion-content section.placeholder {\n  position: relative;\n  margin-top: 1em; }\n\nion-content section.placeholder h1 {\n    min-height: 1em; }\n\nion-content section.placeholder .image {\n    width: 60px;\n    height: 60px;\n    float: left;\n    border-radius: 50px; }\n\nion-content section.placeholder div.card-bottom {\n    float: right;\n    width: 80%;\n    margin-top: -15px;\n    padding-left: 10px; }\n\nion-content section.placeholder ion-card {\n    box-shadow: none;\n    border-radius: 0px !important; }\n\nion-content section.placeholder ion-card .status {\n      margin-top: 4px; }\n\nion-content ion-list ion-item {\n  --margin-bottom: 10px !important; }\n\nion-content .bold {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/customer/customer.page.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile/pages/customer/customer.page.ts ***!
  \********************************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _evaluate_order_evaluate_order_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../evaluate-order/evaluate-order.page */ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.ts");
/* harmony import */ var _phone_edit_phone_edit_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../phone-edit/phone-edit.page */ "./src/app/mobile/pages/phone-edit/phone-edit.page.ts");
/* harmony import */ var _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../customer-address/customer-address.page */ "./src/app/mobile/pages/customer-address/customer-address.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _models_order_promotion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../models/order-promotion */ "./src/models/order-promotion.ts");
/* harmony import */ var _models_promotion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../models/promotion */ "./src/models/promotion.ts");
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


















var CustomerPage = /** @class */ (function () {
    function CustomerPage(auth, navCtrl, change, modalCtrl, shared, alertCtrl, placesProvider, toastCtrl, route, app, system) {
        var _this = this;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.change = change;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this.alertCtrl = alertCtrl;
        this.placesProvider = placesProvider;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.app = app;
        this.system = system;
        this.segment = "orders";
        this.loadingFavorites = true;
        this.loadingOrders = true;
        this.loadingCoupons = true;
        this.existsFavorites = true;
        this.existsOrders = true;
        this.existsCoupon = true;
        //auxiliar para controlar click de elementos html filho-pai
        this.clickEvaluate = false;
        this.OrderStatus = _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"];
        this.loadFavorites();
        this.loadOldOrders();
        this.loadCoupons();
        this.route.paramMap.subscribe(function (params) {
            _this.pageBefore = params.get('pageBefore');
        });
    }
    Object.defineProperty(CustomerPage.prototype, "locationUser", {
        get: function () {
            return this.shared.locationUser;
        },
        enumerable: true,
        configurable: true
    });
    CustomerPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("CustomerPage");
    };
    CustomerPage.prototype.loadCoupons = function () {
        var _this = this;
        console.log("1");
        this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (user) {
            console.log("Obtido user: ", user);
            return _models_order_promotion__WEBPACK_IMPORTED_MODULE_16__["OrderPromotion"].list([{
                    name: 'user.id',
                    operator: '==',
                    value: user.id
                }]);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (coupons) {
            console.log("cupons: ", coupons);
            if (!coupons || coupons.length == 0)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            _this.coupons = coupons;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(coupons.map(function (coupon) { return _models_filial__WEBPACK_IMPORTED_MODULE_5__["Filial"].object(coupon.filial.id); }));
        }))
            //Obter a filial de cada cupom
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (filials) {
            console.log("3 - filials: ", filials);
            if (!filials || filials.length == 0)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            for (var i = 0; i < _this.coupons.length; i++) {
                _this.coupons[i].filial_full = filials[i];
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(_this.coupons.map(function (coupon) { return _models_promotion__WEBPACK_IMPORTED_MODULE_17__["Promotion"].object(coupon.promotion.id); }));
        }))
            //Obter a promoção de cada cupom
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (promotions) {
            if (!promotions || promotions.length == 0)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            console.log("4 - promotions", promotions);
            for (var i = 0; i < _this.coupons.length; i++) {
                _this.coupons[i].promotion_full = promotions[i];
            }
            return _this.coupons;
        }))
            .subscribe(function () {
            console.log("Os cupons carregados são: ", _this.coupons);
            // Verificar SE EXISTE CUPONS
            if (!_this.coupons || _this.coupons.length <= 0) {
                _this.existsCoupon = false;
                _this.loadingCoupons = false;
                _this.change.detectChanges();
            }
            //EXIBIR CUPONS
            else {
                _this.existsCoupon = true;
                _this.loadingCoupons = false;
                setTimeout(function () {
                    _this.change.detectChanges();
                }, 10);
            }
        }, Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            console.log("ocorreu um erro", err);
            _this.system.logEvent("filials_not_found");
            if (err.code == 1) {
                _this.error = {
                    code: 1,
                    title: "Geolocalização não autorizada",
                    message: "Por favor autorize o aplicativo Facilita a obtê-la ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                };
            }
            else if (err.code == 2) {
                _this.error = {
                    code: 2,
                    title: "Geolocalização indisponível",
                    message: "Por favor habilite seu GPS ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                };
            }
            else if (err.code == 3) {
                _this.error = {
                    code: 3,
                    title: "Tempo para obter geolocalização foi excedido",
                    message: "Por favor verifique se seu GPS está habilitado e tente novamente, ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                };
            }
            _this.loadingCoupons = false;
            _this.change.detectChanges();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        })));
    };
    /**
     * Carrega os restaurantes favoritos do usuário
     */
    CustomerPage.prototype.loadFavorites = function () {
        var _this = this;
        this.loadingFavorites = true;
        this.filials$ = this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (user) {
            _this.existsFavorites = true;
            _this.loadingFavorites = true;
            if (!user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }
            return _models_user__WEBPACK_IMPORTED_MODULE_9__["User"].favorites.list(user.id);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (filials) {
            if (!filials || filials.length <= 0)
                _this.existsFavorites = false;
            else {
                _this.existsFavorites = true;
                for (var _i = 0, filials_1 = filials; _i < filials_1.length; _i++) {
                    var filial = filials_1[_i];
                    _models_filial__WEBPACK_IMPORTED_MODULE_5__["Filial"].checkBusinessHours(filial, _this.shared.now);
                }
            }
            _this.loadingFavorites = false;
            console.log("Loading favoriteS: ", _this.loadingFavorites);
            setTimeout(function () {
                _this.change.detectChanges();
            });
        }));
    };
    CustomerPage.prototype.loadOldOrders = function () {
        var _this = this;
        this.orders$ = this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (user) {
            _this.existsOrders = true;
            _this.loadingOrders = true;
            return _models_user__WEBPACK_IMPORTED_MODULE_9__["User"].orders.list(user.id, undefined, [{ name: "created_at", type: "desc" }]);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (orders) {
            if (!orders || orders.length <= 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(orders.map(function (order) { return _models_filial__WEBPACK_IMPORTED_MODULE_5__["Filial"].object(order.filial.id); }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (filials) {
                for (var i = 0; i < filials.length; i++) {
                    orders[i].filial_full = filials[i];
                }
                return orders;
            }));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (orders) {
            return orders.filter(function (order) {
                return order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].done || order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].away ||
                    order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].incomplete || order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].refused;
            });
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (orders) {
            if (!orders || orders.length <= 0) {
                _this.existsOrders = false;
            }
            else {
                _this.existsOrders = true;
            }
            _this.loadingOrders = false;
            console.log("loading orders: ", _this.loadingOrders);
            setTimeout(function () {
                _this.change.detectChanges();
            });
        }));
    };
    /**
     * Abre um modal com formulário pra editar endereço do usuário
     */
    CustomerPage.prototype.editAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_13__["CustomerAddressPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.editPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _phone_edit_phone_edit_page__WEBPACK_IMPORTED_MODULE_12__["PhoneEditPage"],
                            componentProps: {
                                user: this.shared.user
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
    CustomerPage.prototype.goFilialMenu = function (filial) {
        return __awaiter(this, void 0, void 0, function () {
            var prompt_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filial__WEBPACK_IMPORTED_MODULE_5__["Filial"].checkBusinessHours(filial, this.shared.now);
                        if (!filial.open) return [3 /*break*/, 1];
                        this.navCtrl.navigateForward(['mobile/filial-stock', {
                                id: filial.id
                            }]);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Restaurante está fechado',
                            message: "Você ainda pode visualizar as informações do restaurante, mas não poderá realizar um pedido.",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Continuar',
                                    handler: function () {
                                        _this.navCtrl.navigateForward(['mobile/filial-stock', {
                                                id: filial.id
                                            }]);
                                    }
                                }
                            ]
                        })];
                    case 2:
                        prompt_1 = _a.sent();
                        prompt_1.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.viewEvaluate = function (order) {
    };
    /**
     * Realizar logout de usuário
     */
    CustomerPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Deslogar usuário',
                            message: 'Você tem certeza que gostaria de sair de sua conta? Caso tenha produtos adicionados no carrinho, eles serão perdidos.',
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.auth.logout().subscribe(function () {
                                            _this.navCtrl.navigateRoot(_this.shared.firstPage);
                                        }, function (error) {
                                            _this.system.showErrorAlert(error, 'logout');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        confirm.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.dismiss = function () {
        if (this.pageBefore && this.pageBefore == 'HomeApp') {
            this.navCtrl.navigateRoot(['home-app']);
        }
        else {
            this.navCtrl.navigateRoot(['mobile/filial-search']);
        }
    };
    CustomerPage.prototype.getDateFormat = function (timestamp) {
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('pt-BR');
        return moment__WEBPACK_IMPORTED_MODULE_10__(timestamp.toDate()).format('LLL');
    };
    CustomerPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Sobre o seu perfil",
                            message: "Aqui você encontrará informações sobre seus pedidos antigos e restaurantes favoritos.",
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
    CustomerPage.prototype.goDetailOrder = function (order) {
        if (!this.clickEvaluate) {
            this.navCtrl.navigateForward(['mobile/detail-order', {
                    order_id: order.id //@todo DETAIL ORDER DEVE RECEBER O ID DE ORDER
                }]);
        }
        this.clickEvaluate = false;
    };
    CustomerPage.prototype.evaluate = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clickEvaluate = true;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _evaluate_order_evaluate_order_page__WEBPACK_IMPORTED_MODULE_11__["EvaluateOrderPage"],
                                componentProps: {
                                    order: order
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
    CustomerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.page.html */ "./src/app/mobile/pages/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/mobile/pages/customer/customer.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_15__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-customer-customer-module.js.map