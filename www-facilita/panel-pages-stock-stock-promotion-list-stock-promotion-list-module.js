(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-stock-stock-promotion-list-stock-promotion-list-module"],{

/***/ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StockPromotionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPromotionListPageModule", function() { return StockPromotionListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _stock_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-promotion-list.page */ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.ts");
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
        component: _stock_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["StockPromotionListPage"]
    }
];
var StockPromotionListPageModule = /** @class */ (function () {
    function StockPromotionListPageModule() {
    }
    StockPromotionListPageModule = __decorate([
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
            declarations: [_stock_promotion_list_page__WEBPACK_IMPORTED_MODULE_5__["StockPromotionListPage"]]
        })
    ], StockPromotionListPageModule);
    return StockPromotionListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n\t<nano-navbar title=\"Estoque de promoções\" icon=\"menus-icon-ecommerce-45\">\r\n\t</nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\t<ion-card class=\"content-card\">\r\n\r\n\t\t<div class=\"myfilter\">\r\n\t\t\t<ion-searchbar clear [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"detect()\"></ion-searchbar>\r\n\t\t</div>\r\n\r\n\t\t<nano-loading [loading]=\"loading\">\r\n\r\n\t\t\t<ion-list>\r\n\t\t\t\t<div *ngFor=\"let promotion of promotionsStock | filterBy:['name', 'description']:searchString; let i = index\"\r\n\t\t\t\t class=\"promotions\">\r\n\t\t\t\t\t<div class=\"list-item\">\r\n\t\t\t\t\t\t<nano-thumb class=\"promotion-item\" [ngClass]=\"{'inactive': !promotion.active}\" [src]=\"promotion.image\" [border]=\"true\"></nano-thumb>\r\n\t\t\t\t\t\t<div class=\"promotion-item\" style=\"flex-grow: 1\">\r\n\t\t\t\t\t\t\t<div class=\"name\" [ngClass]=\"{'inactive': !promotion.active}\">\r\n\t\t\t\t\t\t\t\t{{promotion.name}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"description\">{{promotion.description}}</div>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"success\" *ngIf=\"!promotion.active\" (click)=\"addPromotion(promotion)\">Adicionar</ion-button>\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" color=\"danger\" *ngIf=\"promotion.active\" (click)=\"removePromotion(promotion)\">Remover</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"promotion-item\">\r\n\t\t\t\t\t\t\t<ion-button fill=\"clear\" class=\"price\">R$ {{promotion.priceBase | number: '1.2-2'}}</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n        </div>\r\n        \r\n\t\t\t\t<ion-item text-center padding *ngIf=\"!existsPromotions\">\r\n\t\t\t\t\t<p ion-text>Você ainda não possui nenhuma promoção</p>\r\n\t\t\t\t  </ion-item>\r\n\t\t\t</ion-list>\r\n\t\t</nano-loading>\r\n\r\n\t</ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f8f8f8 !important; }\n\nion-grid ion-icon {\n  margin-top: 14px;\n  font-size: 2.2em; }\n\nion-card {\n  margin-bottom: 60px !important; }\n\n.promotions {\n  font-family: myFontRegular !important;\n  margin: auto; }\n\n.promotions .list-item {\n    display: flex;\n    margin: 0.6em 0 0.6em 1.6em;\n    background-color: white !important;\n    margin-bottom: solid 1px #ddd !important;\n    padding: 8px 0px 8px 0px !important; }\n\n@media (max-width: 400px) {\n      .promotions .list-item {\n        flex-direction: column;\n        align-items: center; } }\n\n.promotions .list-item .promotion-item {\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-right: 1.2em; }\n\n@media (max-width: 400px) {\n        .promotions .list-item .promotion-item {\n          text-align: center; } }\n\n.promotions .list-item .promotion-item .name {\n        font-size: 1.4em;\n        color: black; }\n\n.promotions .list-item .promotion-item .name.inactive {\n          color: #999; }\n\n.promotions .list-item .promotion-item .description {\n        font-size: 1em;\n        color: #999; }\n\n.promotions .list-item .promotion-item .price {\n        white-space: nowrap;\n        font-size: 1.4em;\n        color: #4c4; }\n\n.promotions .list-item .promotion-item button {\n        font-weight: bold !important; }\n\n.button-md {\n  margin: 0px !important;\n  padding: 0px !important;\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  margin-left: -5px !important; }\n\nion-searchbar {\n  border-bottom: none !important; }\n\n.myfilter {\n  display: flex;\n  border-bottom: solid 2px #ddd !important; }\n\n.myfilter ion-searchbar {\n    flex-grow: 1; }\n\n.myfilter button {\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 8px !important; }\n\nnano-thumb.inactive {\n  opacity: 0.5 !important; }\n"

/***/ }),

/***/ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.ts ***!
  \*************************************************************************************/
