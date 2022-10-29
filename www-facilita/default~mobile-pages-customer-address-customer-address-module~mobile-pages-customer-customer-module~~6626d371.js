(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~6626d371"],{

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/company */ "./src/models/company.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/category */ "./src/models/category.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/product */ "./src/models/product.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/filial */ "./src/models/filial.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    /**
     * Busca uma lista de produtos de uma empresa.
     * Gerando Produtos com:
     * Atributos do produto. Categoria do produto.
     * @param id_company Id da empresa
     */
    ProductService.prototype.getProductsStockCompany = function (id_company) {
        return _models_company__WEBPACK_IMPORTED_MODULE_0__["Company"].categories.list(id_company)
            // Todas as categorias
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (categories) {
            return _models_company__WEBPACK_IMPORTED_MODULE_0__["Company"].products.list(id_company)
                // Todos os produtos
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (products) {
                // Informações sobre o relacionamento da filial com os produtos
                var id_category_to_category = {};
                for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                    var category = categories_1[_i];
                    id_category_to_category[category.id] = category;
                }
                // Elementos usados no estoque
                var product_stock = [];
                // Para todos os produtos verificar as informações do relacionamento
                for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
                    var product = products_1[_a];
                    product_stock.push(__assign({}, product, { category: id_category_to_category[product.category.id] }));
                }
                return product_stock;
            }));
        }));
    };
    /**
     * Busca uma lista de produtos globais do tipo de uma empresa.
     * Gerando Produtos com:
     * Atributos do produto. Categoria do produto.
     * @param id_company Id da empresa
     */
    ProductService.prototype.getProductsStockGlobal = function (type) {
        if (!type)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        return _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].list([{ name: 'type', operator: '==', value: type }])
            // Todas as categorias
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (categories) {
            return _models_product__WEBPACK_IMPORTED_MODULE_3__["Product"].list([{ name: 'global.type', operator: '==', value: type }])
                // Todos os produtos
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (products) {
                // Mapa para relacionar o ID da categoria para a categoria
                var id_category_to_category = {};
                for (var _i = 0, categories_2 = categories; _i < categories_2.length; _i++) {
                    var category = categories_2[_i];
                    id_category_to_category[category.id] = category;
                }
                // Elementos usados no estoque
                var product_stock = [];
                // Para todos os produtos verificar as informações do relacionamento
                for (var _a = 0, products_2 = products; _a < products_2.length; _a++) {
                    var product = products_2[_a];
                    product_stock.push(__assign({}, product, { category: id_category_to_category[product.category.id] }));
                }
                return product_stock;
            }));
        }));
    };
    /**
     * Busca uma lista de produtos de uma filial. E produtos globais que pertencem a uma filial.
     * Adiciona nessa lista de produtos as informações do relacionamento.
     * Gerando Produtos com:
     * Atributos do produto. Categoria do produto.
     * Se active true então existe o relacionamento com a filial. Se false não existe relacionamento do produto com a filial.
     * Demais atributos diretos do relacionamento Filial.product_stock
     * @param id_filial Id da filial
     */
    ProductService.prototype.getProductsStockFilial = function (filial) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.getProductsStockCompany(filial.company.id),
            this.getProductsStockGlobal(filial.type)
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (products_stock) {
            return [].concat(products_stock[0], products_stock[1]);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (products_stock) {
            // Informações sobre o relacionamento da filial com os produtos
            return _models_filial__WEBPACK_IMPORTED_MODULE_6__["Filial"].product_stock.listRelation(filial.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (objs) {
                // Criando um mapa de id produto para informações do relacionamento da filial com o produto
                var id_product_to_relationship = {};
                for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
                    var obj = objs_1[_i];
                    id_product_to_relationship[obj.id] = obj;
                }
                // Para todos os produtos verificar as informações do relacionamento
                for (var _a = 0, products_stock_1 = products_stock; _a < products_stock_1.length; _a++) {
                    var product = products_stock_1[_a];
                    // Se existir o relacionamento do produto com a filial
                    if (id_product_to_relationship[product.id]) {
                        product.active = (id_product_to_relationship[product.id].active === undefined ? true : id_product_to_relationship[product.id].active);
                        product.priority = id_product_to_relationship[product.id].priority;
                        product.recomendation = id_product_to_relationship[product.id].recomendation;
                        product.recomendation_priority = id_product_to_relationship[product.id].recomendation_priority;
                    }
                    else {
                        product.active = false;
                    }
                    // Se não existir o relacionamento do produto com a filial
                }
                return products_stock;
            }));
        }));
    };
    /**
     * Retorna a melhor recomendação de uma filial
     * @param filial Filial no qual será realizado a busca
     */
    ProductService.prototype.getBestRecomendation = function (filial) {
        var _this = this;
        return _models_filial__WEBPACK_IMPORTED_MODULE_6__["Filial"].product_stock
            .list(filial.id, [{ name: "recomendation", operator: "==", value: true }], undefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (products_stock) {
            var recomendationProductsStock = products_stock
                .sort(_this.comparatorProductStockByRecomendation);
            return recomendationProductsStock[0];
        }));
    };
    /**
     * Comparador para ordenar os produtos do estoque baseado na prioridade da recomendação
     * @param a Produto Estoque
     * @param b Produto Estoque
     */
    ProductService.prototype.comparatorProductStockByRecomendation = function (a, b) {
        var p1 = a.recomendation_priority ? a.recomendation_priority : 0;
        var p2 = b.recomendation_priority ? b.recomendation_priority : 0;
        return p2 - p1;
    };
    /**
     * Comparador para ordenar os produtos do estpoque baseado na prioridade de sua categoria.
     * Se a categoria for igual ordenar pela prioridade do produto em relação ao relacionamento com a filial.
     * @param a Produto Estoque
     * @param b Produto Estoque
     */
    ProductService.prototype.comparatorProductStock = function (a, b) {
        if (!a.category) {
            console.warn("Produto sem categoria", a);
            return 1;
        }
        if (!b.category) {
            console.warn("Produto sem categoria", b);
            return -1;
        }
        var cat_pri_p1 = (a.category.priority === undefined ? 0 : a.category.priority);
        var cat_pri_p2 = (b.category.priority === undefined ? 0 : b.category.priority);
        var cat_id_p1 = (a.category.id === undefined ? '' : a.category.id);
        var cat_id_p2 = (b.category.id === undefined ? '' : b.category.id);
        var id_p1 = (a.id === undefined ? '' : a.id);
        var id_p2 = (b.id === undefined ? '' : b.id);
        var pri_p1 = (a.priority === undefined ? 0 : a.priority);
        var pri_p2 = (b.priority === undefined ? 0 : b.priority);
        if (cat_pri_p1 === cat_pri_p2) {
            if (cat_id_p1 === cat_id_p2) {
                if (pri_p1 === pri_p2) {
                    if (id_p1 === id_p2) {
                        return 0;
                    }
                    else {
                        return id_p1 > id_p2 ? -1 : 1;
                    }
                }
                else {
                    return pri_p1 > pri_p2 ? -1 : 1;
                }
            }
            else {
                return cat_id_p1 > cat_id_p2 ? -1 : 1;
            }
        }
        else {
            return cat_pri_p1 < cat_pri_p2 ? -1 : 1;
        }
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=default~mobile-pages-customer-address-customer-address-module~mobile-pages-customer-customer-module~~6626d371.js.map