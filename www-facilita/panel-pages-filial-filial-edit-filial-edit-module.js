(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-filial-filial-edit-filial-edit-module"],{

/***/ "./src/app/panel/pages/filial/filial-edit/filial-edit.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/filial-edit.module.ts ***!
  \**********************************************************************/
/*! exports provided: FilialEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialEditPageModule", function() { return FilialEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _filial_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filial-edit.page */ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _select_interval_hours_select_interval_hours_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-interval-hours/select-interval-hours.page */ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _filial_edit_page__WEBPACK_IMPORTED_MODULE_5__["FilialEditPage"]
    }
];
var FilialEditPageModule = /** @class */ (function () {
    function FilialEditPageModule() {
    }
    FilialEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                br_mask__WEBPACK_IMPORTED_MODULE_9__["BrMaskerModule"]
            ],
            entryComponents: [
                _select_interval_hours_select_interval_hours_page__WEBPACK_IMPORTED_MODULE_8__["SelectIntervalHoursPage"]
            ],
            declarations: [
                _select_interval_hours_select_interval_hours_page__WEBPACK_IMPORTED_MODULE_8__["SelectIntervalHoursPage"],
                _filial_edit_page__WEBPACK_IMPORTED_MODULE_5__["FilialEditPage"]
            ]
        })
    ], FilialEditPageModule);
    return FilialEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/filial-edit.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Cadastro de Estabelecimento\" icon=\"menus-icon-shop\" [helpPage]=\"5\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n          <!-- Imagem da filial -->\r\n          <p ion-text color=\"tertiary\" padding-horizontal class=\"complete-address\">Foto da filial *</p>\r\n          <nano-uploadimage [form]=\"this.form\" [storagePath]=\"'filials'\"></nano-uploadimage>\r\n          <!-- Imagem de capa -->\r\n          <p ion-text color=\"tertiary\" padding-horizontal class=\"complete-address\">Imagem de capa *</p>\r\n          <nano-uploadimage [control]=\"this.form.controls['cover']\" [storagePath]=\"'filials_cover'\"></nano-uploadimage>\r\n\r\n          <!-- Nome -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome *</ion-label>\r\n            <ion-input formControlName=\"name\" maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- Descrição -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Descrição *</ion-label>\r\n            <ion-textarea rows=\"5\" formControlName=\"description\" maxlength=\"300\"></ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Taxa específica a ser cobrada pela empresa -->\r\n          <div formGroupName=\"fee\" *ngIf=\"isTEAM\">\r\n            <ion-item padding-horizontal>\r\n              <ion-label position=\"stacked\" color=\"tertiary\">Taxa</ion-label>\r\n              <money-input item-content [control]=\"form.controls['fee'].controls['to_facilita']\"></money-input>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <!-- Telefones de contato-->\r\n          <ion-row padding-right class=\"phones\" padding-horizontal padding-top>\r\n            <ion-col ion-item no-lines col-12 col-sm-6 padding-horizontal>\r\n              <ion-label position=\"stacked\" color=\"tertiary\"> Telefone1 *</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"phone1\" minlength=\"8\" maxlength=\"15\" name=\"phone1\" [brmasker]=\"{form: form.get('phone1'), phone: true}\"></ion-input>\r\n            </ion-col>\r\n            <ion-col ion-item no-lines col-12 col-sm-6 padding-horizontal>\r\n              <ion-label position=\"stacked\" color=\"tertiary\"> Telefone2 </ion-label>\r\n              <ion-input type=\"text\" formControlName=\"phone2\" minlength=\"8\" maxlength=\"15\" name=\"phone2\" [brmasker]=\"{form: form.get('phone2'), phone: true}\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <!-- Se tem delivery ou não-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label color=\"tertiary\">Tem delivery</ion-label>\r\n            <ion-toggle formControlName=\"have_delivery\" mode=\"ios\"></ion-toggle>\r\n          </ion-item>\r\n\r\n          <ion-item padding-horizontal *ngIf=\"form?.value?.have_delivery\">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Pedido mínimo</ion-label>\r\n            <money-input item-content [control]=\"form.controls['orderMin']\"></money-input>\r\n          </ion-item>\r\n\r\n          <div formGroupName=\"delivery\" *ngIf=\"form?.value?.have_delivery\">\r\n\r\n            <div>\r\n              <h5 ion-text text-center margin padding-top>\r\n                <strong>TAXA DE ENTREGA\r\n                  <span *ngIf=\"!form.value.deliveryByDistrict\">POR KM</span>\r\n                  <span *ngIf=\"form.value.deliveryByDistrict\">POR BAIRRO</span>\r\n                </strong>\r\n                <ion-button icon-only fill=\"clear\" (click)=\"changeDelivery()\">\r\n                  <ion-icon name=\"git-compare\"></ion-icon>\r\n                </ion-button>\r\n              </h5>\r\n\r\n              <div *ngIf=\"!form.value.deliveryByDistrict\">\r\n                <ion-item padding-horizontal>\r\n                  <ion-label position=\"stacked\" color=\"tertiary\">Distância máxima (Km)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"distanceMax\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item padding-horizontal>\r\n                  <ion-label position=\"stacked\" color=\"tertiary\">Valor por cada km (R$)</ion-label>\r\n                  <money-input item-content [control]=\"form.controls['delivery'].controls['fee']\"></money-input>\r\n                </ion-item>\r\n\r\n                <ion-item padding-horizontal>\r\n                  <ion-label position=\"stacked\" color=\"tertiary\">Menor valor (R$)</ion-label>\r\n                  <money-input item-content [control]=\"form.controls['delivery'].controls['feeMin']\"></money-input>\r\n                </ion-item>\r\n\r\n                <ion-item padding-horizontal>\r\n                  <ion-label position=\"stacked\" color=\"tertiary\">Maior valor (R$)</ion-label>\r\n                  <money-input item-content [control]=\"form.controls['delivery'].controls['feeMax']\"></money-input>\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"form.value.deliveryByDistrict\">\r\n                <ion-item padding-horizontal>\r\n                  <ion-label position=\"stacked\" color=\"tertiary\">Informe um bairro para entrega</ion-label>\r\n                </ion-item>\r\n                <div class=\"container-gps\">\r\n                  <div class=\"container-nanocomplete\">\r\n                    <nano-autocomplete padding-horizontal (updatePlace)=\"handleDistrict($event)\" [isDistrict]=\"true\"></nano-autocomplete>\r\n                  </div>\r\n                </div>\r\n                <div *ngFor=\"let deliveryDistrict of deliveryDistricts\" margin-left style=\"display: flex\">\r\n                  <ion-button icon-only fill=\"clear\" (click)=\"removeDistrict(deliveryDistrict)\">\r\n                    <ion-icon name=\"trash\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-badge class=\"badge-district\">{{deliveryDistrict.location.district}}</ion-badge>\r\n                  <money-input class=\"input-district\" [(number)]=\"deliveryDistrict.value\"></money-input>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <h5 ion-text text-center margin padding-top>\r\n              <strong>TEMPO DE ENTREGA</strong>\r\n            </h5>\r\n\r\n            <!-- Tempo de entrega -->\r\n            <ion-item padding-horizontal>\r\n              <ion-label position=\"stacked\" color=\"tertiary\">Tempo de entrega mínimo (em minutos)</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"timeMin\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item padding-horizontal>\r\n              <ion-label position=\"stacked\" color=\"tertiary\">Tempo de entrega máximo (em minutos)</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"timeMax\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <h5 ion-text text-center margin padding-top>\r\n            <strong>FORMA DE PAGAMENTO</strong>\r\n          </h5>\r\n\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Formas de pagamento permitidas *</ion-label>\r\n            <ion-select [(ngModel)]=\"paymentMethods\" multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\" [ngModelOptions]=\"{standalone: true}\">\r\n              <ion-select-option *ngFor=\"let type of typesPayment\" [value]=\"type.value\">{{type.text}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"hasCard()\" padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Bandeiras de cartões</ion-label>\r\n            <ion-select [(ngModel)]=\"cards\" multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\" [ngModelOptions]=\"{standalone: true}\">\r\n              <ion-select-option *ngFor=\"let card of cardsFlag\" [value]=\"card.value\">{{card.text}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"hasFoodStamps()\" padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Bandeiras de vales-alimentação</ion-label>\r\n            <ion-select [(ngModel)]=\"cards_food\" multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\" [ngModelOptions]=\"{standalone: true}\">\r\n              <ion-select-option *ngFor=\"let card of cardsFoodFlag\" [value]=\"card.value\">{{card.text}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n          <h5 ion-text text-center padding-top>\r\n            <strong>CATEGORIA *</strong>\r\n          </h5>\r\n          <ion-radio-group formControlName=\"type\">\r\n            <ion-item *ngFor=\"let type of filial_types; let i = index \">\r\n              <ion-label>{{type.name}}\r\n                <span ion-text color=\"medium\">{{type.description}}</span>\r\n              </ion-label>\r\n              <ion-radio [value]=\"type.value\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n          <h5 ion-text text-center padding-top *ngIf=\"FilialType.RESTAURANT === form.value.type\">\r\n            <strong>SUB CATEGORIA DE RESTAURANTE *</strong>\r\n          </h5>\r\n          <div *ngIf=\"FilialType.RESTAURANT === form.value.type\">\r\n            <ion-item *ngFor=\"let type of restaurant_subtypes; let i = index \">\r\n              <ion-label>{{type.name}}\r\n                <span ion-text color=\"medium\">{{type.description}}</span>\r\n              </ion-label>\r\n              <ion-checkbox [(ngModel)]=\"type.selected\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <h5 ion-text text-center padding-top>\r\n            <strong>HORÁRIOS DE FUNCIONAMENTO</strong>\r\n          </h5>\r\n          <p ion-text text-center>Horários em que o estabelecimento ficará aberto.</p>\r\n          <div *ngFor=\"let week of ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; let i = index\"\r\n            padding-horizontal>\r\n            <h6 ion-text>{{week}}: </h6>\r\n            <div class=\"flex flex-wrap\">\r\n              <card-hour-open [businesshours]=\"business_hours[i]\" (selected)=\"editIntervalHours(i, $event)\"></card-hour-open>\r\n              <ion-card class=\"card-hour\" tappable (click)=\"editIntervalHours(i)\">\r\n                <ion-icon name=\"ios-add-circle-outline\" color=\"primary\" class=\"add-interval\"></ion-icon>\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n\r\n          <h5 text-center margin padding-top>\r\n            <strong>ENDEREÇO</strong>\r\n          </h5>\r\n\r\n          <p ion-text color=\"tertiary\" padding-horizontal class=\"complete-address\">Endereço completo</p>\r\n          <div class=\"container-gps\" *ngIf=\"!loading\">\r\n            <div class=\"container-nanocomplete\">\r\n              <nano-autocomplete (updatePlace)=\"handlePlace($event)\"></nano-autocomplete>\r\n            </div>\r\n            <div class=\"button-gps\">\r\n              <ion-button fill=\"outline\" (click)=\"getCurrentPosition()\">Localização por GPS</ion-button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Localização -->\r\n          <nano-address [form]=\"form.controls['location']\" padding-horizontal></nano-address>\r\n\r\n          <nano-buttons [canSave]=\"form.valid && cardsValid()\" [save]=\"save.bind(this)\" [canRemove]=\"filial\" [cancel]=\"cancel.bind(this)\"\r\n            [remove]=\"remove.bind(this)\"></nano-buttons>\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/filial-edit.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-list {\n  color: var(--ion-color-dark-shade); }\n\n.text {\n  margin-top: 0px !important; }\n\n.phones col {\n  background-color: #fff !important; }\n\nion-content ion-select {\n  min-width: 15vw; }\n\nion-content .district-item {\n  display: flex; }\n\nion-content .district-item ion-icon {\n    margin-left: 10px;\n    line-height: normal; }\n\nion-content ion-searchbar {\n  margin-top: -2.2em;\n  margin-left: 8px; }\n\nion-content .container-gps {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap; }\n\nion-content .container-gps .container-nanocomplete {\n    width: calc(100% - 250px);\n    margin-right: 1em; }\n\n@media (max-width: 620px) {\n      ion-content .container-gps .container-nanocomplete {\n        width: 100% !important; } }\n\nion-content .container-gps .button-gps {\n    display: flex;\n    align-items: center; }\n\n@media (max-width: 620px) {\n      ion-content .container-gps .button-gps {\n        width: 100%;\n        text-align: center !important; } }\n\nion-content ion-select {\n  padding-left: 8px !important;\n  margin-right: 16px !important; }\n\n.complete-address {\n  color: var(--ion-color-tertiary); }\n\n.badge-district {\n  font-size: 1.1em;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  padding: 12px 12px;\n  min-width: 150px; }\n\n.input-district {\n  max-width: 150px;\n  margin-right: 5px;\n  margin-bottom: 5px; }\n\n@media (max-width: 420px) {\n    .input-district {\n      width: 100%;\n      text-align: center !important;\n      margin-right: 5px; } }\n\n.card-hour {\n  width: auto;\n  border-radius: 5px;\n  padding: 5px 10px;\n  display: inline-block;\n  text-align: center; }\n\n.card-hour.open {\n    background: var(--ion-color-success); }\n\n.card-hour.closed {\n    background: #d63231; }\n\n.card-hour .text {\n    font-weight: bold;\n    color: white; }\n\n.add-interval {\n  font-size: 42px; }\n"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/filial-edit.page.ts ***!
  \********************************************************************/
