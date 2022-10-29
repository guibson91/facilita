(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-employee-employee-edit-employee-edit-module"],{

/***/ "./src/app/panel/pages/employee/employee-edit/employee-edit.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-edit/employee-edit.module.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditPageModule", function() { return EmployeeEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _employee_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-edit.page */ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _employee_edit_page__WEBPACK_IMPORTED_MODULE_5__["EmployeeEditPage"]
    }
];
var EmployeeEditPageModule = /** @class */ (function () {
    function EmployeeEditPageModule() {
    }
    EmployeeEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employee_edit_page__WEBPACK_IMPORTED_MODULE_5__["EmployeeEditPage"]]
        })
    ], EmployeeEditPageModule);
    return EmployeeEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-edit/employee-edit.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Cadastrar/Editar funcionário\" icon=\"menus-icon-servant-outline\" [helpPage]=\"9\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <form [formGroup]=\"form\" class=\"form-content\">\r\n      <ion-list>\r\n\r\n        <!-- Imagem e barra de progresso -->\r\n        <nano-uploadimage [form]=\"this.form\" [storagePath]=\"'users'\"></nano-uploadimage>\r\n\r\n        <!--Nome-->\r\n        <ion-item padding-horizontal>\r\n          <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n          <ion-input formControlName=\"name\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!--Email-->\r\n        <ion-item padding-horizontal>\r\n          <ion-label position=\"stacked\" color=\"tertiary\">Email</ion-label>\r\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!--Senha-->\r\n        <ion-item padding-horizontal>\r\n          <ion-label position=\"stacked\" color=\"tertiary\" *ngIf=\"!employee\">Senha</ion-label>\r\n          <ion-label position=\"stacked\" color=\"tertiary\" *ngIf=\"employee\">Nova senha</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n          <ion-button fill=\"clear\" (click)=\"generatePassword()\" color=\"tertiary\">Gerar senha aleatória</ion-button>\r\n        </ion-item>\r\n\r\n        <!-- Se o usuário é da empresa ou da filial -->\r\n        <h4 ion-text padding-horizontal>Tipo de funcionário:</h4>\r\n        <ion-radio-group [(ngModel)]=\"typeOfEmployee\" [ngModelOptions]=\"{standalone: true}\">\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Administrador da empresa</ion-label>\r\n            <ion-radio value=\"company\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Funcionário de uma filial</ion-label>\r\n            <ion-radio value=\"filial\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n        <!-- Permissão -->\r\n        <div *ngIf=\"typeOfEmployee === 'filial'\">\r\n          <h4 ion-text padding-horizontal text-bold>Permissões do funcionário da filial:</h4>\r\n          <ion-radio-group [(ngModel)]=\"levelOfFilialPermission\" [ngModelOptions]=\"{standalone: true}\">\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Gerenciar todo o estabelecimento</ion-label>\r\n              <ion-radio value=\"manager\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Gerenciar somente os pedidos</ion-label>\r\n              <ion-radio value=\"cashier\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n        <!-- Filial -->\r\n        <nano-loading [loading]=\"loadingFilials\" [hidden]=\"typeOfEmployee !== 'filial'\">\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Filial do funcionário</ion-label>\r\n            <ion-select formControlName=\"filialId\" submitText=\"Ok\" cancelText=\"Cancelar\">\r\n              <ion-select-option class=\"dropdown-filials\" *ngFor=\"let filial of filials$ | async\" [value]=\"filial.id\">{{filial.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </nano-loading>\r\n\r\n        <nano-error [error]=\"error\"></nano-error>\r\n        <nano-buttons [canSave]=\"form.valid\" [save]=\"save.bind(this)\" [canRemove]=\"employee\" [remove]=\"remove.bind(this)\"\r\n          [cancel]=\"back.bind(this)\"></nano-buttons>\r\n\r\n      </ion-list>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-edit/employee-edit.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select .select-text {\n  padding-left: 8px; }\n\nnano-buttons .button-clear-md-danger {\n  margin-left: -6px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.itens-permission {\n  margin-top: -20px !important; }\n\n.itens-permission .item.item-md .checkbox-md {\n    margin: 9px 14px 2px 4px !important; }\n\n.permissions {\n  padding-bottom: 1em; }\n"

/***/ }),

