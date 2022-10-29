(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-customer-module~mobile-pages-evaluate-order-evaluate-order-module"],{

/***/ "./src/app/mobile/pages/evaluate-order/evaluate-order.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/pages/evaluate-order/evaluate-order.module.ts ***!
  \**********************************************************************/
/*! exports provided: EvaluateOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateOrderPageModule", function() { return EvaluateOrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _evaluate_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evaluate-order.page */ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EvaluateOrderPageModule = /** @class */ (function () {
    function EvaluateOrderPageModule() {
    }
    EvaluateOrderPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_6__["MobileComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            declarations: [_evaluate_order_page__WEBPACK_IMPORTED_MODULE_4__["EvaluateOrderPage"]],
            entryComponents: [_evaluate_order_page__WEBPACK_IMPORTED_MODULE_4__["EvaluateOrderPage"]]
        })
    ], EvaluateOrderPageModule);
    return EvaluateOrderPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/pages/evaluate-order/evaluate-order.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\" hideBackButton=\"true\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-default\">\r\n      <h3 ion-text class=\"my-font-logo\" no-margin>AVALIAÇÃO</h3>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content margin-top>\r\n\r\n  <mr-card-filial [order]=\"order\" [filial]=\"order.filial_full\" [phone]=\"true\"></mr-card-filial>\r\n\r\n  <ion-item class=\"shadow shadow-light  \">\r\n    <div class=\"satisfaction\">\r\n      <p text-center text-wrap>Você ficou satisfeito com esse pedido?</p>\r\n      <!-- <rating class=\"rating\" [(ngModel)]=\"rate\" (ngModelChange)=\"onModelChange($event)\"></rating> -->\r\n      <rating [quantity]=\"5\" [size]=\"'large'\" (changeStar)=\"changeStar($event)\"></rating>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <div class=\"bg-white padding-left shadow shadow-light\">\r\n    <ion-item no-padding no-lines margin-top>\r\n      <div margin-left>\r\n        <p text-wrap>Deixe seu comentário</p>\r\n      </div>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding style=\"margin-top: -1em\">\r\n      <ion-label></ion-label>\r\n      <ion-textarea [(ngModel)]=\"comment\" name=\"description\" rows=\"6\" placeholder=\"Escreva um elogio, crítica ou sugestão para o restaurante...\"></ion-textarea>\r\n    </ion-item>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"block\" size=\"large\" color=\"primary\" class=\"button-bottom my-font-logo\" [disabled]=\"!rate\" (click)=\"finishOrder()\">\r\n    ENVIAR AVALIAÇÃO\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/mobile/pages/evaluate-order/evaluate-order.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  background: white !important;\n  --background: white !important; }\n  ion-item p {\n    font-size: 1.1em !important;\n    color: var(--ion-color-medium) !important; }\n  .button-bottom {\n  margin: 0 !important; }\n  textarea {\n  background-color: white !important; }\n  div.satisfaction {\n  padding-left: 10px !important; }\n  .bg-white {\n  background: white !important; }\n  .padding-left {\n  padding-left: 10px !important; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/evaluate-order/evaluate-order.page.ts ***!
  \********************************************************************/
/*! exports provided: EvaluateOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateOrderPage", function() { return EvaluateOrderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
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






var EvaluateOrderPage = /** @class */ (function () {
    function EvaluateOrderPage(navCtrl, navParams, loadingCtrl, system, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.system = system;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.order = this.navParams.get('order');
    }
    EvaluateOrderPage.prototype.ionViewDidEnter = function () {
        this.system.setScreenName("EvaluateOrderPage");
    };
    EvaluateOrderPage.prototype.changeStar = function (ev) {
        this.rate = ev;
    };
    EvaluateOrderPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    EvaluateOrderPage.prototype.finishOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, objOrder;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        if (!this.rate && !this.comment) {
                            loading.dismiss();
                            this.dismiss();
                        }
                        else {
                            objOrder = {};
                            objOrder.evaluate = {
                                created_at: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.fromDate(new Date())
                            };
                            //Se houver comentário
                            if (this.comment && this.comment.trim().length > 0) {
                                objOrder.evaluate.comment = this.comment;
                            }
                            if (this.rate) {
                                objOrder.evaluate.rate = this.rate;
                            }
                            //Deve-se atualizar Order (registrar a avaliação do usuário) e Filial (calcular nova média de satisfação)
                            if (this.rate) {
                                objOrder.evaluate.rate = this.rate;
                                _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"].update(this.order.id, objOrder).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var toast;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                    message: "Sua avalia\u00E7\u00E3o foi enviada com sucesso!",
                                                    position: 'bottom',
                                                    duration: 1500
                                                })];
                                            case 1:
                                                toast = _a.sent();
                                                toast.present();
                                                loading.dismiss();
                                                this.modalCtrl.dismiss();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, function (error) {
                                    _this.system.showErrorAlert(error);
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluateOrderPage.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Avalie e caso queira, deixe uma mensagem para ajudar o restaurante a melhorar seus servições. Apenas o restaurante poderá ver sua avaliação!',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EvaluateOrderPage.prototype.onModelChange = function (currentRate) {
        //@todo Realizar avaliações mais elaboradas no futuro se nota menor q 5 estrelas
    };
    EvaluateOrderPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluate-order',
            template: __webpack_require__(/*! ./evaluate-order.page.html */ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.html"),
            styles: [__webpack_require__(/*! ./evaluate-order.page.scss */ "./src/app/mobile/pages/evaluate-order/evaluate-order.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], EvaluateOrderPage);
    return EvaluateOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-customer-module~mobile-pages-evaluate-order-evaluate-order-module.js.map