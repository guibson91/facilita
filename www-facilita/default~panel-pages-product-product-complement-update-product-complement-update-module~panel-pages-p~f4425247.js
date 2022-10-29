(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~panel-pages-product-product-complement-update-product-complement-update-module~panel-pages-p~f4425247"],{

/***/ "./src/app/panel/pages/product/add-options-complement/add-options-complement.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/panel/pages/product/add-options-complement/add-options-complement.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddOptionsComplementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOptionsComplementPageModule", function() { return AddOptionsComplementPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-options-complement.page */ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddOptionsComplementPageModule = /** @class */ (function () {
    function AddOptionsComplementPageModule() {
    }
    AddOptionsComplementPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_5__["GlobalComponentsModule"]
            ],
            declarations: [_add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__["AddOptionsComplementPage"]],
            entryComponents: [_add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__["AddOptionsComplementPage"]]
        })
    ], AddOptionsComplementPageModule);
    return AddOptionsComplementPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/panel/pages/product/add-options-complement/add-options-complement.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"hideScrollbar\">\r\n  <form [formGroup]=\"form\">\r\n    <ion-item no-padding>\r\n      <ion-label position=\"stacked\" color=\"tertiary\">Nome</ion-label>\r\n      <ion-input formControlName=\"name\" #input></ion-input>\r\n    </ion-item>\r\n    <ion-item no-padding>\r\n      <ion-label position=\"stacked\" color=\"tertiary\">Descrição</ion-label>\r\n      <ion-input formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n    <ion-item no-padding>\r\n      <ion-label position=\"stacked\" color=\"tertiary\">Preço </ion-label>\r\n      <money-input item-content [control]=\"form.controls['price']\"></money-input>\r\n    </ion-item>\r\n    <div>\r\n      <ion-button fill=\"clear\" color=\"medium\" (click)=\"cancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n        Cancelar\r\n      </ion-button>\r\n      <ion-button color=\"proceed\" [disabled]=\"!form.valid\" (click)=\"saveOption()\">\r\n        <ion-icon name=\"md-checkmark\"></ion-icon>\r\n        Salvar\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/panel/pages/product/add-options-complement/add-options-complement.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 300px; }\n\nion-content {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/panel/pages/product/add-options-complement/add-options-complement.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddOptionsComplementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOptionsComplementPage", function() { return AddOptionsComplementPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddOptionsComplementPage = /** @class */ (function () {
    function AddOptionsComplementPage(elementRef, renderer, popoverCtrl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.popoverCtrl = popoverCtrl;
    }
    AddOptionsComplementPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
        if (this.option) {
            this.form.patchValue(this.option);
        }
        this.setFocus();
    };
    AddOptionsComplementPage.prototype.setFocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.input.setFocus();
        }, 500);
    };
    AddOptionsComplementPage.prototype.setFocus2 = function () {
        var _this = this;
        setTimeout(function () {
            var element = _this.elementRef.nativeElement.querySelector('input');
            _this.renderer.invokeElementMethod(element, 'focus', []);
        }, 500);
    };
    AddOptionsComplementPage.prototype.saveOption = function () {
        this.popoverCtrl.dismiss(this.form.value);
    };
    AddOptionsComplementPage.prototype.cancel = function () {
        this.popoverCtrl.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], AddOptionsComplementPage.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddOptionsComplementPage.prototype, "option", void 0);
    AddOptionsComplementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-options-complement',
            template: __webpack_require__(/*! ./add-options-complement.page.html */ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.html"),
            styles: [__webpack_require__(/*! ./add-options-complement.page.scss */ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AddOptionsComplementPage);
    return AddOptionsComplementPage;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/product-complement-update/product-complement-update.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-complement-update/product-complement-update.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductComplementUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComplementUpdatePageModule", function() { return ProductComplementUpdatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _product_complement_update_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-complement-update.page */ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.ts");
/* harmony import */ var _add_options_complement_add_options_complement_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-options-complement/add-options-complement.module */ "./src/app/panel/pages/product/add-options-complement/add-options-complement.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductComplementUpdatePageModule = /** @class */ (function () {
    function ProductComplementUpdatePageModule() {
    }
    ProductComplementUpdatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _add_options_complement_add_options_complement_module__WEBPACK_IMPORTED_MODULE_5__["AddOptionsComplementPageModule"]
            ],
            declarations: [_product_complement_update_page__WEBPACK_IMPORTED_MODULE_4__["ProductComplementUpdatePage"]],
            entryComponents: [_product_complement_update_page__WEBPACK_IMPORTED_MODULE_4__["ProductComplementUpdatePage"]]
        })
    ], ProductComplementUpdatePageModule);
    return ProductComplementUpdatePageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-complement-update/product-complement-update.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <h1 ion-text text-center class=\"menus-icon-pizza\">\r\n      Cadastrar/Editar complemento\r\n    </h1>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"form\" class=\"form-content\">\r\n    <ion-grid>\r\n      <!--Título-->\r\n      <ion-item>\r\n        <ion-label class=\"label\" position=\"stacked\" color=\"tertiary\">Título</ion-label>\r\n        <ion-input class=\"input\" formControlName=\"title\"></ion-input>\r\n      </ion-item>\r\n      <!--Tipo de complemento-->\r\n      <ion-label padding-horizontal id=\"label-choose\" position=\"stacked\" color=\"tertiary\">Tipo de escolha do usuário</ion-label>\r\n      <ion-radio-group formControlName=\"type\">\r\n        <ion-item>\r\n          <ion-label text-wrap>Só pode escolher uma opção</ion-label>\r\n          <ion-radio checked=\"true\" value=\"single\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label text-wrap>Pode escolher várias opções</ion-label>\r\n          <ion-radio value=\"multiple\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label text-wrap>Cada opção terá uma quantidade associada</ion-label>\r\n          <ion-radio value=\"quantity\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n      <div *ngIf=\"form.value.type != 'single'\">\r\n        <!--Mínimo-->\r\n        <ion-item>\r\n          <ion-label class=\"label\" position=\"stacked\" color=\"tertiary\">Mínimo (deixe em branco para não impor limite\r\n            mínimo)</ion-label>\r\n          <ion-input type=\"number\" class=\"input\" formControlName=\"min\" step=\"1\" min=\"0\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!--Máximo-->\r\n        <ion-item>\r\n          <ion-label class=\"label\" position=\"stacked\" color=\"tertiary\">Máximo (deixe em branco para não impor limite\r\n            máximo)</ion-label>\r\n          <ion-input type=\"number\" class=\"input\" formControlName=\"max\" step=\"1\" min=\"0\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-label id=\"label-choose\" position=\"stacked\" color=\"tertiary\" *ngIf=\"form.value.type == 'single'\">Obrigatoriedade\r\n        de escolha</ion-label>\r\n      <ion-row *ngIf=\"form.value.type == 'single'\">\r\n        <!-- Escolha obrigatória -->\r\n        <ion-item>\r\n          <ion-label>Usuário é obrigado a escolher uma opção</ion-label>\r\n          <ion-checkbox formControlName=\"required\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-row>\r\n\r\n      <ion-list class=\"options-list\">\r\n        <ion-list-header>\r\n          LISTA DE OPÇÕES\r\n        </ion-list-header>\r\n\r\n        <!-- Adicionar Opções do produto -->\r\n        <ion-button fill=\"clear\" color=\"tertiary\" (click)=\"addOption()\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n          <h6>Adicionar opção</h6>\r\n        </ion-button>\r\n\r\n        <ion-item class=\"option-item\" *ngFor=\"let option of options; let i = index\" [hidden]=\"!option\">\r\n          <!--<ion-icon name=\"leaf\" item-start></ion-icon>-->\r\n          <h2 text-wraper>{{option?.name}}</h2>\r\n          <ion-button class=\"set-priority-category-button first-button\" icon-only fill=\"clear\" (click)=\"upOption(option, i)\"\r\n            color=\"proceed\">\r\n            <ion-icon name=\"arrow-up\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button class=\"set-priority-category-button\" icon-only fill=\"clear\" (click)=\"downOption(option, i)\" color=\"proceed\">\r\n            <ion-icon name=\"arrow-down\"></ion-icon>\r\n          </ion-button>\r\n          <p class=\"option-price\">{{(option?.price || 0) | currency:'BRL':'symbol' | formatCurrency}}</p>\r\n          <ion-toggle [checked]=\"option.active !== false\" (ionChange)=\"updateActiveOption(option)\"></ion-toggle>\r\n\r\n          <div slot=\"end\">\r\n            <ion-button color=\"proceed\" margin-right icon-only fill=\"clear\" (click)=\"editOption(option)\">\r\n              <ion-icon name=\"md-create\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button color=\"danger\" fill=\"clear\" icon-only (click)=\"removeOption(option)\">\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n\r\n          </div>\r\n\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n    </ion-grid>\r\n\r\n\r\n    <div class=\"mybuttons\" padding>\r\n      <ion-button fill=\"clear\" margin-vertical color=\"medium\" (click)=\"cancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n        Cancelar\r\n      </ion-button>\r\n      <ion-button color=\"proceed\" [disabled]=\"!form.valid\" (click)=\"save()\">\r\n        <ion-icon name=\"md-checkmark\"></ion-icon>\r\n        Salvar\r\n      </ion-button>\r\n    </div>\r\n\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-complement-update/product-complement-update.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  background: var(--background); }\n\n.mybuttons {\n  background: var(--background); }\n"

