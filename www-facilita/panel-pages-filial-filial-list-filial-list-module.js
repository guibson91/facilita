(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-filial-filial-list-filial-list-module"],{

/***/ "./src/app/panel/pages/filial/filial-list/filial-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-list/filial-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: FilialListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialListPageModule", function() { return FilialListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _filial_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filial-list.page */ "./src/app/panel/pages/filial/filial-list/filial-list.page.ts");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _filial_list_page__WEBPACK_IMPORTED_MODULE_6__["FilialListPage"]
    }
];
var FilialListPageModule = /** @class */ (function () {
    function FilialListPageModule() {
    }
    FilialListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_7__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_8__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_filial_list_page__WEBPACK_IMPORTED_MODULE_6__["FilialListPage"]]
        })
    ], FilialListPageModule);
    return FilialListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/filial/filial-list/filial-list.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-list/filial-list.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <nano-navbar title=\"Estabelecimentos\" icon=\"menus-icon-shop\" [helpPage]=\"4\">\r\n  </nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\" (ionChange)=\"detect()\">\r\n    </ion-searchbar>\r\n\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n        <div class=\"filial-div\" *ngFor=\"let filial of filials | filterBy:['name', 'location.street', 'location.district', 'location.state', 'location.country', 'location.city']:searchString\">\r\n          <div padding text-wrap>\r\n\r\n            <nano-thumb large=\"true\" [src]=\"filial.image\"></nano-thumb>\r\n\r\n            <div class=\"content-filial\" text-wrap padding-start>\r\n              <h1>{{filial.name}}</h1>\r\n              <p>{{filial.location?.street}}, {{filial.location?.number}} - {{filial.location?.district}},\r\n                {{filial.location?.city}},\r\n                {{filial.location?.state}}\r\n              </p>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"flex-content\" padding>\r\n            <div class=\"buttons\">\r\n              <ion-button class=\"negative-margin\" (click)=\"openStock(filial)\" fill=\"clear\" color=\"proceed\" *ngIf=\"company?.delivery\">\r\n                <div class=\"menus-icon menus-icon-menu\"></div> Estoque\r\n              </ion-button>\r\n\r\n              <ion-button class=\"negative-margin\" (click)=\"openStockPromotion(filial)\" fill=\"clear\" color=\"proceed\" *ngIf=\"company?.promotion\">\r\n                <div class=\"menus-icon menus-icon-menu\"></div> Estoque de promoções\r\n              </ion-button>\r\n\r\n              <ion-button class=\"negative-margin\" (click)=\"openInvoice(filial)\" fill=\"clear\" color=\"proceed\">\r\n                <div class=\"menus-icon menus-icon-credit-card\"></div> Fatura\r\n              </ion-button>\r\n\r\n              <ion-button class=\"negative-margin\" (click)=\"openStatistics(filial)\" fill=\"clear\" color=\"proceed\">\r\n                <div class=\"menus-icon menus-icon-ecommerce-12\"></div><span></span> Vendas\r\n              </ion-button>\r\n\r\n              <ion-button fill=\"clear\" (click)=\"edit(filial)\" color=\"proceed\">\r\n                <ion-icon name=\"md-create\"></ion-icon> Editar\r\n              </ion-button>\r\n\r\n            </div>\r\n            <ion-item class=\"active\" *ngIf=\"isTEAM\">\r\n              <ion-label style=\"display: block\">Ativo</ion-label>\r\n              <ion-toggle [(ngModel)]=\"filial.active\" (ionChange)=\"changeActiveStatus(filial)\"></ion-toggle>\r\n            </ion-item>\r\n          </div>\r\n          <card-filial-open [filial]=\"filial\" [inside]=\"true\"></card-filial-open>\r\n        </div>\r\n\r\n        <ion-item text-center padding *ngIf=\"!existsFilials\">\r\n          <p ion-text>Você ainda não possui filial</p>\r\n        </ion-item>\r\n      </ion-list>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"company\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-list/filial-list.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-list/filial-list.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item.active {\n  margin-left: 10px; }\n  ion-item.active ion-label {\n    font-size: 1.2em;\n    font-weight: bold;\n    color: var(--ion-color-primary); }\n  .active ion-label.gone {\n  display: none !important; }\n  .filial-div {\n  border-top: solid 1px #ddd !important; }\n  nano-thumb {\n  display: inline-block; }\n  .content-filial {\n  display: inline-block;\n  margin-left: 8px; }\n  .flex-content {\n  display: flex;\n  justify-content: space-between; }\n  ion-item button.negative-margin {\n  margin-left: -6px !important; }\n  ion-item button span {\n  color: var(--ion-color-proceed) !important;\n  font-size: 1.1em !important; }\n  ion-item .text-md-filial {\n  color: var(--ion-color-proceed) !important; }\n  ion-item .buttons {\n  display: flex;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/panel/pages/filial/filial-list/filial-list.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/panel/pages/filial/filial-list/filial-list.page.ts ***!
  \********************************************************************/
/*! exports provided: FilialListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialListPage", function() { return FilialListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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










var FilialListPage = /** @class */ (function () {
    function FilialListPage(navCtrl, authentication, menuCtrl, ref, loadingCtrl, shared, route, system) {
        this.navCtrl = navCtrl;
        this.authentication = authentication;
        this.menuCtrl = menuCtrl;
        this.ref = ref;
        this.loadingCtrl = loadingCtrl;
        this.shared = shared;
        this.route = route;
        this.system = system;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa.
         */
        this.searchString = "";
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Se não possui filiais.
         * Se após baixar não vier filiais aí sim podemos garantir que não existem filiais atualmente.
         * Usada para mostrar mensagem "Você não possui filiais".
         */
        this.existsFilials = true;
    }
    Object.defineProperty(FilialListPage.prototype, "isTEAM", {
        get: function () {
            return this.shared.isTeam;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Inicializar a lista de relacionamentos.
     * @todo Tirar dos comentarios
     */
    FilialListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loading = true;
        this.existsFilials = true;
        this.initSubscription = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_3__["Company"].object(params.get('company_id'));
            else if (_this.shared.isManager)
                return _this.shared.company$;
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (company) {
            var filials$;
            if (company) {
                _this.company = company;
                console.log(_this.company);
                filials$ = _models_company__WEBPACK_IMPORTED_MODULE_3__["Company"].filials
                    .list(company.id);
            }
            else {
                filials$ = _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].list();
            }
            return filials$;
        }))
            .subscribe(function (filials) {
            _this.filials = filials;
            // Verificar se não existe categorias.
            if (filials && filials.length === 0) {
                _this.existsFilials = false;
            }
            else {
                _this.existsFilials = true;
            }
            // Não está mais carregando.
            _this.loading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.loading = false;
            _this.ref.detectChanges();
            _this.system.showErrorAlert(err);
        });
    };
    FilialListPage.prototype.detect = function () {
        this.ref.detectChanges();
    };
    FilialListPage.prototype.ngOnDestroy = function () {
        if (this.initSubscription)
            this.initSubscription.unsubscribe();
    };
    /**
     * Ir para página de adição
     */
    FilialListPage.prototype.add = function () {
        this.navCtrl.navigateRoot(['filial/edit', { company_id: this.company.id }]);
    };
    /**
     * Ir para a página FilialEditPage para editar uma filial
     * @param filial filial a ser editada
     */
    FilialListPage.prototype.edit = function (filial) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.navigateRoot(['filial/edit', { company_id: filial.company.id, filial_id: filial.id }]);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Abrir o estoque de uma determinada filial
     * @param filial Filial escolhida
     * @todo OPEN CARDAPIO
     */
    FilialListPage.prototype.openStock = function (filial) {
        this.navCtrl.navigateRoot(['stock/list', { filial_id: filial.id, company_id: filial.company.id }]);
    };
    FilialListPage.prototype.openStockPromotion = function (filial) {
        this.navCtrl.navigateRoot(['stock/promotion/list', { filial_id: filial.id, company_id: filial.company.id }]);
    };
    FilialListPage.prototype.openInvoice = function (filial) {
        this.navCtrl.navigateRoot(['invoice/list', { filial_id: filial.id, company_id: filial.company.id }]);
    };
    FilialListPage.prototype.openStatistics = function (filial) {
        this.navCtrl.navigateRoot(['statistic/orders', { filial_id: filial.id, company_id: filial.company.id }]);
    };
    FilialListPage.prototype.changeActiveStatus = function (filial) {
        _models_filial__WEBPACK_IMPORTED_MODULE_2__["Filial"].changeActive(filial, filial.active).subscribe();
    };
    FilialListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filial-list',
            template: __webpack_require__(/*! ./filial-list.page.html */ "./src/app/panel/pages/filial/filial-list/filial-list.page.html"),
            styles: [__webpack_require__(/*! ./filial-list.page.scss */ "./src/app/panel/pages/filial/filial-list/filial-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"]])
    ], FilialListPage);
    return FilialListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-filial-filial-list-filial-list-module.js.map