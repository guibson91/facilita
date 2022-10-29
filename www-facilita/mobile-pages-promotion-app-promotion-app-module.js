(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-promotion-app-promotion-app-module"],{

/***/ "./src/app/mobile/pages/promotion-app/promotion-app.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-app/promotion-app.module.ts ***!
  \********************************************************************/
/*! exports provided: PromotionAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionAppPageModule", function() { return PromotionAppPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _promotion_app_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotion-app.page */ "./src/app/mobile/pages/promotion-app/promotion-app.page.ts");
/* harmony import */ var _promotion_filter_app_promotion_filter_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../promotion-filter-app/promotion-filter-app.module */ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _promotion_detail_app_promotion_detail_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../promotion-detail-app/promotion-detail-app.module */ "./src/app/mobile/pages/promotion-detail-app/promotion-detail-app.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _promotion_app_page__WEBPACK_IMPORTED_MODULE_5__["PromotionAppPage"]
    }
];
var PromotionAppPageModule = /** @class */ (function () {
    function PromotionAppPageModule() {
    }
    PromotionAppPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _promotion_filter_app_promotion_filter_app_module__WEBPACK_IMPORTED_MODULE_6__["PromotionFilterAppPageModule"],
                _promotion_detail_app_promotion_detail_app_module__WEBPACK_IMPORTED_MODULE_8__["PromotionDetailAppPageModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_9__["MobileComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_promotion_app_page__WEBPACK_IMPORTED_MODULE_5__["PromotionAppPage"]]
        })
    ], PromotionAppPageModule);
    return PromotionAppPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/promotion-app/promotion-app.page.html":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-app/promotion-app.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>PROMOÇÕES</h3>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openFilter()\">\r\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"loading\">\r\n    <section margin-top class=\"placeholder\" *ngFor=\"let f of [1, 2, 3, 4]\">\r\n      <aside class=\"shadow shadow-3\">\r\n        <div class=\"placeholder-animation image\"></div>\r\n      </aside>\r\n      <h1 padding-left></h1>\r\n      <ion-card padding>\r\n        <p class=\"placeholder-animation placeholder-text-p-40\"></p>\r\n        <div class=\"status placeholder-animation placeholder-text-p-20\"></div>\r\n\r\n        <!-- <article class=\"special-product\">\r\n          <div class=\"left-side\" col-12>\r\n            <h2 class=\"placeholder-animation placeholder-text-p-40\"></h2>\r\n            <p class=\"placeholder-animation placeholder-text-p-80\"></p>\r\n            <p class=\"placeholder-animation placeholder-text-p-60\"></p>\r\n          </div>\r\n        </article> -->\r\n      </ion-card>\r\n    </section>\r\n  </div>\r\n\r\n  <div *ngIf=\"filials\">\r\n    <div *ngFor=\"let filial of filials | orderBy:['distance']; let i = index\">\r\n      <span style=\"margin-top: 0.7em\" *ngIf=\"i == 0\">&nbsp;</span>\r\n      <card-promotion [filial]=\"filial\"></card-promotion>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/promotion-app/promotion-app.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-app/promotion-app.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile/pages/promotion-app/promotion-app.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-app/promotion-app.page.ts ***!
  \******************************************************************/
/*! exports provided: PromotionAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionAppPage", function() { return PromotionAppPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _promotion_filter_app_promotion_filter_app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promotion-filter-app/promotion-filter-app.page */ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/company */ "./src/models/company.ts");
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











