(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~b07321f1"],{

/***/ "./src/app/mobile/pages/address-edit/address-edit.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/address-edit/address-edit.module.ts ***!
  \******************************************************************/
/*! exports provided: AddressEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressEditPageModule", function() { return AddressEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _address_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-edit.page */ "./src/app/mobile/pages/address-edit/address-edit.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddressEditPageModule = /** @class */ (function () {
    function AddressEditPageModule() {
    }
    AddressEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            declarations: [_address_edit_page__WEBPACK_IMPORTED_MODULE_4__["AddressEditPage"]],
            entryComponents: [_address_edit_page__WEBPACK_IMPORTED_MODULE_4__["AddressEditPage"]]
        })
    ], AddressEditPageModule);
    return AddressEditPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/address-edit/address-edit.page.html":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/address-edit/address-edit.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <h3 ion-text text-uppercase color=\"light\" class=\"my-font-logo\">NOVO ENDEREÇO</h3>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"activeIndex\">\r\n    <div *ngSwitchCase=\"0\">\r\n      <div class=\"slide-header\" padding>\r\n        <h6 ion-text no-margin> Brasil</h6>\r\n        <h5 ion-text class=\"bold\" no-margin margin-top> Qual o seu CEP?</h5>\r\n        <ion-searchbar type=\"number\" [(ngModel)]=\"search_address\" (ionChange)=\"searchAddress($event)\" class=\"slide-body search-slide\"\r\n          debounce=\"700\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite seu CEP\"></ion-searchbar>\r\n        <div class=\"poweredgoogle\">\r\n          <img src=\"./assets/img/powered_by_google_on_white.png\">\r\n        </div>\r\n      </div>\r\n      <nano-loading [loading]=\"search_loading\"></nano-loading>\r\n      <p ion-text class=\"search-error\" *ngIf=\"search_address_error\">Por favor verifique sua conexão e tente novamente</p>\r\n      <ion-item tappable no-lines *ngFor=\"let address of address_suggestions\" (click)=\"selectAddress(address)\" class=\"slide-body\"\r\n        text-wrap>\r\n        <h6 margin>{{address.text}}</h6>\r\n      </ion-item>\r\n      <ion-button no-lines fill=\"outline\" color=\"primary\" (click)=\"next()\" class=\"slide-body cep-button\" text-wrap>Não\r\n        sei meu CEP</ion-button>\r\n      <!-- <button ion-button no-lines fill=\"clear\" block color=\"firebase-bg-dark\" (click)=\"notFoundAddress()\" class=\"slide-body cep-button more-width\"\r\n        text-wrap *ngIf=\"address_not_found\">Não encontrei meu cep</button> -->\r\n    </div>\r\n    <div *ngSwitchCase=\"1\">\r\n      <div class=\"slide-content\">\r\n        <div class=\"slide-header\" padding>\r\n          <h5 ion-text class=\"bold\" no-margin> Qual o seu estado?</h5>\r\n        </div>\r\n        <ion-item *ngFor=\"let state of states\" (click)=\"selectState(state)\" class=\"slide-body\">{{state.title}}\r\n          - {{state.value}}</ion-item>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"2\">\r\n      <div class=\"slide-header\" padding>\r\n        <h6 ion-text no-margin> {{form.value.location.state}} - Brasil</h6>\r\n        <h5 ion-text class=\"bold\" no-margin margin-top> Qual a sua cidade?</h5>\r\n        <ion-searchbar [(ngModel)]=\"search_city\" (ionChange)=\"searchCity($event)\" class=\"slide-body search-slide\"\r\n          debounce=\"700\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite aqui sua cidade\"></ion-searchbar>\r\n        <div class=\"poweredgoogle\">\r\n          <img src=\"./assets/img/powered_by_google_on_white.png\">\r\n        </div>\r\n      </div>\r\n      <nano-loading [loading]=\"search_loading\"></nano-loading>\r\n      <p ion-text class=\"search-error\" *ngIf=\"search_city_error\">Por favor verifique sua conexão e tente novamente</p>\r\n      <ion-button no-lines fill=\"clear\" expand=\"block\" color=\"primary\" (click)=\"notFoundCity()\" class=\"slide-body\"\r\n        text-wrap *ngIf=\"city_not_found\">Não encontrei minha cidade</ion-button>\r\n      <ion-item tappable no-lines ion-text *ngFor=\"let city of city_suggestions\" (click)=\"selectCity(city)\" class=\"slide-body\"\r\n        text-wrap>{{city.name}}</ion-item>\r\n    </div>\r\n    <div *ngSwitchCase=\"3\">\r\n      <div class=\"slide-header\" padding>\r\n        <h6 ion-text no-margin> {{form.value.location.city}}, {{form.value.location.state}} - Brasil</h6>\r\n        <h5 ion-text class=\"bold\" no-margin margin-top>Qual o seu bairro?</h5>\r\n        <ion-searchbar [(ngModel)]=\"search_district\" (ionChange)=\"searchDistrict($event)\" class=\"slide-body search-slide\"\r\n          [debounce]=\"700\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite aqui seu bairro\"></ion-searchbar>\r\n        <div class=\"poweredgoogle\">\r\n          <img src=\"./assets/img/powered_by_google_on_white.png\">\r\n        </div>\r\n      </div>\r\n      <nano-loading [loading]=\"search_loading\"></nano-loading>\r\n      <p ion-text class=\"search-error\" *ngIf=\"search_district_error\">Por favor verifique sua conexão e tente\r\n        novamente</p>\r\n      <ion-button no-lines fill=\"clear\" expand=\"block\" color=\"primary\" (click)=\"notFoundDistrict()\" class=\"slide-body\"\r\n        text-wrap *ngIf=\"district_not_found\">Não encontrei meu bairro</ion-button>\r\n      <ion-item tappable no-lines ion-text *ngFor=\"let district of district_suggestions\" (click)=\"selectDistrict(district)\"\r\n        class=\"slide-body\" text-wrap>{{district.name}}</ion-item>\r\n    </div>\r\n    <div *ngSwitchCase=\"4\">\r\n        <div class=\"slide-header\" padding>\r\n          <h6 ion-text no-margin>{{form.value.location.district}}, {{form.value.location.city}}, {{form.value.location.state}} -\r\n              Brasil</h6>\r\n          <h5 ion-text class=\"bold\" no-margin margin-top> Qual a sua rua?</h5>\r\n          <ion-searchbar [(ngModel)]=\"search_street\" (ionChange)=\"searchStreet($event)\" class=\"slide-body search-slide\"\r\n            [debounce]=\"700\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Digite aqui a sua rua\"></ion-searchbar>\r\n          <div class=\"poweredgoogle\">\r\n            <img src=\"./assets/img/powered_by_google_on_white.png\">\r\n          </div>\r\n        </div>\r\n        <nano-loading [loading]=\"search_loading\"></nano-loading>\r\n        <p ion-text class=\"search-error\" *ngIf=\"search_street_error\">Por favor verifique sua conexão e tente novamente</p>\r\n        <ion-item tappable no-lines ion-text *ngFor=\"let street of street_suggestions\" (click)=\"selectStreet(street)\"\r\n          class=\"slide-body\" text-wrap>{{street.name}}</ion-item>\r\n        <div class=\"street_not_found\">\r\n          <ion-button no-lines fill=\"outline\" color=\"primary\" (click)=\"selectStreet({name: search_street})\" class=\"slide-body\"\r\n            text-wrap *ngIf=\"street_not_found\">Não encontrei minha rua</ion-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-slide\" *ngSwitchCase=\"5\">\r\n      <div class=\"slide-content\">\r\n        <form [formGroup]=\"form.controls.location\">\r\n          <!-- <ion-card class=\"form\" formGroupName=\"location\"> -->\r\n          <ion-card class=\"form\">\r\n            <div class=\"state-city\">\r\n              <ion-item class=\"input-small remove-padding-item\" tappable>\r\n                <ion-label position=\"stacked\" color=\"tertiary\" class=\"disabled\"> Estado </ion-label>\r\n                <ion-input readonly formControlName=\"state_short\"> </ion-input>\r\n              </ion-item>\r\n              <ion-item tappable class=\"remove-padding-item\">\r\n                <ion-label position=\"stacked\" color=\"tertiary\" class=\"disabled\"> Cidade </ion-label>\r\n                <ion-input readonly formControlName=\"city\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <ion-item tappable>\r\n              <ion-label position=\"stacked\" color=\"tertiary\" class=\"disabled\"> Bairro </ion-label>\r\n              <ion-input readonly formControlName=\"district\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"state-city\" *ngIf=\"!formIncomplete\">\r\n              <ion-item class=\"remove-padding-item\">\r\n                <ion-label position=\"stacked\" color=\"tertiary\"> Rua / Avenida </ion-label>\r\n                <ion-input formControlName=\"street\"></ion-input>\r\n              </ion-item>\r\n              <ion-item class=\"input-small remove-padding-item\">\r\n                <ion-label position=\"stacked\" color=\"tertiary\"> Número </ion-label>\r\n                <ion-input type=\"number\" formControlName=\"number\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\" color=\"tertiary\"> Complemento </ion-label>\r\n              <ion-input formControlName=\"complement\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\" color=\"tertiary\"> Ponto de referência </ion-label>\r\n              <ion-input formControlName=\"landmark\"></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div #suggestionscity></div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"new_address\">\r\n\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-row class=\"buttons-footer\" no-padding>\r\n      <ion-col class=\"prev\" no-padding>\r\n        <ion-button *ngIf=\"isBeginning\" fill=\"clear\" color=\"extralight\" (click)=\"dismiss()\">\r\n          <ion-icon name=\"ios-arrow-back\" slot=\"start\"></ion-icon>\r\n          Cancelar\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!isBeginning\" fill=\"clear\" color=\"extralight\" class=\"prev\" (click)=\"prev()\">\r\n          <ion-icon name=\"ios-arrow-back\" slot=\"start\"></ion-icon>\r\n          Voltar\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col no-padding class=\"next\">\r\n        <ion-button *ngIf=\"isEnd\" fill=\"clear\" color=\"extralight\" (click)=\"register()\">\r\n          Salvar\r\n          <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-footer>\r\n\r\n\r\n\r\n<ion-footer *ngIf=\"!new_address\">\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button expand=\"block\" color=\"primary\" class=\"register-button\" (click)=\"register()\">SALVAR</ion-button>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/mobile/pages/address-edit/address-edit.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/address-edit/address-edit.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cep-button {\n  margin: 20px auto;\n  width: 50%;\n  margin-left: 25%; }\n\n.more-width {\n  width: 60%;\n  margin-left: 20%; }\n\n.form-slide {\n  background-color: #f4f4f4 !important; }\n\n.form-slide ion-card {\n    width: 100% !important;\n    margin-left: 0 !important; }\n\n.form-slide .form {\n    padding: 10px 10px 20px 10px;\n    background-color: #fff; }\n\n.form-slide .form ion-input {\n      border: 1px solid #dedede !important;\n      background-color: white !important;\n      border-radius: 5px !important; }\n\n.form-slide .form ion-input .text-input {\n        margin: 5px 8px !important; }\n\n.form-slide .form ion-label {\n      color: var(--ion-color-primary) !important;\n      color: var(--ion-color-primary); }\n\n.form-slide .form .disabled {\n      color: #CCC !important; }\n\n.form-slide .form .state-city {\n      justify-content: space-around;\n      display: flex; }\n\n.form-slide .form .state-city .input-small {\n        width: 35%;\n        padding: 0 !important; }\n\n.form-slide .scroll-content {\n    background-color: #f4f4f4; }\n\n.form-slide ion-item {\n    padding: 0 !important; }\n\n.form-slide ion-label {\n    color: var(--ion-color-primary) !important;\n    font-weight: bold !important; }\n\n.form-slide .item-inner,\n  .form-slide .item-input {\n    border-bottom: 0px solid #dedede !important;\n    box-shadow: inset 0 0px 0 0 #32db64 !important; }\n\n.form-slide ion-row,\n  .form-slide .mybuttons {\n    background-color: #f4f4f4; }\n\nform {\n  height: 100%; }\n\nion-slide .slide-zoom {\n  height: 100%;\n  text-align: left; }\n\n.slide-content {\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch; }\n\n.slide-header {\n  background: var(--ion-color-extralight-shade) !important; }\n\n.slide-header h2.text {\n    font-size: 1.6rem; }\n\nh6 {\n  color: var(--ion-color-medium-shade); }\n\nh5 {\n  color: var(--ion-color-medium-shade); }\n\n.bold {\n  font-weight: bold; }\n\nform ion-item {\n  --background: white; }\n\n.search-slide {\n  padding-left: 3px; }\n\n.search-slide .searchbar-input-container {\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); }\n\n.search-error {\n  margin: 10px 10px;\n  text-align: center;\n  font-size: 14px; }\n\n.poweredgoogle {\n  margin-right: 6px;\n  display: flex;\n  justify-content: flex-end; }\n\nion-footer {\n  background: var(--ion-color-primary); }\n\nion-footer .buttons-footer {\n    background: var(--ion-color-primary); }\n\nion-footer .prev {\n    display: flex;\n    justify-content: flex-start; }\n\nion-footer .next {\n    display: flex;\n    justify-content: flex-end; }\n\nion-footer button.button {\n    color: white; }\n\n.street_not_found {\n  display: flex;\n  justify-content: center;\n  padding-top: 12px; }\n\n.register-button {\n  margin: 0px !important;\n  padding: 0px !important;\n  box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/address-edit/address-edit.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/mobile/pages/address-edit/address-edit.page.ts ***!
  \****************************************************************/
