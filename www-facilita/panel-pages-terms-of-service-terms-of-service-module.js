(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-terms-of-service-terms-of-service-module"],{

/***/ "./src/app/panel/pages/terms-of-service/terms-of-service.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/terms-of-service/terms-of-service.module.ts ***!
  \*************************************************************************/
/*! exports provided: TermsOfServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicePageModule", function() { return TermsOfServicePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _terms_of_service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-of-service.page */ "./src/app/panel/pages/terms-of-service/terms-of-service.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _terms_of_service_page__WEBPACK_IMPORTED_MODULE_5__["TermsOfServicePage"]
    }
];
var TermsOfServicePageModule = /** @class */ (function () {
    function TermsOfServicePageModule() {
    }
    TermsOfServicePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_terms_of_service_page__WEBPACK_IMPORTED_MODULE_5__["TermsOfServicePage"]]
        })
    ], TermsOfServicePageModule);
    return TermsOfServicePageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/terms-of-service/terms-of-service.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/terms-of-service/terms-of-service.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center><strong>Termos de uso</strong></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div [hidden]=\"loading\">\r\n    <p>\r\n      Facilita e Parceiro são doravante denominados, individual e indistintamente, “Parte” e, conjuntamente, “Partes”.\r\n      As Partes acordam que o presente contrato é totalmente paritário e firmado por duas pessoas jurídicas ou físicas\r\n      capazes na forma da legislação brasileira, do qual este\r\n      instrumento será disciplinado pelas cláusulas aqui estabelecidas, bem como legislação brasileira civil aplicável.\r\n\r\n      <br />\r\n      As Partes acima identificadas têm, entre si, justo e acertado, o presente documento, que se regerá pelas\r\n      seguintes cláusulas e condições:\r\n\r\n      <br />\r\n      <strong>I.</strong> Que a <b>facilita</b>​ é uma empresa cuja atividade principal é a intermediação,\r\n      desenvolvimento e gerenciamento de uma plataforma digital (“​App​” ou “​plataforma​”) a qual permite que uma\r\n      pessoa física ou jurídica (“Usuário-comprador” ou “comprador”) solicite um ou mais produtos disponíveis na\r\n      plataforma digital <b>facilita</b> oferecidos por estabelecimentos comerciais locais (“​<b>Parceiro</b>​”) de\r\n      algumas cidades do território brasileiro para que seja entregue em local específico e determinado pelo\r\n      Usuário-comprador aquela determinada aquisição, sendo necessário, por parte do comprador, efetivar a aquisição\r\n      através de pagamento do produto por intermédio de um dos meios de pagamento disponibilizados pelo <b>Parceiro</b>.\r\n\r\n      <br />\r\n      <strong>II.</strong> Que a <b>facilita</b> atuará, essencialmente, como plataforma intermediária entre o\r\n      Usuário-comprador e <b>Parceiro</b>\r\n\r\n      <br />\r\n      <strong>III.</strong> Que o <b>PARCEIRO</b> está interessado em comercializar seus produtos e/ou serviços ao\r\n      Usuário-comprador da <b>facilita</b>\r\n      por​ meio deste App e se beneficiar da\r\n      intermediação com terceiros.\r\n\r\n      <br />\r\n      <strong>IV. </strong> Que o <b>Parceiro</b> repassará ao <b>facilita</b> um valor base de R$ 90,00 ou % de tudo\r\n      que for\r\n      comercializado pelo\r\n      <b>Parceiro</b> através do app <b>facilita</b>, pelo uso da plataforma e equipamento dispositivo disponibilizado\r\n      ao <b>PARCEIRO</b>,\r\n      em conformidade com a cláusula do T&C.\r\n      <strong>V. </strong> O não pagamento das taxas devidas pelo uso dos serviços ofertados pela <b>facilita</b>,\r\n      acarretará\r\n      o automático\r\n      cancelamento do serviço após 30 dias contados a partir do último pagamento não realizado.\r\n\r\n      <br />\r\n      <strong>VI. </strong> Que o presente instrumento integra em totalidade o “Termos e Condições para Parceiro\r\n      facilita” (“T&C”) o qual\r\n      declara haver lido, compreendido e aceitado. Sendo que as Partes firmam sua concordância conforme assinatura\r\n      indicada abaixo.\r\n\r\n      <br />\r\n      <strong>VII. </strong>Que, havendo as Partes estabelecido a forma, os termos e as condições que irão reger a sua\r\n      relação contratual, têm entre si, justas e acordadas o presente instrumento.\r\n\r\n    </p>\r\n    <ion-item>\r\n      <ion-label text-wrap>Eu aceito os termos de uso</ion-label>\r\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"acceptedterms\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-button padding expand=\"block\" (click)=\"acceptTermsOfUse()\" [disabled]=\"!acceptedterms\">\r\n      <p ion-text>Continuar</p>\r\n    </ion-button>\r\n\r\n  </div>\r\n  <div class=\"spinner-center\" [hidden]=\"!loading\" padding padding>\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/terms-of-service/terms-of-service.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/terms-of-service/terms-of-service.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  width: 35px;\n  height: 35px; }\n\np {\n  width: 50%;\n  margin-left: 25%;\n  text-align: justify; }\n\nion-item {\n  margin-left: 24%; }\n\nion-button {\n  width: 50%;\n  margin-left: 24%;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/panel/pages/terms-of-service/terms-of-service.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/terms-of-service/terms-of-service.page.ts ***!
  \***********************************************************************/
/*! exports provided: TermsOfServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicePage", function() { return TermsOfServicePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage(shared, navCtrl, ref, system) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.system = system;
        this.acceptedterms = false;
    }
    TermsOfServicePage.prototype.acceptTermsOfUse = function () {
        var _this = this;
        this.loading = true;
        this.ref.detectChanges();
        this.shared.user$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
            user.accept_terms_use = true;
            return _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].update(user.id, {
                accept_terms_use: true
            });
        }))
            .subscribe(function () {
            _this.navCtrl.navigateRoot(_this.shared.rootPage);
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    TermsOfServicePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-of-service',
            template: __webpack_require__(/*! ./terms-of-service.page.html */ "./src/app/panel/pages/terms-of-service/terms-of-service.page.html"),
            styles: [__webpack_require__(/*! ./terms-of-service.page.scss */ "./src/app/panel/pages/terms-of-service/terms-of-service.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"]])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-terms-of-service-terms-of-service-module.js.map