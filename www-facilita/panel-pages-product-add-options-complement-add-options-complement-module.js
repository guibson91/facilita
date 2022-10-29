(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-product-add-options-complement-add-options-complement-module"],{

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



/***/ })

}]);
//# sourceMappingURL=panel-pages-product-add-options-complement-add-options-complement-module.js.map