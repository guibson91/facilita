(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-product-product-edit-product-edit-module"],{

/***/ "./src/app/panel/pages/product/product-edit/product-edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-edit/product-edit.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPageModule", function() { return ProductEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit.page */ "./src/app/panel/pages/product/product-edit/product-edit.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _category_select_category_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-select/category-select.module */ "./src/app/panel/pages/product/category-select/category-select.module.ts");
/* harmony import */ var _product_complement_update_product_complement_update_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-complement-update/product-complement-update.module */ "./src/app/panel/pages/product/product-complement-update/product-complement-update.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _product_edit_page__WEBPACK_IMPORTED_MODULE_5__["ProductEditPage"]
    }
];
var ProductEditPageModule = /** @class */ (function () {
    function ProductEditPageModule() {
    }
    ProductEditPageModule = __decorate([
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
                _category_select_category_select_module__WEBPACK_IMPORTED_MODULE_10__["CategorySelectPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _product_complement_update_product_complement_update_module__WEBPACK_IMPORTED_MODULE_11__["ProductComplementUpdatePageModule"]
            ],
            declarations: [_product_edit_page__WEBPACK_IMPORTED_MODULE_5__["ProductEditPage"]]
        })
    ], ProductEditPageModule);
    return ProductEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/product-edit/product-edit.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-edit/product-edit.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Cadastrar/Editar produto\" icon=\"menus-icon-pizza\" [helpPage]=\"11\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n      <!-- Informações gerais do produto -->\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n          <!--<ion-list class=\"myformlist\" color=\"light\">-->\r\n\r\n          <!-- Imagem e barra de progresso -->\r\n          <nano-uploadimage [form]=\"this.form\" [storagePath]=\"'products'\"></nano-uploadimage>\r\n\r\n          <!--Nome-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input class=\"input\" formControlName=\"name\" maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!--Descrição-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Descrição</ion-label>\r\n            <ion-textarea class=\"input\" rows=\"5\" formControlName=\"description\"></ion-textarea>\r\n          </ion-item>\r\n\r\n          <!-- Preço -->\r\n          <ion-item padding-horizontal item-content>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Preço base (em R$)</ion-label>\r\n            <money-input item-content [control]=\"form.controls['priceBase']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!-- Ativar preço promocional -->\r\n          <!-- <ion-item>\r\n            <ion-label>Quantidade do produto sempre unitária</ion-label>\r\n            <ion-checkbox color=\"primary\" formControlName=\"fixedQuantity\"></ion-checkbox>\r\n          </ion-item> -->\r\n\r\n          <!-- Ativar preço promocional -->\r\n          <ion-item padding-horizontal>\r\n            <ion-label>Ativar promoção</ion-label>\r\n            <ion-toggle slot=\"end\" color=\"primary\" formControlName=\"promotionActive\"></ion-toggle>\r\n          </ion-item>\r\n          <ion-radio-group [hidden]=\"!form.controls['promotionActive'].value\" [(ngModel)]=\"promotionType\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"detect()\">\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir valor de desconto</ion-label>\r\n              <ion-radio value=\"money\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item padding-horizontal>\r\n              <ion-label>Definir porcentagem de desconto</ion-label>\r\n              <ion-radio value=\"percentage\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <!--Preço Promocional por valor-->\r\n          <ion-item padding-horizontal [hidden]=\"!(form.controls['promotionActive'].value && promotionType == 'money')\">\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Valor de desconto (em R$)</ion-label>\r\n            <money-input [control]=\"form.controls['promotionPrice']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!--Preço Promocional por porcentagem-->\r\n          <ion-item padding-horizontal item-content [hidden]=\"!(form.controls['promotionActive'].value && promotionType == 'percentage')\">\r\n            <ion-label position=\"stacked\" class=\"label\" color=\"tertiary\">Porcentagem de desconto</ion-label>\r\n            <money-input item-content [control]=\"form.controls['promotionPercentage']\"></money-input>\r\n          </ion-item>\r\n\r\n          <!-- <ion-input class=\"input\" type=\"tel\" (keyup)=\"amountChange($event.target.value)\" formControlName=\"priceBase\"></ion-input> -->\r\n\r\n          <!-- Categoria -->\r\n          <div padding-horizontal>\r\n            <h3 ion-text color=\"tertiary\">Categoria</h3>\r\n            <h4 ion-text *ngIf=\"categoryActual\">{{categoryActual.name}}</h4>\r\n            <ion-button class=\"button-select-category\" fill=\"clear\" (click)=\"selectCategory()\">Selecionar categoria</ion-button>\r\n          </div>\r\n\r\n          <ion-item-divider text-center no-lines>\r\n            <h5 ion-text color=\"tertiary\">Opções do produto</h5>\r\n          </ion-item-divider>\r\n\r\n          <!-- Adicionar Opções do produto -->\r\n          <ion-button padding ion-item icon-left fill=\"clear\" color=\"tertiary\" (click)=\"updateComplement()\">\r\n            <ion-icon name=\"add\" item-left></ion-icon>\r\n            <h6 ion-text>Adicionar complemento</h6>\r\n          </ion-button>\r\n\r\n          <ion-item padding-horizontal class=\"complement\" *ngFor=\"let complement of complements; let i = index\">\r\n            <div style=\"display: flex;align-items: center;\">\r\n              <h2 text-wraper>{{complement?.title}}</h2>\r\n              <ion-button class=\"set-priority-category-button first-button\" icon-only fill=\"clear\" (click)=\"upComplement(complement, i)\"\r\n                color=\"facebook\">\r\n                <ion-icon name=\"arrow-up\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button class=\"set-priority-category-button\" icon-only fill=\"clear\" (click)=\"downComplement(complement, i)\"\r\n                color=\"google\">\r\n                <ion-icon name=\"arrow-down\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"primary\" fill=\"clear\" icon-only (click)=\"updateComplement(complement)\">\r\n                <ion-icon name=\"md-create\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button color=\"danger\" fill=\"clear\" icon-only (click)=\"removeComplement(complement)\">\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n    <nano-buttons [canSave]=\"form.valid\" [save]=\"save.bind(this)\" [canRemove]=\"product\" [remove]=\"remove.bind(this)\"\r\n      [cancel]=\"cancel.bind(this)\"></nano-buttons>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/product/product-edit/product-edit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-edit/product-edit.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "money-input {\n  width: 100%; }\n\nh2 {\n  line-height: 1.3 !important; }\n\n@media (max-width: 400px) {\n  .complement {\n    display: flex;\n    flex-direction: column; } }\n\n.button-select-category {\n  margin-left: -7px; }\n\ninput:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/product-edit/product-edit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/product/product-edit/product-edit.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProductEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPage", function() { return ProductEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/product */ "./src/models/product.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/category */ "./src/models/category.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _category_select_category_select_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../category-select/category-select.page */ "./src/app/panel/pages/product/category-select/category-select.page.ts");
