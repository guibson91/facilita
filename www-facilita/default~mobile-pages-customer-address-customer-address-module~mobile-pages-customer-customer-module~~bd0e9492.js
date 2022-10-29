(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~bd0e9492"],{

/***/ "./src/app/mobile/pages/login-app/login-app.module.ts":
/*!************************************************************!*\
  !*** ./src/app/mobile/pages/login-app/login-app.module.ts ***!
  \************************************************************/
/*! exports provided: LoginAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAppPageModule", function() { return LoginAppPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_app_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-app.page */ "./src/app/mobile/pages/login-app/login-app.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { Routes, RouterModule } from '@angular/router';




// const routes: Routes = [
//   {
//     path: '',
//     component: LoginAppPage
//   }
// ];
var LoginAppPageModule = /** @class */ (function () {
    function LoginAppPageModule() {
    }
    LoginAppPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            entryComponents: [_login_app_page__WEBPACK_IMPORTED_MODULE_4__["LoginAppPage"]],
            declarations: [_login_app_page__WEBPACK_IMPORTED_MODULE_4__["LoginAppPage"]],
            providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonApp"]]
        })
    ], LoginAppPageModule);
    return LoginAppPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/login-app/login-app.page.html":
/*!************************************************************!*\
  !*** ./src/app/mobile/pages/login-app/login-app.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button size=\"small\" (click)=\"back()\">\r\n        <ion-icon class=\"arrow-back\" slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>LOGIN</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"hideScrollbar\" no-margin no-padding>\r\n\r\n  <header>\r\n    <nano-thumb [kind]=\"'person'\" [large2x]=\"true\" [round]=\"true\" [border]=\"true\"></nano-thumb>\r\n  </header>\r\n\r\n  <!-- <section>\r\n    <ion-list no-lines [hidden]=\"!loading\">\r\n      <ion-item text-center color=\"transparent\">\r\n        <ion-spinner color=\"light\"></ion-spinner>\r\n      </ion-item>\r\n    </ion-list>\r\n  </section> -->\r\n\r\n  <!-- Container dos botões de login -->\r\n  <footer>\r\n    <p class=\"text-buttons\" margin-bottom>Escolha como quer acessar</p>\r\n    <!-- <ion-button shape=\"block\" (click)=\"doLogin('facebook')\" icon-left color=\"facebook\" text-uppercase style=\"margin-bottom: 1em!important\">\r\n      <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      Entrar com Facebook\r\n    </ion-button> -->\r\n    <ion-button shape=\"block\" icon-left (click)=\"doLogin('google')\" color=\"gmail\" text-uppercase>\r\n      <ion-icon name=\"logo-googleplus\"></ion-icon>\r\n      Entrar com Gmail\r\n    </ion-button>\r\n  </footer>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile/pages/login-app/login-app.page.scss":
/*!************************************************************!*\
  !*** ./src/app/mobile/pages/login-app/login-app.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-title {\n  font-family: myFontBold !important; }\n\nion-header ion-icon {\n  font-size: 1.5rem;\n  margin: 0px 5px; }\n\n.scroll-content {\n  display: flex;\n  flex-flow: column; }\n\n.background-cover {\n  background-color: rgba(0, 0, 0, 0.65);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1 !important; }\n\n.logo-maisrangos {\n  z-index: 2 !important;\n  width: 120% !important;\n  margin-left: -10% !important;\n  max-width: 400% !important;\n  height: auto !important; }\n\nheader nano-thumb {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  padding-top: 30%; }\n\nsection {\n  flex: 1 1 auto; }\n\nfooter {\n  flex: 0 1 40px;\n  margin-bottom: 40% !important;\n  font-family: 'Roboto', sans-serif !important;\n  width: 80%;\n  margin-left: 10%; }\n\nfooter button {\n    border-radius: 5px !important;\n    text-align: center; }\n\nfooter button ion-icon {\n      margin-top: -4px; }\n\n.text-buttons {\n  color: black;\n  text-align: center;\n  font-size: 1.15em; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/login-app/login-app.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/login-app/login-app.page.ts ***!
  \**********************************************************/
