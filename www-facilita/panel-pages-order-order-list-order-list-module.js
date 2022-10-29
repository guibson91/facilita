(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-order-order-list-order-list-module"],{

/***/ "./src/app/panel/pages/order/order-list/order-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/order/order-list/order-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-list.page */ "./src/app/panel/pages/order/order-list/order-list.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _order_detail_order_detail_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../order-detail/order-detail.module */ "./src/app/panel/pages/order/order-detail/order-detail.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderListPage"]
    }
];
var OrderListPageModule = /** @class */ (function () {
    function OrderListPageModule() {
    }
    OrderListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_7__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_9__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _order_detail_order_detail_module__WEBPACK_IMPORTED_MODULE_11__["OrderDetailPageModule"]
            ],
            declarations: [
                _order_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderListPage"]
            ]
        })
    ], OrderListPageModule);
    return OrderListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/order/order-list/order-list.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/order/order-list/order-list.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Pedidos\" icon=\"menus-icon-list\">\r\n  </nano-navbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <div scrollX=\"true\">\r\n      <ion-segment [(ngModel)]=\"segment_value\" class=\"segment\" (ionChange)=\"change()\">\r\n        <ion-segment-button [value]=\"'all'\">\r\n          <h4>Todos</h4>\r\n        </ion-segment-button>\r\n        <ion-segment-button [value]=\"orderStatus.created\">\r\n          <h4>Solicitado</h4>\r\n        </ion-segment-button>\r\n        <ion-segment-button [value]=\"orderStatus.accepted\">\r\n          <h4>Aceito</h4>\r\n        </ion-segment-button>\r\n        <ion-segment-button [value]=\"orderStatus.delivery\">\r\n          <h4>Entrega</h4>\r\n        </ion-segment-button>\r\n        <ion-segment-button [value]=\"orderStatus.done\">\r\n          <h4>Concluído</h4>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <card-filial-open></card-filial-open>\r\n  <ion-card class=\"content-card\" margin>\r\n    <div class=\"search-order-list\">\r\n      <ion-searchbar [(ngModel)]=\"input_search\" (ionChange)=\"change()\" placeholder=\"Filtrar pelo cliente ou filial\">\r\n      </ion-searchbar>\r\n      <ion-item class=\"date-filter\">\r\n\r\n        <ion-label stacked class=\"label-date\">Data\r\n          <div class=\"filter-dates-modes\">\r\n            <p (click)=\"changeModeFilterDate('day')\" [ngClass]=\"{'active-mode-filter-date': modeFilterDate == 'day'}\"\r\n              padding-horizontal>\r\n              <strong>Dia</strong>\r\n            </p>\r\n            <p (click)=\"changeModeFilterDate('month')\" [ngClass]=\" { 'active-mode-filter-date': modeFilterDate=='month' }\"\r\n              class=\"mode-filter-month\">\r\n              <strong>Mês</strong>\r\n            </p>\r\n          </div>\r\n        </ion-label>\r\n\r\n        <ion-datetime *ngIf=\"modeFilterDate == 'month'\" displayFormat=\"MM/YYYY\" [(ngModel)]=\"dateInput\" (ionChange)=\"changeOrders()\"></ion-datetime>\r\n        <ion-datetime *ngIf=\"modeFilterDate == 'day'\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"dateInput\" (ionChange)=\"changeOrders()\"></ion-datetime>\r\n      </ion-item>\r\n    </div>\r\n    <ion-list>\r\n      <div *ngFor=\"let order of orders | filterBy:['status']:( segment_value == 'all' ? null : segment_value ) |\r\n               filterBy:[ 'payment_method', 'user_full.name', 'filial_full.name', 'code', 'user_full?.phone']: input_search ; let i = index\"\r\n        class=\"order\" padding>\r\n        <h6>\r\n          <span *ngIf=\"order.code\"><strong>Código: </strong>{{order.code}} </span>\r\n          <span *ngIf=\"order.filial_full?.name\"><strong>Filial: </strong>{{order.filial_full?.name}} </span>\r\n          <span *ngIf=\"order.user_full?.phone\"><strong>Phone: </strong>\r\n            <ion-icon class=\"icon-phone\" name=\"md-call\" item-start></ion-icon>{{order.user_full.phone}}\r\n          </span>\r\n          <span *ngIf=\"order.user_full?.name\"><strong>Cliente: </strong>{{order.user_full?.name}} </span>\r\n          <ion-button style=\"padding-top: 5px\" color=\"danger\" fill=\"clear\" (click)=\"reportUser(order.user_full)\" class=\"button-alert\">\r\n            <ion-icon name=\"alert\"></ion-icon> denunciar cliente\r\n          </ion-button>\r\n        </h6>\r\n        <div class=\"infos\">\r\n          <div class=\"entry\">\r\n            <p *ngFor=\"let entry of order.entries\">\r\n              {{entry.quantity}}x {{entry.product.name}}\r\n            </p>\r\n            <ion-button fill=\"clear\" (click)=\"presentModal(order)\" class=\"more\" expand=\"block\">Mais detalhes</ion-button>\r\n          </div>\r\n          <div class=\"delivery\">\r\n            <p text-wrap no-margin><strong>Endereço de entrega:</strong></p>\r\n            <p text-wrap no-margin>\r\n              {{order.location?.district || \"sem bairro\"}}, {{order.location?.city || \"sem cidade\"}} -\r\n              {{order.location?.state_short || \"sem estado\"}}\r\n            </p>\r\n            <p *ngIf=\"order?.location?.street && order?.location?.number\" text-wrap no-margin>\r\n              {{order.location.street}}, {{order.location.number}}.\r\n            </p>\r\n            <p *ngIf=\"order?.location?.complement\" text-wrap no-margin>\r\n              <strong>Complemento: </strong>{{order.location.complement}}\r\n            </p>\r\n            <p *ngIf=\"order?.location?.landmark\" text-wrap no-margin>\r\n              <strong>Ponto de referência: </strong>{{order.location.landmark}}\r\n            </p>\r\n            <p text-wrap class=\"total\">\r\n              <b>Total:</b> {{order.price.subtotal + order.price.delivery - ( order.price.discounts\r\n              || 0 ) | noNegative | currency:'BRL':'symbol':'1.2'}}</p>\r\n            <p text-wrap no-margin>\r\n              <b>Forma de pagamento:</b>\r\n              <span [ngSwitch]=\"order.payment_method\">\r\n                <span *ngSwitchCase=\"'debit_card'\">\r\n                  Débito\r\n                  <span> | {{order.payment_cardType}} </span>\r\n                </span>\r\n                <span *ngSwitchCase=\"'credit_card'\">\r\n                  Crédito\r\n                  <span> | {{order.payment_cardType}} </span>\r\n                </span>\r\n                <span *ngSwitchCase=\"'money'\">\r\n                  Dinheiro\r\n                  <span *ngIf=\"order.change\">, troco para: {{order.change | number: '1.2-2'}} </span>\r\n                </span>\r\n                <span *ngSwitchCase=\"'food_stamps'\">\r\n                  Vale-Alimentação\r\n                  <span> | {{order.payment_cardType}} </span>\r\n                </span>\r\n                <span *ngSwitchDefault>Outro</span>\r\n              </span>\r\n            </p>\r\n          </div>\r\n          <div class=\"status-box\">\r\n            <!-- <p>{{order.created_at | date:'HH:mm'}}</p> -->\r\n            <!-- <p class=\"label-day\">{{getLabelDay(order.created_at | date:'dd/MM/yyyy')}}</p> -->\r\n            <p class=\"label-day\">Aberto {{order.created_at | timestampToDate | amTimeAgo}}</p>\r\n            <div *ngIf=\"order.status === orderStatus.created\">\r\n              <p class=\"status\" style=\"color: #f1c40f\">Solicitado</p>\r\n              <p>Você deseja aceitar ou recusar o pedido?</p>\r\n              <div class=\"status-buttons\">\r\n                <ion-button (click)=\"changeStatus(order)\" color=\"success\">Aceitar</ion-button>\r\n                <ion-button (click)=\"refusedChangeStatus(order)\" color=\"danger\">Recusar</ion-button>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.accepted\">\r\n              <p class=\"status\" style=\"color: #2196F3\">Aceito</p>\r\n              <p>O pedido já saiu para entrega?</p>\r\n              <ion-button (click)=\"changeStatus(order)\" color=\"facebook\">Saiu para entrega</ion-button>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.delivery\">\r\n              <p class=\"status\" style=\"color: #2bde9f\">Saiu para Entrega</p>\r\n              <p>O cliente já recebeu o pedido?</p>\r\n              <ion-button (click)=\"changeStatus(order)\" color=\"success\">Concluir</ion-button>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.done\">\r\n              <p class=\"status\" style=\"color: rgb(117, 170, 57)\">Concluído</p>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.refused\">\r\n              <p class=\"status\" style=\"color: #bf0500\">Recusado</p>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.away\">\r\n              <p class=\"status\" style=\"color: #bf0500\">Pedido expirou</p>\r\n            </div>\r\n            <div *ngIf=\"order.status === orderStatus.incomplete\">\r\n              <p class=\"status\" style=\"color: #bf0500\">Pedido incompleto</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-item text-center padding *ngIf=\"!loading\" class=\"noOrders\">\r\n        <p ion-text>Você ainda não possui nenhum pedido</p>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item text-center *ngIf=\"loading\">\r\n      <ion-spinner></ion-spinner>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/order/order-list/order-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/order/order-list/order-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card.content-card {\n  margin: 10px !important; }\n\n.toolbar {\n  padding: 0; }\n\nion-scroll {\n  height: 60px; }\n\nion-scroll .scroll-content {\n    padding: 18px 0 !important; }\n\nion-scroll .segment {\n    display: block;\n    white-space: nowrap;\n    font-size: 0;\n    overflow: auto; }\n\nion-scroll .segment::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n      display: none; }\n\nion-scroll .segment ion-segment-button.segment-button {\n      display: inline-block;\n      min-width: 100px;\n      padding: 0 25px;\n      width: auto;\n      color: #fff;\n      border-bottom-color: transparent; }\n\nion-scroll .segment ion-segment-button.segment-button h4 {\n        padding-top: 10px;\n        font-size: 16px;\n        font-weight: bold;\n        margin: 0; }\n\nion-scroll .segment ion-segment-button.segment-button.segment-activated {\n        border-color: #fff; }\n\n.button-alert {\n  font-size: 10px;\n  margin-top: -0.8em; }\n\n.noOrders {\n  display: none; }\n\n.noOrders:first-child {\n    display: block !important; }\n\n.date-filter {\n  width: 300px; }\n\n@media (max-width: 420px) {\n    .date-filter {\n      width: 100%; } }\n\n.date-filter .item-inner {\n    border-bottom: 1px solid var(--ion-color-primary) !important; }\n\n.date-filter .label-date {\n    display: flex;\n    justify-content: space-between; }\n\n.date-filter .label-date .filter-dates-modes {\n      z-index: 999;\n      display: flex !important; }\n\n.date-filter .label-date .filter-dates-modes p {\n        margin: 0px; }\n\n.date-filter .label-date .filter-dates-modes p:hover {\n          cursor: pointer; }\n\n.date-filter .label-date .filter-dates-modes p.mode-filter-month {\n          margin-left: 5px !important; }\n\n.date-filter .label-date .filter-dates-modes p.active-mode-filter-date {\n          color: var(--ion-color-primary) !important; }\n\n@media (max-width: 420px) {\n  .content-card {\n    margin: 10px !important; } }\n\n.search-order-list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  border-bottom: solid 2px #dddddd; }\n\n.search-order-list ion-item {\n    padding-bottom: 5px; }\n\n.search-order-list .datetime-md {\n    padding: 7px 8px 7px 0px !important; }\n\n.search-order-list ion-searchbar {\n    border-bottom: solid 0px transparent !important;\n    height: 73px;\n    width: 70%;\n    min-width: 330px; }\n\n@media (max-width: 500px) {\n      .search-order-list ion-searchbar {\n        width: 100%; } }\n\n.search-order-list .date-filter {\n    width: 30%; }\n\n@media (max-width: 520px) {\n      .search-order-list .date-filter {\n        width: 100%; } }\n\n.searchbar-input {\n  padding-right: 6px !important; }\n\n.order {\n  border-bottom: 1px solid lightgrey; }\n\n.order h2 span {\n    margin-right: 20px; }\n\n@media (max-width: 420px) {\n    .order .info-order {\n      display: flex;\n      flex-direction: column; } }\n\n.order .more {\n    text-align: left !important;\n    cursor: pointer;\n    color: var(--ion-color-primary);\n    width: auto !important;\n    margin-left: -5px; }\n\n@media (max-width: 625px) {\n    .order .more {\n      margin: 0 auto;\n      margin-top: 8px; } }\n\n.order .infos {\n    display: flex; }\n\n@media (max-width: 625px) {\n      .order .infos {\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between; }\n        .order .infos .datetime-md {\n          padding: 2px 8px 5px 0px !important; } }\n\n.order .infos .entry {\n      width: 35%; }\n\n@media (max-width: 625px) {\n        .order .infos .entry {\n          width: 100% !important;\n          max-width: 100%; } }\n\n.order .infos .delivery {\n      width: 36.69%; }\n\n@media (max-width: 625px) {\n        .order .infos .delivery {\n          width: 100% !important;\n          max-width: 100%; } }\n\n@media (max-width: 625px) {\n        .order .infos .delivery .phone {\n          width: 100%;\n          text-align: center;\n          display: inline-block;\n          margin: 0; } }\n\n.order .infos .delivery .total {\n        margin-top: 10px; }\n\n.order .infos .status-box {\n      width: 27.3%; }\n\n@media (max-width: 625px) {\n        .order .infos .status-box {\n          width: 100% !important;\n          max-width: 100%; } }\n\n.order .infos .status-box .status {\n        font-size: 1.3em;\n        font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/panel/pages/order/order-list/order-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/panel/pages/order/order-list/order-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _order_detail_order_detail_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../order-detail/order-detail.page */ "./src/app/panel/pages/order/order-detail/order-detail.page.ts");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
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
















