(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-tutorial-tutorial-module"],{

/***/ "./src/app/mobile/pages/tutorial/tutorial.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/tutorial/tutorial.module.ts ***!
  \**********************************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/mobile/pages/tutorial/tutorial.page.ts");
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
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_5__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
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
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_5__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/tutorial/tutorial.page.html":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/tutorial/tutorial.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <!-- <button ion-button clear (click)=\"closeTutorial()\" class=\"jump\">Pular</button> -->\r\n  <ion-slides (ionSlideDidChange)=\"slideChanged()\" pager=\"true\" paginationType=\"bullets\">\r\n    <ion-slide class=\"slide1\">\r\n      <div class=\"info\">\r\n        <p>Bem vindo ao</p>\r\n        <img class=\"logo-name\" src=\"./assets/img/maisrangosbranco.png\" />\r\n        <p class=\"subtitle \">\r\n          Você nunca ganhou tanto por usar um delivery\r\n        </p>\r\n      </div>\r\n      <div class=\"img-phone\">\r\n        <img src=\"./assets/img/phone.png\" />\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide class=\"slide3\">\r\n      <p class=\"my-font-logo\" margin-top>\r\n        Ganhe parte da sua compra de volta\r\n      </p>\r\n      <div>\r\n        <img src=\"./assets/img/phone.svg\" />\r\n      </div>\r\n      <p class=\"text-nomal\">\r\n        Aas dals dals dlasld lasdsatos\r\n      </p>\r\n    </ion-slide>\r\n    <ion-slide class=\"slide2\">\r\n      <div class=\"info\">\r\n        <p class=\"title my-font-logo\">\r\n          Para todos os gostos\r\n        </p>\r\n        <p class=\"subtitle \">\r\n          Encontre examente o que quer comer\r\n        </p>\r\n      </div>\r\n      <div class=\"img-pizza\">\r\n        <img src=\"./assets/img/pizza.png\" />\r\n      </div>\r\n\r\n    </ion-slide>\r\n    <!--<ion-slide class=\"slide3\">\r\n      <p class=\"my-font-logo\" margin-top>\r\n        Mais que um delivery\r\n      </p>\r\n      <div>\r\n        <!-- <img src=\"./assets/img/motinha.png\" /> \r\n        <img src=\"./assets/img/motinha.png\" />\r\n      </div>\r\n      <p class=\"my-font-logo\">\r\n        Mais agilidade e praticidade na hora da entrega\r\n      </p>\r\n    </ion-slide>-->\r\n  </ion-slides>\r\n  <button class=\"btn-previous\" ion-button clear icon-start *ngIf=\"!slides.isBeginning()\" (click)=\"slides.slidePrev()\">\r\n    <ion-icon name=\"ios-arrow-back\"></ion-icon>\r\n    <span>Voltar</span>\r\n  </button>\r\n  <button class=\"btn-next\" ion-button clear icon-end *ngIf=\"!slides.isEnd()\" (click)=\"slides.slideNext()\">\r\n    <span>Próximo</span>\r\n    <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\r\n  </button>\r\n  <button class=\"btn-next\" ion-button clear icon-end *ngIf=\"slides.isEnd()\" (click)=\"closeTutorial()\">\r\n    <span>Concluir</span>\r\n    <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\r\n  </button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/mobile/pages/tutorial/tutorial.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/mobile/pages/tutorial/tutorial.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile/pages/tutorial/tutorial.page.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile/pages/tutorial/tutorial.page.ts ***!
  \********************************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
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




var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menuCtrl, loadingCtrl, shared, system, app) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.shared = shared;
        this.system = system;
        this.app = app;
    }
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("TutorialPage");
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    TutorialPage.prototype.slideChanged = function () {
        this.slides.getActiveIndex();
    };
    TutorialPage.prototype.closeTutorial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/mobile/pages/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/mobile/pages/tutorial/tutorial.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-tutorial-tutorial-module.js.map