/*! exports provided: LoginAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAppPage", function() { return LoginAppPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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









var LoginAppPage = /** @class */ (function () {
    function LoginAppPage(nav, authProvider, app, loadingCtrl, menuCtrl, placesProvider, system, modalCtrl, route) {
        var _this = this;
        this.nav = nav;
        this.authProvider = authProvider;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.placesProvider = placesProvider;
        this.system = system;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.menuCtrl.enable(false);
        // this.page = this.navParams.get('page');
        this.route.paramMap.subscribe(function (params) {
            _this.page = params.get('page');
            _this.pageBefore = params.get('pageBefore');
        });
    }
    LoginAppPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("LoginAppPage");
    };
    LoginAppPage.prototype.back = function () {
        this.modalCtrl.dismiss();
        // this.nav.goBack();
    };
    LoginAppPage.prototype.doLogin = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, method$;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        if (method === "google") {
                            method$ = this.authProvider.signInGoogle();
                        }
                        else if (method === "facebook") {
                            method$ = this.authProvider.signInFacebook();
                        }
                        method$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (data) {
                            console.log('Dados recebidos do login: ', data);
                            var user;
                            if (data.email) {
                                user = {
                                    name: data.displayName,
                                    email: data.email,
                                    image: data.photoURL,
                                    phone_social: data.phoneNumber,
                                    permissions: [_models_user__WEBPACK_IMPORTED_MODULE_6__["Permission"].CUSTOMER]
                                };
                            }
                            else if (data.user) {
                                user = {
                                    name: data.user.displayName,
                                    email: data.user.email,
                                    image: data.user.photoURL,
                                    phone_social: data.user.phoneNumber,
                                    permissions: [_models_user__WEBPACK_IMPORTED_MODULE_6__["Permission"].CUSTOMER]
                                };
                            }
                            console.log('User: ', user);
                            //Excluir atributos undefined
                            user = Object(_util_util__WEBPACK_IMPORTED_MODULE_7__["cleanObject"])(user);
                            console.log('Clean USER: ', user);
                            var uid = data.uid ? data.uid : data.user.uid;
                            return _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].object(uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (userDatabase) {
                                //Usuário já tem localização definida
                                if (userDatabase && userDatabase.location) {
                                    return _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].update(uid, user);
                                }
                                //Usuário ainda não tem localização definida
                                else {
                                    //Atribuir ao endereço principal o último endereço adicionado no histórico
                                    if (user.locations_history && user.locations_history.length > 0) {
                                        user.location = user.locations_history[user.locations_history.length - 1];
                                        return _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].update(uid, user);
                                    }
                                    //Obter pelo GPS
                                    else {
                                        return _this.placesProvider.getCurrentLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (locationUser) {
                                            locationUser.isGps = true;
                                            user.location = locationUser;
                                            user.physical_location = user.location;
                                            return _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].update(uid, user);
                                        }))
                                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                                            console.log('algo deu errado na localizacao: ', user);
                                            // ALgo deu errado ao conseguir a localização do usuário
                                            return _models_user__WEBPACK_IMPORTED_MODULE_6__["User"].update(uid, user);
                                        }));
                                    }
                                }
                            }));
                        })).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // this.app.getRootNav().setRoot(this.shared.rootPage)
                                // this.modalCtrl.dismiss().then(() => {
                                //   if (this.page) this.nav.push(this.page);
                                // })
                                // this.nav.goBack();
                                this.modalCtrl.dismiss();
                                if (this.page == 'CustomerPage') {
                                    // const modal = await this.modalCtrl.create({
                                    //   component: CustomerPage
                                    // });
                                    // modal.present();
                                    this.nav.navigateRoot(['mobile/customer-details', {
                                            pageBefore: this.pageBefore
                                        }]);
                                }
                                else if (this.page == 'ShoppingCartPage') {
                                    this.nav.navigateRoot('mobile/cart');
                                }
                                else if (this.page == 'PromotionDetailPage') {
                                    this.modalCtrl.dismiss();
                                }
                                loading.dismiss();
                                this.system.logEvent("login_success_" + method);
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            console.log('Deu errado auth: ', error);
                            loading.dismiss();
                            _this.system.showErrorAlert(error, "Autentica\u00E7\u00E3o pelo " + method, true);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginAppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-app',
            template: __webpack_require__(/*! ./login-app.page.html */ "./src/app/mobile/pages/login-app/login-app.page.html"),
            styles: [__webpack_require__(/*! ./login-app.page.scss */ "./src/app/mobile/pages/login-app/login-app.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], LoginAppPage);
    return LoginAppPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~bd0e9492.js.map