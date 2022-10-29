(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-promotion-promotion-edit-promotion-edit-module"],{

/***/ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-edit/promotion-edit.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PromotionEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionEditPageModule", function() { return PromotionEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _promotion_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotion-edit.page */ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _promotion_edit_page__WEBPACK_IMPORTED_MODULE_5__["PromotionEditPage"]
    }
];
var PromotionEditPageModule = /** @class */ (function () {
    function PromotionEditPageModule() {
    }
    PromotionEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_promotion_edit_page__WEBPACK_IMPORTED_MODULE_5__["PromotionEditPage"]]
        })
    ], PromotionEditPageModule);
    return PromotionEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Cadastrar/Editar promoção\" icon=\"menus-icon-ecommerce-41\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n      <!-- Informações gerais do produto -->\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n          <!--<ion-list class=\"myformlist\" color=\"light\">-->\r\n\r\n          <!-- Imagem e barra de progresso -->\r\n          <nano-uploadimage [form]=\"this.form\" [storagePath]=\"'promotions'\"></nano-uploadimage>\r\n\r\n          <!--Nome-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input class=\"input\" formControlName=\"name\" maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!--Descrição-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Descrição</ion-label>\r\n            <ion-textarea class=\"input\" rows=\"5\" formControlName=\"description\"></ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Preço -->\r\n          <ion-item padding-horizontal item-content>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Preço base (em R$)</ion-label>\r\n            <money-input item-content [control]=\"form.controls['priceBase']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!-- Ativar preço promocional -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Ativar promoção</ion-label>\r\n            <ion-toggle slot=\"end\" color=\"primary\" formControlName=\"promotionActive\"></ion-toggle>\r\n          </ion-item>\r\n          <ion-radio-group [hidden]=\"!form.controls['promotionActive'].value\" [(ngModel)]=\"promotionType\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"detect()\">\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir valor de desconto</ion-label>\r\n              <ion-radio value=\"money\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir porcentagem de desconto</ion-label>\r\n              <ion-radio value=\"percentage\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <!--Preço Promocional por valor-->\r\n          <ion-item padding-horizontal [hidden]=\"!(form.controls['promotionActive'].value && promotionType == 'money')\">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Valor de desconto (em R$)</ion-label>\r\n            <money-input [control]=\"form.controls['promotionPrice']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!--Preço Promocional por porcentagem-->\r\n          <ion-item padding-horizontal item-content [hidden]=\"!(form.controls['promotionActive'].value && promotionType == 'percentage')\">\r\n            <ion-label position=\"stacked\" class=\"label\" color=\"tertiary\">Porcentagem de desconto</ion-label>\r\n            <money-input item-content [control]=\"form.controls['promotionPercentage']\"></money-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n    <nano-buttons [canSave]=\"form.valid\" [save]=\"save.bind(this)\" [canRemove]=\"promotion\" [remove]=\"remove.bind(this)\"\r\n      [cancel]=\"cancel.bind(this)\"></nano-buttons>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "money-input {\n  width: 100%; }\n\nh2 {\n  line-height: 1.3 !important; }\n\n@media (max-width: 400px) {\n  .complement {\n    display: flex;\n    flex-direction: column; } }\n\n.button-select-category {\n  margin-left: -7px; }\n\ninput:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PromotionEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionEditPage", function() { return PromotionEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_promotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/promotion */ "./src/models/promotion.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromotionEditPage = /** @class */ (function () {
    function PromotionEditPage(navCtrl, alert, formBuilder, menuCtrl, route, ref, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.ref = ref;
        this.loadingCtrl = loadingCtrl;
        /**
         * Verifica se foi salvo os dados editados. Isso serve para verificar se o usuário pode sair da tela
         */
        this.saveChange = false;
    }
    PromotionEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loading = true;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            image: [''],
            priceBase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            promotionPrice: [null],
            promotionPercentage: [null],
            promotionActive: [false],
        });
        this.form.valueChanges.subscribe(function (data) {
            _this.ref.detectChanges();
        });
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_3__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        }));
        var promotion$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            if (params.get('promotion_id'))
                return _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].object(params.get('promotion_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            company$,
            promotion$
        ]).subscribe(function (arr) {
            _this.company = arr[0];
            _this.promotion = arr[1];
            //Página de edição de produto
            if (_this.promotion) {
                if (_this.promotion.promotionActive) {
                    if (_this.promotion.promotionPrice) {
                        _this.promotionType = 'money';
                    }
                    else {
                        _this.promotionType = 'percentage';
                    }
                }
                _this.form.patchValue(_this.promotion);
            }
            _this.loading = false;
            console.log("Detect changes");
            _this.ref.detectChanges();
        });
    };
    PromotionEditPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    /**
     * @todo CAN DEACTIVE ATUALIZAR PARA O METODO DO ANGULAR: https://angular.io/api/router/CanDeactivate
     
    ionViewCanLeave() {
      /**
       * Verifica se o form foi alterado
       *
      let change: boolean
      if (this.product) {
        if (JSON.stringify(this.complements) == JSON.stringify(this.product.complements)) {
          for (let key in this.form.value) {
            if (this.form.value.category != this.product.category.id) {
              change = true
            } else if (this.form.value[key] != this.product[key] && key != 'category') {
              change = true
            }
          }
        } else {
          change = true
        }
      } else {
        if (this.complements.length < 1) {
          for (let key in this.form.value) {
            if (this.form.value[key]) change = true
          }
        } else {
          change = true
        }
      }
      /**
       * Verifica se o usuário pode sair da pagina antes de salvar as alterações
       *
      return new Promise(async (resolve: Function, reject: Function) => {
        if (this.saveChange) {
          resolve()
        } else if (change) {
          let alert = await this.alert.create({
            header: 'Deseja sair sem salvar suas alterações ?',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject()
              }
            }, {
              text: 'Confirmar',
              handler: () => {
                resolve()
              }
            }]
          })
          alert.present()
        } else {
          resolve();
        }
      });
    }*/
    /**
     * Voltar página sem salvar alterações
     */
    PromotionEditPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot(['promotion/list', { company_id: this.company.id }]);
    };
    /**
     * Remove produto do database
     */
    PromotionEditPage.prototype.remove = function () {
        var _this = this;
        if (this.promotion) {
            return _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].remove(this.promotion.id, [
                {
                    relationship: _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].company,
                    removeId: this.company.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    /**
     * Salvar alterações e redirecionar para página anterior
     */
    PromotionEditPage.prototype.save = function () {
        var _this = this;
        if (this.form.value.promotionActive && !this.promotionType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(Error("Você precisa escolher como deseja definir a promoção"));
        }
        if (this.form.value.promotionActive && this.promotionType == 'money' && !this.form.value.promotionPrice) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(Error("Você precisa definir o valor do desconto"));
        }
        if (this.form.value.promotionActive && this.promotionType == 'percentage' && !this.form.value.promotionPercentage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(Error("Você precisa definir a porcentagem de desconto"));
        }
        if (!this.form.value.promotionActive) {
            var obj = {
                promotionPercentage: null,
                promotionPrice: null
            };
            this.form.patchValue(obj);
        }
        else if (this.promotionType == 'money') {
            var obj = {
                promotionPrice: this.form.value.promotionPrice >= 0 ? this.form.value.promotionPrice : -1 * this.form.value.promotionPrice,
                promotionPercentage: null
            };
            this.form.patchValue(obj);
        }
        else {
            var obj = {
                promotionPrice: null
            };
            this.form.patchValue(obj);
        }
        console.log("promoção a ser salva: ", this.form.value);
        var new_promotion = this.form.value;
        // Convertendo o priceBase de string para número
        new_promotion.priceBase = +new_promotion.priceBase;
        // Página de edição, atualizar objeto no database
        if (this.promotion) {
            this.saveChange = true;
            return _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].update(this.promotion.id, new_promotion)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                _this.cancel();
            }));
        }
        //Página de registro, criar novo objeto no database
        else {
            this.saveChange = true;
            return _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].add(new_promotion, [
                {
                    relationship: _models_promotion__WEBPACK_IMPORTED_MODULE_2__["Promotion"].company,
                    id: this.company.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    PromotionEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-edit',
            template: __webpack_require__(/*! ./promotion-edit.page.html */ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.html"),
            styles: [__webpack_require__(/*! ./promotion-edit.page.scss */ "./src/app/panel/pages/promotion/promotion-edit/promotion-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], PromotionEditPage);
    return PromotionEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-promotion-promotion-edit-promotion-edit-module.js.map