//Definindo calendário (pipe amCalendar)
moment__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]('pt-br', {
    calendar: {
        lastDay: '[Ontem]',
        sameDay: '[Hoje]',
        nextDay: '[Amanhã]',
        lastWeek: 'dddd',
        nextWeek: '[Próxima] dddd',
        sameElse: 'DD/MM/YYYY'
    }
});
var OrderListPage = /** @class */ (function () {
    function OrderListPage(navCtrl, authentication, shared, menuCtrl, system, alertCtrl, modalCtrl, loadingCtrl, toastCtrl, ref, route) {
        this.navCtrl = navCtrl;
        this.authentication = authentication;
        this.shared = shared;
        this.menuCtrl = menuCtrl;
        this.system = system;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.ref = ref;
        this.route = route;
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Verifica se existe pediddos
         */
        this.existsOrders = true;
        this.dateInput = moment__WEBPACK_IMPORTED_MODULE_1__().format();
        /**
         * Data para filtrar os pedidos
         */
        this.dateStart = new Date();
        /**
         * Valor do Segmento selecionado
         */
        this.segment_value = 'all';
    }
    Object.defineProperty(OrderListPage.prototype, "orderStatus", {
        // segment_value: any
        /**
         * Referência dos tipos de status do pedido para ser usado no HTML.
         */
        get: function () {
            return _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inicializando estruturas após entrar na página.
     */
    OrderListPage.prototype.ngOnInit = function () {
        this.modeFilterDate = 'day';
        this.dateFilter(this.dateStart);
        this.menuCtrl.enable(true);
        this.load();
    };
    OrderListPage.prototype.ngOnDestroy = function () {
        if (this.ordersSubscription)
            this.ordersSubscription.unsubscribe();
    };
    OrderListPage.prototype.change = function () {
        this.ref.detectChanges();
    };
    /**
     * Carrega a lista da página
     */
    OrderListPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsOrders = true;
        if (this.ordersSubscription)
            this.ordersSubscription.unsubscribe();
        this.ordersSubscription = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"].object(params.get('company_id'));
            else if (_this.shared.isManager || _this.shared.isFilialManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (company) {
            //GERENTE GERAL
            /**
             * @todo fix permissões
             */
            if (_this.shared.isManager || _this.shared.isTeam) {
                var obj$ = void 0;
                if (_this.shared.isManager || company) {
                    obj$ = _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"].orders.list(company.id, [
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }, {
                            name: "status"
                        }
                    ]);
                }
                else { // Deve ser perfil de TEAM
                    obj$ = _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].list([
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }, {
                            name: "status"
                        }
                    ]);
                }
                return obj$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function (orders) {
                    if (!orders || orders.length <= 0)
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(orders.map(function (order) { return _models_user__WEBPACK_IMPORTED_MODULE_11__["User"].object(order.user.id); }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (users) {
                        for (var i = 0; i < users.length; i++) {
                            orders[i].user_full = users[i];
                        }
                        return orders;
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function (orders) {
                        if (!orders || orders.length <= 0)
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(orders.map(function (order) { return _models_filial__WEBPACK_IMPORTED_MODULE_12__["Filial"].object(order.filial.id); }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (filials) {
                            for (var i = 0; i < filials.length; i++) {
                                orders[i].filial_full = filials[i];
                            }
                            return orders;
                        }));
                    }));
                }));
            }
            //GERENTE DE FILIAL
            else if (_this.shared.isFilialManager) {
                return _this.shared.filial$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (filial) {
                    return _models_filial__WEBPACK_IMPORTED_MODULE_12__["Filial"].orders.list(filial.id, [
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }, {
                            name: "status"
                        }
                    ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(function (orders) {
                        if (!orders || orders.length <= 0)
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(orders.map(function (order) { return _models_user__WEBPACK_IMPORTED_MODULE_11__["User"].object(order.user.id); }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (users) {
                            for (var i = 0; i < users.length; i++) {
                                orders[i].user_full = users[i];
                                orders[i].filial_full = filial;
                            }
                            return orders;
                        }));
                    }));
                }));
            }
            else {
                var error = Error("Página de pedidos só pode ser acessada por Gerente Geral, Gerente de Filial ou TEAM");
                _this.system.showErrorAlert(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }))
            .subscribe(function (orders) {
            if (!orders || orders.length <= 0)
                _this.existsOrders = false;
            else
                _this.existsOrders = true;
            console.log("Pedidos", orders);
            _this.orders = orders || [];
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.orders = [];
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    /**
     * Denunciar usuário
     */
    OrderListPage.prototype.reportUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Denunciar usuário',
                            message: "Voc\u00EA tem certeza que deseja abrir uma den\u00FAncia contra o " + user.name + "? Voc\u00EA s\u00F3 deve fazer isso caso o usu\u00E1rio tenha agido de m\u00E1 f\u00E9 ao realizar o pedido.",
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var prompt;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                        header: 'Qual o motivo da denúncia?',
                                                        inputs: [
                                                            {
                                                                name: 'reason',
                                                                placeholder: 'Descreva o que aconteceu...'
                                                            },
                                                        ],
                                                        buttons: [
                                                            {
                                                                text: 'Cancelar'
                                                            },
                                                            {
                                                                text: 'Confirmar',
                                                                handler: function (data) {
                                                                    if (!user.denunciations) {
                                                                        user.denunciations = [];
                                                                        user.hasDenunciation = true;
                                                                    }
                                                                    user.denunciations.push(data.reason);
                                                                    var userObj = {};
                                                                    userObj.denunciations = user.denunciations;
                                                                    _models_user__WEBPACK_IMPORTED_MODULE_11__["User"].update(user.id, userObj).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                                                        var toast;
                                                                        return __generator(this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                                                        message: 'Sua denúncia foi encaminhada com sucesso',
                                                                                        duration: 1500
                                                                                    })];
                                                                                case 1:
                                                                                    toast = _a.sent();
                                                                                    toast.present();
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); });
                                                                }
                                                            }
                                                        ]
                                                    })];
                                                case 1:
                                                    prompt = _a.sent();
                                                    prompt.present();
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
    OrderListPage.prototype.refusedChangeStatus = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Tem certeza que deseja cancelar o pedido?',
                            inputs: [{
                                    name: 'reason',
                                    placeholder: 'Por favor, informe o motivo.',
                                    type: 'text',
                                }],
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function (data) {
                                        _this.changeStatus(order, false, data.reason);
                                    }
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
    /**
     * Altera o status do pedido
     */
    OrderListPage.prototype.changeStatus = function (order, refused, reason) {
        return __awaiter(this, void 0, void 0, function () {
            var text, new_status, alert_1, alert_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_status = {};
                        if (refused === false) {
                            // new_status.status = OrderStatus.refused;
                            // new_status.refused_at = new Date()
                            // updateObject.new_status = new_status;
                            // text = "Confirma alterar status para RECUSADO?";
                            _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].update(order.id, {
                                cancellation_reason: reason,
                                status: _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].refused,
                                refused_at: firebase__WEBPACK_IMPORTED_MODULE_13__["firestore"].FieldValue.serverTimestamp()
                            }).subscribe(function (res) {
                            }, function (error) {
                                console.error("Deu errado", error);
                            });
                            return [2 /*return*/];
                        }
                        else if (order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].delivery) {
                            new_status.status = _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].done;
                            new_status.done_at = firebase__WEBPACK_IMPORTED_MODULE_13__["firestore"].FieldValue.serverTimestamp();
                            text = "Confirma alterar status para CONCLUÍDO?";
                        }
                        else if (order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].accepted) {
                            new_status.status = _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].delivery;
                            new_status.delivery_at = firebase__WEBPACK_IMPORTED_MODULE_13__["firestore"].FieldValue.serverTimestamp();
                            text = "Confirma alterar status para SAIU PARA ENTREGA?";
                        }
                        else if (order.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].created) {
                            new_status.status = _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].accepted;
                            new_status.accepted_at = firebase__WEBPACK_IMPORTED_MODULE_13__["firestore"].FieldValue.serverTimestamp();
                            text = "Confirma alterar status para ACEITO?";
                        }
                        if (!(new_status.status === _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].refused)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Tem certeza que deseja cancelar o pedido?',
                                inputs: [{
                                        name: 'reason',
                                        placeholder: 'Por favor, informe o motivo.',
                                        type: 'text',
                                    }],
                                buttons: [
                                    {
                                        text: 'Não',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                            var load;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                                                    case 1:
                                                        load = _a.sent();
                                                        load.present();
                                                        if (order) {
                                                            _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].update(order.id, {
                                                                cancellation_reason: data.reason,
                                                                status: _models_order__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].refused,
                                                                incomplete_at: firebase__WEBPACK_IMPORTED_MODULE_13__["firestore"].FieldValue.serverTimestamp()
                                                            }).subscribe(function () {
                                                                load.dismiss();
                                                            }, function (err) {
                                                                _this.system.showErrorAlert(err);
                                                            });
                                                        }
                                                        else {
                                                            load.dismiss();
                                                            this.system.showErrorAlert(Error("Pedido inválido"));
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alerta',
                            message: text,
                            buttons: [
                                {
                                    text: 'Não'
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _models_order__WEBPACK_IMPORTED_MODULE_3__["Order"].update(order.id, new_status).subscribe();
                                        _this.load();
                                    }
                                }
                            ]
                        })];
                    case 3:
                        alert_2 = _a.sent();
                        alert_2.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderListPage.prototype.changeOrders = function () {
        this.dateFilter(this.dateInput);
        this.load();
    };
    OrderListPage.prototype.changeModeFilterDate = function (mode) {
        this.modeFilterDate = mode;
        var newDate = new Date();
        if (mode == 'month') {
            newDate.setDate(1);
        }
        else {
            this.dateInput = moment__WEBPACK_IMPORTED_MODULE_1__().format();
        }
        this.dateFilter(newDate);
        this.load();
    };
    OrderListPage.prototype.dateFilter = function (date) {
        this.dateStart = new Date(date);
        this.dateStart.setHours(0, 0, 0);
        this.dateEnd = new Date(this.dateStart);
        if (this.modeFilterDate == 'month') {
            var aux = this.dateStart.getMonth();
            this.dateStart.setDate(1);
            if (aux == 12) {
                this.dateEnd.setMonth(1);
            }
            else {
                this.dateEnd.setMonth(aux + 1);
            }
        }
        else {
            this.dateEnd.setDate(this.dateEnd.getDate() + 1);
        }
        //console.log("DATE END: ", this.dateEnd)
    };
    OrderListPage.prototype.doInfinite = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    OrderListPage.prototype.actualDateFormated = function () {
        var data = new Date();
        var sDay = '';
        var sMonth = '';
        var dia = data.getDate();
        if (dia.toString().length == 1)
            sDay = "0" + dia;
        var mes = data.getMonth() + 1;
        if (mes.toString().length == 1)
            sMonth = "0" + mes;
        var year = data.getFullYear();
        return sDay + "/" + sMonth + "/" + year;
    };
    /**
     * Verifica se o dia é:
     * Hoje = retornando 1
     * Ontem = retoranndo 2
     * Caso nenhum dos dos = retornando 3
     * @param day
     */
    OrderListPage.prototype.verifyDate = function (day) {
        var data = new Date();
        var sDay = '';
        var sMonth = '';
        var dia = data.getDate();
        if (dia.toString().length == 1)
            sDay = "0" + dia;
        var mes = data.getMonth() + 1;
        if (mes.toString().length == 1)
            sMonth = "0" + mes;
        var year = data.getFullYear();
        var formattedDate = sDay + "/" + sMonth + "/" + year;
        if (formattedDate == day) {
            return '1';
        }
        else {
            if (dia == (parseInt(day.substring(0, 2)) + 1)) {
                return '2';
            }
            else {
                return '3';
            }
        }
    };
    OrderListPage.prototype.getLabelDay = function (day) {
        var resultDate = '';
        switch (this.verifyDate(day)) {
            case '1':
                resultDate = "Hoje";
                break;
            case '2':
                resultDate = "Ontem";
                break;
            case '3':
                resultDate = day;
                break;
        }
        return resultDate;
    };
    /**
     * Modal que detalha o pedido
     */
    OrderListPage.prototype.presentModal = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _order_detail_order_detail_page__WEBPACK_IMPORTED_MODULE_14__["OrderDetailPage"],
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
    OrderListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.page.html */ "./src/app/panel/pages/order/order-list/order-list.page.html"),
            styles: [__webpack_require__(/*! ./order-list.page.scss */ "./src/app/panel/pages/order/order-list/order-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], OrderListPage);
    return OrderListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-order-order-list-order-list-module.js.map