var PromotionAppPage = /** @class */ (function () {
    function PromotionAppPage(navCtrl, modalCtrl, shared, placesProvider, system, change) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this.placesProvider = placesProvider;
        this.system = system;
        this.change = change;
        this.loading = true;
        this.existsFilials = false;
    }
    Object.defineProperty(PromotionAppPage.prototype, "locationUser", {
        get: function () {
            return this.shared.locationUser;
        },
        enumerable: true,
        configurable: true
    });
    PromotionAppPage.prototype.ngOnInit = function () {
        this.loadPromotions();
    };
    PromotionAppPage.prototype.loadPromotions = function () {
        var _this = this;
        console.log("carregar promoções ");
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
            this.userSubscription = undefined;
        }
        this.loading = true;
        this.existsFilials = true;
        this.error = undefined;
        this.userSubscription = this.shared.user$.subscribe(function (user) {
            _this.error = undefined;
            var obs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            if (user && user.location) {
                _this.shared.locationUser = user.location;
            }
            else if (!_this.locationUser) {
                obs$ = _this.placesProvider.getCurrentLocation()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (location) {
                    _this.shared.locationUser = location;
                    if (user && !user.location) {
                        return _this.placesProvider.saveLocationHistory(location);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                }));
            }
            //Obter filiais ativas
            obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () {
                return _models_filial__WEBPACK_IMPORTED_MODULE_7__["Filial"].list([{
                        name: 'active',
                        operator: '==',
                        value: true
                    }]);
            }))
                //Obter filiais com suas respectivas empresas (company_full)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (filials) {
                if (!filials || filials.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(filials.map(function (filial) { return _models_company__WEBPACK_IMPORTED_MODULE_10__["Company"].object(filial.company.id); }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (companies) {
                    for (var i = 0; i < companies.length; i++) {
                        filials[i].company_full = companies[i];
                    }
                    return filials.filter(function (filial) {
                        //Filtrar apenas as filiais que possuem seus restaurantes ATIVOS
                        return filial.company_full.active;
                    });
                }));
            }))
                //Filiais com a distância ao usuário
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (filials) {
                if (!filials || filials.length <= 0)
                    return [];
                var start = {
                    lat: _this.locationUser.latitude,
                    lng: _this.locationUser.longitude
                };
                for (var i = 0; i < filials.length; i++) {
                    var end = {
                        lat: filials[i].location.latitude,
                        lng: filials[i].location.longitude
                    };
                    filials[i].distance = Object(_util_util__WEBPACK_IMPORTED_MODULE_8__["getDistanceBetweenPoints"])(start, end); //distância em km do usuário à filial
                }
                //Caso precise de distância máxima para promoções
                // return filials.filter(filial => {
                //   return filial.distance <= MAX_DISTANCE
                // });
                return filials;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (filials) {
                if (!filials || filials.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(filials.map(function (filial) {
                    return _models_filial__WEBPACK_IMPORTED_MODULE_7__["Filial"].promotion_stock.list(filial.id, [{ name: 'active', operator: '==', value: true }])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (promotions_stock) {
                        filial.promotions_full = promotions_stock;
                        console.log("Filial com promotions: ", filial);
                        _this.change.detectChanges();
                        return filial;
                    }));
                }));
            }))
                .subscribe(function (filials) {
                _this.loading = false;
                // Verificar se não existe filiais.
                if (!filials || filials.length <= 0) {
                    _this.existsFilials = false;
                    _this.change.detectChanges();
                }
                //EXIBIR PROMOÇÕES
                else {
                    _this.filials = filials;
                    _this.existsFilials = true;
                    setTimeout(function () {
                        _this.change.detectChanges();
                    }, 10);
                }
            }, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
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
                _this.loading = false;
                _this.change.detectChanges();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            })));
            _this.change.detectChanges();
        });
    };
    PromotionAppPage.prototype.dismiss = function () {
        this.navCtrl.goBack();
    };
    PromotionAppPage.prototype.openFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Abrir filtro");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _promotion_filter_app_promotion_filter_app_page__WEBPACK_IMPORTED_MODULE_2__["PromotionFilterAppPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromotionAppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-app',
            template: __webpack_require__(/*! ./promotion-app.page.html */ "./src/app/mobile/pages/promotion-app/promotion-app.page.html"),
            styles: [__webpack_require__(/*! ./promotion-app.page.scss */ "./src/app/mobile/pages/promotion-app/promotion-app.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_6__["PlacesService"], _services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PromotionAppPage);
    return PromotionAppPage;
}());



/***/ }),

/***/ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PromotionFilterAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionFilterAppPageModule", function() { return PromotionFilterAppPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _promotion_filter_app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promotion-filter-app.page */ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PromotionFilterAppPageModule = /** @class */ (function () {
    function PromotionFilterAppPageModule() {
    }
    PromotionFilterAppPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_promotion_filter_app_page__WEBPACK_IMPORTED_MODULE_4__["PromotionFilterAppPage"]],
            entryComponents: [_promotion_filter_app_page__WEBPACK_IMPORTED_MODULE_4__["PromotionFilterAppPage"]]
        })
    ], PromotionFilterAppPageModule);
    return PromotionFilterAppPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>ESCOLHA SUAS CATEGORIAS</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>Muitas categorias</h1>\r\n  <h1>Muitas categorias</h1>\r\n  <h1>Muitas categorias</h1>\r\n  <h1>Muitas categorias</h1>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.ts ***!
  \********************************************************************************/
/*! exports provided: PromotionFilterAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionFilterAppPage", function() { return PromotionFilterAppPage; });
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


var PromotionFilterAppPage = /** @class */ (function () {
    function PromotionFilterAppPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    PromotionFilterAppPage.prototype.ngOnInit = function () {
    };
    PromotionFilterAppPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    PromotionFilterAppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-filter-app',
            template: __webpack_require__(/*! ./promotion-filter-app.page.html */ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.html"),
            styles: [__webpack_require__(/*! ./promotion-filter-app.page.scss */ "./src/app/mobile/pages/promotion-filter-app/promotion-filter-app.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], PromotionFilterAppPage);
    return PromotionFilterAppPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-promotion-app-promotion-app-module.js.map