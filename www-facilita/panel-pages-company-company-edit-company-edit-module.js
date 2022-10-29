(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-company-company-edit-company-edit-module"],{

/***/ "./src/app/panel/pages/company/company-edit/company-edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-edit/company-edit.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditPageModule", function() { return CompanyEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _company_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-edit.page */ "./src/app/panel/pages/company/company-edit/company-edit.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _company_edit_page__WEBPACK_IMPORTED_MODULE_5__["CompanyEditPage"]
    }
];
var CompanyEditPageModule = /** @class */ (function () {
    function CompanyEditPageModule() {
    }
    CompanyEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_company_edit_page__WEBPACK_IMPORTED_MODULE_5__["CompanyEditPage"]]
        })
    ], CompanyEditPageModule);
    return CompanyEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/company/company-edit/company-edit.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-edit/company-edit.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Configurações da empresa\" icon=\"menus-icon-settings-gear\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n\r\n          <!-- Informações da empresa -->\r\n          <ion-item-divider color=\"light\">\r\n            <h3 ion-text>Informações da empresa</h3>\r\n          </ion-item-divider>\r\n\r\n          <!--Nome-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input formControlName=\"name\" maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- Ativar ou desativar a empresa -->\r\n          <ion-item padding-horizontal *ngIf=\"isTEAM\">\r\n            <ion-label>Empresa ativa</ion-label>\r\n            <ion-checkbox formControlName=\"active\"></ion-checkbox>\r\n          </ion-item>\r\n          <h4>Configurações do menu lateral</h4>\r\n          <p>Essas opções não impedem os usuários de verem a empresa no setor de delivery ou no setor de promoção</p>\r\n          <p>São apenas para o controle do que é visível no menu lateral. Muito cuidado ao desativar delivery de uma empresa que possui filiais de delivery abertas em produção.</p>\r\n          <!-- Ativar ou desativar a empresa -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Essa empresa faz delivery?</ion-label>\r\n            <ion-checkbox formControlName=\"delivery\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n          <!-- Ativar ou desativar a empresa -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Essa empresa faz promoções?</ion-label>\r\n            <ion-checkbox formControlName=\"promotion\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n          <!-- Taxa específica a ser cobrada pelo restaurante -->\r\n          <!-- <ion-item padding-horizontal *ngIf=\"isTEAM\">\r\n            <ion-label stacked color=\"tertiary\">Taxa</ion-label>\r\n            <money-input item-content [control]=\"form.controls['tax']\"></money-input>\r\n          </ion-item> -->\r\n\r\n          <nano-buttons\r\n            [cancel]=\"cancel.bind(this)\"\r\n            [canSave]=\"form.valid\"\r\n            [save]=\"save.bind(this)\"\r\n            [canRemove]=\"company && isTEAM\"\r\n            [remove]=\"remove.bind(this)\"></nano-buttons>\r\n\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/company/company-edit/company-edit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/company/company-edit/company-edit.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-left: 1.5em; }\n\np {\n  margin-left: 2.2em;\n  line-height: 1em; }\n"

/***/ }),

/***/ "./src/app/panel/pages/company/company-edit/company-edit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/company/company-edit/company-edit.page.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditPage", function() { return CompanyEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompanyEditPage = /** @class */ (function () {
    function CompanyEditPage(navCtrl, formBuilder, shared, menuCtrl, route, ref, system) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.shared = shared;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.ref = ref;
        this.system = system;
        /**
         * Carregando a página
         */
        this.loading = true;
    }
    Object.defineProperty(CompanyEditPage.prototype, "isTEAM", {
        get: function () {
            return this.shared.isTeam;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inicializando estruturas após entrar na página.
     */
    CompanyEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            active: [false],
            delivery: [true],
            promotion: [true]
        });
        this.form.valueChanges.subscribe(function () {
            _this.ref.detectChanges();
        });
        this.menuCtrl.enable(true);
        this.loading = true;
        //Obter dados do objeto selecionado para edição (caso houver)
        this.route.paramMap.
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (params) {
            if (params.get('id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_2__["Company"].object(params.get('id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (company) {
            _this.company = company;
            if (_this.company) {
                _this.form.patchValue(_this.company);
            }
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.system.showErrorAlert(err);
        });
    };
    /**
     * Voltar página sem salvar alterações
     */
    CompanyEditPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot('company/list');
    };
    /**
     * Remove empresa do database
     */
    CompanyEditPage.prototype.remove = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(new Error("Esse método não foi implementado"));
        /**
         * @todo desativar logins do proprietário e funcionários
         * @todo retirar o empresa da lista de exibição da aplicação,
         * mas permanecer com todos os seus dados e seus relacionamentos
         */
    };
    /**
     * Salvar alterações e redirecionar para página anterior
     */
    CompanyEditPage.prototype.save = function () {
        var _this = this;
        //Atualizar usuário e autenticação
        if (this.company) {
            return _models_company__WEBPACK_IMPORTED_MODULE_2__["Company"].update(this.company.id, this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                if (_this.shared.isManager)
                    _this.shared.company$.next(_this.company);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                _this.cancel();
            }));
        }
        //Página de registro, criar novo objeto no database
        else {
            return _models_company__WEBPACK_IMPORTED_MODULE_2__["Company"].add(this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    CompanyEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-edit',
            template: __webpack_require__(/*! ./company-edit.page.html */ "./src/app/panel/pages/company/company-edit/company-edit.page.html"),
            styles: [__webpack_require__(/*! ./company-edit.page.scss */ "./src/app/panel/pages/company/company-edit/company-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"]])
    ], CompanyEditPage);
    return CompanyEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-company-company-edit-company-edit-module.js.map