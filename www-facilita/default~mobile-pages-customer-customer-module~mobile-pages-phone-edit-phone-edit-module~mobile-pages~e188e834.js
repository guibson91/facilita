(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-customer-module~mobile-pages-phone-edit-phone-edit-module~mobile-pages~e188e834"],{

/***/ "./src/app/mobile/pages/phone-edit/phone-edit.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/phone-edit/phone-edit.module.ts ***!
  \**************************************************************/
/*! exports provided: PhoneEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneEditPageModule", function() { return PhoneEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _phone_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-edit.page */ "./src/app/mobile/pages/phone-edit/phone-edit.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PhoneEditPageModule = /** @class */ (function () {
    function PhoneEditPageModule() {
    }
    PhoneEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_phone_edit_page__WEBPACK_IMPORTED_MODULE_4__["PhoneEditPage"]],
            entryComponents: [_phone_edit_page__WEBPACK_IMPORTED_MODULE_4__["PhoneEditPage"]]
        })
    ], PhoneEditPageModule);
    return PhoneEditPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/phone-edit/phone-edit.page.html":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/phone-edit/phone-edit.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"app\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" left color=\"light\">\r\n      <ion-button icon-only (click)=\"dismiss()\" color=\"light\">\r\n        <ion-icon name=\"ios-arrow-back\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>TELEFONE</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-item color=\"transparent\" no-lines>\r\n      <h5 ion-text text-center color=\"medium\" text-wrap class=\"text-description\">\r\n        Para realizar um pedido você deve informar um Telefone válido, isso garante maior segurança e eficácia tanto para o estabelecimento\r\n        quanto para você\r\n      </h5>\r\n    </ion-item>\r\n    <form [formGroup]=\"form\">\r\n      <ion-item class=\"input-small input-phone shadow shadow-light\" tappable>\r\n        <ion-label position=\"stacked\" color=\"primary\"> Telefone </ion-label>\r\n        <ion-input type=\"tel\" formControlName=\"phone\" maxlength=\"15\" name=\"phone\" [brmasker]=\"{form: form.get('phone'), phone: true}\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer no-margin no-padding>\r\n  <ion-button no-margin no-padding size=\"large\" expand=\"block\" text-center type=\"submit\" [disabled]=\"!form.get('phone').value || !isNewPhone\" color=\"primary\"\r\n    (click)=\"registerPhone()\">\r\n    Salvar\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/mobile/pages/phone-edit/phone-edit.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/mobile/pages/phone-edit/phone-edit.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-phone {\n  padding-right: 16px;\n  padding-bottom: 16px;\n  background: white;\n  --background: white; }\n\n.text-description {\n  color: var(--ion-color-medium-shade); }\n"

/***/ }),

/***/ "./src/app/mobile/pages/phone-edit/phone-edit.page.ts":
/*!************************************************************!*\
  !*** ./src/app/mobile/pages/phone-edit/phone-edit.page.ts ***!
  \************************************************************/
/*! exports provided: PhoneEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneEditPage", function() { return PhoneEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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






var PhoneEditPage = /** @class */ (function () {
    function PhoneEditPage(platform, navParams, system, shared, loadingCtrl, modalCtrl, alertCtrl) {
        this.platform = platform;
        this.navParams = navParams;
        this.system = system;
        this.shared = shared;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    PhoneEditPage.prototype.ngOnInit = function () {
        this.system.setScreenName("PhoneEditPage");
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.shared.user.phone || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    PhoneEditPage.prototype.showWarning = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ops!',
                            subHeader: 'Você precisa digitar um telefone válido',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhoneEditPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss({ phone: '' });
    };
    PhoneEditPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ajuda',
                            message: 'Com o número do telefone aumenta a chance de eficácia de entrega.',
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
    /**
     * Voltar página sem salvar alterações
     */
    PhoneEditPage.prototype.cancel = function () {
        this.dismiss();
    };
    Object.defineProperty(PhoneEditPage.prototype, "isNewPhone", {
        /**
         * Salvar alterações e redirecionar para página anterior
         */
        get: function () {
            if (this.shared.user.phone == this.form.value.phone) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    PhoneEditPage.prototype.registerPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.value.phone.length < 14)) return [3 /*break*/, 1];
                        this.showWarning();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 2:
                        loading_1 = _a.sent();
                        loading_1.present();
                        _models_user__WEBPACK_IMPORTED_MODULE_1__["User"].update(this.shared.user.id, { phone: this.form.value.phone }).subscribe(function () {
                            loading_1.dismiss();
                            _this.modalCtrl.dismiss({ phone: _this.form.value.phone });
                            _this.system.logEvent("save_phone");
                        }, function (error) {
                            loading_1.dismiss();
                            _this.system.showErrorAlert(error);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], PhoneEditPage.prototype, "user", void 0);
    PhoneEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone-edit',
            template: __webpack_require__(/*! ./phone-edit.page.html */ "./src/app/mobile/pages/phone-edit/phone-edit.page.html"),
            styles: [__webpack_require__(/*! ./phone-edit.page.scss */ "./src/app/mobile/pages/phone-edit/phone-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], PhoneEditPage);
    return PhoneEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-customer-module~mobile-pages-phone-edit-phone-edit-module~mobile-pages~e188e834.js.map