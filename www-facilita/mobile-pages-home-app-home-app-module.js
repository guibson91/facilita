(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-home-app-home-app-module"],{

/***/ "./src/app/mobile/pages/home-app/home-app.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/home-app/home-app.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAppPageModule", function() { return HomeAppPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _home_app_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-app.page */ "./src/app/mobile/pages/home-app/home-app.page.ts");
/* harmony import */ var _login_app_login_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-app/login-app.module */ "./src/app/mobile/pages/login-app/login-app.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _home_app_page__WEBPACK_IMPORTED_MODULE_5__["HomeAppPage"]
    }
];
var HomeAppPageModule = /** @class */ (function () {
    function HomeAppPageModule() {
    }
    HomeAppPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_app_login_app_module__WEBPACK_IMPORTED_MODULE_6__["LoginAppPageModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__["MobileComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_app_page__WEBPACK_IMPORTED_MODULE_5__["HomeAppPage"]]
        })
    ], HomeAppPageModule);
    return HomeAppPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/home-app/home-app.page.html":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/home-app/home-app.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar class=\"header-toolbar\" color=\"primary\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <h3 ion-text text-uppercase color=\"light\" class=\"my-font-logo\">ESCOLHA O QUE DESEJA</h3>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid no-padding margin-top>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"6\" (click)=\"clickCategory('restaurant')\">\r\n        <img src=\"./../../../../assets/images/RESTAURANTES.png\" />\r\n        <h1>RESTAURANTES</h1>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"clickCategory('supermarket')\" class=\"opacity\">\r\n        <img src=\"./../../../../assets/images/SUPERMERCADOS2.png\" />\r\n        <h1>SUPERMERCADOS</h1>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <!-- <ion-col size=\"6\" (click)=\"clickCategory('drogstore')\" class=\"opacity\">\r\n        <img src=\"./../../../../assets/images/FARMACIAS2.png\" />\r\n        <h1>FARMÁCIAS</h1>\r\n      </ion-col> -->\r\n      <ion-col size=\"6\" (click)=\"clickCategory('promotion')\">\r\n        <img src=\"./../../../../assets/images/PROMOCOES.png\" />\r\n        <h1>PROMOÇÕES</h1>\r\n      </ion-col>\r\n      <!-- @todo warehouse categoria para depósitos -->\r\n      <ion-col size=\"6\" (click)=\"clickCategory('restaurant')\">\r\n        <img src=\"./../../../../assets/images/DEPOSITOS.png\" />\r\n        <h1>PRODUTOS AGRÍCOLAS</h1>\r\n        <p>(adubo, vacinas etc)</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"6\" (click)=\"clickCategory('promotion')\">\r\n        <img src=\"./../../../../assets/images/PROMOCOES.png\" />\r\n        <h1>PROMOÇÕES</h1>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"clickCategory('profile')\">\r\n        <img src=\"./../../../../assets/images/PERFIL.png\" />\r\n        <h1>PERFIL</h1>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<!-- Float button com informações sobre o pedido-->\r\n<fab-order></fab-order>\r\n\r\n\r\n<!-- <ion-footer>\r\n  <ion-button expand=\"block\" color=\"primary\">Acompanhar Pedido</ion-button>\r\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/mobile/pages/home-app/home-app.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/home-app/home-app.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  text-align: center; }\n\nion-row {\n  margin-top: 0.5em; }\n\nion-row ion-col {\n    width: 10vw !important;\n    min-width: 10vw !important;\n    height: 28vh !important;\n    min-height: 28vh !important;\n    padding-top: 1.5em;\n    display: flex;\n    flex-direction: column;\n    vertical-align: middle;\n    align-items: center;\n    justify-content: center;\n    margin: 0px;\n    padding: 0px; }\n\nion-row ion-col img {\n      width: 20vw;\n      height: 20vw; }\n\nion-row ion-col h1 {\n      font-size: 1em;\n      font-weight: bold; }\n\nion-row ion-col p {\n      color: #555;\n      font-size: 0.6em;\n      font-weight: bold;\n      margin: 0px;\n      margin-top: -8px; }\n\nion-row .opacity {\n    opacity: 0.4; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/home-app/home-app.page.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile/pages/home-app/home-app.page.ts ***!
  \********************************************************/
