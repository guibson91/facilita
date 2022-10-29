(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-coupon-coupon-list-coupon-list-module"],{

/***/ "./src/app/panel/pages/coupon/coupon-list/coupon-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-list/coupon-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: CouponListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponListPageModule", function() { return CouponListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _coupon_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon-list.page */ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.ts");
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
        component: _coupon_list_page__WEBPACK_IMPORTED_MODULE_5__["CouponListPage"]
    }
];
var CouponListPageModule = /** @class */ (function () {
    function CouponListPageModule() {
    }
    CouponListPageModule = __decorate([
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
            declarations: [_coupon_list_page__WEBPACK_IMPORTED_MODULE_5__["CouponListPage"]]
        })
    ], CouponListPageModule);
    return CouponListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-list/coupon-list.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <nano-navbar title=\"Cupons\" icon=\"menus-icon-ecommerce-46\"></nano-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-card class=\"content-card\">\r\n    <ion-searchbar [(ngModel)]=\"searchString\" placeholder=\"Pesquisar\">\r\n    </ion-searchbar>\r\n    <nano-loading [loading]=\"loading\">\r\n      <ion-list>\r\n        <div class=\"container\" no-lines padding *ngFor=\"let coupon of coupons$ | async | filterBy:['name']:searchString\"\r\n          text-wrap>\r\n          <h2 class=\"coupon-name\" [ngClass]=\"{inactive: !coupon?.enable}\">{{coupon.name}}<span *ngIf=\"coupon.fromTeam\"\r\n              style=\"color:coral\"><br />(TEAM)</span></h2>\r\n          <p [ngClass]=\"{inactive: !coupon?.enable}\">{{coupon.description}}</p>\r\n          <div>\r\n            <ion-button fill=\"clear\" (click)=\"edit(coupon)\" color=\"proceed\">\r\n              <ion-icon name=\"md-create\"></ion-icon> Editar\r\n            </ion-button>\r\n          </div>\r\n          <div>\r\n            <ion-item>\r\n              <ion-label>Ativo</ion-label>\r\n              <ion-toggle [(ngModel)]=\"coupon.enable\" (ionChange)=\"changeActiveStatus(coupon)\"></ion-toggle>\r\n            </ion-item>\r\n          </div>\r\n        </div>\r\n      </ion-list>\r\n\r\n      <ion-item text-center padding *ngIf=\"!existsCoupons\">\r\n        <p ion-text>Você ainda não possui coupons</p>\r\n      </ion-item>\r\n    </nano-loading>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-list/coupon-list.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list .container {\n  border-bottom: 1px solid #eee;\n  display: flex !important;\n  justify-content: space-between !important;\n  align-items: center !important; }\n  ion-list .container h2 {\n    min-width: 16%;\n    font-weight: bold !important;\n    color: var(--ion-color-primary) !important; }\n  ion-list .container h2.inactive, ion-list .container p.inactive {\n    font-weight: normal !important;\n    color: lightgrey !important;\n    text-decoration: line-through !important; }\n  ion-list .container ion-item ion-label {\n    font-size: 1.2em;\n    font-weight: bold;\n    color: var(--ion-color-primary); }\n"

/***/ }),

/***/ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/panel/pages/coupon/coupon-list/coupon-list.page.ts ***!
  \********************************************************************/
/*! exports provided: CouponListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponListPage", function() { return CouponListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/coupon */ "./src/models/coupon.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/company */ "./src/models/company.ts");
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










var CouponListPage = /** @class */ (function () {
    function CouponListPage(navCtrl, menuCtrl, shared, ref, authentication, route, couponProvider) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.ref = ref;
        this.authentication = authentication;
        this.route = route;
        this.couponProvider = couponProvider;
        this.loading = true;
    }
    /**
     * Inicializando estruturas após entrar na página.
     */
    CouponListPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(true);
        this.load();
    };
    CouponListPage.prototype.load = function () {
        var _this = this;
        this.loading = true;
        var company$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('company_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_7__["Company"].object(params.get('company_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        var filial$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            if (params.get('filial_id'))
                return _models_company__WEBPACK_IMPORTED_MODULE_7__["Company"].object(params.get('filial_id'));
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        this.coupons$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            company$,
            filial$
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (arr) {
            _this.company = arr[0];
            _this.filial = arr[1];
            if (_this.filial) {
                return _this.couponProvider.getCouponsFromFilial(_this.filial.id);
            }
            else if (_this.company) {
                return _this.couponProvider.getCouponsFromCompany(_this.company.id);
            }
            else {
                return _models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"].list();
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (coupons) {
            _this.loading = false;
            _this.ref.detectChanges();
            if (coupons && coupons.length > 0) {
                _this.existsCoupons = true;
            }
            else {
                _this.existsCoupons = false;
            }
        }));
    };
    CouponListPage.prototype.edit = function (coupon) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.navigateRoot(['coupon/edit', { company_id: (this.company ? this.company.id : ''), coupon_id: coupon.id }])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponListPage.prototype.changeActiveStatus = function (coupon) {
        console.log("Cupom a ser editado: ", coupon);
        var couponObject = {};
        couponObject.enable = coupon.enable;
        _models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"].update(coupon.id, couponObject).subscribe(function () {
            console.log("Cupom atualizado com sucesso");
        }, function (error) {
            console.error("Error", error);
        });
    };
    CouponListPage.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navCtrl.navigateRoot(['coupon/edit', { company_id: (this.company ? this.company.id : '') }])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CouponListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-list',
            template: __webpack_require__(/*! ./coupon-list.page.html */ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.html"),
            styles: [__webpack_require__(/*! ./coupon-list.page.scss */ "./src/app/panel/pages/coupon/coupon-list/coupon-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_coupon_service__WEBPACK_IMPORTED_MODULE_4__["CouponService"]])
    ], CouponListPage);
    return CouponListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-coupon-coupon-list-coupon-list-module.js.map