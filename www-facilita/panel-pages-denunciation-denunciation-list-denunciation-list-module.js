(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-pages-denunciation-denunciation-list-denunciation-list-module"],{

/***/ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DenunciationListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciationListPageModule", function() { return DenunciationListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _denunciation_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./denunciation-list.page */ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.ts");
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
        component: _denunciation_list_page__WEBPACK_IMPORTED_MODULE_5__["DenunciationListPage"]
    }
];
var DenunciationListPageModule = /** @class */ (function () {
    function DenunciationListPageModule() {
    }
    DenunciationListPageModule = __decorate([
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
            declarations: [_denunciation_list_page__WEBPACK_IMPORTED_MODULE_5__["DenunciationListPage"]]
        })
    ], DenunciationListPageModule);
    return DenunciationListPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <nano-navbar title=\"Denúncias de Usuários\" icon=\"menus-icon-ecommerce-3\"></nano-navbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <ion-card class=\"content-card\" margin>\r\n\r\n    <ion-item *ngFor=\"let user of users\">\r\n      <h1>{{user.name}}</h1>\r\n      <div *ngFor=\"let denunciation of user.denunciations\">\r\n        <p>{{denunciation}}</p>\r\n      </div>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.ts ***!
  \**************************************************************************************/
/*! exports provided: DenunciationListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciationListPage", function() { return DenunciationListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/user */ "./src/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DenunciationListPage = /** @class */ (function () {
    function DenunciationListPage() {
        this.users = [];
    }
    DenunciationListPage.prototype.ngOnInit = function () {
        var _this = this;
        _models_user__WEBPACK_IMPORTED_MODULE_1__["User"].list().subscribe(function (users) {
            users.forEach(function (user) {
                if (user.denunciations && user.denunciations.length > 0) {
                    //Obter usuários que possuem denúncia
                    _this.users.push(user);
                }
            });
        });
    };
    DenunciationListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-denunciation-list',
            template: __webpack_require__(/*! ./denunciation-list.page.html */ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.html"),
            styles: [__webpack_require__(/*! ./denunciation-list.page.scss */ "./src/app/panel/pages/denunciation/denunciation-list/denunciation-list.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DenunciationListPage);
    return DenunciationListPage;
}());



/***/ })

}]);
//# sourceMappingURL=panel-pages-denunciation-denunciation-list-denunciation-list-module.js.map