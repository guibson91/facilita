(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-order-promotion-order-promotion-list-order-promotion-list-module"],{

/***/ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: OrderPromotionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPromotionListPageModule", function() { return OrderPromotionListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _order_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-promotion-list.page */ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _order_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["OrderPromotionListPage"]
    }
];
var OrderPromotionListPageModule = /** @class */ (function () {
    function OrderPromotionListPageModule() {
    }
    OrderPromotionListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_10__["MomentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["OrderPromotionListPage"]]
        })
    ], OrderPromotionListPageModule);
    return OrderPromotionListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Promoções geradas\" icon=\"menus-icon-list\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"content-card\" margin>\r\n    <div class=\"search-order-list\">\r\n      <ion-searchbar [(ngModel)]=\"input_search\" (ionChange)=\"change()\" placeholder=\"Filtrar pelo cliente ou filial\">\r\n      </ion-searchbar>\r\n      <ion-item class=\"date-filter\">\r\n\r\n        <ion-label stacked class=\"label-date\">Data\r\n          <div class=\"filter-dates-modes\">\r\n            <p (click)=\"changeModeFilterDate('day')\" [ngClass]=\"{'active-mode-filter-date': modeFilterDate == 'day'}\" padding-horizontal>\r\n              <strong>Dia</strong>\r\n            </p>\r\n            <p (click)=\"changeModeFilterDate('month')\" [ngClass]=\" { 'active-mode-filter-date': modeFilterDate=='month' }\" class=\"mode-filter-month\">\r\n              <strong>Mês</strong>\r\n            </p>\r\n          </div>\r\n        </ion-label>\r\n\r\n        <ion-datetime *ngIf=\"modeFilterDate == 'month'\" displayFormat=\"MM/YYYY\" [(ngModel)]=\"dateInput\" (ionChange)=\"changeOrders()\"></ion-datetime>\r\n        <ion-datetime *ngIf=\"modeFilterDate == 'day'\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"dateInput\" (ionChange)=\"changeOrders()\"></ion-datetime>\r\n      </ion-item>\r\n    </div>\r\n    <ion-list>\r\n      <div *ngFor=\"let order of orders | filterBy:[ 'user_full.name', 'filial_full.name', 'code', 'user_full?.phone']: input_search ; let i = index\"\r\n        class=\"order\" padding>\r\n        <h6>\r\n          <span *ngIf=\"order.code\">\r\n            <strong>Código: </strong>{{order.code}} </span>\r\n          <span *ngIf=\"order.filial_full?.name\">\r\n            <strong>Filial: </strong>{{order.filial_full?.name}} </span>\r\n          <span *ngIf=\"order.user_full?.phone\">\r\n            <strong>Phone: </strong>\r\n            <ion-icon class=\"icon-phone\" name=\"md-call\" item-start></ion-icon>{{order.user_full.phone}}\r\n          </span>\r\n          <span *ngIf=\"order.user_full?.name\">\r\n            <strong>Cliente: </strong>{{order.user_full?.name}} </span>\r\n        </h6>\r\n        <div>\r\n          <h3>\r\n            <strong>Nome da promoção: </strong> {{order.promotion_full?.name}}</h3>\r\n          <h3>\r\n            <strong>Data da criação: </strong> {{order.created_at | timestampToDate | date:'dd/MM/yyyy - HH:mm'}}</h3>\r\n        </div>\r\n      </div>\r\n      <ion-item text-center padding *ngIf=\"!loading\" class=\"noOrders\">\r\n        <p ion-text>Você ainda não possui nenhuma promoção gerada</p>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item text-center *ngIf=\"loading\">\r\n      <ion-spinner></ion-spinner>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card.content-card {\n  margin: 10px !important; }\n\n.toolbar {\n  padding: 0; }\n\nion-scroll {\n  height: 60px; }\n\nion-scroll .scroll-content {\n    padding: 18px 0 !important; }\n\nion-scroll .segment {\n    display: block;\n    white-space: nowrap;\n    font-size: 0;\n    overflow: auto; }\n\nion-scroll .segment::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n      display: none; }\n\nion-scroll .segment ion-segment-button.segment-button {\n      display: inline-block;\n      min-width: 100px;\n      padding: 0 25px;\n      width: auto;\n      color: #fff;\n      border-bottom-color: transparent; }\n\nion-scroll .segment ion-segment-button.segment-button h4 {\n        padding-top: 10px;\n        font-size: 16px;\n        font-weight: bold;\n        margin: 0; }\n\nion-scroll .segment ion-segment-button.segment-button.segment-activated {\n        border-color: #fff; }\n\n.button-alert {\n  font-size: 10px;\n  margin-top: -0.8em; }\n\n.noOrders {\n  display: none; }\n\n.noOrders:first-child {\n    display: block !important; }\n\n.date-filter {\n  width: 300px; }\n\n@media (max-width: 420px) {\n    .date-filter {\n      width: 100%; } }\n\n.date-filter .item-inner {\n    border-bottom: 1px solid var(--ion-color-primary) !important; }\n\n.date-filter .label-date {\n    display: flex;\n    justify-content: space-between; }\n\n.date-filter .label-date .filter-dates-modes {\n      z-index: 999;\n      display: flex !important; }\n\n.date-filter .label-date .filter-dates-modes p {\n        margin: 0px; }\n\n.date-filter .label-date .filter-dates-modes p:hover {\n          cursor: pointer; }\n\n.date-filter .label-date .filter-dates-modes p.mode-filter-month {\n          margin-left: 5px !important; }\n\n.date-filter .label-date .filter-dates-modes p.active-mode-filter-date {\n          color: var(--ion-color-primary) !important; }\n\n@media (max-width: 420px) {\n  .content-card {\n    margin: 10px !important; } }\n\n.search-order-list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  border-bottom: solid 2px #dddddd; }\n\n.search-order-list ion-item {\n    padding-bottom: 5px; }\n\n.search-order-list .datetime-md {\n    padding: 7px 8px 7px 0px !important; }\n\n.search-order-list ion-searchbar {\n    border-bottom: solid 0px transparent !important;\n    height: 73px;\n    width: 70%;\n    min-width: 330px; }\n\n@media (max-width: 500px) {\n      .search-order-list ion-searchbar {\n        width: 100%; } }\n\n.search-order-list .date-filter {\n    width: 30%; }\n\n@media (max-width: 520px) {\n      .search-order-list .date-filter {\n        width: 100%; } }\n\n.searchbar-input {\n  padding-right: 6px !important; }\n\n.order {\n  border-bottom: 1px solid lightgrey; }\n\n.order h2 span {\n    margin-right: 20px; }\n\n@media (max-width: 420px) {\n    .order .info-order {\n      display: flex;\n      flex-direction: column; } }\n\n.order .more {\n    text-align: left !important;\n    cursor: pointer;\n    color: var(--ion-color-primary);\n    width: auto !important;\n    margin-left: -5px; }\n\n@media (max-width: 625px) {\n    .order .more {\n      margin: 0 auto;\n      margin-top: 8px; } }\n\n.order .infos {\n    display: flex; }\n\n@media (max-width: 625px) {\n      .order .infos {\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between; }\n        .order .infos .datetime-md {\n          padding: 2px 8px 5px 0px !important; } }\n\n.order .infos .entry {\n      width: 35%; }\n\n@media (max-width: 625px) {\n        .order .infos .entry {\n          width: 100% !important;\n          max-width: 100%; } }\n\n.order .infos .delivery {\n      width: 36.69%; }\n\n@media (max-width: 625px) {\n        .order .infos .delivery {\n          width: 100% !important;\n          max-width: 100%; } }\n\n@media (max-width: 625px) {\n        .order .infos .delivery .phone {\n          width: 100%;\n          text-align: center;\n          display: inline-block;\n          margin: 0; } }\n\n.order .infos .delivery .total {\n        margin-top: 10px; }\n\n.order .infos .status-box {\n      width: 27.3%; }\n\n@media (max-width: 625px) {\n        .order .infos .status-box {\n          width: 100% !important;\n          max-width: 100%; } }\n\n.order .infos .status-box .status {\n        font-size: 1.3em;\n        font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: OrderPromotionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPromotionListPage", function() { return OrderPromotionListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_promotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/order-promotion */ "./src/models/order-promotion.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _models_promotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../models/promotion */ "./src/models/promotion.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OrderPromotionListPage = /** @class */ (function () {
    function OrderPromotionListPage(menuCtrl, ref, route, shared, system) {
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.route = route;
        this.shared = shared;
        this.system = system;
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Verifica se existe promoções geradas
         */
        this.existsOrders = true;
        this.dateInput = moment__WEBPACK_IMPORTED_MODULE_7__().format();
        /**
         * Data para filtrar os pedidos
         */
        this.dateStart = new Date();
    }
    /**
       * Inicializando estruturas após entrar na página.
       */
    OrderPromotionListPage.prototype.ngOnInit = function () {
        this.modeFilterDate = 'month';
        this.dateFilter(this.dateStart);
        this.menuCtrl.enable(true);
        this.load();
    };
    OrderPromotionListPage.prototype.ngOnDestroy = function () {
        if (this.ordersSubscription)
            this.ordersSubscription.unsubscribe();
    };
    OrderPromotionListPage.prototype.change = function () {
        this.ref.detectChanges();
    };
    /**
     * Carrega a lista da página
     */
    OrderPromotionListPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsOrders = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_5__["Company"].object(params.get('company_id'))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
            else if (_this.shared.isManager || _this.shared.isFilialManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_8__["Filial"].object(params.get('filial_id'))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
            else if (_this.shared.isManager || _this.shared.isFilialManager)
                return _this.shared.filial$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        if (this.ordersSubscription)
            this.ordersSubscription.unsubscribe();
        this.ordersSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                company$,
                filial$
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (arr) {
                _this.company = arr[0];
                _this.filial = arr[1];
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                var promotions$;
                if (_this.filial) {
                    promotions$ = _models_filial__WEBPACK_IMPORTED_MODULE_8__["Filial"].orders_promotions.list(_this.filial.id, [
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }
                    ]);
                }
                else if (_this.company) {
                    promotions$ = _models_company__WEBPACK_IMPORTED_MODULE_5__["Company"].orders_promotions.list(_this.company.id, [
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }
                    ]);
                }
                else if (_this.shared.isTeam) {
                    promotions$ = _models_order_promotion__WEBPACK_IMPORTED_MODULE_1__["OrderPromotion"].list([
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ]);
                }
                else {
                    throw Error("Nem é TEAM nem tem filial nem company");
                }
                return promotions$;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (orders) {
                if (!orders || orders.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(orders.map(function (order) {
                    if (order && order.user && order.promotion && order.company && order.filial) {
                        var user$ = _models_user__WEBPACK_IMPORTED_MODULE_10__["User"].object(order.user.id, true);
                        var promotion$ = _models_promotion__WEBPACK_IMPORTED_MODULE_11__["Promotion"].object(order.promotion.id, true);
                        var company$_1;
                        if (_this.company)
                            company$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.company);
                        else
                            company$_1 = _models_company__WEBPACK_IMPORTED_MODULE_5__["Company"].object(order.company.id, true);
                        var filial$_1;
                        if (_this.filial)
                            filial$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.filial);
                        else
                            filial$_1 = _models_filial__WEBPACK_IMPORTED_MODULE_8__["Filial"].object(order.filial.id, true);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(user$, promotion$, company$_1, filial$_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (arr) {
                            order.user_full = arr[0];
                            order.promotion_full = arr[1];
                            order.company_full = arr[2];
                            order.filial_full = arr[3];
                            return order;
                        }));
                    }
                    else {
                        console.error("Algo de errado aconteceu, um pedido de promoção não tem um dos elementos: Company, Filial, User, Promotion");
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
                    }
                }));
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (orders) {
                return orders.filter(function (order) { return order; });
            }))
                .subscribe(function (orders) {
                if (!orders || orders.length <= 0)
                    _this.existsOrders = false;
                else
                    _this.existsOrders = true;
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
    OrderPromotionListPage.prototype.changeOrders = function () {
        this.dateFilter(this.dateInput);
        this.load();
    };
    OrderPromotionListPage.prototype.changeModeFilterDate = function (mode) {
        this.modeFilterDate = mode;
        var newDate = new Date();
        if (mode == 'month') {
            newDate.setDate(1);
        }
        else {
            this.dateInput = moment__WEBPACK_IMPORTED_MODULE_7__().format();
        }
        this.dateFilter(newDate);
        this.load();
    };
    OrderPromotionListPage.prototype.dateFilter = function (date) {
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
    };
    OrderPromotionListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-promotion-list',
            template: __webpack_require__(/*! ./order-promotion-list.page.html */ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.html"),
            styles: [__webpack_require__(/*! ./order-promotion-list.page.scss */ "./src/app/panel/pages/order-promotion/order-promotion-list/order-promotion-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"]])
    ], OrderPromotionListPage);
    return OrderPromotionListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-order-promotion-order-promotion-list-order-promotion-list-module.js.map