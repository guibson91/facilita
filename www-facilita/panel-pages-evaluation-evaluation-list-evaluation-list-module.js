(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-evaluation-evaluation-list-evaluation-list-module"],{

/***/ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EvaluationListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationListPageModule", function() { return EvaluationListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _evaluation_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evaluation-list.page */ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _order_order_detail_order_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../order/order-detail/order-detail.module */ "./src/app/panel/pages/order/order-detail/order-detail.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _evaluation_list_page__WEBPACK_IMPORTED_MODULE_5__["EvaluationListPage"]
    }
];
var EvaluationListPageModule = /** @class */ (function () {
    function EvaluationListPageModule() {
    }
    EvaluationListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _order_order_detail_order_detail_module__WEBPACK_IMPORTED_MODULE_10__["OrderDetailPageModule"]
            ],
            declarations: [_evaluation_list_page__WEBPACK_IMPORTED_MODULE_5__["EvaluationListPage"]]
        })
    ], EvaluationListPageModule);
    return EvaluationListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <nano-navbar title=\"Avaliações\" icon=\"menus-icon-ecommerce-3\"></nano-navbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\" margin>\r\n    <div class=\"search-order-list\">\r\n      <ion-searchbar [(ngModel)]=\"input_search\" placeholder=\"Filtrar pelo cliente ou filial \">\r\n      </ion-searchbar>\r\n      <ion-item class=\"date-filter\">\r\n        <ion-label stacked>Data</ion-label>\r\n        <ion-datetime displayFormat=\"MM/YYYY\" [(ngModel)]=\"dateInput\" (ionChange)=\"changeDate()\"></ion-datetime>\r\n      </ion-item>\r\n    </div>\r\n    <ion-list class=\"list-evaluation\">\r\n      <ion-item class=\"item-evaluation\" *ngFor=\"let order of orders$ | async |\r\n           filterBy:['user_full.name','filial_full.name']: input_search ; let i = index\">\r\n        <h1 ion-text>{{order.user_full.name}}\r\n          <span class=\"star-number\">\r\n            <ion-icon name=\"star\"></ion-icon>{{order.evaluate.rate | number : '1.1-1'}}</span>\r\n        </h1>\r\n        <p ion-text>{{order.filial_full.name}}</p>\r\n        <h2 ion-text *ngIf=\"order.evaluate.comment\">Comentário: {{order.evaluate.comment}}</h2>\r\n        <h3 ion-text item-right (click)=\"presentModal(order)\" class=\"more\">Detalhes do pedido</h3>\r\n      </ion-item>\r\n      <ion-item text-center padding *ngIf=\"!loading\" class=\"noEvaluation\">\r\n        <p ion-text>Você ainda não possui nenhuma avaliação</p>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item text-center *ngIf=\"loading\">\r\n      <ion-spinner></ion-spinner>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2,\nh1 {\n  white-space: normal; }\n\n.noEvaluation {\n  display: none; }\n\n.noEvaluation:first-child {\n    display: block !important; }\n\n.search-order-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.search-order-list ion-item {\n    border-bottom: solid 2px #dddddd;\n    padding-bottom: 5px; }\n\n@media (max-width: 420px) {\n      .search-order-list ion-item .item-inner {\n        display: flex;\n        flex-direction: column; } }\n\n.search-order-list .datetime-md {\n    padding: 7px 8px 7px 0px !important; }\n\n@media (max-width: 420px) {\n  .list-evaluation .item-evaluation .item-inner {\n    display: flex;\n    flex-direction: column; } }\n\n.date-filter {\n  width: 300px; }\n\n.date-filter .item-inner {\n    border-bottom: 0 !important; }\n\n.more {\n  cursor: pointer;\n  padding-top: 1em;\n  color: purple; }\n\n.star-number {\n  color: var(--ion-color-primary) !important;\n  font-size: 15px; }\n\n.star-number ion-icon {\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.ts ***!
  \********************************************************************************/
/*! exports provided: EvaluationListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationListPage", function() { return EvaluationListPage; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _order_order_detail_order_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../order/order-detail/order-detail.page */ "./src/app/panel/pages/order/order-detail/order-detail.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
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














