(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-coupon-coupon-edit-coupon-edit-module"],{

/***/ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-edit/coupon-edit.module.ts ***!
  \**********************************************************************/
/*! exports provided: CouponEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponEditPageModule", function() { return CouponEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _coupon_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon-edit.page */ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.ts");
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
        component: _coupon_edit_page__WEBPACK_IMPORTED_MODULE_5__["CouponEditPage"]
    }
];
var CouponEditPageModule = /** @class */ (function () {
    function CouponEditPageModule() {
    }
    CouponEditPageModule = __decorate([
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
            declarations: [_coupon_edit_page__WEBPACK_IMPORTED_MODULE_5__["CouponEditPage"]]
        })
    ], CouponEditPageModule);
    return CouponEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <nano-navbar title=\"Criar/Editar Cupons\" icon=\"menus-icon-ecommerce-46\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n\r\n      <!-- Informações do  CUPOM -->\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n\r\n          <!-- Nome -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input class=\"input-name\" style=\"text-transform: uppercase !important;\" formControlName=\"name\"\r\n              maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- Descrição -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Descrição</ion-label>\r\n            <ion-textarea class=\"input\" rows=\"5\" formControlName=\"description\"></ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Definir se o cupom será por valor ou por porcentagem -->\r\n          <h5 ion-text padding-horizontal margin-top margin-bottom>\r\n            Definir o tipo do cupom\r\n          </h5>\r\n          <ion-radio-group [(ngModel)]=\"couponType\" [ngModelOptions]=\"{standalone: true}\">\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir valor de desconto</ion-label>\r\n              <ion-radio value=\"money\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir porcentagem de desconto</ion-label>\r\n              <ion-radio value=\"percentage\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir frete grátis</ion-label>\r\n              <ion-radio value=\"free\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n          <!-- Preço do CUPOM por valor -->\r\n          <ion-item padding-horizontal item-content *ngIf=\"couponType == 'money' \">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Valor de desconto (em R$)</ion-label>\r\n            <money-input item-content [control]=\"form.controls['money']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!-- Preço do CUPOM por porcentagem -->\r\n          <ion-item padding-horizontal item-content *ngIf=\"couponType == 'percentage'\">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Porcentagem de desconto</ion-label>\r\n            <money-input item-content [control]=\"form.controls['percentage']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!-- Data de expiração -->\r\n          <ion-item class=\"date-filter\">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Data de expiração</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" cancelText=\"Cancelar\" doneText=\"Ok\" formControlName=\"finished_at\"\r\n              [min]=\"currentYear\" [max]=\"nextYear\"></ion-datetime>\r\n          </ion-item>\r\n\r\n          <!-- Lista de Filiais disponíveis para ativação do cupom -->\r\n          <h5 ion-text padding-horizontal margin-top margin-bottom>\r\n            Escolha os estabelecimentos que serão permitidos o uso do CUPOM\r\n          </h5>\r\n          <ion-item *ngFor=\"let option of options\">\r\n            <ion-label>{{option.name}}</ion-label>\r\n            <ion-checkbox [(ngModel)]=\"option.active\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n    <nano-buttons [canSave]=\"form.valid\" [save]=\"save.bind(this)\" [canRemove]=\"coupon\" [remove]=\"remove.bind(this)\"\r\n      [cancel]=\"cancel.bind(this)\"></nano-buttons>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-datetime {\n  border: 1px solid lightgray; }\n\n.text-input {\n  text-transform: uppercase !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.ts ***!
  \********************************************************************/
