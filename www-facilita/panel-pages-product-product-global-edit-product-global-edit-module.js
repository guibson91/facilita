(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-product-product-global-edit-product-global-edit-module"],{

/***/ "./src/app/panel/pages/product/product-global-edit/product-global-edit.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global-edit/product-global-edit.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductGlobalEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGlobalEditPageModule", function() { return ProductGlobalEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_global_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-global-edit.page */ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _category_select_category_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-select/category-select.module */ "./src/app/panel/pages/product/category-select/category-select.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _product_global_edit_page__WEBPACK_IMPORTED_MODULE_5__["ProductGlobalEditPage"]
    }
];
var ProductGlobalEditPageModule = /** @class */ (function () {
    function ProductGlobalEditPageModule() {
    }
    ProductGlobalEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_9__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__["GlobalComponentsModule"],
                _category_select_category_select_module__WEBPACK_IMPORTED_MODULE_10__["CategorySelectPageModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_global_edit_page__WEBPACK_IMPORTED_MODULE_5__["ProductGlobalEditPage"]]
        })
    ], ProductGlobalEditPageModule);
    return ProductGlobalEditPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global-edit/product-global-edit.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Cadastrar/Editar produto\" icon=\"menus-icon-ecommerce-43\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\">\r\n    <nano-loading [loading]=\"loading\">\r\n      <!-- Informações gerais do produto -->\r\n      <form [formGroup]=\"form\" class=\"form-content\">\r\n        <ion-list>\r\n          <!--<ion-list class=\"myformlist\" color=\"light\">-->\r\n\r\n          <!-- Imagem e barra de progresso -->\r\n          <nano-uploadimage [form]=\"this.form\" [storagePath]=\"'products'\"></nano-uploadimage>\r\n\r\n          <!--Nome-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n            <ion-input class=\"input\" formControlName=\"name\" maxlength=\"50\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!--Descrição-->\r\n          <ion-item padding-horizontal>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Descrição</ion-label>\r\n            <ion-textarea class=\"input\" rows=\"5\" formControlName=\"description\"></ion-textarea>\r\n          </ion-item>\r\n          \r\n          <!-- Categoria -->\r\n          <div padding-horizontal>\r\n            <h3 ion-text color=\"tertiary\">Categoria</h3>\r\n            <h4 ion-text *ngIf=\"categoryActual\">{{categoryActual.name}}</h4>\r\n            <ion-button class=\"button-select-category\" fill=\"clear\" (click)=\"selectCategory()\">Selecionar categoria</ion-button>\r\n          </div>\r\n\r\n          <!-- Preço -->\r\n          <ion-item padding-horizontal item-content>\r\n            <ion-label position=\"stacked\" color=\"tertiary\">Preço base (em R$)</ion-label>\r\n            <money-input item-content [control]=\"form.controls['priceBase']\"></money-input>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n      </form>\r\n    </nano-loading>\r\n    <nano-buttons [canSave]=\"form.valid\" [save]=\"save.bind(this)\" [canRemove]=\"product\" [remove]=\"remove.bind(this)\"\r\n      [cancel]=\"cancel.bind(this)\"></nano-buttons>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global-edit/product-global-edit.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "money-input {\n  width: 100%; }\n\nh2 {\n  line-height: 1.3 !important; }\n\n@media (max-width: 400px) {\n  .complement {\n    display: flex;\n    flex-direction: column; } }\n\n.button-select-category {\n  margin-left: -7px; }\n\ninput:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-global-edit/product-global-edit.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductGlobalEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGlobalEditPage", function() { return ProductGlobalEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/product */ "./src/models/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/category */ "./src/models/category.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _category_select_category_select_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-select/category-select.page */ "./src/app/panel/pages/product/category-select/category-select.page.ts");
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











var ProductGlobalEditPage = /** @class */ (function () {
    function ProductGlobalEditPage(navCtrl, formBuilder, menuCtrl, route, modalCtrl, shared, ref) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this.ref = ref;
    }
    ProductGlobalEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loading = true;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            image: [''],
            priceBase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.form.valueChanges.subscribe(function () {
            _this.ref.detectChanges();
        });
        var product$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.get('product_id'))
                return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].object(params.get('product_id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
        product$.subscribe(function (product) {
            _this.product = product;
            //Página de edição de produto
            if (_this.product) {
                _this.form.patchValue(_this.product);
                if (_this.product.category && _this.product.category.id) {
                    _this.categoryActual = _this.categoryOld = _this.product.category;
                    _models_category__WEBPACK_IMPORTED_MODULE_8__["Category"].object(_this.categoryActual.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                        .subscribe(function (c) {
                        _this.categoryActual = c;
                        _this.ref.detectChanges();
                    });
                    _this.form.patchValue({
                        category: _this.categoryActual.id
                    });
                }
            }
            _this.loading = false;
            _this.ref.detectChanges();
        });
    };
    ProductGlobalEditPage.prototype.selectCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _category_select_category_select_page__WEBPACK_IMPORTED_MODULE_10__["CategorySelectPage"],
                            componentProps: {
                                global: true,
                                categoryActual: this.categoryActual
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (ev) {
                            if (ev && ev.data && ev.data.category) {
                                _this.form.patchValue({ category: ev.data.category.id });
                                _this.categoryActual = ev.data.category;
                            }
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductGlobalEditPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    /**
     * Voltar página sem salvar alterações
     */
    ProductGlobalEditPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot(['product/global/list']);
    };
    /**
     * Remove produto do database
     */
    ProductGlobalEditPage.prototype.remove = function () {
        var _this = this;
        if (this.product) {
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].remove(this.product.id, [
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    removeId: this.categoryOld.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    /**
     * Salvar alterações e redirecionar para página anterior
     */
    ProductGlobalEditPage.prototype.save = function () {
        var _this = this;
        console.log("produto a ser salvo: ", this.form.value);
        var new_product = this.form.value;
        // Convertendo o priceBase de string para número
        new_product.priceBase = +new_product.priceBase;
        new_product.minimumPrice = new_product.priceBase;
        // Criando um produto de tipo global para depósitos (Água, gás e bebidas)
        new_product.global = {
            type: _models_filial__WEBPACK_IMPORTED_MODULE_7__["FilialType"].WAREHOUSE
        };
        if (!this.categoryActual) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(Error("Você precisa selecionar uma categoria para o produto"));
        }
        //Remover categoria como atributo antes de salvar
        //Será considerada apenas no relacionamento
        delete new_product.category;
        // Página de edição, atualizar objeto no database
        if (this.product) {
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].update(this.product.id, new_product, [{
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    id: this.categoryActual.id,
                    removeId: this.categoryOld.id
                }])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                _this.cancel();
            }));
        }
        //Página de registro, criar novo objeto no database
        else {
            return _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].add(new_product, [
                {
                    relationship: _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].category,
                    id: this.categoryActual.id
                }
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                _this.cancel();
            }));
        }
    };
    ProductGlobalEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-global-edit',
            template: __webpack_require__(/*! ./product-global-edit.page.html */ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.html"),
            styles: [__webpack_require__(/*! ./product-global-edit.page.scss */ "./src/app/panel/pages/product/product-global-edit/product-global-edit.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProductGlobalEditPage);
    return ProductGlobalEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-product-product-global-edit-product-global-edit-module.js.map