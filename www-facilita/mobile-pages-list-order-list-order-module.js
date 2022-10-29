(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-list-order-list-order-module"],{

/***/ "./src/app/mobile/pages/list-order/list-order.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/list-order/list-order.module.ts ***!
  \**************************************************************/
/*! exports provided: ListOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderPageModule", function() { return ListOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _list_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-order.page */ "./src/app/mobile/pages/list-order/list-order.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _list_order_page__WEBPACK_IMPORTED_MODULE_5__["ListOrderPage"]
    }
];
var ListOrderPageModule = /** @class */ (function () {
    function ListOrderPageModule() {
    }
    ListOrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_order_page__WEBPACK_IMPORTED_MODULE_5__["ListOrderPage"]]
        })
    ], ListOrderPageModule);
    return ListOrderPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/list-order/list-order.page.html":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/list-order/list-order.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>LISTA DE PEDIDOS</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"orders\">\r\n    <div *ngFor=\"let order of orders | orderBy: '-created_at'\">\r\n      <mr-card-filial *ngIf=\"order.filial_full\" [filial]=\"order.filial_full\" tappable (click)=\"goTrackOrder(order)\"\r\n        [order]=\"order\"></mr-card-filial>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/list-order/list-order.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/list-order/list-order.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile/pages/list-order/list-order.page.ts":
/*!************************************************************!*\
  !*** ./src/app/mobile/pages/list-order/list-order.page.ts ***!
  \************************************************************/
/*! exports provided: ListOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderPage", function() { return ListOrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
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







var ListOrderPage = /** @class */ (function () {
    function ListOrderPage(navCtrl, alertCtrl, shared, system, loadingCtrl, change, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.shared = shared;
        this.system = system;
        this.loadingCtrl = loadingCtrl;
        this.change = change;
        this.modalCtrl = modalCtrl;
        this.shared.pending_orders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (orders) { return __awaiter(_this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.orders = orders;
                        if (this.orders) {
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.orders.map(function (order) { return _models_filial__WEBPACK_IMPORTED_MODULE_5__["Filial"].object(order.filial.id); }))
                                .subscribe(function (filials) {
                                for (var i = 0; i < _this.orders.length; i++) {
                                    _this.orders[i].filial_full = filials[i];
                                    setTimeout(function () {
                                        _this.change.detectChanges();
                                    }, 10);
                                    console.log("Pedidos pendentes: ", orders);
                                    loading.dismiss();
                                }
                            });
                        }
                        else {
                            loading.dismiss();
                            this.system.showErrorAlert(Error('Ops! Você não possui múltiplos pedidos. Tente novamente.'));
                            this.modalCtrl.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ListOrderPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("ListOrderPage");
    };
    ListOrderPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ajuda',
                            message: 'Lista dos seus pedidos realizados que ainda estão em aberto. Clique no pedido para mais detalhes.',
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
    ListOrderPage.prototype.back = function () {
        this.navCtrl.goBack();
    };
    ListOrderPage.prototype.goTrackOrder = function (order) {
        console.log("Foi clicado no pedido: ", order);
        this.navCtrl.navigateForward(['mobile/track-order', {
                index_order: this.orders.findIndex(function (item) {
                    return order.id == item.id;
                })
            }]);
    };
    ListOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-order',
            template: __webpack_require__(/*! ./list-order.page.html */ "./src/app/mobile/pages/list-order/list-order.page.html"),
            styles: [__webpack_require__(/*! ./list-order.page.scss */ "./src/app/mobile/pages/list-order/list-order.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ListOrderPage);
    return ListOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-list-order-list-order-module.js.map