/*! exports provided: CouponEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponEditPage", function() { return CouponEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_coupon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/coupon */ "./src/models/coupon.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CouponEditPage = /** @class */ (function () {
    function CouponEditPage(navCtrl, shared, system, couponProvider, ref, menuCtrl, route, formBuilder) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.system = system;
        this.couponProvider = couponProvider;
        this.ref = ref;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.fromTeam = true;
        this.options = [];
        this.optionsOld = [];
        this.currentYear = new Date().getFullYear();
        this.nextYear = new Date().getFullYear() + 1;
    }
    /**
     * Inicializar a lista de relacionamentos.
     */
    CouponEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.menuCtrl.enable(true);
        this.loading = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_5__["Company"].object(params.get('company_id'));
            else if (_this.shared.isManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (company) {
            _this.company = company;
        }));
        var coupon$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (params) {
            console.log("ParamMap", params, params.get('coupon_id'));
            if (params.get('coupon_id'))
                return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].object(params.get('coupon_id'));
            else if (_this.shared.isManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (coupon) {
            console.log("Recebeu o cupom!", coupon);
            _this.coupon = coupon;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            company$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (company) {
                var filials$;
                if (_this.shared.isManager) {
                    filials$ = _models_company__WEBPACK_IMPORTED_MODULE_5__["Company"].filials.list(company.id);
                }
                else if (_this.shared.isFilialManager) {
                    filials$ = _this.shared.filial$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (filial) {
                        return [filial];
                    }));
                }
                else { // Apenas se for TEAM
                    filials$ = _models_filial__WEBPACK_IMPORTED_MODULE_3__["Filial"].list();
                }
                return filials$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (filials) {
                    _this.filials = filials;
                }));
            })),
            coupon$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
            .subscribe(function () {
            //Página de edição
            if (_this.coupon) {
                _this.form.patchValue(_this.coupon);
                if (_this.coupon.finished_at) {
                    _this.form.patchValue({
                        finished_at: _this.coupon.finished_at.toDate().toISOString()
                    });
                }
                if (_this.coupon.money) {
                    _this.couponType = 'money';
                }
                else if (_this.coupon.percentage) {
                    _this.couponType = 'percentage';
                }
                else {
                    _this.couponType = 'free';
                }
                _this.couponProvider.getFilialsFromCoupon(_this.coupon.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
                    .subscribe(function (filialsActive) {
                    console.log("Filiais ATIVAS do cupom: ", filialsActive);
                    _this.filials.forEach(function (filial) {
                        var founded = false;
                        filialsActive.forEach(function (filialsActive) {
                            if (filialsActive.id == filial.id) {
                                _this.options.push({
                                    name: filial.name,
                                    id: filial.id,
                                    company_id: filial.company.id,
                                    active: true
                                });
                                _this.optionsOld.push({
                                    name: filial.name,
                                    id: filial.id,
                                    company_id: filial.company.id,
                                    active: true
                                });
                                founded = true;
                                return;
                            }
                        });
                        if (!founded) {
                            _this.options.push({
                                name: filial.name,
                                id: filial.id,
                                company_id: filial.company.id,
                                active: false
                            });
                            _this.optionsOld.push({
                                name: filial.name,
                                id: filial.id,
                                company_id: filial.company.id,
                                active: false
                            });
                        }
                    });
                    _this.loading = false;
                    _this.ref.detectChanges();
                }, function (err) {
                    _this.system.showErrorAlert(err);
                    _this.loading = false;
                    _this.ref.detectChanges();
                });
            }
            else {
                _this.filials.forEach(function (filial) {
                    _this.options.push({
                        name: filial.name,
                        id: filial.id,
                        company_id: filial.company.id,
                        active: false
                    });
                });
                _this.loading = false;
                _this.ref.detectChanges();
            }
        }, function (err) {
            _this.system.showErrorAlert(err);
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    CouponEditPage.prototype.initForm = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            money: [null],
            percentage: [null],
            finished_at: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.form.valueChanges.subscribe(function (data) {
            _this.ref.detectChanges();
        });
    };
    /**
    * Salvar alterações e redirecionar para página anterior
    */
    CouponEditPage.prototype.save = function () {
        var _this = this;
        var newCoupon = this.form.value;
        newCoupon.created_at = firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.serverTimestamp();
        if (this.shared.isTeam) {
            newCoupon.fromTeam = true;
        }
        else {
            newCoupon.fromTeam = false;
        }
        if (this.couponType == 'money') {
            newCoupon.percentage = null;
            newCoupon.freeShipping = false;
        }
        else if (this.couponType == 'percentage') {
            newCoupon.money = null;
            newCoupon.freeShipping = false;
        }
        else {
            newCoupon.freeShipping = true;
            newCoupon.percentage = null;
            newCoupon.money = null;
        }
        //Array de objetos que contém a relação e os ids das filiais que fazem parte do CUPOM
        var relationObjs = [];
        //Salvar tudo no padrão maiúsculo
        newCoupon.name = newCoupon.name.trim().toUpperCase();
        newCoupon.description = newCoupon.description.toUpperCase();
        newCoupon.finished_at = firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].Timestamp.fromDate(new Date(newCoupon.finished_at));
        if (this.couponType == 'money' && !this.form.value.money) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(Error("Você precisa definir o valor do desconto"));
        }
        if (this.couponType == 'percentage' && !this.form.value.percentage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(Error("Você precisa definir a porcentagem de desconto"));
        }
        // Página de edição, atualizar objeto no database
        if (this.coupon) {
            relationObjs = [];
            for (var i = 0; i < this.options.length; i++) {
                //Se a Filial foi marcada agora (antes não estava marcada)
                if (this.options[i].active && !this.optionsOld[i].active) {
                    //Adicionar relação com Filial
                    relationObjs.push({
                        relationship: _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].filial,
                        id: this.options[i].id
                    });
                }
                //Se a Filial foi desmarcada (antes estava marcada)
                else if (!this.options[i].active && this.optionsOld[i].active) {
                    console.log("Opção a ser removida: ", this.options[i]);
                    //Remover relação
                    relationObjs.push({
                        relationship: _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].filial,
                        removeId: this.options[i].id
                    });
                }
            }
            console.log("ATUALIZAR CUPOM. RELAÇÕES: ", relationObjs);
            return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].list([{
                    name: 'name',
                    operator: '==',
                    value: newCoupon.name
                }])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (coupons) {
                console.log("Cupons após filtrado a busca por nome: ", coupons);
                //Já existe um cupom com esse nome
                if (coupons && coupons.length > 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(Error("Já existe cupom com esse nome. Por favor, escolha outro"));
                }
                //Não existe cupom com esse nome, pode salvar
                else {
                    return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].update(_this.coupon.id, newCoupon, relationObjs);
                }
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
                _this.cancel();
            }));
        }
        //Página de registro, criar novo objeto no database
        else {
            relationObjs = [];
            this.options.forEach(function (option) {
                if (option.active) {
                    //Adicionar relação com Filial
                    relationObjs.push({
                        relationship: _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].filial,
                        id: option.id
                    });
                }
            });
            console.log("CRIAR CUPOM. RELAÇÕES: ", relationObjs, newCoupon);
            return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].list([{
                    name: 'name',
                    operator: '==',
                    value: newCoupon.name
                }])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function (c) {
                console.log("Lista de cupons", c);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (coupons) {
                console.log("Cupons após filtrado a busca por nome: ", coupons);
                //Já existe um cupom com esse nome
                if (coupons && coupons.length > 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(Error("Já existe cupom com esse nome. Por favor, escolha outro"));
                }
                //Não existe cupom com esse nome, pode salvar
                else {
                    return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].add(newCoupon, relationObjs);
                }
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    /**
     * Remove cupom e todos seus relacionamentos
     */
    CouponEditPage.prototype.remove = function () {
        var _this = this;
        if (this.coupon) {
            return this.couponProvider.getFilialsFromCoupon(this.coupon.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (filials) {
                var relationObjs = [];
                filials.forEach(function (filial) {
                    //Adicionar relação com Filial
                    relationObjs.push({
                        relationship: _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].filial,
                        removeId: filial.id
                    });
                });
                console.log("REMOVER CUPOM. RELAÇÕES: ", relationObjs);
                return _models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"].remove(_this.coupon.id, relationObjs);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    CouponEditPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot(['coupon/list', { company_id: (this.company ? this.company.id : '') }]);
    };
    CouponEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-edit',
            template: __webpack_require__(/*! ./coupon-edit.page.html */ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.html"),
            styles: [__webpack_require__(/*! ./coupon-edit.page.scss */ "./src/app/panel/pages/coupon/coupon-edit/coupon-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"],
            _services_coupon_service__WEBPACK_IMPORTED_MODULE_9__["CouponService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CouponEditPage);
    return CouponEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-coupon-coupon-edit-coupon-edit-module.js.map