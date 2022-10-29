(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-shopping-cart-shopping-cart-module"],{

/***/ "./src/app/mobile/pages/shopping-cart/shopping-cart.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/shopping-cart/shopping-cart.module.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart.page */ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-address/customer-address.module */ "./src/app/mobile/pages/customer-address/customer-address.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _phone_edit_phone_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../phone-edit/phone-edit.module */ "./src/app/mobile/pages/phone-edit/phone-edit.module.ts");
/* harmony import */ var _order_created_message_order_created_message_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../order-created-message/order-created-message.module */ "./src/app/mobile/pages/order-created-message/order-created-message.module.ts");
/* harmony import */ var _order_item_edit_order_item_edit_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../order-item-edit/order-item-edit.module */ "./src/app/mobile/pages/order-item-edit/order-item-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartPage"]
    }
];
var ShoppingCartPageModule = /** @class */ (function () {
    function ShoppingCartPageModule() {
    }
    ShoppingCartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _phone_edit_phone_edit_module__WEBPACK_IMPORTED_MODULE_10__["PhoneEditPageModule"],
                _order_created_message_order_created_message_module__WEBPACK_IMPORTED_MODULE_11__["OrderCreatedMessagePageModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _order_item_edit_order_item_edit_module__WEBPACK_IMPORTED_MODULE_12__["OrderItemEditPageModule"],
                //Default Modules 
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_8__["CustomerAddressPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartPage"]]
        })
    ], ShoppingCartPageModule);
    return ShoppingCartPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.html":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/shopping-cart/shopping-cart.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar class=\"header-toolbar\" color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <h3 ion-text text-uppercase color=\"light\" class=\"my-font-logo\">CONFIRMAR PEDIDO</h3>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"hideScrollbar\" #content>\r\n\r\n  <div *ngIf=\"order.length > 0\">\r\n\r\n    <mr-card-filial [filial]=\"filial\" [phone]=\"false\"></mr-card-filial>\r\n\r\n    <span class=\"obs-delivery\"> A entrega será realizada em:</span>\r\n\r\n    <ion-card class=\" shadow shadow-light card-delivery-address\">\r\n      <div class=\"info-delivery\">\r\n        <p class=\"title-delivery\">\r\n          <strong>{{ location.street }}, {{ location.number }}</strong>\r\n        </p>\r\n        <p class=\"subtitle-delivery\" *ngIf=\"location.complement || location.landmark\">\r\n          {{ location.complement }}\r\n          <span *ngIf=\"location.complement && location.landmark\">,</span> {{ location.landmark }}\r\n        </p>\r\n        <p class=\"subtitle-delivery\">{{ location.district }} - {{ location.city}}\r\n          <span class=\"obs-delivery\" *ngIf=\"location?.isGps\">(GPS)</span>\r\n        </p>\r\n      </div>\r\n      <ion-button fill=\"clear\" (click)=\"editLocation()\">\r\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card>\r\n    <div *ngFor=\"let entry of order; let i = index\">\r\n      <ion-badge class=\"notifications-badge\" color=\"danger\">x{{ entry.quantity }}</ion-badge>\r\n      <ion-badge class=\"notifications-badge remove\" color=\"danger\" tappable (click)=\"removeItemCart(entry)\">X</ion-badge>\r\n      <card-product [product]=\"entry.product\" [entry]=\"entry\" [filial]=\"filial\" tappable (click)=\"entryEdit(entry)\">\r\n      </card-product>\r\n    </div>\r\n\r\n    <ion-button fill=\"clear\" expand=\"block\" size=\"large\" text-center style=\"margin-top: 10px\" (click)=\"addProduct()\">\r\n      + Adicionar produto\r\n    </ion-button>\r\n\r\n    <ion-card class=\"shadow shadow-light\">\r\n      <ion-item class=\"obs-product\">\r\n        <ion-label position=\"stacked\">Observações do Pedido</ion-label>\r\n        <ion-textarea [(ngModel)]=\"observation\" placeholder=\"Ex: Campainha não funciona\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"shadow shadow-light\">\r\n      <ion-item class=\"cupom\" *ngIf=\"!coupon\">\r\n        <ion-label class=\"label-cupom\" position=\"stacked\">Cupom de desconto</ion-label>\r\n        <ion-input style=\"text-transform: uppercase !important\" [(ngModel)]=\"couponInput\" placeholder=\"Digite aqui seu cupom\"></ion-input>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"verifyCoupon()\" *ngIf=\"couponInput.length > 0\">Adicionar</ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"cupom2\" *ngIf=\"coupon\">\r\n        <h3 ion-text> Cupom adicionado: {{coupon.name}}</h3>\r\n        <ion-button slot=\"end\" ion-button clear (click)=\"removeCoupon()\">Remover</ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <mr-price [price]=\"{\r\n      delivery: delivery,\r\n      subtotal: subTotal,\r\n      couponDiscounts: couponDiscounts,\r\n      total: totalPrice\r\n    }\"></mr-price>\r\n\r\n    <ion-card class=\"payment shadow shadow-light\">\r\n      <div class=\"info-payment\" text-center>\r\n        <p class=\"title\">\r\n          <strong>Selecione como deseja pagar</strong>\r\n        </p>\r\n        <p class=\"subtitle\"> o pagamento é realizado no momento da entrega</p>\r\n      </div>\r\n      <div class=\"method-payment\" *ngIf=\"filial && filial.paymentMethods\">\r\n        <div class=\"method border-right\" tappable (click)=\"setPayment(paymentType.money)\" [class.active]=\"isMoney && hasMoney()\"\r\n          [class.disabled]=\"!hasMoney()\">\r\n          <p> Dinheiro </p>\r\n        </div>\r\n        <div class=\"method border-right\" tappable (click)=\"setPayment(paymentType.auxCard)\" [class.active]=\"isCard && hasCard()\"\r\n          [class.disabled]=\"!hasCard()\">\r\n          <p> Cartão </p>\r\n        </div>\r\n        <div class=\"method\" tappable (click)=\"setPayment(paymentType.food_stamps)\" [class.active]=\"isFoodStamps && hasFoodStamps()\"\r\n          [class.disabled]=\"!hasFoodStamps()\">\r\n          <p> Alimentação </p>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"troco shadow shadow-light\" *ngIf=\"isMoney\">\r\n      <ion-item>\r\n        <ion-label>Preciso de troco</ion-label>\r\n        <ion-checkbox [(ngModel)]=\"needChange\" (ionChange)=\"change()\"></ion-checkbox>\r\n      </ion-item>\r\n      <form [formGroup]=\"form\" *ngIf=\"needChange\">\r\n        <ion-item>\r\n          <ion-label> Troco para </ion-label>\r\n          <money-input item-content [control]=\"form.controls['troco']\"></money-input>\r\n        </ion-item>\r\n      </form>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"payment shadow shadow-light\" *ngIf=\"isCard\">\r\n      <div class=\"method-payment-card\" *ngIf=\"filial && filial.paymentMethods\">\r\n        <div class=\"method card border-right\" tappable (click)=\"setPayment(paymentType.credit_card)\" [class.active]=\"paymentMethod == paymentType.credit_card && hasCreditCard()\"\r\n          [class.disabled]=\"!hasCreditCard()\">\r\n          <p> Crédito </p>\r\n        </div>\r\n        <div class=\"method card\" tappable (click)=\"setPayment(paymentType.debit_card)\" [class.active]=\"paymentMethod == paymentType.debit_card && hasDebitCard()\"\r\n          [class.disabled]=\"!hasDebitCard()\">\r\n          <p> Débito </p>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n    <ion-item *ngIf=\"isCard\" class=\"selectFlag shadow shadow-light\">\r\n      <ion-label>Selecionar bandeira</ion-label>\r\n      <ion-select multiple=\"true\" [(ngModel)]=\"cardFlag\" (ionChange)=\"setCardName(cardFlag)\">\r\n        <ion-select-option *ngFor=\"let card of cards\" value=\"{{ card.value }}\">{{ card.text }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item *ngIf=\"isFoodStamps\" class=\"selectFlag shadow shadow-light\">\r\n      <ion-label>Selecionar bandeira</ion-label>\r\n      <ion-select multiple=\"true\" [(ngModel)]=\"cardFoodFlag\" (ionChange)=\"setCardName(cardFoodFlag)\">\r\n        <ion-select-option *ngFor=\"let card of cards_food\" value=\"{{ card.value }}\">{{ card.text }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"order?.length == 0\" class=\"center\" style=\"text-align: center\">\r\n    <ion-icon color=\"discret\" style=\"font-size: 20vw\" name=\"cart\"></ion-icon>\r\n    <h1 ion-text color=\"discret\">Carrinho vazio</h1>\r\n    <p ion-text color=\"discret\">Escolha um restaurante e adicione uns produtos no seu carrinho.</p>\r\n  </div>\r\n\r\n  <ion-button *ngIf=\"order?.length > 0\" expand=\"block\" color=\"primary\" class=\"do-order-button my-font-logo\" [disabled]=\"buttonDisabled || order.length == 0\"\r\n    (click)=\"tryFinishOrder()\">\r\n    REALIZAR PEDIDO\r\n  </ion-button>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n    <ion-toolbar>\r\n      \r\n    </ion-toolbar>\r\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/shopping-cart/shopping-cart.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white;\n  --background: white;\n  width: 100% !important;\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\nion-item {\n  width: 100% !important;\n  background: white;\n  --background: white; }\n\nion-item ion-label {\n    width: 60% !important; }\n\nion-item money-input {\n    float: right !important;\n    font-size: 1.1em;\n    font-weight: bold;\n    width: 35% !important; }\n\nion-buttons[right] {\n  margin-right: 8px; }\n\nion-buttons[right] button {\n    font-size: 1.0em; }\n\n.active {\n  background-color: var(--ion-color-primary); }\n\n.active .value,\n  .active p {\n    color: #fff !important; }\n\n.disabled .value,\n.disabled p {\n  color: #ccc; }\n\n.text {\n  margin: 0px; }\n\nheader ion-title {\n  text-align: center;\n  font-family: Pacifico; }\n\nheader ion-title .toolbar-title {\n    font-size: 2em !important;\n    color: var(--ion-color-primary) !important; }\n\nheader button-inner {\n  margin-right: 20px !important; }\n\n.obs-delivery {\n  color: var(--ion-color-primary);\n  padding-left: 15px; }\n\n.card-delivery-address {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0px 20px 0px; }\n\n.card-delivery-address .info-delivery {\n    padding: 8px 15px; }\n\n.card-delivery-address .info-delivery .title-delivery {\n      color: var(--ion-color-medium);\n      font-size: 1em; }\n\n.card-delivery-address .info-delivery .subtitle-delivery {\n      color: var(--ion-color-medium); }\n\n.card-delivery-address ion-icon {\n    color: var(--ion-color-medium);\n    font-size: 2em; }\n\n.notifications-badge {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  border-radius: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0px;\n  padding: 0px;\n  z-index: 10; }\n\n.remove {\n  right: 5px;\n  border-radius: 50%;\n  margin-top: -5px;\n  width: 25px;\n  height: 25px; }\n\n.gain-ranguitos {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  align-items: center; }\n\n.gain-ranguitos b {\n    margin-right: 10px; }\n\n.ask-ranguitos {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 10px;\n  background-color: #fff; }\n\n.ask-ranguitos .ask {\n    display: flex;\n    align-items: center; }\n\n.ask-ranguitos .ask strong {\n      color: var(--ion-color-primary); }\n\n.ask-ranguitos .ask img {\n      width: 30px; }\n\n.ask-ranguitos .ask span {\n      padding: 5px 10px; }\n\n.ask-ranguitos .button {\n    overflow: visible !important;\n    padding: 5px;\n    border: 0; }\n\n.ask-ranguitos .button.show-ranguitos {\n      border-radius: 0;\n      border-bottom: 1px solid; }\n\n.ask-ranguitos .button .button-inner {\n      font-size: 12px; }\n\n.ask-ranguitos .quantity-buttons {\n    display: flex;\n    align-items: center; }\n\n.ask-ranguitos .quantity-buttons .button {\n      border: 0 !important;\n      display: flex;\n      align-items: center; }\n\n.obs-price {\n  margin-bottom: 10px; }\n\n.obs-price p {\n    background: #fff;\n    margin: 0;\n    padding: 10px 15px; }\n\n.obs-price p strong {\n      color: var(--ion-color-primary); }\n\n.cupom .label-cupom {\n  color: var(--ion-color-primary);\n  font-size: 0.85em;\n  font-weight: bold;\n  width: 135px !important; }\n\n.cupom2 h3 {\n  color: var(--ion-color-primary);\n  font-size: 0.85em;\n  font-weight: bold; }\n\n.payment p {\n  margin: 0; }\n\n.payment .info-payment {\n  padding: 16px 10px 16px 0px; }\n\n.payment .info-payment .title {\n    font-size: 1em;\n    color: black; }\n\n.payment .info-payment .subtitle {\n    font-size: 1em;\n    color: var(--ion-color-medium); }\n\n.payment .method-payment {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0px 0px 0px; }\n\n.payment .method-payment .method {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 50%; }\n\n.payment .method-payment .method.border-right {\n      border-right: 2px solid #eceff1; }\n\n.payment .method-payment .method.card {\n      height: 50px; }\n\n.payment .method-payment-card {\n  display: flex;\n  justify-content: center; }\n\n.payment .method-payment-card .method {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 50%; }\n\n.payment .method-payment-card .method.border-right {\n      border-right: 2px solid #eceff1; }\n\n.payment .method-payment-card .method.card {\n      height: 50px; }\n\n.troco {\n  padding: 5px 15px; }\n\n.troco ion-item {\n    border-bottom: none !important;\n    padding: 0 !important; }\n\n.troco ion-item .item-inner {\n      box-shadow: none !important; }\n\n.troco ion-item .item-inner .input-wrapper .input .text-input {\n        border-bottom: 1px solid black;\n        text-align: right;\n        padding: 0px 10px 0px 0px; }\n\n.troco ion-item .item-inner .input-wrapper .label {\n        color: black !important;\n        font-weight: bold;\n        width: 40%; }\n\n.selectFlag {\n  padding: 10px !important; }\n\n.selectFlag .item-inner {\n    border: 0 !important; }\n\n.card-list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 3px; }\n\n.card-list p {\n    font-size: 1.2em; }\n\n.card-list img {\n    width: 40px; }\n\n.seus-ranguitos {\n  padding: 0px 8px 0px 8px !important; }\n\n.color-primary {\n  padding: 0px !important;\n  font-weight: bold !important;\n  color: var(--ion-color-primary) !important; }\n\n.disableColor {\n  color: #ddd !important; }\n\n.do-order-button {\n  font-size: 1.4em;\n  padding: 0px !important;\n  margin: 0px !important; }\n\nion-footer {\n  padding: 0px !important;\n  --padding-end: 0px;\n  margin: 0px !important; }\n\nion-footer ion-toolbar {\n    padding: 0px !important;\n    --padding-end: 0px; }\n\nion-button.do-order-button {\n  --margin-top: 10px;\n  --margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/shopping-cart/shopping-cart.page.ts ***!
  \******************************************************************/
