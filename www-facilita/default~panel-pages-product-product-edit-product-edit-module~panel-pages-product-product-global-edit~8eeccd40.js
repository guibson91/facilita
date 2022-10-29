(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~panel-pages-product-product-edit-product-edit-module~panel-pages-product-product-global-edit~8eeccd40"],{

/***/ "./src/app/panel/pages/product/category-select/category-select.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/product/category-select/category-select.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CategorySelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySelectPageModule", function() { return CategorySelectPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _category_select_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-select.page */ "./src/app/panel/pages/product/category-select/category-select.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategorySelectPageModule = /** @class */ (function () {
    function CategorySelectPageModule() {
    }
    CategorySelectPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_5__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_category_select_page__WEBPACK_IMPORTED_MODULE_4__["CategorySelectPage"]],
            entryComponents: [_category_select_page__WEBPACK_IMPORTED_MODULE_4__["CategorySelectPage"]]
        })
    ], CategorySelectPageModule);
    return CategorySelectPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/category-select/category-select.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/product/category-select/category-select.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-searchbar clear [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\"></ion-searchbar>\r\n  <nano-loading [loading]=\"loading\">\r\n\r\n    <ion-list>\r\n      <ion-item class=\"remove-border-item\" no-lines no-padding padding-horizontal *ngFor=\"let category of categories | filterBy:['name', 'description']:searchString as categories\"\r\n        class=\"category-item\">\r\n        <h2 ion-text text-wrap>{{category.name}}</h2>\r\n        <div item-right class=\"actions\">\r\n          <ion-button fill=\"clear\" color=\"danger\" (click)=\"remove(category)\">\r\n            <ion-icon name=\"trash\"></ion-icon> Remover\r\n          </ion-button>\r\n          <ion-button (click)=\"edit(category)\" fill=\"clear\" color=\"proceed\">\r\n            <ion-icon name=\"md-create\"></ion-icon> Editar\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" color=\"proceed\" (click)=\"dismiss(category)\">\r\n            <ion-icon name=\"md-checkmark\"></ion-icon> Selecionar\r\n          </ion-button>\r\n        </div>\r\n        <!--<div item-right>\r\n          <button ion-button icon-only clear (click)=\"toTop(category)\">\r\n            <ion-icon name=\"arrow-up\"></ion-icon>\r\n          </button>\r\n          <button ion-button icon-only clear (click)=\"toBottom(category)\">\r\n            <ion-icon name=\"arrow-down\"></ion-icon>\r\n          </button>\r\n        </div>-->\r\n      </ion-item>\r\n\r\n      <ion-item class=\"remove-border-item\" text-center padding *ngIf=\"!existsCategories\">\r\n        <p>Você não possui nenhuma categoria!</p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </nano-loading>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button fill=\"clear\" color=\"danger\" (click)=\"dismiss()\">\r\n    <ion-icon name=\"close\"></ion-icon> Cancelar\r\n  </ion-button>\r\n  <ion-button fill=\"clear\" color=\"proceed\" (click)=\"add()\">\r\n    <ion-icon name=\"add\"></ion-icon> Nova categoria\r\n  </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/panel/pages/product/category-select/category-select.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/panel/pages/product/category-select/category-select.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.icon {\n  padding-right: 5px !important; }\n\nion-item.category-item .item-inner {\n  border-bottom: solid 1px #dddddd !important; }\n\n@media (max-width: 400px) {\n    ion-item.category-item .item-inner {\n      display: flex;\n      flex-direction: column; } }\n\nion-content.content {\n  background: white; }\n\nion-searchbar {\n  flex-grow: 1;\n  border-bottom: solid 2px #dddddd; }\n\nion-footer.footer {\n  display: flex;\n  justify-content: flex-end;\n  background: var(--ion-color-light); }\n\n.category-item .item-inner {\n  padding-right: 0px !important; }\n\n.actions {\n  margin-right: 0px !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/category-select/category-select.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/panel/pages/product/category-select/category-select.page.ts ***!
  \*****************************************************************************/
/*! exports provided: CategorySelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySelectPage", function() { return CategorySelectPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/category */ "./src/models/category.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
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









var CategorySelectPage = /** @class */ (function () {
    function CategorySelectPage(shared, alertCtrl, system, ref, modalCtrl) {
        this.shared = shared;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.ref = ref;
        this.modalCtrl = modalCtrl;
        // Se a categoria for global, qual tipo deve ser criado. Por hora apenas o tipo WAREHOUSE(Depósito) é aceito
        this.type = _models_filial__WEBPACK_IMPORTED_MODULE_8__["FilialType"].WAREHOUSE;
    }
    CategorySelectPage.prototype.ngOnInit = function () {
        if (this.company && this.global) {
            throw Error("Uma categoria não pode ser global e pertencer a uma empresa ao mesmo tempo");
        }
        this.load();
    };
    CategorySelectPage.prototype.ngOnDestroy = function () {
        if (this.categoriesSubscription)
            this.categoriesSubscription.unsubscribe();
    };
    /**
     * Carregando as categorias atuais.
     * Marcando como carregando e quando acabar de carregar marcar se existe categorias.
     */
    CategorySelectPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        this.existsCategories = true;
        this.ref.detectChanges();
        if (this.categoriesSubscription)
            this.categoriesSubscription.unsubscribe();
        var categories$;
        if (this.global) {
            categories$ = _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].list([{
                    name: 'type',
                    operator: '==',
                    value: _models_filial__WEBPACK_IMPORTED_MODULE_8__["FilialType"].WAREHOUSE
                }]);
        }
        else {
            categories$ = _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"].categories.list(this.company.id, undefined, [{ name: "priority" }]);
        }
        // Lista de categorias ordenadas pela prioridade
        this.categoriesSubscription = categories$.subscribe(function (categories) {
            _this.categories = categories;
            _this.loading = false;
            _this.ref.detectChanges();
            if (_this.categories && _this.categories.length === 0) {
                _this.existsCategories = false;
            }
            else {
                _this.categories.sort(function (a, b) {
                    return ((a.priority || 0) - (b.priority || 0));
                });
            }
        });
    };
    /**
     * Adiciona uma nova categoria por meio de um alert que pergunta o nome
     */
    CategorySelectPage.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Criar categoria',
                            inputs: [
                                {
                                    name: 'name',
                                    placeholder: 'Nome da categoria'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: 'Criar',
                                    handler: function (data) {
                                        // Verifica se foi preenchido algum valor no input do alerta
                                        if (!data || !data.name)
                                            return;
                                        _this.loading = true;
                                        var add$;
                                        // Se for uma categoria de tipo global
                                        if (_this.global) {
                                            add$ = _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].add({
                                                name: data.name,
                                                priority: _this.categories.length,
                                                type: _this.type,
                                                global: true
                                            });
                                        }
                                        else { // Se for uma categoria de uma empresa
                                            add$ = _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].add({ name: data.name, priority: _this.categories.length }, [
                                                {
                                                    relationship: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].company,
                                                    id: _this.company.id
                                                }
                                            ]);
                                        }
                                        add$.subscribe(function () {
                                            _this.load();
                                        }, function (err) {
                                            _this.system.showErrorAlert(err);
                                        });
                                    }
                                }
                            ]
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
     * Edita o nome de uma categoria por meio de um nome
     * @param category Categoria a ser editada
     */
    CategorySelectPage.prototype.edit = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Editar',
                            inputs: [
                                {
                                    name: 'name',
                                    value: category.name
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel'
                                },
                                {
                                    text: 'Salvar',
                                    handler: function (data) {
                                        // Verifica se foi preenchido algum valor no input do alerta
                                        if (!data || !data.name)
                                            return;
                                        _this.loading = true;
                                        _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].update(category.id, { name: data.name })
                                            .subscribe(function () {
                                            _this.load();
                                        }, function (err) {
                                            _this.system.showErrorAlert(err);
                                        });
                                    }
                                }
                            ]
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
     * Tenta remover uma categoria. Mas só remove se ela não possuir produtos
     * @param category Categoria a ser removida
     */
    CategorySelectPage.prototype.remove = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Tem certeza que deseja remover essa categoria?',
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Remover',
                                    handler: function (data) {
                                        _this.loading = true;
                                        _this.existsProductsCategory(category)
                                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (exists_products) {
                                            if (exists_products) {
                                                throw Error("Não pode ser removido categoria que possui produtos");
                                            }
                                            var relationships = [];
                                            // Se a categoria pertence a uma empresa
                                            if (_this.company) {
                                                relationships = [
                                                    {
                                                        relationship: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].company,
                                                        id: _this.company.id
                                                    }
                                                ];
                                            }
                                            return _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].remove(category.id, relationships);
                                        }))
                                            .subscribe(function () {
                                            _this.load();
                                        }, function (err) {
                                            _this.loading = false;
                                            _this.ref.detectChanges();
                                            _this.system.showErrorAlert(err);
                                        });
                                    }
                                }
                            ]
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
     * Verifica se existe algum produto relacionado a uma categoria
     * @param category Será buscado os produtos dessa categoria
     */
    CategorySelectPage.prototype.existsProductsCategory = function (category) {
        //Verifica primeiro se a categoria que quer ser removida faz parte do produto atual (que ainda não foi salvo no DB)
        if (this.categoryActual && category.id == this.categoryActual.id)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        return _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].category_product.list(category.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (products) {
            if (products && products.length > 0)
                return true;
            else
                return false;
        }));
    };
    /**
     * Fecha o modal. Podendo passar ou não uma categoria selecionada
     * @param category Categoria que pode ser mandado para view que chamou o modal
     */
    CategorySelectPage.prototype.dismiss = function (category) {
        this.modalCtrl.dismiss({
            category: category
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"]
        //Categoria Atual
        )
    ], CategorySelectPage.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], CategorySelectPage.prototype, "categoryActual", void 0);
    CategorySelectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-select',
            template: __webpack_require__(/*! ./category-select.page.html */ "./src/app/panel/pages/product/category-select/category-select.page.html"),
            styles: [__webpack_require__(/*! ./category-select.page.scss */ "./src/app/panel/pages/product/category-select/category-select.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], CategorySelectPage);
    return CategorySelectPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~panel-pages-product-product-edit-product-edit-module~panel-pages-product-product-global-edit~8eeccd40.js.map