/***/ }),

/***/ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/panel/pages/product/product-complement-update/product-complement-update.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductComplementUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComplementUpdatePage", function() { return ProductComplementUpdatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_options_complement_add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-options-complement/add-options-complement.page */ "./src/app/panel/pages/product/add-options-complement/add-options-complement.page.ts");
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





var ProductComplementUpdatePage = /** @class */ (function () {
    function ProductComplementUpdatePage(formBuilder, modalCtrl, ref, popoverCtrl) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.popoverCtrl = popoverCtrl;
        /**
         * Array com as opções do complemento.
         */
        this.options = [];
    }
    ProductComplementUpdatePage.prototype.ngOnInit = function () {
        var _this = this;
        // Criar o formulário.
        this.form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            required: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            min: [0],
            max: [0]
        });
        this.form.valueChanges.subscribe(function () {
            _this.ref.detectChanges();
        });
        if (this.complement) {
            this.complementAux = JSON.parse(JSON.stringify(this.complement));
        }
        if (this.complement) {
            this.options = [];
            if (this.complement.options) {
                this.complement.options.forEach(function (op) {
                    _this.options.push(op);
                });
            }
            this.form.patchValue(this.complement);
        }
    };
    /**
     * Dispara evento se as teclas alt + n for pressionado
     * @param event evento
     */
    ProductComplementUpdatePage.prototype.hotkeys = function (event) {
        if (event.keyCode == 79 && event.altKey) {
            this.addOption();
        }
        else if (event.keyCode == 83 && event.altKey) {
            this.save();
        }
    };
    /**
     * Adicionar uma nova opção ao complemento.
     */
    ProductComplementUpdatePage.prototype.addOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _add_options_complement_add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__["AddOptionsComplementPage"],
                            cssClass: "editOptionsComplementPage"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (ev) {
                            console.log("Evento OnDidDismiss: ", ev);
                            if (ev && ev.data) {
                                _this.options.push(ev.data);
                            }
                        });
                        popover.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remover opção selecionada do array local
     * @param option Opção selecionada
     */
    ProductComplementUpdatePage.prototype.removeOption = function (option) {
        var index = this.options.indexOf(option);
        this.options.splice(index, 1);
    };
    /**
     * Editar opção selecionada do array local
     * @param option Opção selecionada
     */
    ProductComplementUpdatePage.prototype.editOption = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var index, popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.options.indexOf(option);
                        return [4 /*yield*/, this.popoverCtrl.create({
                                component: _add_options_complement_add_options_complement_page__WEBPACK_IMPORTED_MODULE_4__["AddOptionsComplementPage"],
                                componentProps: {
                                    option: option
                                },
                                cssClass: "editOptionsComplementPage"
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (ev) {
                            if (ev && ev.data) {
                                _this.options[index] = ev.data;
                            }
                        });
                        popover.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Ativar ou desativar opção do complemento
     */
    ProductComplementUpdatePage.prototype.updateActiveOption = function (option) {
        if (option.active === undefined) {
            option.active = true;
        }
        option.active = !option.active;
        // let index: number = this.options.indexOf(option)
        // let active: boolean = option.active
        // this.options[index].active = !active
    };
    /**
     * Subir complemento uma posição
     * @param complement complemento que se deseja subir
     * @param index index do complemento que se deseja subir
     */
    ProductComplementUpdatePage.prototype.upOption = function (option, index) {
        if (!this.options[index - 1])
            return;
        var aux = this.options[index - 1];
        this.options[index - 1] = this.options[index];
        this.options[index] = aux;
    };
    /**
     * Descer complemento uma posição
     * @param complement complemento que se deseja descer
     * @param index index do complemento que se deseja descer
     */
    ProductComplementUpdatePage.prototype.downOption = function (option, index) {
        if (!this.options[index + 1])
            return;
        var aux = this.options[index + 1];
        this.options[index + 1] = this.options[index];
        this.options[index] = aux;
    };
    /**
     * Voltar sem enviar nada para página pai
     */
    ProductComplementUpdatePage.prototype.cancel = function () {
        if (!this.complement || Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isObjectEmpty"])(this.complement)) {
            this.modalCtrl.dismiss();
        }
        else {
            this.modalCtrl.dismiss({
                new_complement: this.complementAux
            });
        }
    };
    /**
     * Enviar para página pai as novas informações do complemento.
     */
    ProductComplementUpdatePage.prototype.save = function () {
        var complement = this.form.value;
        complement.options = this.options;
        complement.min = +complement.min;
        complement.max = +complement.max;
        // Remove os valores null do array
        if (complement.options) {
            complement.options.filter(function (value) {
                return value != null;
            });
        }
        // Remove os valores null do array
        if (complement.options) {
            complement.options.filter(function (value) {
                return value != null;
            });
        }
        this.modalCtrl.dismiss({
            new_complement: complement
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComplementUpdatePage.prototype, "complement", void 0);
    ProductComplementUpdatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-complement-update',
            template: __webpack_require__(/*! ./product-complement-update.page.html */ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.html"),
            styles: [__webpack_require__(/*! ./product-complement-update.page.scss */ "./src/app/panel/pages/product/product-complement-update/product-complement-update.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], ProductComplementUpdatePage);
    return ProductComplementUpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=default~panel-pages-product-product-complement-update-product-complement-update-module~panel-pages-p~f4425247.js.map