/***/ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-edit/employee-edit.page.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditPage", function() { return EmployeeEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/user */ "./src/models/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/util */ "./src/app/util/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EmployeeEditPage = /** @class */ (function () {
    function EmployeeEditPage(navCtrl, formBuilder, shared, authentication, ref, route, menuCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.shared = shared;
        this.authentication = authentication;
        this.ref = ref;
        this.route = route;
        this.menuCtrl = menuCtrl;
        /**
         * Referência para usar o array de permissões na view
         */
        this.Permission = _models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"];
        /**
         * Senha do usuário
         */
        this.password = "";
    }
    EmployeeEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.initForm();
        this.loading = true;
        this.loadingFilials = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"].object(params.get('company_id'));
            else if (_this.shared.isManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        var employee$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (params) {
            if (params.get('employee_id'))
                return _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].object(params.get('employee_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            company$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (company) {
                _this.company = company;
                if (!company) {
                    console.error("Sem empresa");
                    //this.navCtrl.setRoot(HomePage)
                    return;
                }
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (company) {
                _this.filials$ = _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"].filials.list(company.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                    _this.loadingFilials = false;
                }));
            })),
            employee$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (employee) {
                _this.employee = employee;
                _this.loading = false;
                _this.ref.detectChanges();
                if (_this.employee) {
                    if (_this.employee.filial_employee && _this.employee.filial_employee.id) {
                        _this.filialIdOld = _this.employee.filial_employee.id;
                        _this.form.patchValue({
                            filialId: _this.filialIdOld
                        });
                        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["elementIsInsideArray"])(_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].COMPANY_MANAGEMENT, _this.employee.permissions)) {
                            _this.typeOfEmployee = "company";
                        }
                        else if (Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["elementIsInsideArray"])(_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].FILIAL_MANAGEMENT, _this.employee.permissions)) {
                            _this.typeOfEmployee = "filial";
                            _this.levelOfFilialPermission = "manager";
                        }
                        else if (Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["elementIsInsideArray"])(_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER, _this.employee.permissions) && Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["elementIsInsideArray"])(_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER_READ, _this.employee.permissions)) {
                            _this.typeOfEmployee = "filial";
                            _this.levelOfFilialPermission = "cashier";
                        }
                    }
                    _this.emailOld = _this.employee.email;
                    _this.form.patchValue(_this.employee);
                }
            }))
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function () {
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    EmployeeEditPage.prototype.generatePassword = function () {
        this.password = Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["makeRandomString"])(6);
    };
    EmployeeEditPage.prototype.initForm = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [''],
            filialId: [''] // utilizado somente para gerar o relacionamento
        });
        this.form.valueChanges.subscribe(function () {
            _this.ref.detectChanges();
        });
    };
    /**
     * Voltar página sem salvar alterações
     */
    EmployeeEditPage.prototype.back = function () {
        this.navCtrl.navigateRoot(['employee/list', { company_id: this.company.id }]);
    };
    /**
     * Remover usuário e autenticação
     */
    EmployeeEditPage.prototype.remove = function () {
        var relationships = [
            {
                relationship: _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].company_employee,
                removeId: this.company.id
            }
        ];
        if (this.typeOfEmployee === 'filial') {
            relationships.push({
                relationship: _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].filial_employee,
                removeId: this.filialIdOld
            });
        }
        return _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].remove(this.employee.id, relationships);
    };
    /**
     * Salvar alterações e redirecionar para página anterior.
     * Tanto para criar novo registro, quanto para atualizá-lo
     */
    EmployeeEditPage.prototype.save = function () {
        var _this = this;
        var filialId = this.form.value.filialId;
        return this.userFromForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function (employee) {
            //Atualizar usuário e autenticação
            if (_this.employee) {
                var obs$ = void 0;
                if (employee.email != _this.emailOld || _this.password.length > 0) {
                    obs$ = _this.authentication.changePassword(_this.employee.id, employee.email, _this.password);
                }
                else {
                    obs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
                }
                return obs$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
                    return _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].update(_this.employee.id, employee, [
                        {
                            relationship: _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].filial_employee,
                            id: (_this.typeOfEmployee === 'filial' ? filialId : undefined),
                            removeId: _this.filialIdOld
                        }
                        //Não é possível modificar relação de usuário com a empresa
                    ]);
                }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                    _this.back();
                }));
            }
            //Cadastro de usuário e autenticação
            else {
                return _this.authentication.register(employee.email, _this.password)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function (user_key) {
                    var relationships = [
                        {
                            relationship: _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].company_employee,
                            id: _this.company.id
                        }
                    ];
                    if (_this.typeOfEmployee === 'filial') {
                        relationships.push({
                            relationship: _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].filial_employee,
                            id: filialId
                        });
                    }
                    return _models_user__WEBPACK_IMPORTED_MODULE_3__["User"].update(user_key, employee, relationships);
                }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
                    _this.back();
                }));
            }
        }));
    };
    /**
     * Baseado nas informações do formulário
     * criar o respectivo usuário
     */
    EmployeeEditPage.prototype.userFromForm = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () {
            var user = Object.assign({}, _this.form.value);
            if (_this.form.value)
                //Verifica se a senha é válida
                if (_this.form.value.password && _this.form.value.password.length < 6) {
                    throw Error('Sua senha deve conter pelo menos 6 caracteres');
                }
            //Verifica se o email é válido
            if (!Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["validateEmail"])(_this.form.value.email)) {
                throw Error("Por favor, digite um email válido");
            }
            if (_this.typeOfEmployee === "filial" && !user['filialId']) {
                throw Error("Por favor selecione qual filial esse funcionário irá trabalhar.");
            }
            if (user['filialId'])
                delete user['filialId'];
            if (user['password'])
                delete user['password'];
            if (user['password2'])
                delete user['password2'];
            /**
             * Atribuindo as permissões de acordo com o que foi selecionado
             */
            switch (_this.typeOfEmployee) {
                case "filial":
                    switch (_this.levelOfFilialPermission) {
                        case "manager":
                            user.permissions = [_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].FILIAL_MANAGEMENT, _models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER, _models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER_READ];
                            break;
                        case "cashier":
                            user.permissions = [_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER, _models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].ORDER_READ];
                            break;
                        default:
                            throw Error("Não foi selecionado nível de permissão do funcionário da filial");
                    }
                    break;
                case "company":
                    user.permissions = [_models_user__WEBPACK_IMPORTED_MODULE_3__["Permission"].COMPANY_MANAGEMENT];
                    break;
                default:
                    throw Error("Não foi selecionado o tipo de funcionário(se é um administrador da empresa ou funcionário de uma filial)");
            }
            return user;
        }));
    };
    EmployeeEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.page.html */ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.html"),
            styles: [__webpack_require__(/*! ./employee-edit.page.scss */ "./src/app/panel/pages/employee/employee-edit/employee-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], EmployeeEditPage);
    return EmployeeEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-employee-employee-edit-employee-edit-module.js.map