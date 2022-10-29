(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-employee-employee-list-employee-list-module"],{

/***/ "./src/app/panel/pages/employee/employee-list/employee-list.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-list/employee-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPageModule", function() { return EmployeeListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list.page */ "./src/app/panel/pages/employee/employee-list/employee-list.page.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
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
        component: _employee_list_page__WEBPACK_IMPORTED_MODULE_5__["EmployeeListPage"]
    }
];
var EmployeeListPageModule = /** @class */ (function () {
    function EmployeeListPageModule() {
    }
    EmployeeListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_8__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_6__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employee_list_page__WEBPACK_IMPORTED_MODULE_5__["EmployeeListPage"]]
        })
    ], EmployeeListPageModule);
    return EmployeeListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/employee/employee-list/employee-list.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-list/employee-list.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Funcionários\" icon=\"menus-icon-servant-outline\" [helpPage]=\"8\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"detect()\">\r\n    </ion-searchbar>\r\n\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n\r\n        <ion-item no-lines padding *ngFor=\"let employee of employees | filterBy:['name']:searchString\" text-wrap>\r\n          <!-- Imagem -->\r\n          <nano-thumb item-left large=\"true\" [src]=\"employee.image\" [kind]=\"'person'\"></nano-thumb>\r\n          <!-- Nome -->\r\n          <h5 ion-text><b>{{employee.name}}</b></h5>\r\n\r\n          <!-- Filial alocada -->\r\n          <h5 ion-text padding-horizontal>{{filials[employee.filial_employee?.id]?.name || \"Gerente geral\"}}</h5>\r\n          <!-- Função -->\r\n          <h5 ion-text padding-horizontal>{{employee.permissions | printPermission}}</h5>\r\n\r\n          <ion-button fill=\"clear\" (click)=\"edit(employee)\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Editar\r\n          </ion-button>\r\n        </ion-item>\r\n\r\n        <ion-item text-center padding *ngIf=\"!existsEmployees\">\r\n          <p ion-text>Você ainda não possui nenhum funcionário</p>\r\n        </ion-item>\r\n      </ion-list>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/employee/employee-list/employee-list.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-list/employee-list.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/pages/employee/employee-list/employee-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/panel/pages/employee/employee-list/employee-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPage", function() { return EmployeeListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeListPage = /** @class */ (function () {
    function EmployeeListPage(navCtrl, ref, menuCtrl, route) {
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.menuCtrl = menuCtrl;
        this.route = route;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        this.filials = {};
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Se não possui funcionários
         * Se após baixar não vier funcuionários aí sim podemos garantir que não existem funcionários atualmente.
         * Usada para mostrar mensagem "Você ainda não possui funcionários".
         */
        this.existsEmployees = true;
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    EmployeeListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loading = true;
        this.existsEmployees = true;
        this.initSubscription = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (company) {
            if (!company)
                throw Error("Lista de funcionários sem ter definido a empresa");
            _this.company = company;
            var employees$ = _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].user_employees.list(company.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (employees) {
                // Verificar se não existe funcionários.
                if (employees && employees.length === 0) {
                    _this.existsEmployees = false;
                }
                else {
                    _this.existsEmployees = true;
                }
            }));
            var filials$ = company ? _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].filials
                .list(company.id) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                employees$,
                filials$
            ]);
        }))
            .subscribe(function (arr) {
            _this.employees = arr[0];
            var filials = arr[1];
            _this.filials = {};
            for (var _i = 0, filials_1 = filials; _i < filials_1.length; _i++) {
                var filial = filials_1[_i];
                _this.filials[filial.id] = filial;
            }
            // Não está mais carregando.
            _this.loading = false;
            console.log("O que aconteceu", _this.employees, _this.filials);
            _this.ref.detectChanges();
        });
    };
    EmployeeListPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    EmployeeListPage.prototype.ngOnDestroy = function () {
        if (this.initSubscription)
            this.initSubscription.unsubscribe();
    };
    EmployeeListPage.prototype.add = function () {
        this.navCtrl.navigateRoot(['employee/edit', { company_id: this.company.id }]);
    };
    EmployeeListPage.prototype.edit = function (employee) {
        this.navCtrl.navigateRoot(['employee/edit', { company_id: this.company.id, employee_id: employee.id }]);
    };
    EmployeeListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.page.html */ "./src/app/panel/pages/employee/employee-list/employee-list.page.html"),
            styles: [__webpack_require__(/*! ./employee-list.page.scss */ "./src/app/panel/pages/employee/employee-list/employee-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EmployeeListPage);
    return EmployeeListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-employee-employee-list-employee-list-module.js.map