/*! exports provided: AddressEditPage, CUSTOM_DISTRICTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressEditPage", function() { return AddressEditPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_DISTRICTS", function() { return CUSTOM_DISTRICTS; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _models_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/log */ "./src/models/log.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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











var AddressEditPage = /** @class */ (function () {
    function AddressEditPage(platform, route, modalCtrl, system, shared, loadingCtrl, placesProvider, change, alertCtrl) {
        this.platform = platform;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.system = system;
        this.shared = shared;
        this.loadingCtrl = loadingCtrl;
        this.placesProvider = placesProvider;
        this.change = change;
        this.alertCtrl = alertCtrl;
        this.slideOpts = {
            effect: 'flip'
        };
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.enableStreet = false;
        this.enableNumber = false;
        this.states = _util_util__WEBPACK_IMPORTED_MODULE_8__["STATES"];
        /**
         * Auxiliares para evitar requisições anteriores não sobrescrevam requisições posteriores
         */
        this.search_index = 1;
        this.search_received_index = 0;
        this.search_loading = false;
        this._activeIndex = 0;
    }
    Object.defineProperty(AddressEditPage.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (number) {
            this._activeIndex = number;
            this.change.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    AddressEditPage.prototype.ngOnInit = function () {
        this.initForm();
        this.system.setScreenName("AddressEditPage");
        // Service usado para fazer as requisições do Places Service
        this.placesService = new google.maps.places.PlacesService(this.suggestionCities.nativeElement);
        // Editar endereço
        this.new_address = true;
        if (this.location) {
            this.new_address = false;
            this.form.patchValue({
                location: this.location
            });
            this.goToLastSlide();
        }
    };
    AddressEditPage.prototype.initForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                country_short: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
                district: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                state_short: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
            }),
        });
    };
    AddressEditPage.prototype.goToLastSlide = function () {
        console.log('ir para ultimo slide: ', this.activeIndex);
        this.activeIndex = 5;
        this.change.detectChanges();
        console.log('fui para ultimo slide: ', this.activeIndex, this.form);
    };
    /**
     * Seleciona o estado de uma lista predeterminada
     * @param state Estado selecionado
     */
    AddressEditPage.prototype.selectState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.activeIndex === 1) {
                    this.form.controls.location.patchValue({
                        state: state.title,
                        state_short: state.value
                    });
                    this.next();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Buscar Cep
     */
    AddressEditPage.prototype.searchAddress = function (event) {
        var _this = this;
        this.search_index++;
        var index = this.search_index;
        this.search_loading = true;
        this.address_not_found = false;
        this.search_address_error = false;
        var input = this.search_address && this.search_address.length > 4 ?
            "Brasil, " + this.search_address :
            undefined;
        this.getResults(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            return results.map(function (result) {
                var address = {
                    text: result.formatted_address,
                    address_components: result.address_components,
                    latitude: result.geometry.location.lat(),
                    longitude: result.geometry.location.lng()
                };
                if (!address)
                    return "";
                return address;
            }).filter(function (result) { return result.text.length > 0; });
        }))
            .subscribe(function (r) {
            if ((!r || r.length <= 0) && (_this.search_address && _this.search_address.length > 2)) {
                _this.address_not_found = true;
                _this.handlerNotFoundAddress();
            }
            if (index > _this.search_received_index) {
                _this.address_suggestions = r;
                _this.search_received_index = index;
            }
            _this.search_loading = false;
            _this.change.detectChanges();
        }, function (err) {
            console.error(err);
            _this.address_suggestions = [];
            _this.search_loading = false;
            _this.search_address_error = true;
            _this.change.detectChanges();
        });
    };
    AddressEditPage.prototype.handlerNotFoundAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'CEP não encontrado',
                            message: "Voc\u00EA tem certeza que o CEP " + this.search_address + " est\u00E1 correto?",
                            buttons: [
                                {
                                    text: 'Não',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var alert;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                        header: 'Não se preocupe!',
                                                        subHeader: 'Vamos localizar seu endereço preenchendo-o manualmente',
                                                        buttons: [{
                                                                text: 'OK',
                                                                handler: function () {
                                                                    _this.next();
                                                                }
                                                            }]
                                                    })];
                                                case 1:
                                                    alert = _a.sent();
                                                    alert.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
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
    AddressEditPage.prototype.selectAddress = function (address) {
        console.log('Cliquei no endereco: ', address);
        var a = address.address_components;
        a = a.slice(0).reverse();
        var index = 0;
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var components = a_1[_i];
            if (components.types.indexOf("postal_code") >= 0) {
                this.form.controls.location.patchValue({
                    cep: components.long_name
                });
            }
            else if (components.types.indexOf("country") >= 0) {
                this.form.controls.location.patchValue({
                    country: components.long_name,
                    country_short: components.short_name
                });
                index++;
            }
            else if (components.types.indexOf("administrative_area_level_1") >= 0) {
                this.form.controls.location.patchValue({
                    state: components.long_name,
                    state_short: components.short_name
                });
                index++;
            }
            else if (components.types.indexOf("administrative_area_level_2") >= 0) {
                this.form.controls.location.patchValue({
                    city: components.long_name
                });
                index++;
            }
            else if (components.types.indexOf("sublocality_level_1") >= 0) {
                this.form.controls.location.patchValue({
                    district: components.long_name
                });
                index++;
            }
            else if (components.types.indexOf("route") >= 0) {
                this.form.controls.location.patchValue({
                    street: components.long_name
                });
                index++;
            }
        }
        this.form.controls.location.patchValue({
            latitude: address.latitude,
            longitude: address.longitude,
        });
        // this.form.controls.location.patchValue({
        //   city: city,
        // })
        this.next(index);
    };
    AddressEditPage.prototype.notFoundAddress = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Carregando"
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        _models_log__WEBPACK_IMPORTED_MODULE_9__["Log"].add({
                            origin: _models_log__WEBPACK_IMPORTED_MODULE_9__["LogOriginTypes"].ADDRESS_NOT_FOUND,
                            description: "Brasil",
                            user: this.shared.user ? this.shared.user : null
                        }).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                            var alert;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            header: "Obrigado",
                                            message: "A nossa equipe foi informada que sua cidade não foi encontrada. Por favor volte mais tarde.",
                                            buttons: ["Ok"]
                                        })];
                                    case 1:
                                        alert = _a.sent();
                                        loading.dismiss();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function () {
                            loading.dismiss();
                            _this.system.showErrorAlert(Error("Falha de comunicação"));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Buscar cidade
     */
    AddressEditPage.prototype.searchCity = function () {
        var _this = this;
        this.search_index++;
        var index = this.search_index;
        this.search_loading = true;
        this.city_not_found = false;
        this.search_city_error = false;
        var input = this.search_city && this.search_city.length > 2 ?
            "Brasil, " + this.form.value.location.state + ", " + this.search_city :
            undefined;
        this.getResults(input, "(cities)")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            return results.map(function (result) {
                var city;
                for (var _i = 0, _a = result.address_components; _i < _a.length; _i++) {
                    var address_component = _a[_i];
                    if (address_component.types.indexOf("administrative_area_level_2") >= 0) {
                        city = address_component.long_name;
                        break;
                    }
                }
                if (!city)
                    return undefined;
                return {
                    name: city,
                    latitude: result.geometry.location.lat(),
                    longitude: result.geometry.location.lng()
                };
            }).filter(function (result) { return result; });
        }))
            .subscribe(function (r) {
            if ((!r || r.length <= 0) && (_this.search_city && _this.search_city.length > 2)) {
                _this.city_not_found = true;
            }
            if (index > _this.search_received_index) {
                _this.city_suggestions = r;
                _this.search_received_index = index;
            }
            _this.search_loading = false;
            _this.change.detectChanges();
        }, function () {
            _this.city_suggestions = [];
            _this.search_loading = false;
            _this.search_city_error = true;
        });
    };
    AddressEditPage.prototype.selectCity = function (city) {
        this.form.controls.location.patchValue({
            city: city.name,
            latitude: city.latitude,
            longitude: city.longitude
        });
        this.next();
    };
    AddressEditPage.prototype.notFoundCity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Carregando"
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        _models_log__WEBPACK_IMPORTED_MODULE_9__["Log"].add({
                            origin: _models_log__WEBPACK_IMPORTED_MODULE_9__["LogOriginTypes"].CITY_NOT_FOUND,
                            description: "Brasil, " + this.form.value.location.state + ", " + this.search_city,
                            user: this.shared.user ? this.shared.user : null
                        }).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                            var alert;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            header: "Obrigado",
                                            message: "A nossa equipe foi informada que sua cidade não foi encontrada. Por favor volte mais tarde.",
                                            buttons: ["Ok"]
                                        })];
                                    case 1:
                                        alert = _a.sent();
                                        loading.dismiss();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function () {
                            loading.dismiss();
                            _this.system.showErrorAlert(Error("Falha de comunicação"));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressEditPage.prototype.searchDistrict = function () {
        var _this = this;
        if (this.form.value.location.city === "Morada Nova") {
            this.district_suggestions = CUSTOM_DISTRICTS.MORADA_NOVA
                .map(function (district) { return { name: district }; })
                .filter(function (district) {
                return district.name.indexOf(_this.search_district) >= 0;
            });
            this.change.detectChanges();
            return;
        }
        this.search_index++;
        var index = this.search_index;
        this.search_loading = true;
        this.district_not_found = false;
        this.search_district_error = false;
        var input = this.search_district && this.search_district.length > 2 ?
            "Brasil, " + this.form.value.location.state + ", " + this.form.value.location.city + ", " + this.search_district :
            undefined;
        this.getResults(input, "(regions)")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            return results.map(function (result) {
                var district;
                for (var _i = 0, _a = result.address_components; _i < _a.length; _i++) {
                    var address_component = _a[_i];
                    if (address_component.types.indexOf("sublocality") >= 0) {
                        district = address_component.long_name;
                        break;
                    }
                }
                if (!district)
                    return undefined;
                return {
                    name: district,
                    latitude: result.geometry.location.lat(),
                    longitude: result.geometry.location.lng()
                };
            }).filter(function (result) { return result; });
        }))
            .subscribe(function (r) {
            if ((!r || r.length <= 0) && (_this.search_district && _this.search_district.length > 2)) {
                _this.district_not_found = true;
            }
            if (index > _this.search_received_index) {
                _this.district_suggestions = r;
                _this.search_received_index = index;
            }
            _this.search_loading = false;
            _this.change.detectChanges();
        }, function () {
            _this.district_suggestions = [];
            _this.search_loading = false;
            _this.search_district_error = true;
        });
    };
    AddressEditPage.prototype.selectDistrict = function (district) {
        if (district.latitude && district.longitude) {
            this.form.controls.location.patchValue({
                district: district.name,
                latitude: district.latitude,
                longitude: district.longitude
            });
        }
        else {
            this.form.controls.location.patchValue({
                district: district.name,
            });
        }
        this.next();
    };
    AddressEditPage.prototype.nextSecondSlide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Atenção!',
                            message: 'Você não preencheu seu CEP! Tem certeza que deseja avançar mesmo assim?',
                            buttons: [
                                {
                                    text: 'Não'
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.next();
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
    AddressEditPage.prototype.notFoundDistrict = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Carregando"
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        _models_log__WEBPACK_IMPORTED_MODULE_9__["Log"].add({
                            origin: _models_log__WEBPACK_IMPORTED_MODULE_9__["LogOriginTypes"].DISTRICT_NOT_FOUND,
                            description: "Brasil, " + this.form.value.location.state + ", " + this.form.value.location.city + ", " + this.search_district,
                            user: this.shared.user ? this.shared.user : null
                        }).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                            var alert;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            header: "Obrigado",
                                            message: "A nossa equipe foi informada que seu bairro não foi encontrado. Por favor volte mais tarde.",
                                            buttons: ["Ok"]
                                        })];
                                    case 1:
                                        alert = _a.sent();
                                        loading.dismiss();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function () {
                            loading.dismiss();
                            _this.system.showErrorAlert(Error("Falha de comunicação"));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressEditPage.prototype.searchStreet = function (event) {
        var _this = this;
        this.search_index++;
        var index = this.search_index;
        this.search_loading = true;
        this.street_not_found = false;
        this.search_street_error = false;
        var input = this.search_street && this.search_street.length > 2 ?
            "Brasil, " + this.form.value.location.state + ", " + this.form.value.location.city + ", " + this.form.value.location.district + ", " + this.search_street :
            undefined;
        this.getResults(input, "address")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            return results.map(function (result) {
                var street;
                for (var _i = 0, _a = result.address_components; _i < _a.length; _i++) {
                    var address_component = _a[_i];
                    if (address_component.types.indexOf("route") >= 0 || address_component.types.indexOf("street_address") >= 0) {
                        street = address_component.long_name;
                        break;
                    }
                }
                if (!street)
                    return undefined;
                return {
                    name: street,
                    latitude: result.geometry.location.lat(),
                    longitude: result.geometry.location.lng()
                };
            }).filter(function (result) { return result; });
        }))
            .subscribe(function (r) {
            if ((!r || r.length <= 0) && (_this.search_street && _this.search_street.length > 2)) {
                _this.street_not_found = true;
            }
            if (index > _this.search_received_index) {
                _this.street_suggestions = r;
                _this.search_received_index = index;
            }
            _this.search_loading = false;
            _this.change.detectChanges();
        }, function () {
            _this.street_suggestions = [];
            _this.search_loading = false;
            _this.search_street_error = true;
        });
    };
    AddressEditPage.prototype.selectStreet = function (street) {
        if (street.latitude && street.longitude) {
            this.form.controls.location.patchValue({
                street: street.name,
                latitude: street.latitude,
                longitude: street.longitude
            });
            this.system.logEvent("street_found");
        }
        else {
            this.system.logEvent("street_not_found");
            this.form.controls.location.patchValue({
                street: street.name
            });
        }
        this.goToLastSlide();
    };
    /**
     * tipos da variavel type
     * geocode:
     *  instrui o serviço Place Autocomplete a retornar apenas resultados de geocodificação em vez de resultados de empresas.
     * Geralmente, essa solicitação é usada para a desambiguação de resultados em que a localização especificada pode ser indeterminada.
     * address:
     * Instrui o serviço Place Autocomplete a retornar apenas resultados de geocodificação com um endereço preciso. Geralmente, essa solicitação é usada quando se sabe que o usuário procurará um endereço totalmente especificado.
     * establishment:
     * Instrui o serviço Place Autocomplete a retornar apenas resultados de empresas.
     * (regions):
     * A coleção de tipos (regions) instrui o serviço Places a retornar qualquer resultado que corresponda aos seguintes tipos:
     * locality
     * sublocality
     * postal_code
     * country
     * administrative_area_level_1
     * administrative_area_level_2
     * (cities):
     * A coleção de tipos (cities) instrui o serviço Places a retornar resultados que correspondam a locality ou administrative_area_level_3.
     */
    AddressEditPage.prototype.getResults = function (input, type) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            if (!input || input.length < 3) {
                observer.next([]);
                observer.complete();
                return;
            }
            // new google.maps.places.PlacesService(this.suggestionCities.nativeElement).textSearch({
            //   query: input,
            //   type: "(cities)"
            // }, (results, status, pagination) => {
            //   console.log("Resultados", results)
            // })
            _this.autocompleteService.getPlacePredictions({
                input: input,
                types: (type ? [type] : undefined)
            }, function (result, status) {
                if (_this.errorPlacesStatus(status)) {
                    observer.error(status);
                    return;
                }
                observer.next(result || []);
                observer.complete();
            });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (r) {
            if (!r || r.length <= 0)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(r.map(function (e) {
                return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                    _this.placesService.getDetails({
                        placeId: e.place_id
                    }, function (result, status) {
                        if (_this.errorPlacesStatus(status)) {
                            observer.error(status);
                            return;
                        }
                        observer.next(result);
                        observer.complete();
                    });
                });
            }));
        }));
    };
    /**
     * Verifica se o status retornado pelo google maps é de erro ou não
     * @param status Status
     * @returns true se existe erro. e falso se não existe erros
     */
    AddressEditPage.prototype.errorPlacesStatus = function (status) {
        switch (status) {
            case google.maps.places.PlacesServiceStatus.OK: //	The response contains a valid result.
            case google.maps.places.PlacesServiceStatus.ZERO_RESULTS: //	No result was found for this request.
                // Tudo certo na requisição
                return false;
            case google.maps.places.PlacesServiceStatus.INVALID_REQUEST: //	This request was invalid.
            // case google.maps.places.PlacesServiceStatus.NOT_FOUND://	The place referenced was not found.
            case google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT: //	The application has gone over its request quota.
            case google.maps.places.PlacesServiceStatus.REQUEST_DENIED: //	The application is not allowed to use the PlacesService.
            case google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR: //	The PlacesService request could not be processed due to a server error.The request may succeed if you try again.
            default:
                return true;
        }
    };
    AddressEditPage.prototype.next = function (index) {
        this.search_city = this.search_district = this.search_street = "";
        this.street_suggestions = this.city_suggestions = this.district_suggestions = [];
        this.search_street_error = this.search_district_error = this.search_city_error = false;
        this.city_not_found = this.street_not_found = this.district_not_found = false;
        if (index !== undefined) {
            this.activeIndex = index;
            this.nextFromCep = true;
        }
        else {
            this.activeIndex = this.activeIndex + 1;
            this.nextFromCep = false;
        }
        if (this.activeIndex === 3) {
            if (this.form.value.location.city === "Morada Nova") {
                this.district_suggestions = CUSTOM_DISTRICTS.MORADA_NOVA.map(function (district) { return { name: district }; });
                this.change.detectChanges();
            }
        }
    };
    AddressEditPage.prototype.prev = function () {
        this.search_city = this.search_district = this.search_street = "";
        this.street_suggestions = this.city_suggestions = this.district_suggestions = [];
        this.search_street_error = this.search_district_error = this.search_city_error = false;
        this.city_not_found = this.street_not_found = this.district_not_found = false;
        if (this.nextFromCep) {
            this.activeIndex = 0;
        }
        else {
            this.activeIndex = this.activeIndex - 1;
        }
    };
    AddressEditPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ajuda',
                            message: 'Preencha os campos com seu endereço. Caso não encontre seu estado, cidade ou bairro nos formulários por favor entre em contato com o suporte.',
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
    /**
     * Salvar alterações e redirecionar para página anterior
     */
    AddressEditPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locationObject, alert_1, alert_2, alert_3, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locationObject = {};
                        locationObject = this.form.value.location;
                        locationObject.isGps = false;
                        if (!!locationObject.street) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Endereço inválido",
                                message: "É obrigatório preencher a rua",
                                buttons: ["Ok"]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [2 /*return*/];
                    case 2:
                        if (!!locationObject.number) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Endereço inválido",
                                message: "É obrigatório preencher o número",
                                buttons: ["Ok"]
                            })];
                    case 3:
                        alert_2 = _a.sent();
                        alert_2.present();
                        return [2 /*return*/];
                    case 4:
                        if (!!locationObject.landmark) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: "Endereço inválido",
                                message: "É obrigatório preencher o ponto de referência",
                                buttons: ["Ok"]
                            })];
                    case 5:
                        alert_3 = _a.sent();
                        alert_3.present();
                        return [2 /*return*/];
                    case 6:
                        this.system.logEvent("register_location");
                        if (!this.shared.user) {
                            this.shared.locationUser = locationObject;
                            this.modalCtrl.dismiss();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 7:
                        loading = _a.sent();
                        loading.present();
                        if (this.new_address) {
                            this.placesProvider.saveLocationHistory(locationObject).subscribe(function () {
                                loading.dismiss();
                                _this.modalCtrl.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                _this.system.showErrorAlert(error);
                            });
                        }
                        else {
                            this.placesProvider.editCurrentLocation(locationObject).subscribe(function () {
                                loading.dismiss();
                                _this.modalCtrl.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                _this.system.showErrorAlert(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressEditPage.prototype.dismiss = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.new_address) {
                    if (this.activeIndex === 0) {
                        this.modalCtrl.dismiss();
                    }
                    else {
                        this.prev();
                    }
                }
                else {
                    this.modalCtrl.dismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(AddressEditPage.prototype, "isBeginning", {
        get: function () {
            return this.activeIndex === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressEditPage.prototype, "isEnd", {
        get: function () {
            return this.activeIndex === 5;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('suggestionscity'),
        __metadata("design:type", Object)
    ], AddressEditPage.prototype, "suggestionCities", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Object)
    ], AddressEditPage.prototype, "location_user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Object)
    ], AddressEditPage.prototype, "location", void 0);
    AddressEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-address-edit',
            template: __webpack_require__(/*! ./address-edit.page.html */ "./src/app/mobile/pages/address-edit/address-edit.page.html"),
            styles: [__webpack_require__(/*! ./address-edit.page.scss */ "./src/app/mobile/pages/address-edit/address-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], AddressEditPage);
    return AddressEditPage;
}());

var CUSTOM_DISTRICTS = {
    MORADA_NOVA: [
        "2 de Agosto",
        "Alto Tiradentes",
        "Açude Velho",
        "Centro",
        "Dnocs",
        "Fátima",
        "Girilândia",
        "Gran Ville",
        "Mutirão",
        "Nova Morada",
        "Parque de Exposição",
        "Populares",
        "Prourb",
        "São José",
        "São Francisco",
        "Setor K",
        "Vazantes",
        "Várzea",
    ]
};


/***/ }),

/***/ "./src/app/mobile/pages/customer-address/customer-address.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/mobile/pages/customer-address/customer-address.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddressPageModule", function() { return CustomerAddressPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _customer_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-address.page */ "./src/app/mobile/pages/customer-address/customer-address.page.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _address_edit_address_edit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../address-edit/address-edit.module */ "./src/app/mobile/pages/address-edit/address-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerAddressPageModule = /** @class */ (function () {
    function CustomerAddressPageModule() {
    }
    CustomerAddressPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _address_edit_address_edit_module__WEBPACK_IMPORTED_MODULE_7__["AddressEditPageModule"],
            ],
            entryComponents: [_customer_address_page__WEBPACK_IMPORTED_MODULE_5__["CustomerAddressPage"]],
            declarations: [_customer_address_page__WEBPACK_IMPORTED_MODULE_5__["CustomerAddressPage"]],
        })
    ], CustomerAddressPageModule);
    return CustomerAddressPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/customer-address/customer-address.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/mobile/pages/customer-address/customer-address.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar class=\"header-toolbar\" color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <h3 ion-text text-uppercase color=\"light\" class=\"my-font-logo\">ENDEREÇO</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card class=\"card-delivery-address\" *ngIf=\"location; else noLocation\" (click)=\"editAddress()\" tappable>\r\n    <ion-icon name=\"pin\"></ion-icon>\r\n    <div class=\"info-delivery\">\r\n      <p class=\"title-delivery\" text-wrap>\r\n        <strong>{{ location.street}}, {{ location.number}}\r\n          <span *ngIf=\"location.complement\">\r\n            <br />{{ location.complement}} </span>\r\n          <span *ngIf=\"location.landmark\">\r\n            <br />{{ location.landmark}} </span>\r\n        </strong>\r\n      </p>\r\n      <p class=\"subtitle-delivery\">{{ location.district }} - {{ location.city }} </p>\r\n    </div>\r\n  </ion-card>\r\n  <ng-template #noLocation>\r\n    <p margin-horizontal class=\"no-address-register\" text-center ion-text color=\"discret\">Você ainda não possui nenhum\r\n      endereço cadastrado</p>\r\n  </ng-template>\r\n\r\n  <ion-button fill=\"clear\" expand=\"block\" margin-top margin-bottom (click)=\"newAddress()\">\r\n    <ion-label> Adicionar novo endereço </ion-label>\r\n  </ion-button>\r\n\r\n  <ion-item class=\"divider\">\r\n    <p class=\"title\"> Histórico </p>\r\n  </ion-item>\r\n  <div *ngIf=\"shared?.user?.locations_history?.length > 0; else noLocationHistory\" margin-top>\r\n    <ion-card *ngFor=\"let location of shared.user.locations_history\" class=\"card-delivery-address historic\" tappable>\r\n      <ion-icon name=\"pin\" slot=\"start\" (click)=\"changeLocation(location)\"></ion-icon>\r\n      <div class=\"info-delivery\" (click)=\"changeLocation(location)\">\r\n        <p class=\"title-delivery\" text-wrap>\r\n          <strong>{{ location.street}}, {{ location.number}}\r\n            <span *ngIf=\"location.complement\">\r\n              <br />{{ location.complement}} </span>\r\n          </strong>\r\n        </p>\r\n        <p class=\"subtitle-delivery\">{{ location.district }} - {{ location.city }} </p>\r\n      </div>\r\n      <ion-button fill=\"clear\" (click)=\"removeLocationHistory(location)\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ng-template #noLocationHistory>\r\n    <p margin-horizontal class=\"no-address-register\" text-center ion-text color=\"discret\">Você ainda não possui\r\n      histórico de endereços.</p>\r\n  </ng-template>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/customer-address/customer-address.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/mobile/pages/customer-address/customer-address.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-inner {\n  border: 0 !important; }\n\nion-card.card-delivery-address {\n  width: 100% !important;\n  margin-left: 0 !important;\n  background: white !important;\n  display: flex;\n  align-items: center;\n  padding: 10px 0px 10px 0px; }\n\nion-card.card-delivery-address p {\n    -webkit-margin-after: 0.5em !important;\n            margin-block-end: 0.5em !important; }\n\nion-card.card-delivery-address .info-delivery {\n    padding: 8px 15px; }\n\nion-card.card-delivery-address .info-delivery .title-delivery {\n      color: var(--ion-color-medium-shade);\n      font-size: 1.2em; }\n\nion-card.card-delivery-address .info-delivery .subtitle-delivery {\n      color: var(--ion-color-medium-shade); }\n\nion-card.card-delivery-address ion-icon {\n    color: var(--ion-color-primary);\n    padding: 10px;\n    margin-left: 10px;\n    font-size: 2.5em; }\n\n.divider {\n  --background: var(--ion-color-primary); }\n\n.divider .title {\n    color: #fff;\n    font-size: 1.3em;\n    margin: 0; }\n\n.historic .item {\n  padding: 0 !important; }\n\n.historic ion-icon {\n  padding: 0px 20px; }\n\n.historic ion-label {\n  display: flex;\n  align-items: center;\n  margin: 0px; }\n\n.historic ion-label ion-icon {\n    padding: 10px !important; }\n\n.historic .info-delivery .title-delivery {\n  font-size: 0.7em; }\n\n.historic .info-delivery .subtitle-delivery {\n  font-size: 0.6em;\n  color: var(--ion-color-medium-shade); }\n"

/***/ }),

