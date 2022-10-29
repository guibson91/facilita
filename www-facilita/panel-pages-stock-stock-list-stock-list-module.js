(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-stock-stock-list-stock-list-module"],{

/***/ "./src/app/panel/pages/stock/stock-list/stock-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-list/stock-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: StockListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListPageModule", function() { return StockListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _stock_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-list.page */ "./src/app/panel/pages/stock/stock-list/stock-list.page.ts");
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
        component: _stock_list_page__WEBPACK_IMPORTED_MODULE_5__["StockListPage"]
    }
];
var StockListPageModule = /** @class */ (function () {
    function StockListPageModule() {
    }
    StockListPageModule = __decorate([
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
            declarations: [_stock_list_page__WEBPACK_IMPORTED_MODULE_5__["StockListPage"]]
        })
    ], StockListPageModule);
    return StockListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/stock/stock-list/stock-list.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-list/stock-list.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n\t<nano-navbar title=\"Estoque\" icon=\"menus-icon-menu\">\r\n\t</nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<ion-card class=\"content-card\">\r\n\r\n\t\t<div class=\"myfilter\">\r\n\t\t\t<ion-searchbar clear [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"detect()\"></ion-searchbar>\r\n\t\t</div>\r\n\r\n\t\t<nano-loading [loading]=\"loading\">\r\n\r\n\t\t\t<ion-list>\r\n\r\n\t\t\t\t<div *ngFor=\"let product of recomendationProductsStock | filterBy:['name', 'description']:searchString; let i = index\" class=\"products\">\r\n\t\t\t\t\t<div class=\"category-name\" *ngIf=\"i == 0\">Recomendações da loja</div>\r\n\t\t\t\t\t<div class=\"list-item\">\r\n\t\t\t\t\t\t<nano-thumb class=\"product-item\" [src]=\"product.image\" [border]=\"true\"></nano-thumb>\r\n\t\t\t\t\t\t<div class=\"product-item\" style=\"flex-grow: 1\">\r\n\t\t\t\t\t\t\t<div class=\"name\">\r\n\t\t\t\t\t\t\t\t{{product.name}}\r\n\t\t\t\t\t\t\t\t<ion-button class=\"set-priority-category-button first-button\"  icon-only fill=\"clear\" (click)=\"upRecomendation(product, i)\"\r\n\t\t\t\t\t\t\t\t color=\"facebook\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t<ion-button class=\"set-priority-category-button\" icon-only fill=\"clear\" (click)=\"downRecomendation(product, i)\" color=\"google\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"description\">{{product.description}}</div>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"success\" (click)=\"removeRecomendation(product)\">Remover recomendação</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-item\">\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" class=\"price\" *ngIf=\"product.minimumPrice == product.priceBase\">R$ {{product.priceBase | number: '1.2-2'}}</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" class=\"price\" *ngIf=\"product.minimumPrice !== product.priceBase\">A partir de R$ {{product.minimumPrice | number : '1.2-2'}}</ion-button>\r\n\t\t\t\t\t\t\t<!-- <span *ngIf=\"product.minimumPrice !== product.priceBase\">A partir de </span>R$ {{product.minimumPrice | number : '1.2-2'}} -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngFor=\"let product of productsStock | filterBy:['name', 'description']:searchString | matchesCategory:categoriesSelected; let i = index\"\r\n\t\t\t\t class=\"products\">\r\n\t\t\t\t\t<div class=\"category-name\" *ngIf=\"i == 0 || product.category?.id != tempCategory\">\r\n\t\t\t\t\t\t{{getCategoryName(product.category)}}\r\n\t\t\t\t\t\t<ion-button class=\"set-priority-category-button first-button\" icon-only fill=\"clear\" (click)=\"upCategoryPriority(product.category)\"\r\n\t\t\t\t\t\t [disabled]=\"i == 0\" color=\"primary\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\"></ion-icon>\r\n\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t<ion-button class=\"set-priority-category-button\" icon-only fill=\"clear\" (click)=\"downCategoryPriority(product.category)\"\r\n\t\t\t\t\t\t [disabled]=\"optionsCategories[optionsCategories.length - 1]?.id == product.category?.id\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"list-item\">\r\n\t\t\t\t\t\t<nano-thumb class=\"product-item\" [ngClass]=\"{'inactive': !product.active}\" [src]=\"product.image\" [border]=\"true\"></nano-thumb>\r\n\t\t\t\t\t\t<div class=\"product-item\" style=\"flex-grow: 1\">\r\n\t\t\t\t\t\t\t<div class=\"name\" [ngClass]=\"{'inactive': !product.active}\">\r\n\t\t\t\t\t\t\t\t{{product.name}}\r\n\t\t\t\t\t\t\t\t<ion-button class=\"set-priority-category-button first-button\" icon-only fill=\"clear\" (click)=\"upProductPriority(product, i)\"\r\n\t\t\t\t\t\t\t\t [disabled]=\"false\" color=\"facebook\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t<ion-button class=\"set-priority-category-button\" icon-only fill=\"clear\" (click)=\"downProductPriority(product, i)\" [disabled]=\"false\"\r\n\t\t\t\t\t\t\t\t color=\"google\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"description\">{{product.description}}</div>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"success\" *ngIf=\"!product.active\" (click)=\"addProduct(product, i)\">Adicionar</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"danger\" *ngIf=\"product.active\" (click)=\"removeProduct(product, i)\">Remover</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"success\" *ngIf=\"product.active && !product.recomendation\" (click)=\"addRecomendation(product, i)\">Adicionar recomendação</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"success\" *ngIf=\"product.active && product.recomendation\" (click)=\"removeRecomendation(product, i)\">Remover recomendação</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"product-item\">\r\n\t\t\t\t\t\t\t<button clear ion-button class=\"price\">R$ {{product.priceBase | number: '1.2-2'}}</button>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<div class=\"product-item\">\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" class=\"price\" *ngIf=\"product.minimumPrice == product.priceBase\">R$ {{product.priceBase | number: '1.2-2'}}</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" class=\"price\" *ngIf=\"product.minimumPrice !== product.priceBase\">A partir de R$ {{product.minimumPrice | number : '1.2-2'}}</ion-button>\r\n\t\t\t\t\t\t\t<!-- <span *ngIf=\"product.minimumPrice !== product.priceBase\">A partir de </span>R$ {{product.minimumPrice | number : '1.2-2'}} -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<ion-item text-center padding *ngIf=\"!existsProducts\">\r\n\t\t\t\t\t<p ion-text>Você ainda não possui nenhum produto</p>\r\n\t\t\t\t  </ion-item>\r\n\t\t\t</ion-list>\r\n\t\t</nano-loading>\r\n\r\n\t</ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/stock/stock-list/stock-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-list/stock-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f8f8f8 !important; }\n\nion-grid ion-icon {\n  margin-top: 14px;\n  font-size: 2.2em; }\n\n.category-name {\n  font-family: myFontBold !important;\n  padding-top: 16px;\n  font-size: 2.0em;\n  text-align: left;\n  margin: 0 0.7em;\n  border-bottom: 1px dashed #999;\n  margin-bottom: 10px !important; }\n\n.category-name .set-priority-category-button {\n    margin-top: -20px !important;\n    padding: 0px !important; }\n\n.category-name .set-priority-category-button.first-button {\n      margin-left: 10px !important; }\n\nion-card {\n  margin-bottom: 60px !important; }\n\n.products {\n  font-family: myFontRegular !important;\n  margin: auto; }\n\n.products .list-item {\n    display: flex;\n    margin: 0.6em 0 0.6em 1.6em;\n    background-color: white !important;\n    margin-bottom: solid 1px #ddd !important;\n    padding: 8px 0px 8px 0px !important; }\n\n@media (max-width: 400px) {\n      .products .list-item {\n        flex-direction: column;\n        align-items: center; } }\n\n.products .list-item .product-item {\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-right: 1.2em; }\n\n@media (max-width: 400px) {\n        .products .list-item .product-item {\n          text-align: center; } }\n\n.products .list-item .product-item .name {\n        font-size: 1.4em;\n        color: black; }\n\n.products .list-item .product-item .name.inactive {\n          color: #999; }\n\n.products .list-item .product-item .description {\n        font-size: 1em;\n        color: #999; }\n\n.products .list-item .product-item .price {\n        white-space: nowrap;\n        font-size: 1.4em;\n        color: #4c4; }\n\n.products .list-item .product-item button {\n        font-weight: bold !important; }\n\n.button-md {\n  margin: 0px !important;\n  padding: 0px !important;\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  margin-left: -5px !important; }\n\nion-searchbar {\n  border-bottom: none !important; }\n\n.myfilter {\n  display: flex;\n  border-bottom: solid 2px #ddd !important; }\n\n.myfilter ion-searchbar {\n    flex-grow: 1; }\n\n.myfilter button {\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 8px !important; }\n\nnano-thumb.inactive {\n  opacity: 0.5 !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/stock/stock-list/stock-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-list/stock-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: StockListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListPage", function() { return StockListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/category */ "./src/models/category.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var StockListPage = /** @class */ (function () {
    function StockListPage(navCtrl, popoverCtrl, alertCtrl, menuCtrl, ref, productProvider, shared, route, loadingCtrl, system) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.productProvider = productProvider;
        this.shared = shared;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.system = system;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        /**
         * Verifica se existe produtos
         */
        this.existsProducts = false;
        /**
         * Lista de todos os produtos da empresa,
         * mas que tenham recomendation como verdade
         */
        this.recomendationProductsStock = [];
        /**
         * Objeto que contém todas as categorias com
         * categories[id] = name
         */
        this.categories = {};
        /**
         * Id das categorias selecionadas no filtro
         */
        this.categoriesSelected = [];
        /**
         * Exibir loading quando a lista estiver sendo carregada
         */
        this.loading = true;
        /**
         * Listar categorias para organização de prioridades
         */
        this.optionsCategories = [];
    }
    /**
     * Inicializando estruturas após entrar na página
     * e passar pela verificação do ionViewCanEnter()
     */
    StockListPage.prototype.ngOnInit = function () {
        var _this = this;
        //Mostrar loading
        this.loading = true;
        this.menuCtrl.enable(true);
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_7__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])());
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])());
        this.initSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            company$,
            filial$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (arr) {
            _this.company = arr[0];
            _this.filial = arr[1];
            var firstTimeLoadCategories = true;
            return _models_company__WEBPACK_IMPORTED_MODULE_7__["Company"].categories
                .list(_this.company.id, null, [{
                    name: "priority",
                    type: "asc",
                }])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (categories) {
                _this.optionsCategories = categories;
                if (firstTimeLoadCategories) {
                    var consistancePriorityUpdates = [];
                    for (var i = 0; i < categories.length; i++) {
                        if (i != categories[i].priority) {
                            consistancePriorityUpdates.push(_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].update(categories[i].id, { priority: i }));
                        }
                    }
                    if (consistancePriorityUpdates.length != 0) {
                        console.error("Inconsistência identificada, atualizando prioridades...");
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(consistancePriorityUpdates).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function () {
                        }, function (error) {
                            console.error("Erro ao atualizar prioridades", error);
                        });
                    }
                }
                firstTimeLoadCategories = false;
            }));
        }))
            .subscribe(function () {
            _this.refresh();
        }, function (err) {
            _this.loading = false;
            _this.system.showErrorAlert(err);
            _this.ref.detectChanges();
        });
    };
    StockListPage.prototype.refresh = function () {
        var _this = this;
        this.loading = true;
        this.ref.detectChanges();
        if (this.productsStockSubscription)
            this.productsStockSubscription.unsubscribe();
        //Obtém lista de produtos de estoque de uma filial ordenados (com categorias configuradas)
        this.productsStockSubscription = this.productProvider.getProductsStockFilial(this.filial)
            //Filtrar e ordenar os produtos "Recomendação do chefe"  
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (products_stock) {
            _this.recomendationProductsStock = products_stock
                .filter(function (product_stock) { return product_stock.recomendation; });
            for (var i = 0; i < _this.recomendationProductsStock.length; i++) {
                if (_this.recomendationProductsStock[i].recomendation_priority == undefined) {
                    _this.recomendationProductsStock[i].recomendation_priority = i;
                }
            }
            _this.recomendationProductsStock = _this.recomendationProductsStock.sort(_this.productProvider.comparatorProductStockByRecomendation);
            return products_stock.sort(_this.productProvider.comparatorProductStock);
        }))
            .subscribe(function (products_stock) {
            _this.productsStock = products_stock;
            //Atribuir prioridades na primeira entrada
            var index = 0;
            for (var i = 0; i < products_stock.length; i++) {
                if (i > 0 && products_stock[i - 1].category.id == products_stock[i].category.id) {
                    index = 0;
                }
                if (!products_stock[i].priority) {
                    products_stock[i].priority = index;
                }
                index++;
            }
            if (!_this.productsStock || _this.productsStock.length <= 0)
                _this.existsProducts = false;
            else
                _this.existsProducts = true;
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.system.showErrorAlert(err);
            _this.ref.detectChanges();
        });
    };
    StockListPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    /**
     * Adiciona o produto no estoque.
     * @param product Produto a ser adicionado
     */
    StockListPage.prototype.addProduct = function (product, index) {
        var _this = this;
        product.priority = this.productsStock.indexOf(product);
        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: true, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 })
            .subscribe(function () {
            // this.refresh()
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    /**
     * Remove o produto do estoque.
     * @param product Produto a ser removido
     */
    StockListPage.prototype.removeProduct = function (product, index) {
        var _this = this;
        //Remove a relação do produto com o estoque.
        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: false, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 })
            .subscribe(function () {
            // this.refresh()
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    StockListPage.prototype.addRecomendation = function (product, index) {
        var _this = this;
        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true })
            .subscribe(function () {
            // this.refresh()
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    StockListPage.prototype.removeRecomendation = function (product, index) {
        var _this = this;
        _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: false, recomendation_priority: 0 })
            .subscribe(function () {
            // this.refresh()
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    /**
     * Abrir popover do filtro de categorias
    
    async openFilter(myEvent: any) {
      let popover = await this.popoverCtrl.create({
        component: CategoriesFilterPage,
        componentProps: {
          categoriesSelected: this.categoriesSelected
        }
      });
      // popover.present({ ev: myEvent });
      popover.present();
      popover.onDidDismiss().then(((ev) => {
        if (ev && ev.data) {
          this.categoriesSelected = ev.data.categoriesId || [];
        }
      }))
    } */
    /**
     * Retorna a categoria anterior a que foi selecionada
     * @param cId Id da categoria que se quer alterar a prioridade
     */
    StockListPage.prototype.getBeforeCategory = function (cId) {
        var beforeItem = {};
        for (var i = 0; i < this.optionsCategories.length; i++) {
            if (this.optionsCategories[i].id == cId) {
                return beforeItem;
            }
            beforeItem = this.optionsCategories[i];
        }
    };
    /**
     * Retorna a categoria posterior a que foi selecionada
     * @param cId Id da categoria que se quer alterar a prioridade
     */
    StockListPage.prototype.getAfterCategory = function (cId) {
        var doReturn = false;
        var afterItem = {};
        for (var i = 0; i < this.optionsCategories.length; i++) {
            afterItem = this.optionsCategories[i];
            if (doReturn)
                return afterItem;
            if (this.optionsCategories[i].id == cId) {
                doReturn = true;
            }
        }
    };
    StockListPage.prototype.upRecomendation = function (product, index) {
        var _this = this;
        var previousProduct = this.recomendationProductsStock[index - 1];
        if (!previousProduct)
            return;
        //let highestIndex = this.recomendationProductsStock.length - 1;
        // if (index == this.recomendationProductsStock.length - 1) {
        //   this.filial.product_recomendated = product;
        // }
        var aux = previousProduct.recomendation_priority;
        previousProduct.recomendation_priority = product.recomendation_priority;
        product.recomendation_priority = aux;
        if (previousProduct.recomendation_priority == product.recomendation_priority)
            product.recomendation_priority++;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true, recomendation_priority: product.recomendation_priority }),
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, previousProduct.id, { active: previousProduct.active, priority: previousProduct.priority, recomendation: true, recomendation_priority: previousProduct.recomendation_priority })
        ]).subscribe(function (res) {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Ocorreu um erro", error);
        });
    };
    StockListPage.prototype.downRecomendation = function (product, index) {
        var _this = this;
        var posteriorProduct = this.recomendationProductsStock[index + 1];
        if (!posteriorProduct)
            return;
        var aux = posteriorProduct.recomendation_priority;
        posteriorProduct.recomendation_priority = product.recomendation_priority;
        product.recomendation_priority = aux;
        if (posteriorProduct.recomendation_priority == product.recomendation_priority)
            product.recomendation_priority--;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: true, recomendation_priority: product.recomendation_priority }),
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, posteriorProduct.id, { active: posteriorProduct.active, priority: posteriorProduct.priority, recomendation: true, recomendation_priority: posteriorProduct.recomendation_priority })
        ]).subscribe(function (res) {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Ocorreu um erro", error);
        });
    };
    /**
     * Ação para subir um produto
     * @param product produto que se deseja subir
     */
    StockListPage.prototype.upProductPriority = function (product, position) {
        var _this = this;
        var previousProduct = this.productsStock[position - 1];
        if (!previousProduct)
            return;
        var aux = previousProduct.priority;
        previousProduct.priority = product.priority;
        product.priority = aux;
        //Não permitir subir um produto se adentrar em outra categoria
        if (previousProduct.category.id !== product.category.id)
            return;
        if (previousProduct.priority == product.priority)
            product.priority++;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 }),
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, previousProduct.id, { active: previousProduct.active, priority: previousProduct.priority, recomendation: previousProduct.recomendation ? previousProduct.recomendation : false, recomendation_priority: previousProduct.recomendation_priority ? previousProduct.recomendation_priority : 0 })
        ]).subscribe(function (res) {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Ocorreu um erro", error);
        });
    };
    /**
    * Ação para descer um produto
    * @param product produto que se deseja descer
    */
    StockListPage.prototype.downProductPriority = function (product, position) {
        var _this = this;
        var posteriorProduct = this.productsStock[position + 1];
        if (!posteriorProduct)
            return;
        var aux = posteriorProduct.priority;
        posteriorProduct.priority = product.priority;
        product.priority = aux;
        //Não permitir descer um produto se adentrar em outra categoria
        if (posteriorProduct.category.id !== product.category.id)
            return;
        if (posteriorProduct.priority == product.priority)
            posteriorProduct.priority++;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, product.id, { active: product.active, priority: product.priority, recomendation: product.recomendation ? product.recomendation : false, recomendation_priority: product.recomendation_priority ? product.recomendation_priority : 0 }),
            _models_filial__WEBPACK_IMPORTED_MODULE_1__["Filial"].product_stock.add(this.filial.id, posteriorProduct.id, { active: posteriorProduct.active, priority: posteriorProduct.priority, recomendation: posteriorProduct.recomendation ? posteriorProduct.recomendation : false, recomendation_priority: posteriorProduct.recomendation_priority ? posteriorProduct.recomendation_priority : 0 })
        ]).subscribe(function (res) {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Ocorreu um erro", error);
        });
    };
    /**
     * Ação de subir a categoria
     * @param category
     */
    StockListPage.prototype.upCategoryPriority = function (category) {
        var _this = this;
        var beforeItem = this.getBeforeCategory(category.id);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].update(beforeItem.id, { priority: category.priority }),
            _models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].update(category.id, { priority: beforeItem.priority }),
        ]).subscribe(function () {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Erro ao atualizar prioridades", error);
        });
    };
    /**
     * Ação de descer a categoria
     * @param category
     */
    StockListPage.prototype.downCategoryPriority = function (category) {
        var _this = this;
        var afterItem = this.getAfterCategory(category.id);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].update(afterItem.id, { priority: category.priority }),
            _models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].update(category.id, { priority: afterItem.priority }),
        ]).subscribe(function () {
            _this.ref.detectChanges();
        }, function (error) {
            console.error("Erro ao atualizar prioridades");
        });
    };
    /**
     * @param category é a categoria que se quer receber o nome
     */
    StockListPage.prototype.getCategoryName = function (category) {
        this.tempCategory = category.id;
        if (!category.name)
            return "Categoria sem nome";
        return category.name;
    };
    StockListPage.prototype.ngOnDestroy = function () {
        if (this.initSubscription)
            this.initSubscription.unsubscribe();
        if (this.productsStockSubscription)
            this.productsStockSubscription.unsubscribe();
    };
    StockListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-list',
            template: __webpack_require__(/*! ./stock-list.page.html */ "./src/app/panel/pages/stock/stock-list/stock-list.page.html"),
            styles: [__webpack_require__(/*! ./stock-list.page.scss */ "./src/app/panel/pages/stock/stock-list/stock-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"]])
    ], StockListPage);
    return StockListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-stock-stock-list-stock-list-module.js.map