/*! exports provided: ShoppingCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPage", function() { return ShoppingCartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _util_money__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/money */ "./src/app/util/money.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer-address/customer-address.page */ "./src/app/mobile/pages/customer-address/customer-address.page.ts");
/* harmony import */ var _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../address-edit/address-edit.page */ "./src/app/mobile/pages/address-edit/address-edit.page.ts");
/* harmony import */ var _phone_edit_phone_edit_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../phone-edit/phone-edit.page */ "./src/app/mobile/pages/phone-edit/phone-edit.page.ts");
/* harmony import */ var _order_item_edit_order_item_edit_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../order-item-edit/order-item-edit.page */ "./src/app/mobile/pages/order-item-edit/order-item-edit.page.ts");
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
















var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage(navCtrl, ngZone, toastController, cart, shared, toast, modalCtrl, loadingCtrl, popoverCtrl, changeRef, alertCtrl, money, system) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.toastController = toastController;
        this.cart = cart;
        this.shared = shared;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.changeRef = changeRef;
        this.alertCtrl = alertCtrl;
        this.money = money;
        this.system = system;
        this.changedSubtotal = false;
        //Preciso de troco
        this.needChange = false;
        this.couponInput = "";
        //Valor do frete
        this.delivery = 0;
        this.cardsFlag = [];
        this.cards = [];
        this.cards_food = [];
        this.paymentType = _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"];
    }
    Object.defineProperty(ShoppingCartPage.prototype, "filial", {
        /**
         * Filial escolhida para solicitar o delivery
         * Todos os produtos do carrinho devem ser dessa filial
         */
        get: function () {
            return this.cart.filial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "order", {
        get: function () {
            return this.cart.order.entries;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "subTotal", {
        get: function () {
            return this.cart.totalPrice;
        },
        set: function (subTotal) {
            this.cart.totalPrice = subTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "totalPrice", {
        get: function () {
            var p = this.subTotal + this.delivery;
            if (this.couponDiscounts) {
                p -= this.couponDiscounts;
                if (p < 0)
                    p = 0;
            }
            return p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "location", {
        get: function () {
            return this.shared.user
                ? this.shared.user.location
                : this.shared.locationUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "isCard", {
        get: function () {
            if (this.paymentMethod == this.paymentType.credit_card ||
                this.paymentMethod == this.paymentType.auxCard ||
                this.paymentMethod == this.paymentType.debit_card) {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "isMoney", {
        get: function () {
            if (this.paymentMethod == this.paymentType.money) {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "isFoodStamps", {
        get: function () {
            if (this.paymentMethod == this.paymentType.food_stamps) {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCartPage.prototype, "paymentMethod", {
        get: function () {
            return this.cart.order.payment_method;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartPage.prototype.ngOnInit = function () {
        this.system.setScreenName("ShoppingCartPage");
        this.calculateDelivery();
        this.getFilialCards();
        this.getFilialFoodCards();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            troco: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    ShoppingCartPage.prototype.hasCard = function () {
        if (!this.filial.paymentMethods)
            return false;
        return (Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].credit_card, this.filial.paymentMethods) ||
            Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].debit_card, this.filial.paymentMethods));
    };
    ShoppingCartPage.prototype.hasMoney = function () {
        if (!this.filial.paymentMethods)
            return false;
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].money, this.filial.paymentMethods);
    };
    ShoppingCartPage.prototype.verifyCoupon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.couponInput.trim().length < 1) {
                            this.couponDiscounts = undefined;
                            this.couponInput = "";
                            return [2 /*return*/];
                        }
                        this.couponInput = this.couponInput.toUpperCase();
                        return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        if (this.filial) {
                            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].coupons
                                .list(this.filial.id)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
                                .subscribe(function (coupons_filial) {
                                var founded = false;
                                coupons_filial.forEach(function (coupon_filial) {
                                    if (coupon_filial.enable &&
                                        coupon_filial.name == _this.couponInput) {
                                        founded = true;
                                        //Se o cupom não estiver vencido
                                        if (coupon_filial.finished_at.toDate() >= new Date()) {
                                            _models_user__WEBPACK_IMPORTED_MODULE_11__["User"].coupons
                                                .list(_this.shared.user.id)
                                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
                                                .subscribe(function (coupons_user) {
                                                for (var _i = 0, coupons_user_1 = coupons_user; _i < coupons_user_1.length; _i++) {
                                                    var coupon_user = coupons_user_1[_i];
                                                    if (coupon_user.name === coupon_filial.name) {
                                                        _this.showAlertCouponInvalid(undefined, true);
                                                        _this.couponDiscounts = undefined;
                                                        _this.coupon = undefined;
                                                        _this.couponInput = "";
                                                        loading.dismiss();
                                                        return;
                                                    }
                                                }
                                                // Nao foi encontrado o cupom no usuário atual
                                                _this.coupon = coupon_filial;
                                                _this.calcCouponDiscounts(coupon_filial);
                                                loading.dismiss();
                                                return;
                                            });
                                            return;
                                        }
                                        else {
                                            _this.showAlertCouponInvalid(true);
                                            _this.couponDiscounts = undefined;
                                            _this.coupon = undefined;
                                            loading.dismiss();
                                            return;
                                        }
                                    }
                                });
                                if (!founded) {
                                    loading.dismiss();
                                    _this.showAlertCouponInvalid();
                                    _this.couponDiscounts = undefined;
                                    _this.coupon = undefined;
                                    // this.changeRef.detectChanges();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Calcular os descontos de um CUPOM válido
     */
    ShoppingCartPage.prototype.calcCouponDiscounts = function (coupon) {
        return __awaiter(this, void 0, void 0, function () {
            var formatted, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.coupon = coupon;
                        //Frete grátis, o desconto será o valor da taxa de entrega
                        if (coupon.freeShipping) {
                            this.couponDiscounts = this.delivery;
                        }
                        //Desconto em dinheiro
                        else if (coupon.money) {
                            this.couponDiscounts = coupon.money;
                        }
                        //Desconto em porcentagem
                        else if (coupon.percentage) {
                            this.couponDiscounts = (coupon.percentage / 100) * this.totalPrice;
                        }
                        this.coupon.discounts = this.couponDiscounts;
                        formatted = this.money.convertDecimalBrazillian(this.couponDiscounts);
                        this.changeRef.detectChanges();
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Parabéns!",
                                subHeader: "Voc\u00EA acaba de adquirir R$ " + formatted + " de desconto",
                                buttons: ["OK"],
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.removeCoupon = function () {
        this.coupon = undefined;
        this.couponDiscounts = undefined;
        this.couponInput = "";
    };
    /**
     * Exibir um alerta se o CUPOM não for válido
     * Tanto se não for encontrado, quanto se estiver vencido o prazo de validade
     */
    ShoppingCartPage.prototype.showAlertCouponInvalid = function (invalid, user_used) {
        return __awaiter(this, void 0, void 0, function () {
            var text, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (invalid) {
                            text = "O cupom " + this.couponInput + " est\u00E1 fora do prazo de validade.";
                        }
                        if (user_used) {
                            text = "O cupom " + this.couponInput + " j\u00E1 foi usado por essa conta.";
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: text ? text : "O cupom " + this.couponInput + " n\u00E3o \u00E9 v\u00E1lido.",
                                buttons: ["OK"],
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        alert.onDidDismiss().then(function () {
                            _this.couponInput = "";
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.hasFoodStamps = function () {
        if (!this.filial.paymentMethods)
            return false;
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].food_stamps, this.filial.paymentMethods);
    };
    ShoppingCartPage.prototype.hasCreditCard = function () {
        if (!this.filial.paymentMethods)
            return false;
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].credit_card, this.filial.paymentMethods);
    };
    ShoppingCartPage.prototype.hasDebitCard = function () {
        if (!this.filial.paymentMethods)
            return false;
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].debit_card, this.filial.paymentMethods);
    };
    ShoppingCartPage.prototype.change = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                // this.content.scrollToBottom();
            }
        }, 50);
    };
    ShoppingCartPage.prototype.getFilialCards = function () {
        var _this = this;
        if (!this.filial.cards) {
            this.filial.cards = [];
        }
        this.cards = _models_filial__WEBPACK_IMPORTED_MODULE_1__["CARDS"].filter(function (card) {
            return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(card.value, _this.filial.cards);
        });
        // this.changeDetector.detectChanges();
    };
    ShoppingCartPage.prototype.getFilialFoodCards = function () {
        var _this = this;
        if (!this.filial.cards_food) {
            this.filial.cards_food = [];
        }
        this.cards_food = _models_filial__WEBPACK_IMPORTED_MODULE_1__["CARDS_FOOD"].filter(function (card) {
            return Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["elementIsInsideArray"])(card.value, _this.filial.cards_food);
        });
    };
    ShoppingCartPage.prototype.calculateDelivery = function () {
        var _this = this;
        this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])()).subscribe(function (user) {
            _this.delivery = _this.cart.calculateDelivery(_this.filial, user);
        });
    };
    ShoppingCartPage.prototype.setPayment = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, alert_2, alert_3, alert_4, alert_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].money && !this.hasMoney())) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: "Esse restaurante não aceita pagamento em dinheiro! Por favor, escolha outra forma de pagamento.",
                                buttons: ["OK"],
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [2 /*return*/];
                    case 2:
                        if (!(type == _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].auxCard && !this.hasCard())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: "Esse restaurante não aceita pagamento com cartão de crédito ou débito! Por favor, escolha outra forma de pagamento.",
                                buttons: ["OK"],
                            })];
                    case 3:
                        alert_2 = _a.sent();
                        alert_2.present();
                        return [2 /*return*/];
                    case 4:
                        if (!(type == _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].credit_card && !this.hasCreditCard())) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: "Esse restaurante não aceita pagamento com cartão de crédito! Por favor, escolha outra forma de pagamento.",
                                buttons: ["OK"],
                            })];
                    case 5:
                        alert_3 = _a.sent();
                        alert_3.present();
                        return [2 /*return*/];
                    case 6:
                        if (!(type == _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].debit_card && !this.hasDebitCard())) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: "Esse restaurante não aceita pagamento com cartão de débito! Por favor, escolha outra forma de pagamento.",
                                buttons: ["OK"],
                            })];
                    case 7:
                        alert_4 = _a.sent();
                        alert_4.present();
                        return [2 /*return*/];
                    case 8:
                        if (!(type == _models_order__WEBPACK_IMPORTED_MODULE_2__["PaymentMethod"].food_stamps && !this.hasFoodStamps())) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Ops!",
                                subHeader: "Esse restaurante não aceita pagamento com vale Alimentação! Por favor, escolha outra forma de pagamento.",
                                buttons: ["OK"],
                            })];
                    case 9:
                        alert_5 = _a.sent();
                        alert_5.present();
                        return [2 /*return*/];
                    case 10:
                        setTimeout(function () {
                            if (_this.content) {
                                // this.content.scrollToBottom();
                            }
                        }, 50);
                        this.cart.order.payment_method = type;
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.setTypeCard = function (type) {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                // this.content.scrollToBottom();
            }
        }, 50);
        if (type == "débito") {
            this.cart.order.payment_method = this.paymentType.debit_card;
        }
        else {
            this.cart.order.payment_method = this.paymentType.credit_card;
        }
    };
    ShoppingCartPage.prototype.setCardName = function (cardName) {
        this.cart.order.payment_cardType = cardName;
    };
    ShoppingCartPage.prototype.setCardFoodName = function (cardFoodType) {
        this.cart.order.payment_cardType = cardFoodType;
    };
    ShoppingCartPage.prototype.tryFinishOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.buttonDisabled = true;
                if (this.needChange)
                    this.cart.order.change = this.form.value.troco;
                this.shared.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])()).subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    var alert_6, alert_7, alert_8, minOrder, alert_9, modal;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!user.location.isGps) return [3 /*break*/, 2];
                                this.buttonDisabled = false;
                                return [4 /*yield*/, this.alertCtrl.create({
                                        header: "Ops!",
                                        subHeader: "Esse endereço é proveniente de GPS. Você precisa cadastrar seu endereço por nosso formulário.",
                                        buttons: [
                                            {
                                                text: "Ok",
                                                handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var modal;
                                                    var _this = this;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.modalCtrl.create({
                                                                    component: _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_13__["AddressEditPage"],
                                                                })];
                                                            case 1:
                                                                modal = _a.sent();
                                                                modal.onDidDismiss().then(function () {
                                                                    if (_this.filial) {
                                                                        _this.calculateDelivery();
                                                                    }
                                                                    _this.cart.totalPriceCalculate();
                                                                });
                                                                modal.present();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); },
                                            },
                                        ],
                                    })];
                            case 1:
                                alert_6 = _a.sent();
                                alert_6.present();
                                return [2 /*return*/];
                            case 2:
                                if (!!this.orderValidation.valid) return [3 /*break*/, 4];
                                this.buttonDisabled = false;
                                return [4 /*yield*/, this.alertCtrl.create({
                                        header: "Atenção",
                                        subHeader: this.orderValidation.msg,
                                        buttons: [
                                            {
                                                text: "Ok",
                                            },
                                        ],
                                    })];
                            case 3:
                                alert_7 = _a.sent();
                                alert_7.present();
                                return [2 /*return*/];
                            case 4:
                                if (!!this.locationIsValid()) return [3 /*break*/, 6];
                                return [4 /*yield*/, this.alertCtrl.create({
                                        header: "ATENÇÃO",
                                        subHeader: this.cart.filial.name + " n\u00E3o faz entrega para esta regi\u00E3o. Voc\u00EA precisa estar em um endere\u00E7o dentro da \u00E1rea de entrega para efetuar o pedido",
                                        buttons: ["Ok"],
                                    })];
                            case 5:
                                alert_8 = _a.sent();
                                alert_8.present();
                                this.buttonDisabled = false;
                                return [2 /*return*/];
                            case 6:
                                if (!(this.filial.orderMin &&
                                    this.subTotal + this.delivery < this.filial.orderMin)) return [3 /*break*/, 8];
                                minOrder = this.filial.orderMin
                                    .toFixed(2)
                                    .replace(".", ",");
                                return [4 /*yield*/, this.alertCtrl.create({
                                        header: "Atenção",
                                        subHeader: "O pedido m\u00EDnimo desse estabelecimento \u00E9 de R$ " + minOrder + ". Deseja continuar mesmo assim?",
                                        buttons: [
                                            {
                                                text: "Não",
                                                role: "cancel",
                                                handler: function (blah) {
                                                    _this.changedSubtotal = false;
                                                    console.log("Confirm Cancel: blah");
                                                },
                                            },
                                            {
                                                text: "Sim",
                                                handler: function () {
                                                    console.log("Confirm Okay");
                                                    _this.auxSubtotal = _this.subTotal;
                                                    _this.subTotal = _this.filial.orderMin - _this.delivery;
                                                    console.log("Subtotal agora é: ", _this.subTotal);
                                                    _this.changedSubtotal = true;
                                                    _this.tryFinishOrder();
                                                },
                                            },
                                        ],
                                    })];
                            case 7:
                                alert_9 = _a.sent();
                                this.buttonDisabled = false;
                                alert_9.present();
                                return [2 /*return*/];
                            case 8:
                                if (!!this.shared.user.phone) return [3 /*break*/, 10];
                                console.log("User não tem telefone!");
                                return [4 /*yield*/, this.modalCtrl.create({
                                        component: _phone_edit_phone_edit_page__WEBPACK_IMPORTED_MODULE_14__["PhoneEditPage"],
                                        componentProps: { user: this.shared.user },
                                    })];
                            case 9:
                                modal = _a.sent();
                                modal.onDidDismiss().then(function (ev) {
                                    if (ev && ev.data && ev.data.phone) {
                                        // Tudo certo com o pedido atual, então tentar efetuar o pedido
                                        _this.finishOrder();
                                    }
                                    else {
                                        _this.buttonDisabled = false;
                                        return;
                                    }
                                });
                                modal.present();
                                return [3 /*break*/, 11];
                            case 10:
                                this.finishOrder();
                                _a.label = 11;
                            case 11: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartPage.prototype.finishOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, msg, difference, subTotalString, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = "Confirmar pedido";
                        msg = "Deseja confirmar seu pedido ?";
                        difference = (this.subTotal - this.auxSubtotal)
                            .toFixed(2)
                            .replace(".", ",");
                        subTotalString = this.subTotal.toFixed(2).replace(".", ",");
                        if (this.changedSubtotal) {
                            header = "Aten\u00E7\u00E3o!";
                            msg = "O valor do subtotal do seu pedido foi alterado para R$ " + subTotalString + " para cumprir o valor m\u00EDnimo de pedido desse estabelecimento (acr\u00E9scimo de R$ " + difference + "). Deseja confirmar seu pedido ainda assim?";
                        }
                        console.log("Finish Order!");
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: header,
                                message: msg || null,
                                buttons: [
                                    {
                                        text: "Cancelar",
                                        role: "cancel",
                                        handler: function () {
                                            _this.buttonDisabled = false;
                                            if (_this.auxSubtotal) {
                                                _this.subTotal = _this.auxSubtotal;
                                                _this.system.showAlert("Pedido cancelado", null, "O valor do seu pedido não foi alterado.");
                                            }
                                        },
                                    },
                                    {
                                        text: "Confirmar",
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var loading;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log("1");
                                                        this.system.logEvent("ecommerce_purchase", {
                                                            value: this.cart.totalPrice + this.delivery,
                                                        });
                                                        return [4 /*yield*/, this.loadingCtrl.create({})];
                                                    case 1:
                                                        loading = _a.sent();
                                                        loading.present();
                                                        // Tudo certo com o pedido atual, então tentar efetuar o pedido
                                                        console.log("2");
                                                        this.ngZone.run(function () {
                                                            console.log("3");
                                                            _this.cart
                                                                .send(_this.observation, _this.delivery, _this.coupon)
                                                                .subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                var toast;
                                                                var _this = this;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            loading.dismiss();
                                                                            return [4 /*yield*/, this.toastController.create({
                                                                                    message: "Seu pedido foi realizado com sucesso",
                                                                                    duration: 600,
                                                                                    position: "bottom",
                                                                                })];
                                                                        case 1:
                                                                            toast = _a.sent();
                                                                            toast.present();
                                                                            setTimeout(function () {
                                                                                console.log("4");
                                                                                _this.navCtrl.navigateRoot(['home-app']);
                                                                                // this.navCtrl.navigateRoot("mobile/filial-search");
                                                                            }, 100);
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); });
                                                        }, function (err) {
                                                            console.log("ocorreu um erro", err);
                                                            loading.dismiss();
                                                            _this.buttonDisabled = false;
                                                            _this.system.showErrorAlert(err);
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); },
                                    },
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.locationIsValid = function () {
        var _this = this;
        //Avaliação do delivery feita por bairros
        if (this.cart.filial.deliveryByDistrict) {
            var hasUserDistrict_1 = false;
            this.cart.filial.deliveryDistricts.forEach(function (deliveryDistrict) {
                if (deliveryDistrict.location.state_short ==
                    _this.shared.user.location.state_short &&
                    deliveryDistrict.location.city == _this.shared.user.location.city &&
                    deliveryDistrict.location.district ==
                        _this.shared.user.location.district) {
                    hasUserDistrict_1 = true;
                    return;
                }
            });
            return hasUserDistrict_1;
        }
        //Avaliação de delivery feita por distância
        var valid = true;
        var start = {
            lat: this.shared.user.location.latitude,
            lng: this.shared.user.location.longitude,
        };
        var end = {
            lat: this.cart.filial.location.latitude,
            lng: this.cart.filial.location.longitude,
        };
        var distance = Object(_util_util__WEBPACK_IMPORTED_MODULE_4__["getDistanceBetweenPoints"])(start, end);
        // Distância atual não compativel com a área de entrega da filial
        if (distance > this.cart.filial.delivery.distanceMax) {
            valid = false;
        }
        return valid;
    };
    ShoppingCartPage.prototype.plusOne = function (entry) {
        this.cart.increment(entry, +1);
    };
    ShoppingCartPage.prototype.minusOne = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_10;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(entry.quantity == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Remoção de item?",
                                message: "Você tem certeza que deseja remover este item do carrinho?",
                                buttons: [
                                    {
                                        text: "Não",
                                        role: "cancel",
                                    },
                                    {
                                        text: "Sim",
                                        handler: function () {
                                            _this.cart.increment(entry, -1);
                                        },
                                    },
                                ],
                            })];
                    case 1:
                        alert_10 = _a.sent();
                        alert_10.present();
                        return [3 /*break*/, 3];
                    case 2:
                        if (entry.quantity > 1) {
                            this.cart.increment(entry, -1);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.editLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_12__["CustomerAddressPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.cart.totalPriceCalculate();
                            _this.calculateDelivery();
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.addProduct = function () {
        // this.modalCtrl.dismiss();
        this.navCtrl.navigateRoot(["mobile/filial-stock", { id: this.filial.id }]);
    };
    ShoppingCartPage.prototype.entryEdit = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _order_item_edit_order_item_edit_page__WEBPACK_IMPORTED_MODULE_15__["OrderItemEditPage"],
                            componentProps: { entry: entry },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        _a.sent();
                        this.calculateDelivery();
                        this.cart.totalPriceCalculate();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.removeItemCart = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "Tem certeza que deseja remover " + entry.product.name + " do seu carrinho ?",
                            buttons: [
                                {
                                    role: "cancel",
                                    text: "Cancelar",
                                },
                                {
                                    text: "Confimar",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.cart.remove(entry);
                                                    return [4 /*yield*/, this.toast.create({
                                                            message: entry.product.name + " removido com sucesso",
                                                            position: "bottom",
                                                            duration: 1500,
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    setTimeout(function () {
                                                        _this.changeRef.detectChanges();
                                                    }, 100);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ShoppingCartPage.prototype, "orderValidation", {
        get: function () {
            var msg;
            var valid;
            if (this.paymentMethod) {
                if (this.isMoney) {
                    if (this.needChange) {
                        if (this.form.value.troco) {
                            valid = true;
                        }
                        else {
                            msg = "Opção troco selecionada, por favor informe a quantidade";
                        }
                    }
                    else {
                        valid = true;
                    }
                }
                else if (this.isCard) {
                    if (this.paymentMethod == this.paymentType.credit_card ||
                        this.paymentMethod == this.paymentType.debit_card) {
                        if (this.cardFlag) {
                            valid = true;
                        }
                        else {
                            msg = "Selecione a bandeira do cartão";
                        }
                    }
                    else {
                        msg = "Selecione crédito ou débito";
                    }
                }
                else if (this.cardFoodFlag) {
                    valid = true;
                }
                else {
                    msg = "Selecione a bandeira do vale-alimentação";
                }
            }
            else {
                msg = "Selecione método de pagamento";
            }
            return { msg: msg, valid: valid };
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartPage.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Cancelar pedido",
                            message: "Você tem certeza que deseja cancelar o pedido",
                            buttons: [
                                {
                                    text: "Não",
                                    role: "cancel",
                                },
                                {
                                    text: "Sim",
                                    handler: function () {
                                        _this.cart.clearCart();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartPage.prototype.dismiss = function () {
        this.navCtrl.goBack();
    };
    ShoppingCartPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Seu carrinho",
                            message: "<ul><li>Verifique seu endere\u00E7o selecionado</li><li>Voc\u00EA pode remover itens do carrinho(se ficar sem nenhum item, o carrinho ser\u00E1 excluido)</li>\n      <li>Voc\u00EA pode voltar para comprar mais clicando em 'Adicionar produto'</li>\n      <li>Selecione seu m\u00E9todo de pagamento e caso seja dinheiro e precise de troco, n\u00E3o esque\u00E7a de informar no campo 'troco'</li></ul>",
                            buttons: ["Ok"],
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
    ], ShoppingCartPage.prototype, "content", void 0);
    ShoppingCartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-shopping-cart",
            template: __webpack_require__(/*! ./shopping-cart.page.html */ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.page.scss */ "./src/app/mobile/pages/shopping-cart/shopping-cart.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _util_money__WEBPACK_IMPORTED_MODULE_8__["Money"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-shopping-cart-shopping-cart-module.js.map