/*! exports provided: FilialEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialEditPage", function() { return FilialEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _util_money__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/money */ "./src/app/util/money.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _select_interval_hours_select_interval_hours_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-interval-hours/select-interval-hours.page */ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../util/global */ "./src/app/util/global.ts");
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


















var FilialEditPage = /** @class */ (function () {
    function FilialEditPage(navCtrl, shared, menuCtrl, money, system, placesProvider, loadingCtrl, alertCtrl, ref, route, modalCtrl) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.menuCtrl = menuCtrl;
        this.money = money;
        this.system = system;
        this.placesProvider = placesProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.ref = ref;
        this.route = route;
        this.modalCtrl = modalCtrl;
        /**
         * Carregando as informações da filial
         */
        this.loading = true;
        // districtsEnabled: {
        // 	value: string,
        // 	title: string,
        // 	state: string,
        // 	city: string
        // }[] = [];
        this.FilialType = _models_filial__WEBPACK_IMPORTED_MODULE_2__["FilialType"];
        this.filial_types = _models_filial__WEBPACK_IMPORTED_MODULE_2__["FILIAL_TYPES"];
        this.index_current_subtypes = [];
        this.restaurant_subtypes = JSON.parse(JSON.stringify(_models_filial__WEBPACK_IMPORTED_MODULE_2__["RESTAURANT_SUBTYPES"]));
        this.cardsFlag = _models_filial__WEBPACK_IMPORTED_MODULE_2__["CARDS"];
        this.cardsFoodFlag = _models_filial__WEBPACK_IMPORTED_MODULE_2__["CARDS_FOOD"];
        this.typesPayment = [
            {
                value: _models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].credit_card,
                text: 'CRÉDITO'
            },
            {
                value: _models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].debit_card,
                text: 'DÉBITO'
            },
            {
                value: _models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].money,
                text: 'DINHEIRO'
            },
            {
                value: _models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].food_stamps,
                text: 'VALE-ALIMENTAÇÃO'
            }
        ];
        //Devem ser salvo na filial
        this.paymentMethods = [];
        this.cards = [];
        this.cards_food = [];
        this.business_hours = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        };
        this.deliveryDistricts = [];
    }
    FilialEditPage.prototype.ngOnInit = function () {
        this.initForm();
        this.load();
        this.menuCtrl.enable(true);
    };
    Object.defineProperty(FilialEditPage.prototype, "isTEAM", {
        get: function () {
            return this.shared.isTeam;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inicializar formulário
     */
    FilialEditPage.prototype.initForm = function () {
        var _this = this;
        var defaultTax = _util_global__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_FACILITA_FEE"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            deliveryByDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cover: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            have_delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                feeMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                feeMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                distanceMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                timeMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                timeMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            }),
            orderMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                to_facilita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](defaultTax)
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            }),
            stateSelected: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            citySelected: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            districtSelected: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.form.valueChanges.subscribe(function () {
            _this.ref.detectChanges();
        });
    };
    /**
     * Carregar restaurante e filial.
     * Atribuir os valores ao formulário
     */
    FilialEditPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (params) {
            if (_this.shared.isManager)
                return _this.shared.company$;
            else if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_13__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
        }));
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([
            company$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (company) {
                _this.company = company;
                if (!company) {
                    console.error("Sem empresa");
                    //this.navCtrl.setRoot(HomePage)
                    return;
                }
            })),
            filial$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (filial) {
                _this.filial = filial;
                console.log("Filial", _this.filial);
                //NA EDIÇÃO DE FILIAL
                if (_this.filial) {
                    if (_this.filial.deliveryDistricts) {
                        _this.deliveryDistricts = _this.filial.deliveryDistricts;
                    }
                    //Settar bandeiras de cartões na edição de filial
                    if (_this.filial.cards) {
                        _this.cards = _this.filial.cards;
                    }
                    //Settar métodos de pagamentos na edição da filial
                    if (_this.filial.paymentMethods) {
                        _this.paymentMethods = _this.filial.paymentMethods;
                    }
                    //Settar cartões de vales-alimentação na edição da filial
                    if (_this.filial.cards_food) {
                        _this.cards_food = _this.filial.cards_food;
                    }
                    // Settar os horários de funcionamento
                    if (_this.filial.business_hours) {
                        _this.business_hours = _this.filial.business_hours;
                    }
                    //Settar Tipo da filial
                    if (_this.filial.type === _models_filial__WEBPACK_IMPORTED_MODULE_2__["FilialType"].RESTAURANT && _this.filial.subtypes) {
                        _this.restaurant_subtypes.forEach(function (element) {
                            element.selected = false;
                            for (var _i = 0, _a = _this.filial.subtypes; _i < _a.length; _i++) {
                                var st = _a[_i];
                                if (element.name === st.name) {
                                    element.selected = true;
                                }
                            }
                        });
                    }
                    _this.form.patchValue(_this.filial);
                }
            }))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function () {
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    FilialEditPage.prototype.changeDelivery = function () {
        var obj = {
            deliveryByDistrict: !this.form.value.deliveryByDistrict
        };
        this.form.patchValue(obj);
    };
    FilialEditPage.prototype.removeDistrict = function (deliveryDistrict) {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Remoção de bairro',
                            message: "Voc\u00EA tem certeza que gostaria de remover o bairro " + deliveryDistrict.location.district + "?",
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () {
                                        var index = _this.deliveryDistricts.indexOf(deliveryDistrict);
                                        _this.deliveryDistricts.splice(index, 1);
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
    /**
     * Observable que cria/edita uma filial
     */
    FilialEditPage.prototype.save = function () {
        var _this = this;
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_9__["setLongitudeLatitude"])(this.form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(function () {
            var filialObject = {};
            filialObject.active = true;
            filialObject = _this.form.value;
            //Salvar bairros de entrega e seus respectivos valores de delivery
            if (_this.form.value.deliveryByDistrict && _this.deliveryDistricts) {
                //Salvar os valores de delivery de cada bairro como número no DB
                _this.deliveryDistricts.forEach(function (delivery) {
                    delivery.value = Number(String(delivery.value).replace(',', '.'));
                });
                filialObject.deliveryDistricts = _this.deliveryDistricts;
            }
            console.log(filialObject);
            if (filialObject.have_delivery) {
                if (!filialObject.deliveryByDistrict) {
                    if (!filialObject.delivery.feeMin)
                        filialObject.delivery.feeMin = 0;
                    if (!filialObject.delivery.feeMax)
                        filialObject.delivery.feeMax = 0;
                }
                else {
                    if (!filialObject.deliveryDistricts || filialObject.deliveryDistricts.length < 1) {
                        throw Error("Você precisa definir pelo menos um bairro para entrega");
                    }
                }
            }
            //Formas de pagamento aceitas pela filial
            if (_this.paymentMethods) {
                filialObject.paymentMethods = _this.paymentMethods;
            }
            //Bandeiras aceitas pela filial
            if (_this.cards) {
                filialObject.cards = _this.cards;
            }
            // Horários de funcionamento
            if (_this.business_hours) {
                filialObject.business_hours = _this.business_hours;
            }
            //Bandeiras de vales-alimentação
            if (_this.cards_food) {
                filialObject.cards_food = _this.cards_food;
            }
            // Ajustar geopoint para ser usado em consultas
            if (filialObject.location && filialObject.location.latitude && filialObject.location.longitude) {
                filialObject.location.geopoint = new firebase__WEBPACK_IMPORTED_MODULE_15__["firestore"].GeoPoint(filialObject.location.latitude, filialObject.location.longitude);
            }
            filialObject.subtypes = _this.restaurant_subtypes.filter(function (subtype) { return subtype.selected; });
            //Editar filial existente
            if (_this.filial) {
                return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].update(_this.filial.id, filialObject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
                    _this.goToFilialList();
                }));
            }
            //Adicionar nova filial
            else {
                return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].add(filialObject, [
                    {
                        relationship: _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].company,
                        id: _this.company.id
                    }
                ])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
                    _this.goToFilialList();
                }));
            }
        }));
    };
    /**
     * Remove produto do database
     */
    FilialEditPage.prototype.remove = function () {
        var _this = this;
        if (!this.filial)
            return;
        //Verificar se a filial possui funcionários antes de remover
        return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].user_employees.list(this.filial.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (objs) { return objs.map(function (obj) { return obj.id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (keys) {
            if (keys && keys.length > 0) {
                throw Error("A filial que possui funcionários não pode ser removida");
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(function () {
            //Obter todos os ID's dos relacionamento product_stock
            return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].product_stock.listRelation(_this.filial.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (objs) { return objs.map(function (obj) { return obj.id; }); }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(function (ids) {
                var relationships = [];
                //Adicionar o relacionamento 11 com uma empresa
                relationships.push({
                    relationship: _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].company,
                    removeId: _this.filial.company.id
                });
                //Adicionar todos os relacionamentos com o menu para ser removidos bidirecionalmente
                ids.forEach(function (id) {
                    relationships.push({
                        relationship: _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].product_stock,
                        removeId: id
                    });
                });
                return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].remove(_this.filial.id, relationships);
            }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
            _this.goToFilialList();
        }));
    };
    /**
     * Verifica se em um array de intervalos existe um intervalo dentro do outro. Se existir, une eles.
     * @param intervals Array de intervalos
     */
    FilialEditPage.prototype.mergeIntervals = function (intervals) {
        for (var i = 0; i < intervals.length; i++) {
            for (var j = i + 1; j < intervals.length; j++) {
                if (intervals[i].start >= intervals[j].start && intervals[i].start <= intervals[j].end ||
                    intervals[i].end <= intervals[j].end && intervals[i].end >= intervals[j].start ||
                    intervals[j].start >= intervals[i].start && intervals[j].start <= intervals[i].end ||
                    intervals[j].end <= intervals[i].end && intervals[j].end >= intervals[i].start) {
                    if (intervals[j].start < intervals[i].start) {
                        intervals[i].start = intervals[j].start;
                    }
                    if (intervals[j].end > intervals[i].end) {
                        intervals[i].end = intervals[j].end;
                    }
                    intervals.splice(j, 1);
                    return this.mergeIntervals(intervals);
                }
            }
        }
        return intervals;
    };
    /**
     * Realiza a edição de um intervalo ou cria um novo intervalo.
     * @param week Dia da semana
     * @param id Id no array de intervalos se for edição de intervalo
   * @todo COMO CRIAR MODAL
     */
    FilialEditPage.prototype.editIntervalHours = function (week, id) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _select_interval_hours_select_interval_hours_page__WEBPACK_IMPORTED_MODULE_14__["SelectIntervalHoursPage"],
                            componentProps: {
                                interval: id !== undefined ? this.business_hours[week][id] : undefined
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            if (id !== undefined)
                                this.business_hours[week].splice(id, 1);
                            if (data.open) {
                                this.business_hours[week].push(data);
                                this.business_hours[week] = this.mergeIntervals(this.business_hours[week]);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FilialEditPage.prototype.getCurrentPosition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.placesProvider.getCurrentLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).subscribe(function (location) {
                            location.isGps = true;
                            var loc = {};
                            loc.location = location;
                            _this.form.patchValue(loc);
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
    FilialEditPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    FilialEditPage.prototype.hasFoodStamps = function () {
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_9__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].food_stamps, this.paymentMethods);
    };
    FilialEditPage.prototype.hasCard = function () {
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_9__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].credit_card, this.paymentMethods) || Object(_util_util__WEBPACK_IMPORTED_MODULE_9__["elementIsInsideArray"])(_models_order__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"].debit_card, this.paymentMethods);
    };
    FilialEditPage.prototype.amountFeeMinChange = function (valor) {
        this.form.patchValue({ delivery: { feeMin: this.money.detectAmount(valor) } });
    };
    FilialEditPage.prototype.amountFeeChange = function (valor) {
        this.form.patchValue({ delivery: { fee: this.money.detectAmount(valor) } });
    };
    FilialEditPage.prototype.amountFeeMaxChange = function (valor) {
        this.form.patchValue({ delivery: { feeMax: this.money.detectAmount(valor) } });
    };
    FilialEditPage.prototype.handlePlace = function (location) {
        var loc = {};
        loc.location = location;
        this.form.patchValue(loc);
    };
    FilialEditPage.prototype.handleDistrict = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var districtExist, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        districtExist = false;
                        this.deliveryDistricts.forEach(function (delivery) {
                            if (delivery.location.city == location.city && delivery.location.district == location.district) {
                                districtExist = true;
                                return;
                            }
                        });
                        if (!districtExist) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Ops!',
                                subHeader: 'Bairro já cadastrado!',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [2 /*return*/];
                    case 2:
                        this.deliveryDistricts.push({
                            location: location,
                            value: 0.0
                        });
                        //Recalcula os elemntos da view (detectando as alterações no array)
                        this.ref.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilialEditPage.prototype.goToFilialList = function () {
        this.navCtrl.navigateRoot(['filial/list', { company_id: this.company.id }]);
    };
    /**
     * Cancela a edição/criação
     */
    FilialEditPage.prototype.cancel = function () {
        this.goToFilialList();
    };
    FilialEditPage.prototype.cardsValid = function () {
        return ((this.hasCard() ? !!this.cards[0] : true) &&
            (this.hasFoodStamps() ? !!this.cards_food[0] : true));
    };
    FilialEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filial-edit',
            template: __webpack_require__(/*! ./filial-edit.page.html */ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.html"),
            styles: [__webpack_require__(/*! ./filial-edit.page.scss */ "./src/app/panel/pages/filial/filial-edit/filial-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _util_money__WEBPACK_IMPORTED_MODULE_6__["Money"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_8__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], FilialEditPage);
    return FilialEditPage;
}());



/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Intervalo de tempo</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content padding class=\"form-content\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Hora inicial</ion-label>\r\n      <ion-select [(ngModel)]=\"interval.start\">\r\n        <ion-select-option *ngFor=\"let hour of HOURS\" [value]=\"hour\">{{hour}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Hora final</ion-label>\r\n      <ion-select [(ngModel)]=\"interval.end\">\r\n        <ion-select-option *ngFor=\"let hour of HOURS\" [value]=\"hour\">{{hour}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <p ion-text text-center color=\"primary\" *ngIf=\"check_invalid_interval\">A hora final deve ser após a hora inicial</p>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <nano-buttons [canSave]=\"valid\" [save]=\"success.bind(this)\" [canRemove]=\"canRemove\" [remove]=\"remove.bind(this)\"\r\n    [cancel]=\"dismiss.bind(this)\"></nano-buttons>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: var(--ion-color-light); }\n"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: SelectIntervalHoursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectIntervalHoursPage", function() { return SelectIntervalHoursPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectIntervalHoursPage = /** @class */ (function () {
    function SelectIntervalHoursPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.HOURS = HALF_HOURS;
        this.canRemove = false;
    }
    SelectIntervalHoursPage.prototype.ngOnInit = function () {
        if (this.interval) {
            this.canRemove = true;
        }
        else {
            this.interval = {
                start: "",
                end: "",
                open: true
            };
        }
    };
    SelectIntervalHoursPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    /**
     * passa o booleano open como false para que façam a remoção desse intervalo
     */
    SelectIntervalHoursPage.prototype.remove = function () {
        this.interval.open = false;
        this.modalCtrl.dismiss(this.interval);
    };
    SelectIntervalHoursPage.prototype.success = function () {
        this.modalCtrl.dismiss(this.interval);
    };
    Object.defineProperty(SelectIntervalHoursPage.prototype, "check_invalid_interval", {
        /**
         * Verifica se foi selecionado um Horário de fim antes do Horário de inicio
         */
        get: function () {
            return this.interval.start && this.interval.end && this.interval.end <= this.interval.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectIntervalHoursPage.prototype, "valid", {
        /**
         * Verifica se foram selecionados e se o intervalo está correto
         */
        get: function () {
            return this.interval.start && this.interval.end && this.interval.start < this.interval.end;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectIntervalHoursPage.prototype, "interval", void 0);
    SelectIntervalHoursPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-interval-hours',
            template: __webpack_require__(/*! ./select-interval-hours.page.html */ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.html"),
            styles: [__webpack_require__(/*! ./select-interval-hours.page.scss */ "./src/app/panel/pages/filial/filial-edit/select-interval-hours/select-interval-hours.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], SelectIntervalHoursPage);
    return SelectIntervalHoursPage;
}());

var HALF_HOURS = [
    "00:00", "00:30", "01:00", "01:30",
    "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30",
    "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30", "23:00", "23:30",
    "24:00"
];


/***/ }),

/***/ "./src/app/util/global.ts":
/*!********************************!*\
  !*** ./src/app/util/global.ts ***!
  \********************************/
/*! exports provided: DEFAULT_FACILITA_FEE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FACILITA_FEE", function() { return DEFAULT_FACILITA_FEE; });
/**
 * Porcentagem padrão do consumo que é convertido em dinheiro para o facilita
 */
var DEFAULT_FACILITA_FEE = 0.08;


/***/ })

}]);
//# sourceMappingURL=panel-pages-filial-filial-edit-filial-edit-module.js.map