var EvaluationListPage = /** @class */ (function () {
    function EvaluationListPage(menuCtrl, shared, authentication, system, navCtrl, ref, route, loadingCtrl, modalCtrl) {
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.authentication = authentication;
        this.system = system;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        /**
         * Se está carregando os elementos da página
         */
        this.loading = true;
        /**
         * Se existe alguma avaliação
         */
        this.existsEvaluation = true;
        /**
           * Data do input
           */
        this.dateInput = moment__WEBPACK_IMPORTED_MODULE_0__().format();
        /**
         * Data para filtrar os pedidos
         */
        this.dateStart = new Date();
        this.dateFilter(this.dateStart);
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    EvaluationListPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    /**
     * Carrega a lista da página
     */
    EvaluationListPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsEvaluation = true;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].object(params.get('company_id'));
            else if (_this.shared.isManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (company) {
            if (!company && !_this.shared.isTeam) {
                var error = Error("Restaurante não encontrado");
                _this.system.showErrorAlert(error);
                _this.navCtrl.navigateRoot(_this.shared.rootPage);
                return;
            }
            //GERENTE GERAL
            if (_this.shared.isManager || _this.shared.isTeam) {
                var obj$ = void 0;
                if (_this.shared.isManager || company) {
                    obj$ = _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].orders.list(company.id, [
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
                    obj$ = _models_order__WEBPACK_IMPORTED_MODULE_6__["Order"].list([
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }
                    ]);
                }
                else {
                    throw Error("Erro aleatório");
                }
                _this.orders$ = obj$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (orders) {
                    if (!orders || orders.length <= 0)
                        return [];
                    return orders.filter(function (order) { return order.evaluate; });
                }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (orders) {
                    if (!orders || orders.length <= 0)
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(orders.map(function (order) { return _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].object(order.user.id); }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
                        for (var i = 0; i < users.length; i++) {
                            orders[i].user_full = users[i];
                        }
                        return orders;
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (orders) {
                        if (!orders || orders.length <= 0)
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(orders.map(function (order) { return _models_filial__WEBPACK_IMPORTED_MODULE_8__["Filial"].object(order.filial.id); }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (filials) {
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
                _this.orders$ = _this.shared.filial$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (filial) {
                    return _models_filial__WEBPACK_IMPORTED_MODULE_8__["Filial"].orders.list(filial.id, [
                        { name: "created_at", operator: ">=", value: _this.dateStart },
                        { name: "created_at", operator: "<", value: _this.dateEnd }
                    ], [
                        {
                            name: "created_at",
                            type: "desc"
                        }
                    ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (orders) {
                        if (!orders || orders.length <= 0)
                            return [];
                        return orders.filter(function (order) { return order.evaluate; });
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (orders) {
                        if (!orders || orders.length <= 0)
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(orders.map(function (order) { return _models_user__WEBPACK_IMPORTED_MODULE_7__["User"].object(order.user.id); }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
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
                var error = Error("Página de avaliações só pode ser acessada por Gerente Geral ou Gerente de Filial");
                _this.system.showErrorAlert(error);
            }
            _this.orders$ = _this.orders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (orders) {
                if (!orders || orders.length <= 0)
                    _this.existsEvaluation = false;
                else
                    _this.existsEvaluation = true;
                _this.loading = false;
                _this.ref.detectChanges();
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                _this.system.showErrorAlert(err);
                return [];
            }));
        }, function (err) {
            _this.loading = false;
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    EvaluationListPage.prototype.changeDate = function () {
        this.dateFilter(this.dateInput);
        this.load();
    };
    EvaluationListPage.prototype.dateFilter = function (date) {
        this.dateStart = new Date(date);
        this.dateStart.setDate(1);
        this.dateStart.setHours(0, 0, 0);
        this.dateEnd = new Date(this.dateStart);
        var aux = this.dateStart.getMonth();
        if (aux == 12) {
            this.dateEnd.setMonth(1);
        }
        else {
            this.dateEnd.setMonth(aux + 1);
        }
    };
    /**
     * Modal que detalha o pedido
     */
    EvaluationListPage.prototype.presentModal = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _order_order_detail_order_detail_page__WEBPACK_IMPORTED_MODULE_9__["OrderDetailPage"],
                                componentProps: { order: order }
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.present().then(function () {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluationListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evaluation-list',
            template: __webpack_require__(/*! ./evaluation-list.page.html */ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.html"),
            styles: [__webpack_require__(/*! ./evaluation-list.page.scss */ "./src/app/panel/pages/evaluation/evaluation-list/evaluation-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_13__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]])
    ], EvaluationListPage);
    return EvaluationListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-evaluation-evaluation-list-evaluation-list-module.js.map