/*! exports provided: HomeAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAppPage", function() { return HomeAppPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-app/login-app.page */ "./src/app/mobile/pages/login-app/login-app.page.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var HomeAppPage = /** @class */ (function () {
    function HomeAppPage(navCtrl, modalCtrl, activatedRoute, router, alertCtrl, shared, platform, system) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.shared = shared;
        this.platform = platform;
        this.system = system;
    }
    HomeAppPage.prototype.ngOnInit = function () {
        // this.activatedRoute.paramMap.subscribe((params) => {
        //   if (params.get('showAlert') == 'true') {
        //   }
        // })
        // this.obsBackButton$ = this.platform.backButton;
        // this.obsBackButton$.pipe(first()).subscribe(async () => {
        //   console.log("Clicked backbutton..................");
        //   const alert = await this.alertCtrl.create({
        //     header: 'Fechar aplicativo',
        //     message: 'Você tem certeza que deseja sair do aplicativo?',
        //     buttons: [
        //       {
        //         text: 'Não',
        //         role: 'cancel',
        //         handler: (blah) => {
        //           console.log('Confirm Cancel: blah');
        //         }
        //       }, {
        //         text: 'Sim',
        //         handler: () => {
        //           console.log('Confirm Okay');
        //           navigator['app'].exitApp();
        //         }
        //       }
        //     ]
        //   });
        //   await alert.present();
        // })
    };
    HomeAppPage.prototype.ngOnDestroy = function () {
        // this.obsBackButton$.unsubscribe();
    };
    HomeAppPage.prototype.clickCategory = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, modalLogin;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = type;
                        switch (_a) {
                            case 'restaurant': return [3 /*break*/, 1];
                            case 'supermarket': return [3 /*break*/, 2];
                            case 'drogstore': return [3 /*break*/, 3];
                            case 'warehouse': return [3 /*break*/, 4];
                            case 'promotion': return [3 /*break*/, 5];
                            case 'profile': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 10];
                    case 1:
                        {
                            console.log("Restaurante selecionado");
                            this.system.logEvent("home_restaurant");
                            this.navCtrl.navigateForward(['mobile/filial-search', {
                                    type: _models_filial__WEBPACK_IMPORTED_MODULE_2__["FilialType"].RESTAURANT
                                }]);
                            return [3 /*break*/, 11];
                        }
                        _b.label = 2;
                    case 2:
                        {
                            console.log("Supermercado selecionado");
                            // this.navCtrl.navigateForward(['mobile/filial-search', {
                            //   type: FilialType.SUPERMARKET
                            // }])
                            this.system.logEvent("home_supermarket");
                            this.system.showAlert("Aguarde!", null, "Em breve teremos supermercados cadastrados na sua região.");
                            return [3 /*break*/, 11];
                        }
                        _b.label = 3;
                    case 3:
                        {
                            console.log("Farmácia selecionado");
                            // this.navCtrl.navigateForward(['mobile/filial-search', {
                            //   type: FilialType.DRUGSTORE
                            // }])
                            this.system.logEvent("home_drogstore");
                            this.system.showAlert("Aguarde!", null, "Em breve teremos farmácias cadastradas na sua região.");
                            return [3 /*break*/, 11];
                        }
                        _b.label = 4;
                    case 4:
                        {
                            console.log("Depósito selecionado");
                            this.navCtrl.navigateForward(['mobile/filial-search', {
                                    type: _models_filial__WEBPACK_IMPORTED_MODULE_2__["FilialType"].WAREHOUSE
                                }]);
                            this.system.logEvent("home_warehouse");
                            return [3 /*break*/, 11];
                        }
                        _b.label = 5;
                    case 5:
                        {
                            console.log("Promoção selecionado");
                            this.navCtrl.navigateForward(['mobile/promotion-app']);
                            this.system.logEvent("home_promotion");
                            // this.system.showAlert("Ops!", null, "Ainda não temos promoções cadastradas na sua região");
                            return [3 /*break*/, 11];
                        }
                        _b.label = 6;
                    case 6:
                        this.system.logEvent("home_profile");
                        console.log("Perfil selecionado");
                        if (!this.shared.user) return [3 /*break*/, 7];
                        this.navCtrl.navigateRoot(["mobile/customer-details", {
                                pageBefore: 'HomeApp'
                            }]);
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_3__["LoginAppPage"],
                            componentProps: {
                                page: 'CustomerPage',
                                pageBefore: 'HomeApp'
                            }
                        })];
                    case 8:
                        modalLogin = _b.sent();
                        modalLogin.present();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        {
                            console.error("Categoria selecionada não identificada");
                            return [3 /*break*/, 11];
                        }
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    HomeAppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-app',
            template: __webpack_require__(/*! ./home-app.page.html */ "./src/app/mobile/pages/home-app/home-app.page.html"),
            styles: [__webpack_require__(/*! ./home-app.page.scss */ "./src/app/mobile/pages/home-app/home-app.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"]])
    ], HomeAppPage);
    return HomeAppPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-home-app-home-app-module.js.map