/* harmony import */ var _product_complement_update_product_complement_update_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-complement-update/product-complement-update.page */ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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












var ProductEditPage = /** @class */ (function () {
    function ProductEditPage(navCtrl, alert, formBuilder, shared, menuCtrl, route, ref, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.shared = shared;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.ref = ref;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        /**
         * Complementos do produto.
         */
        this.complements = [];
        this.auxActives = [];
        /**
         * Se o produto veio como cópia
         */
        this.copy = false;
    }
    ProductEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loading = true;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            image: [''],
            priceBase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fixedQuantity: [false],
            promotionPrice: [null],
            promotionPercentage: [null],
            promotionActive: [false],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.form.valueChanges.subscribe(function (data) {
            _this.ref.detectChanges();
        });
        this.route.paramMap
            .subscribe(function (params) {
            if (params.get('copy'))
                _this.copy = true;
            else
                _this.copy = false;
        });
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_8__["Company"].object(params.get('company_id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])());
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
        var product$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            if (params.get('product_id'))
                return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].object(params.get('product_id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])());
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            company$,
            product$
        ]).subscribe(function (arr) {
            _this.company = arr[0];
            _this.product = arr[1];
            //Página de edição de produto
            if (_this.product) {
                _this.form.patchValue(_this.product);
                if (_this.product.promotionActive) {
                    if (_this.product.promotionPrice) {
                        _this.promotionType = 'money';
                    }
                    else {
                        _this.promotionType = 'percentage';
                    }
                }
                if (_this.product.fixedQuantity) {
                    var obj = {};
                    obj.fixedQuantity = true;
                    _this.form.patchValue(obj);
                }
                if (_this.product.category && _this.product.category.id) {
                    _this.categoryActual = _this.categoryOld = _this.product.category;
                    _models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].object(_this.categoryActual.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                        .subscribe(function (c) {
                        _this.categoryActual = c;
                        _this.ref.detectChanges();
                    });
                    _this.form.patchValue({
                        category: _this.categoryActual.id
                    });
                }
                // Inicializando a lista de complementos se o produto tiver complementos.
                // Se não tiver complementos inicializar com um array vazio.
                if (_this.product.complements) {
                    //Fazer uma cópia do array usando slice para alterações no this.complements não mudar no this.product.complements
                    _this.complements = _this.product.complements.slice() || [];
                    //Retira os nulls que vem do firebase
                    _this.complements = _this.complements.filter(function (el) { return el !== null; });
                }
                // Removendo do formulário a lista de complementos.
                _this.form.patchValue({
                    complements: null
                });
            }
            //Página de criação de produto
            else {
                if (_this.shared.latest_category) {
                    _this.form.patchValue({
                        category: _this.shared.latest_category.id
                    });
                    _this.categoryActual = _this.shared.latest_category;
                }
            }
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    // amountChange(valor) {
    //   this.form.patchValue({ priceBase: this.money.detectAmount(valor) })
    // }
    ProductEditPage.prototype.selectCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _category_select_category_select_page__WEBPACK_IMPORTED_MODULE_9__["CategorySelectPage"],
                            componentProps: {
                                company: this.company,
                                categoryActual: this.categoryActual
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (ev) {
                            if (ev && ev.data && ev.data.category) {
                                _this.form.patchValue({ category: ev.data.category.id });
                                _this.categoryActual = ev.data.category;
                                _this.shared.latest_category = ev.data.category;
                            }
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
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
     * Dispara evento se as teclas alt + n for pressionado
     * @param event evento
     */
    ProductEditPage.prototype.hotkeys = function (event) {
        if (event.keyCode == 67 && event.altKey) {
            this.updateComplement();
        }
        else if (event.keyCode == 83 && event.altKey) {
            this.save();
        }
    };
    /**
     * Criando ou editando um complemento.
     * Chamar modal que retorna o novo complemento a ser atualizado.
     * Se o indice for undefined adiciona no fim do array.
     * Se não for undefined atualiza o novo complemento no complemento de indice especificado.
     * @param complement Complemento que será atualizado, ou se vazio adicionar um novo complemento.
     */
    ProductEditPage.prototype.updateComplement = function (complement) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({})];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _product_complement_update_product_complement_update_page__WEBPACK_IMPORTED_MODULE_10__["ProductComplementUpdatePage"],
                                componentProps: {
                                    complement: complement ? complement : {}
                                }
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (ev) {
                            if (ev.data) {
                                var new_complement = ev.data.new_complement;
                                // Se o indice não existe
                                if (complement) {
                                    var index = _this.complements.indexOf(complement);
                                    // Atualizar em um já existente.
                                    _this.complements[index] = new_complement;
                                }
                                else {
                                    // Adicionar como novo complemento.
                                    _this.complements.push(new_complement);
                                }
                            }
                        });
                        modal.present().then(function () {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductEditPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    /**
     * Remover complemento
     * @param complement Complemento a ser removido.
     */
    ProductEditPage.prototype.removeComplement = function (complement) {
        var index = this.complements.indexOf(complement);
        this.complements.splice(index, 1);
        this.ref.detectChanges();
    };
    /**
     * Voltar página sem salvar alterações
     */
    ProductEditPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot(['product/list', { company_id: this.company.id }]);
    };
    /**
     * Subir complemento uma posição
     * @param complement complemento que se deseja subir
     * @param index index do complemento que se deseja subir
     */
    ProductEditPage.prototype.upComplement = function (complement, index) {
        if (!this.complements[index - 1])
            return;
        var aux = this.complements[index - 1];
        this.complements[index - 1] = this.complements[index];
        this.complements[index] = aux;
        this.ref.detectChanges();
    };
    /**
     * Descer complemento uma posição
     * @param complement complemento que se deseja descer
     * @param index index do complemento que se deseja descer
     */
    ProductEditPage.prototype.downComplement = function (complement, index) {
        if (!this.complements[index + 1])
            return;
        var aux = this.complements[index + 1];
        this.complements[index + 1] = this.complements[index];
        this.complements[index] = aux;
        this.ref.detectChanges();
    };
    /**
     * Remove produto do database
     */
    ProductEditPage.prototype.remove = function () {
        var _this = this;
        if (this.product) {
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].remove(this.product.id, [
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].company,
                    removeId: this.company.id
                },
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    removeId: this.categoryOld.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    /**
     * Salvar alterações e redirecionar para página anterior
     */
    ProductEditPage.prototype.save = function () {
        var _this = this;
        if (this.form.value.promotionActive && !this.promotionType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(Error("Você precisa escolher como deseja definir a promoção"));
        }
        if (this.form.value.promotionActive && this.promotionType == 'money' && !this.form.value.promotionPrice) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(Error("Você precisa definir o valor do desconto"));
        }
        if (this.form.value.promotionActive && this.promotionType == 'percentage' && !this.form.value.promotionPercentage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(Error("Você precisa definir a porcentagem de desconto"));
        }
        if (!this.categoryActual) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(Error("Você precisa selecionar uma categoria para o produto"));
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
        console.log("produto a ser salvo: ", this.form.value);
        var new_product = this.form.value;
        //Remover categoria como atributo antes de salvar
        //Será considerada apenas no relacionamento
        delete new_product.category;
        // Copia os complementos atuais para que quando ele set os nulls não apareça na view
        new_product.complements = this.complements || [];
        // Convertendo o priceBase de string para número
        new_product.priceBase = +new_product.priceBase;
        new_product = _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].calculatePrice(new_product);
        // Página de edição, atualizar objeto no database
        if (this.product && !this.copy) {
            this.saveChange = true;
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].update(this.product.id, new_product, [{
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    id: this.categoryActual.id,
                    removeId: this.categoryOld.id
                }])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.cancel();
            }));
        }
        //Página de registro, criar novo objeto no database
        else {
            this.saveChange = true;
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].add(new_product, [
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].company,
                    id: this.company.id
                },
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    id: this.categoryActual.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    ProductEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.page.html */ "./src/app/panel/pages/product/product-edit/product-edit.page.html"),
            styles: [__webpack_require__(/*! ./product-edit.page.scss */ "./src/app/panel/pages/product/product-edit/product-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ProductEditPage);
    return ProductEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-product-product-edit-product-edit-module.js.map