/*! exports provided: StockPromotionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPromotionListPage", function() { return StockPromotionListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StockPromotionListPage = /** @class */ (function () {
    function StockPromotionListPage(navCtrl, popoverCtrl, alertCtrl, menuCtrl, ref, promotionService, shared, route, loadingCtrl, system) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.promotionService = promotionService;
        this.shared = shared;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.system = system;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa
         */
        this.searchString = "";
        /**
         * Verifica se existe promoções
         */
        this.existsPromotions = false;
        /**
         * Exibir loading quando a lista estiver sendo carregada
         */
        this.loading = true;
    }
    /**
     * Inicializando estruturas após entrar na página
     * e passar pela verificação do ionViewCanEnter()
     */
    StockPromotionListPage.prototype.ngOnInit = function () {
        var _this = this;
        //Mostrar loading
        this.loading = true;
        this.menuCtrl.enable(true);
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_1__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])());
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])());
        this.initSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            company$,
            filial$
        ])
            .subscribe(function (arr) {
            _this.company = arr[0];
            _this.filial = arr[1];
            _this.refresh();
        }, function (err) {
            _this.loading = false;
            _this.system.showErrorAlert(err);
            _this.ref.detectChanges();
        });
    };
    StockPromotionListPage.prototype.refresh = function () {
        var _this = this;
        this.loading = true;
        this.ref.detectChanges();
        if (this.promotionsStockSubscription)
            this.promotionsStockSubscription.unsubscribe();
        //Obtém lista de promoções de estoque de uma filial ordenados
        this.promotionsStockSubscription = this.promotionService.getPromotionsStockFilial(this.filial)
            .subscribe(function (promotion_stock) {
            _this.promotionsStock = promotion_stock;
            if (!_this.promotionsStock || _this.promotionsStock.length <= 0)
                _this.existsPromotions = false;
            else
                _this.existsPromotions = true;
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.system.showErrorAlert(err);
            _this.ref.detectChanges();
        });
    };
    StockPromotionListPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    /**
     * Adiciona a promoção no estoque.
     * @param promotion Promoção a ser adicionada
     */
    StockPromotionListPage.prototype.addPromotion = function (promotion) {
        var _this = this;
        _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].promotion_stock.add(this.filial.id, promotion.id, { active: true, quantity: promotion.quantity || 0 })
            .subscribe(function () {
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    /**
     * Remove a promoção do estoque.
     * @param promotion Promoção a ser removida
     */
    StockPromotionListPage.prototype.removePromotion = function (promotion, index) {
        var _this = this;
        //Remove a relação da promoção com o estoque.
        _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].promotion_stock.add(this.filial.id, promotion.id, { active: false, quantity: promotion.quantity || 0 })
            .subscribe(function () {
            // this.refresh()
            _this.ref.detectChanges();
        }, function (err) {
            _this.system.showErrorAlert(err);
        });
    };
    StockPromotionListPage.prototype.ngOnDestroy = function () {
        if (this.initSubscription)
            this.initSubscription.unsubscribe();
        if (this.promotionsStockSubscription)
            this.promotionsStockSubscription.unsubscribe();
    };
    StockPromotionListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-promotion-list',
            template: __webpack_require__(/*! ./stock-promotion-list.page.html */ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.html"),
            styles: [__webpack_require__(/*! ./stock-promotion-list.page.scss */ "./src/app/panel/pages/stock/stock-promotion-list/stock-promotion-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__["PromotionService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"]])
    ], StockPromotionListPage);
    return StockPromotionListPage;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/promotion.service.ts ***!
  \***********************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/company */ "./src/models/company.ts");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionService = /** @class */ (function () {
    function PromotionService() {
    }
    /**
     * Busca uma lista de promoções de uma filial.
     * Adiciona nessa lista de promoções as informações do relacionamento.
     * Gerando Promoções com:
     * Atributos do produto. Active e quantity
     * Se active true então existe o relacionamento com a filial. Se false não existe relacionamento da promoção com a filial.
     * Demais atributos diretos do relacionamento Filial.promotions_stock
     * @param id_filial Id da filial
     */
    PromotionService.prototype.getPromotionsStockFilial = function (filial) {
        console.log(filial);
        var promotions$ = _models_company__WEBPACK_IMPORTED_MODULE_1__["Company"].promotions.list(filial.company.id);
        var relations$ = _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].promotion_stock.listRelation(filial.id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            promotions$,
            relations$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (arr) {
            var promotions = arr[0];
            var relations = arr[1];
            var id_promotion_to_relationship = {};
            for (var _i = 0, relations_1 = relations; _i < relations_1.length; _i++) {
                var obj = relations_1[_i];
                id_promotion_to_relationship[obj.id] = obj;
            }
            // Para todos as promoções verificar as informações do relacionamento
            for (var _a = 0, promotions_1 = promotions; _a < promotions_1.length; _a++) {
                var promotion = promotions_1[_a];
                // Se existir o relacionamento do produto com a filial
                if (id_promotion_to_relationship[promotion.id]) {
                    promotion.active = (id_promotion_to_relationship[promotion.id].active === undefined ? true : id_promotion_to_relationship[promotion.id].active);
                    promotion.quantity = (id_promotion_to_relationship[promotion.id].quantity === undefined ? 0 : id_promotion_to_relationship[promotion.id].quantity);
                }
                else {
                    promotion.active = false;
                }
                // Se não existir o relacionamento do produto com a filial
            }
            return promotions;
        }));
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PromotionService);
    return PromotionService;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-stock-stock-promotion-list-stock-promotion-list-module.js.map