/***/ "./src/app/mobile/pages/customer-address/customer-address.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/mobile/pages/customer-address/customer-address.page.ts ***!
  \************************************************************************/
/*! exports provided: CustomerAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddressPage", function() { return CustomerAddressPage; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../address-edit/address-edit.page */ "./src/app/mobile/pages/address-edit/address-edit.page.ts");
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











var CustomerAddressPage = /** @class */ (function () {
    function CustomerAddressPage(shared, modalCtrl, alertCtrl, loadingCtrl, navCtrl, system, cart, placesProvider) {
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.system = system;
        this.cart = cart;
        this.placesProvider = placesProvider;
    }
    Object.defineProperty(CustomerAddressPage.prototype, "location", {
        get: function () {
            return this.shared.user ? this.shared.user.location : this.shared.locationUser;
        },
        enumerable: true,
        configurable: true
    });
    CustomerAddressPage.prototype.ngOnInit = function () {
        this.system.setScreenName("CustomerAddressPage");
    };
    CustomerAddressPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    CustomerAddressPage.prototype.getCurrentLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.placesProvider.getCurrentLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["flatMap"])(function (location) {
                            return _this.placesProvider.saveLocationHistory(location);
                        })).subscribe(function () {
                            loading.dismiss();
                        }, function (error) {
                            _this.system.showErrorAlert(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Tenta mudar a localização do usuário atual.
     * Caso ele possua um carrinho e a localização nova não for atendida pela filial do carrinho, avisar o usuário.
     * @param location Nova localização
     */
    CustomerAddressPage.prototype.changeLocation = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var hasUserDistrict_1, start, end, distance;
            return __generator(this, function (_a) {
                /**
                 * Verifica se o novo endereço é atendido pela filial do carrinho atual.
                 */
                if (this.cart.filial) {
                    /**
                     * Se a filial atender por bairros, fazer a verificação por bairros
                     */
                    if (this.cart.filial.deliveryByDistrict) {
                        hasUserDistrict_1 = false;
                        this.cart.filial.deliveryDistricts.forEach(function (deliveryDistrict) {
                            if (deliveryDistrict.location.state == location.state &&
                                deliveryDistrict.location.city == location.city &&
                                deliveryDistrict.location.district == location.district) {
                                hasUserDistrict_1 = true;
                                return;
                            }
                        });
                        if (!hasUserDistrict_1) {
                            this.alertDoesNotDelivery(this.cart.filial.name);
                            return [2 /*return*/];
                        }
                        /**
                         * Se ela não atender por bairros, ela atende por km. Verificar a distancia e se a filial atende pro km
                         */
                    }
                    else {
                        start = {
                            lat: location.latitude,
                            lng: location.longitude
                        };
                        end = {
                            lat: this.cart.filial.location.latitude,
                            lng: this.cart.filial.location.longitude
                        };
                        distance = Object(_util_util__WEBPACK_IMPORTED_MODULE_7__["getDistanceBetweenPoints"])(start, end);
                        if (distance > this.cart.filial.delivery.distanceMax) {
                            this.alertDoesNotDelivery(this.cart.filial.name);
                            return [2 /*return*/];
                        }
                    }
                }
                this.alertConfirmChangeLocation(location);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Foi verificado e não existiu nenhum impeditivo para o usuário mudar para a nova localização
     * Alerta apenas para confirmar se é isso que o usuário realmente quer.
     * @param location Nova localização
     */
    CustomerAddressPage.prototype.alertConfirmChangeLocation = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alterar destino',
                            subHeader: "Voc\u00EA deseja alterar sua localiza\u00E7\u00E3o atual para " + location.street,
                            buttons: [{
                                    text: 'Cancelar',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.placesProvider.changeLocationCurrent(location).subscribe(function () {
                                            _this.dismiss();
                                        }, function (err) { return _this.system.showErrorAlert(err); });
                                    }
                                }]
                        })];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Exibe um alerta informando o usuário que esse novo endereço não recebe delivery do carrinho atual.
     * @param name Nome da filial
     */
    CustomerAddressPage.prototype.alertDoesNotDelivery = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ops!',
                            subHeader: name + " n\u00E3o faz entrega para esta regi\u00E3o",
                            buttons: ['OK']
                        })];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerAddressPage.prototype.removeLocationHistory = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Voc\u00EA deseja excluir " + location.street + " do seu hist\u00F3rico ?",
                            buttons: [{
                                    text: 'Cancelar',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var loading, index;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                                                case 1:
                                                    loading = _a.sent();
                                                    loading.present();
                                                    index = this.shared.user.locations_history.indexOf(location);
                                                    if (index > -1) {
                                                        this.shared.user.locations_history.splice(index, 1);
                                                    }
                                                    _models_user__WEBPACK_IMPORTED_MODULE_8__["User"].update(this.shared.user.id, {
                                                        locations_history: this.shared.user.locations_history
                                                    }).subscribe(function () {
                                                        loading.dismiss();
                                                    }, function (err) { return console.error(err); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerAddressPage.prototype.newAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Clique newAddress()");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_9__["AddressEditPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerAddressPage.prototype.editAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_9__["AddressEditPage"],
                            componentProps: {
                                location: this.location
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
    CustomerAddressPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-address',
            template: __webpack_require__(/*! ./customer-address.page.html */ "./src/app/mobile/pages/customer-address/customer-address.page.html"),
            styles: [__webpack_require__(/*! ./customer-address.page.scss */ "./src/app/mobile/pages/customer-address/customer-address.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_6__["PlacesService"]])
    ], CustomerAddressPage);
    return CustomerAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~b07321f1.js.map