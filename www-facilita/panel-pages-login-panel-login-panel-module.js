(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-login-panel-login-panel-module"],{

/***/ "./src/app/panel/pages/login-panel/login-panel.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/panel/pages/login-panel/login-panel.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginPanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPanelPageModule", function() { return LoginPanelPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_panel_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-panel.page */ "./src/app/panel/pages/login-panel/login-panel.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_panel_page__WEBPACK_IMPORTED_MODULE_5__["LoginPanelPage"]
    }
];
var LoginPanelPageModule = /** @class */ (function () {
    function LoginPanelPageModule() {
    }
    LoginPanelPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_panel_page__WEBPACK_IMPORTED_MODULE_5__["LoginPanelPage"]]
        })
    ], LoginPanelPageModule);
    return LoginPanelPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/login-panel/login-panel.page.html":
/*!***************************************************************!*\
  !*** ./src/app/panel/pages/login-panel/login-panel.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"background-cover\"></div>\r\n\r\n  <div class=\"center\">\r\n\r\n    <form (submit)=\"doLogin()\">\r\n\r\n      <div class=\"logo-header\"></div>\r\n\r\n      <ion-list no-lines [hidden]=\"loading\" class=\"remove-border-input\">\r\n\r\n        <ion-item class=\"remove-border-item\">\r\n          <ion-label position=\"floating\">E-mail</ion-label>\r\n          <ion-input type=\"email\" [(ngModel)]=\"account.email\" name=\"email\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"remove-border-item\">\r\n          <ion-label position=\"floating\">Senha</ion-label>\r\n          <ion-input autocomplete=\"new-password\" type=\"password\" [(ngModel)]=\"account.password\" name=\"password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button padding expand=\"block\" (click)=\"doLogin()\">\r\n          <p ion-text>Entrar</p>\r\n        </ion-button>\r\n\r\n      </ion-list>\r\n\r\n      <div class=\"spinner-center\" [hidden]=\"!loading\" padding padding>\r\n        <ion-spinner></ion-spinner>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/login-panel/login-panel.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/panel/pages/login-panel/login-panel.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  background-image: url('bg-login.png') !important;\n  background-size: cover;\n  background-position: center; }\n\n.background-cover {\n  background-color: rgba(0, 0, 0, 0.65);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 100%; }\n\n.logo-header {\n  width: auto;\n  margin: 13px;\n  height: 72px;\n  background: url(\"data:image/png;base64,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\") no-repeat center center;\n  background-size: cover; }\n\nform {\n  margin-top: 3em; }\n\nform .button-inner .text-md-primary {\n    font-family: myFontBold !important;\n    color: #cb6018 !important; }\n\nform ion-input {\n    background-color: transparent !important; }\n\n.center {\n  width: 350px;\n  padding: 30px 35px;\n  background: var(--ion-color-light); }\n\nion-spinner {\n  width: 35px;\n  height: 35px; }\n\nion-input {\n  border-bottom: 1px solid; }\n\ninput:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/login-panel/login-panel.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/panel/pages/login-panel/login-panel.page.ts ***!
  \*************************************************************/
/*! exports provided: LoginPanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPanelPage", function() { return LoginPanelPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPanelPage = /** @class */ (function () {
    function LoginPanelPage(authentication, navCtrl, shared, ref, menuCtrl, system) {
        this.authentication = authentication;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.ref = ref;
        this.menuCtrl = menuCtrl;
        this.system = system;
        /**
         * Se está carregando algo ou não
         */
        this.loading = false;
        /**
         * Informações da conta a ser logada.
         */
        this.account = {
            email: '',
            password: ''
        };
    }
    LoginPanelPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
    };
    /**
     * Realizar o login do usuário.
     */
    LoginPanelPage.prototype.doLogin = function () {
        var _this = this;
        this.loading = true;
        this.ref.detectChanges();
        this.authentication.login(this.account.email, this.account.password)
            .subscribe(function () {
            _this.navCtrl.navigateRoot(_this.shared.rootPage);
        }, function (error) {
            _this.system.showErrorAlert(error);
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    LoginPanelPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-panel',
            template: __webpack_require__(/*! ./login-panel.page.html */ "./src/app/panel/pages/login-panel/login-panel.page.html"),
            styles: [__webpack_require__(/*! ./login-panel.page.scss */ "./src/app/panel/pages/login-panel/login-panel.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"]])
    ], LoginPanelPage);
    return LoginPanelPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-login-panel-login-panel-module.js.map