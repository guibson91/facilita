(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-pages-filial-search-filial-search-module"],{

/***/ "./src/app/mobile/pages/filial-search/filial-search.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/filial-search/filial-search.module.ts ***!
  \********************************************************************/
/*! exports provided: FilialSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialSearchPageModule", function() { return FilialSearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _filial_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filial-search.page */ "./src/app/mobile/pages/filial-search/filial-search.page.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mobile-components.module */ "./src/app/mobile/components/mobile-components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-address/customer-address.module */ "./src/app/mobile/pages/customer-address/customer-address.module.ts");
/* harmony import */ var _address_edit_address_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../address-edit/address-edit.module */ "./src/app/mobile/pages/address-edit/address-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _filial_search_page__WEBPACK_IMPORTED_MODULE_5__["FilialSearchPage"]
    }
];
var FilialSearchPageModule = /** @class */ (function () {
    function FilialSearchPageModule() {
    }
    FilialSearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //Custom Modules
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                _components_mobile_components_module__WEBPACK_IMPORTED_MODULE_7__["MobileComponentsModule"],
                _customer_address_customer_address_module__WEBPACK_IMPORTED_MODULE_9__["CustomerAddressPageModule"],
                _address_edit_address_edit_module__WEBPACK_IMPORTED_MODULE_10__["AddressEditPageModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                //Default Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_filial_search_page__WEBPACK_IMPORTED_MODULE_5__["FilialSearchPage"]]
        })
    ], FilialSearchPageModule);
    return FilialSearchPageModule;
}());



/***/ }),

/***/ "./src/app/mobile/pages/filial-search/filial-search.page.html":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/filial-search/filial-search.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"app\">\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button icon-only style=\"width: 42px;\" [disabled]=\"true\">\r\n        &nbsp;\t\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <p *ngIf=\"shared?.user?.location; else noUserAddress\" tappable (click)=\"openAddress()\">\r\n      <span class=\"line1\" *ngIf=\"shared.user.location.street\">{{shared.user.location.street}},\r\n        {{shared.user.location.number}}</span>\r\n      <span class=\"line1\" *ngIf=\"!shared.user.location.street\">Complete seu endereço</span>\r\n      <br />\r\n      <span class=\"line2\">{{shared.user.location.district}} - {{shared.user.location.city}}</span>\r\n    </p>\r\n    <ng-template #noUserAddress>\r\n      <p tappable (click)=\"openAddress()\" *ngIf=\"locationUser\">\r\n        <span class=\"line1\" style=\"font-size: 1.1em\" *ngIf=\"locationUser.street\">{{locationUser.district}} -\r\n          {{locationUser.city}} - {{locationUser.state_short}}</span>\r\n        <!-- <br/>\r\n        <span class=\"line2\">Complete seu endereço</span> -->\r\n      </p>\r\n      <p tappable (click)=\"openAddress(true)\" *ngIf=\"!locationUser\">\r\n        <span class=\"line1\">Endereço não cadastrado</span>\r\n        <br />\r\n        <span class=\"line2\">Clique aqui</span>\r\n      </p>\r\n    </ng-template>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button icon-only (click)=\"goProfile()\">\r\n        <ion-icon class=\"profile-icon\" name=\"md-person\" color=\"extralight\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <div class=\"background-toolbar-right\"></div> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"hideScrollbar\">\r\n\r\n  <ion-searchbar padding [(ngModel)]=\"searchString\" placeholder=\"Buscar estabelecimento...\" debounce=\"180\" animated=\"true\"></ion-searchbar>\r\n  <!--\r\n  <section class=\"categories\" margin-bottom *ngIf=\"type == 'restaurant'\">\r\n\r\n    <p text-wrap no-margin margin-bottom>\r\n      <span class=\"container-item shadow shadow-light\" *ngFor=\"let special_filter of filial_subtypes\" tappable\r\n        [ngClass]=\"{'selected': special_filter.selected}\" (click)=\"filter(special_filter)\">\r\n        <span class=\"text-item\">{{special_filter.name}}</span>\r\n        <span *ngIf=\"special_filter.icon\" class=\"icon\" [ngClass]=\"special_filter.icon\"></span>\r\n      </span>\r\n    </p>\r\n\r\n  </section>-->\r\n\r\n  <!-- @TODO REALIZAR FILTROS MAIS COMPLEXOS EM UM SEGUNDO MOMENTO -->\r\n  <!-- <button ion-button color=\"discret\" round icon-right clear class=\"more-filter\" (click)=\"openMoreFilter()\" margin-bottom>\r\n    Mais filtros\r\n    <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n  </button> -->\r\n\r\n\r\n  <ion-list no-lines no-padding class=\"list-filials\">\r\n    <div *ngFor=\"let filial of filials | filterBy:['name', 'location.street', 'location.district', 'type.name', 'type.description']:searchString | orderBy:['-open', 'distance']\">\r\n      <div *ngIf=\"hasTypeSelected(filial)\">\r\n        <card-filial-list (click)=\"goFilialMenu(filial)\" [filial]=\"filial\" [hidden]=\"loading\"></card-filial-list>\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n\r\n\r\n  <div *ngIf=\"loading\">\r\n    <section margin-top class=\"placeholder\" *ngFor=\"let f of [1, 2, 3, 4]\">\r\n      <ion-card padding>\r\n        <div class=\"placeholder-animation image\"></div>\r\n        <div class=\"card-bottom\">\r\n          <h2 class=\"placeholder-animation placeholder-text-p-50\"></h2>\r\n          <p class=\"placeholder-animation placeholder-text-p-80\"></p>\r\n          <div class=\"status placeholder-animation placeholder-text-p-60\"></div>\r\n        </div>\r\n      </ion-card>\r\n    </section>\r\n  </div>\r\n\r\n  <div text-center padding *ngIf=\"!existsFilials\" class=\"exists-filials\" no-lines>\r\n    <div class=\"gps-error-img\"></div>\r\n    <h3 ion-text text-wrap>Pooxa vida!! Ainda não entregamos para o seu endereço :/</h3>\r\n    <p ion-text text-wrap>Mas não se preocupe, iremos notificá-lo assim que tivermos novidades. </p>\r\n    <!-- <ion-button fill=\"clear\" text-center (click)=\"suggestRestaurant()\" color=\"primary\">SUGERIR ESTABELECIMENTO</ion-button> -->\r\n  </div>\r\n\r\n  <div text-center padding *ngIf=\"error\" class=\"exists-filials\" no-lines>\r\n    <h1 ion-text padding>\r\n      <ion-icon name=\"sad\"></ion-icon>\r\n    </h1>\r\n    <h3 ion-text text-wrap>{{error.title}}</h3>\r\n    <p ion-text text-wrap>{{error.message}}</p>\r\n    <ion-button text-center fill=\"clear\" color=\"primary\" *ngIf=\"error?.code == 3\" (click)=\"loadFilials()\" margin-top>Tentar\r\n      novamente</ion-button>\r\n    <ion-button ion-button text-center fill=\"clear\" color=\"primary\" *ngIf=\"error?.code != 3\" (click)=\"openAddress()\"\r\n      margin-top>Cadastrar endereço</ion-button>\r\n  </div>\r\n\r\n  <br />\r\n  <br />\r\n\r\n</ion-content>\r\n\r\n<!-- Float button com informações sobre o pedido-->\r\n<fab-order></fab-order>"

/***/ }),

/***/ "./src/app/mobile/pages/filial-search/filial-search.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/mobile/pages/filial-search/filial-search.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-buttons[left] {\n  margin-left: 8px; }\n  ion-header ion-buttons[left] button {\n    font-size: 1.0em; }\n  ion-header p {\n  margin: 0px;\n  color: white !important;\n  line-height: 1em !important;\n  margin-left: 8px !important;\n  width: 80%; }\n  ion-header p .line1 {\n  font-size: 0.9em;\n  font-weight: bold; }\n  ion-header p .line2 {\n  font-size: 0.8em; }\n  ion-header ion-buttons[right] button {\n  font-size: 1.2em; }\n  ion-header ion-buttons[right] .profile-icon {\n  margin-right: 5px; }\n  h3 {\n  font-size: 1.1em !important; }\n  .exists-filials {\n  position: absolute;\n  background: transparent;\n  margin-top: 20px;\n  width: 100%;\n  top: 20%; }\n  .exists-filials div.item-inner {\n    padding-right: 0px !important; }\n  ion-searchbar {\n  --ion-background-color: white;\n  box-shadow: 0px 0px 5px 0.2px rgba(158, 158, 158, 0.5) !important; }\n  section.categories {\n  text-align: center !important;\n  margin: 0 auto !important; }\n  section.categories p {\n    margin-bottom: 40px !important; }\n  section.categories span.container-item {\n    font-size: 0.9em !important;\n    display: inline-block;\n    background-color: white;\n    border-radius: 2px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin-right: 5px;\n    margin-left: 5px;\n    margin-top: 7px;\n    text-align: justify;\n    text-justify: inter-word;\n    text-align: center;\n    vertical-align: middle;\n    line-height: normal;\n    color: var(--ion-color-medium); }\n  section.categories span.container-item.selected {\n      background-color: var(--ion-color-primary);\n      color: white; }\n  section.categories span.container-item.selected span.icon {\n        color: white; }\n  section.categories span.container-item span.icon {\n      display: inline;\n      color: var(--ion-color-primary);\n      margin-left: -1em;\n      text-align: center;\n      vertical-align: middle;\n      line-height: 2em; }\n  section.categories span.container-item span.icon::before {\n        vertical-align: middle; }\n  section.categories span.container-item span.text-item {\n      text-align: center;\n      vertical-align: middle;\n      height: 2em;\n      line-height: 2em; }\n  button.more-filter {\n  float: right !important;\n  margin-top: -30px; }\n  section.placeholder {\n  position: relative;\n  margin-top: 1em; }\n  section.placeholder h1 {\n    min-height: 1em; }\n  section.placeholder .image {\n    width: 60px;\n    height: 60px;\n    float: left;\n    border-radius: 50px; }\n  section.placeholder div.card-bottom {\n    float: right;\n    width: 80%;\n    margin-top: -15px;\n    padding-left: 10px; }\n  section.placeholder ion-card {\n    box-shadow: none;\n    border-radius: 0px !important; }\n  section.placeholder ion-card .status {\n      margin-top: 4px; }\n  .gps-error-img {\n  margin: auto;\n  height: 100px;\n  width: 100px;\n  background-image: url(\"data:image/svg+xml,%3Csvg width%3D%22140%22 height%3D%22139%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D %3C!-- Created with Method Draw - http%3A%2F%2Fgithub.com%2Fduopixel%2FMethod-Draw%2F --%3E%0D%0D %3Cg%3E%0D  %3Ctitle%3Ebackground%3C%2Ftitle%3E%0D  %3Crect fill%3D%22none%22 id%3D%22canvas_background%22 height%3D%22141%22 width%3D%22142%22 y%3D%22-1%22 x%3D%22-1%22%2F%3E%0D  %3Cg display%3D%22none%22 overflow%3D%22visible%22 y%3D%220%22 x%3D%220%22 height%3D%22100%25%22 width%3D%22100%25%22 id%3D%22canvasGrid%22%3E%0D   %3Crect fill%3D%22url(%23gridpattern)%22 stroke-width%3D%220%22 y%3D%220%22 x%3D%220%22 height%3D%22100%25%22 width%3D%22100%25%22%2F%3E%0D  %3C%2Fg%3E%0D %3C%2Fg%3E%0D %3Cg%3E%0D  %3Ctitle%3ELayer 1%3C%2Ftitle%3E%0D  %3Cg fill%3D%22white%22 id%3D%22svg_22%22%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-638.8773824265372) %22 id%3D%22svg_5%22%3E%0D    %3Cpath fill%3D%22%23d40e31%22 stroke%3D%22null%22 id%3D%22svg_6%22 d%3D%22m4931.499807%2C3721.532906l94.233%2C193.581c3.832%2C7.873 -0.196%2C14.314 -8.952%2C14.314l-591.195%2C0c-8.756%2C0 -12.785%2C-6.441 -8.952%2C-14.314l94.234%2C-193.581c1.499%2C-3.079 5.528%2C-5.599 8.952%2C-5.599l80.801%2C0c2.49%2C0 5.853%2C1.559 7.483%2C3.442c5.482%2C6.335 11.066%2C12.524 16.634%2C18.65c5.288%2C5.815 10.604%2C11.706 15.878%2C17.735l-95.891%2C0c-3.425%2C0 -7.454%2C2.519 -8.952%2C5.599l-62.426%2C128.242l495.67%2C0l-62.421%2C-128.242c-1.498%2C-3.08 -5.527%2C-5.599 -8.953%2C-5.599l-96.108%2C0c5.273%2C-6.029 10.591%2C-11.92 15.879%2C-17.735c5.585%2C-6.144 11.2%2C-12.321 16.695%2C-18.658c1.628%2C-1.878 4.984%2C-3.434 7.47%2C-3.434l80.971%2C0c3.423%2C0 7.451%2C2.518 8.95%2C5.599zm-71.775%2C-132.292c0%2C105.776 -88.058%2C125.614 -129.472%2C227.265c-3.365%2C8.26 -14.994%2C8.218 -18.36%2C-0.04c-37.359%2C-91.651 -112.638%2C-116.784 -127.041%2C-198.432c-14.181%2C-80.379 41.471%2C-159.115 122.729%2C-166.796c82.64%2C-7.812 152.144%2C56.979 152.144%2C138.003zm-65.427%2C0c0%2C-40.436 -32.779%2C-73.216 -73.216%2C-73.216s-73.216%2C32.78 -73.216%2C73.216c0%2C40.437 32.779%2C73.216 73.216%2C73.216s73.216%2C-32.779 73.216%2C-73.216z%22%2F%3E%0D   %3C%2Fg%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_7%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_8%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_9%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_10%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_11%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_12%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_13%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_14%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_15%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_16%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_17%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_18%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_19%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_20%22%2F%3E%0D   %3Cg stroke%3D%22null%22 transform%3D%22matrix(0.19125604857196168%2C0%2C0%2C0.19125604857196168%2C-834.5263761512615%2C-640.3059560349357) %22 id%3D%22svg_21%22%2F%3E%0D  %3C%2Fg%3E%0D  %3Ctext xml%3Aspace%3D%22preserve%22 text-anchor%3D%22start%22 font-family%3D%22Helvetica%2C Arial%2C sans-serif%22 font-size%3D%2224%22 id%3D%22svg_32%22 y%3D%2240.384499%22 x%3D%22-61.15409%22 stroke-width%3D%220%22 stroke%3D%22%23000%22 fill%3D%22%23000000%22%2F%3E%0D  %3Cpath stroke%3D%22%23d40e31%22 id%3D%22svg_34%22 d%3D%22m59.197778%2C42.7616l4.475991%2C-4.475991l4.754776%2C4.754737l4.754776%2C-4.754737l4.476033%2C4.475991l-4.754777%2C4.754776l4.754777%2C4.754776l-4.476033%2C4.476033l-4.754776%2C-4.754777l-4.754776%2C4.754777l-4.475991%2C-4.476033l4.754737%2C-4.754776l-4.754737%2C-4.754776z%22 fill-opacity%3D%22null%22 stroke-width%3D%220%22 fill%3D%22%23d40e31%22%2F%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E\") !important;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/mobile/pages/filial-search/filial-search.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/mobile/pages/filial-search/filial-search.page.ts ***!
  \******************************************************************/
/*! exports provided: FilialSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilialSearchPage", function() { return FilialSearchPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_filial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/filial */ "./src/models/filial.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_places_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/places.service */ "./src/app/services/places.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/company */ "./src/models/company.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/util */ "./src/app/util/util.ts");
/* harmony import */ var _models_log__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../models/log */ "./src/models/log.ts");
/* harmony import */ var _modules_firestore_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/firestore/utils */ "./src/modules/firestore/utils.ts");
/* harmony import */ var _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login-app/login-app.page */ "./src/app/mobile/pages/login-app/login-app.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../customer-address/customer-address.page */ "./src/app/mobile/pages/customer-address/customer-address.page.ts");
/* harmony import */ var _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../address-edit/address-edit.page */ "./src/app/mobile/pages/address-edit/address-edit.page.ts");
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


















var FilialSearchPage = /** @class */ (function () {
    function FilialSearchPage(nav, menuCtrl, shared, modalCtrl, alertCtrl, toastController, productProvider, change, placesProvider, route, system) {
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.productProvider = productProvider;
        this.change = change;
        this.placesProvider = placesProvider;
        this.route = route;
        this.system = system;
        /**
         * Capta o que foi digitado pelo usuário no campo de pesquisa.
         */
        this.searchString = "";
        /**
         * define se a navbar tem searchbar ou nao
         */
        this.searchMode = false;
        /**
         * Se está carregando os elementos da página.
         */
        this.loading = true;
        /**
         * Se não possui filiais.
         * Se após baixar não vier filiais aí sim podemos garantir que não existem filiais atualmente.
         * Usada para mostrar mensagem "Não existem filiais próximas a você".
         */
        this.existsFilials = true;
        this.filial_subtypes = [];
        //Array dos NOMES dos tipos de cada restaurante
        this.typesSelecteds = [];
        console.log("constructor");
    }
    Object.defineProperty(FilialSearchPage.prototype, "locationUser", {
        get: function () {
            return this.shared.locationUser;
        },
        enumerable: true,
        configurable: true
    });
    FilialSearchPage.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
            this.userSubscription = undefined;
        }
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
            this.timerSubscription = undefined;
        }
    };
    //Executar quando a página for autorizada a entrar
    FilialSearchPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("onInit()");
        this.menuCtrl.enable(false);
        this.loading = true;
        this.system.setScreenName("FilialSearchPage");
        this.route.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.type = params.get('type');
                this.change.detectChanges();
                this.loadFilials(this.type);
                return [2 /*return*/];
            });
        }); });
    };
    FilialSearchPage.prototype.loadFilials = function (type) {
        var _this = this;
        console.log("load filials");
        //Definir padrão de busca de filiais como restaurantes
        if (!type)
            type = _models_filial__WEBPACK_IMPORTED_MODULE_3__["FilialType"].RESTAURANT;
        console.log('carregar filiais do tipo: ', type);
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
            this.userSubscription = undefined;
        }
        this.loading = true;
        this.existsFilials = true;
        this.error = undefined;
        this.userSubscription = this.shared.user$.subscribe(function (user) {
            console.log('Usuário: ', user);
            _this.error = undefined;
            var obs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            if (user && user.location) {
                _this.shared.locationUser = user.location;
            }
            else if (!_this.locationUser) {
                obs$ = _this.placesProvider.getCurrentLocation()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (location) {
                    _this.shared.locationUser = location;
                    if (user && !user.location) {
                        return _this.placesProvider.saveLocationHistory(location);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }));
            }
            obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () {
                return _models_filial__WEBPACK_IMPORTED_MODULE_3__["Filial"].list([{
                        name: 'active',
                        operator: '==',
                        value: true
                    }, {
                        name: 'type',
                        operator: '==',
                        value: type
                    }]);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (filials) {
                console.log('filials 1', filials);
                if (!filials || filials.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(filials.map(function (filial) { return _models_company__WEBPACK_IMPORTED_MODULE_9__["Company"].object(filial.company.id); }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (restaurants) {
                    console.log('restaurants', restaurants);
                    for (var i = 0; i < restaurants.length; i++) {
                        filials[i].company_full = restaurants[i];
                    }
                    return filials.filter(function (filial) {
                        //Filtrar apenas as filiais que possuem seus restaurantes ATIVOS
                        return filial.company_full.active;
                    });
                }));
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (filials) {
                console.log('filials 2', filials);
                if (!filials || filials.length <= 0)
                    return [];
                var start = {
                    lat: _this.locationUser.latitude,
                    lng: _this.locationUser.longitude
                };
                for (var i = 0; i < filials.length; i++) {
                    var end = {
                        lat: filials[i].location.latitude,
                        lng: filials[i].location.longitude
                    };
                    filials[i].distance = Object(_util_util__WEBPACK_IMPORTED_MODULE_10__["getDistanceBetweenPoints"])(start, end); //distância em km do usuário à filial
                }
                return filials.filter(function (filial) {
                    if (filial.deliveryByDistrict) {
                        var hasUserDistrict_1 = false;
                        filial.deliveryDistricts.forEach(function (deliveryDistrict) {
                            if (deliveryDistrict.location.state_short == _this.locationUser.state_short &&
                                deliveryDistrict.location.city == _this.locationUser.city &&
                                deliveryDistrict.location.district == _this.locationUser.district) {
                                hasUserDistrict_1 = true;
                                return;
                            }
                        });
                        return hasUserDistrict_1;
                    }
                    else
                        return filial.distance <= filial.delivery.distanceMax;
                });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (filials) {
                console.log('filials 3 ', filials);
                if (!filials || filials.length <= 0)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(filials.map(function (filial) { return _this.productProvider.getBestRecomendation(filial); }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (products) {
                    for (var i = 0; i < filials.length; i++) {
                        // filials[i].product_recomendated = products[i]
                    }
                    return filials;
                }));
            })).subscribe(function (filials) {
                console.log('Filiais: ', filials);
                // Verificar se não existe filiais.
                if (!filials || filials.length == 0) {
                    _this.filials = [];
                    _this.existsFilials = false;
                    _this.loading = false;
                    _this.change.detectChanges();
                    _this.system.logEvent("filials_not_found", { name: _this.locationUser.district + ", " + _this.locationUser.city + ", " + _this.locationUser.state });
                    _this.filial_subtypes = [];
                }
                //EXIBIR FILIAIS
                else {
                    _this.filials = filials;
                    _this.existsFilials = true;
                    _this.system.logEvent("filials_found", { value: filials.length });
                    //@TODO APARECER ESSES TIPOS APENAS O USUÁRIO ESTIVER SELECIONADO RESTAURANTES
                    _this.filial_subtypes = _models_filial__WEBPACK_IMPORTED_MODULE_3__["RESTAURANT_SUBTYPES"];
                    // Filtra os tipos que possuem filiais
                    _this.filial_subtypes = _this.filial_subtypes.filter(function (st) {
                        return filials.some(function (el) {
                            var exist = false;
                            el.subtypes = el.subtypes || [];
                            for (var _i = 0, _a = el.subtypes; _i < _a.length; _i++) {
                                var subtype = _a[_i];
                                if (subtype.name === st.name)
                                    exist = true;
                            }
                            return exist;
                        });
                    });
                    // Ordenar os que possuem mais filiais
                    _this.filial_subtypes.sort(function (a, b) {
                        var qtd_a = 0;
                        var qtd_b = 0;
                        filials.forEach(function (el) {
                            _models_filial__WEBPACK_IMPORTED_MODULE_3__["Filial"].checkBusinessHours(el, _this.shared.now);
                            if (el.type && el.open) {
                                var exists_a = false;
                                for (var _i = 0, _a = el.subtypes; _i < _a.length; _i++) {
                                    var st = _a[_i];
                                    if (st.name === a.name)
                                        exists_a = true;
                                }
                                if (exists_a)
                                    qtd_a++;
                                var exists_b = false;
                                for (var _b = 0, _c = el.subtypes; _b < _c.length; _b++) {
                                    var st = _c[_b];
                                    if (st.name === b.name)
                                        exists_b = true;
                                }
                                if (exists_b)
                                    qtd_b++;
                            }
                        });
                        return qtd_b - qtd_a;
                    });
                    _this.loading = false;
                    _this.change.detectChanges();
                    if (_this.filial_subtypes && _this.filial_subtypes.length > 0) {
                        while (_this.filial_subtypes.length > 5) {
                            _this.filial_subtypes.pop();
                        }
                    }
                }
                if (_this.timerSubscription) {
                    _this.timerSubscription.unsubscribe();
                    _this.timerSubscription = undefined;
                }
                _this.checkFilialsOpen(filials);
                _this.filials = filials;
                setTimeout(function () {
                    _this.change.detectChanges();
                }, 10);
            }, function (err) {
                console.log('Error = ', err);
                _this.system.logEvent("filials_not_found");
                if (err.code == 1) {
                    _this.error = {
                        code: 1,
                        title: "Geolocalização não autorizada",
                        message: "Por favor autorize o aplicativo Facilita a obtê-la ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                    };
                }
                else if (err.code == 2) {
                    _this.error = {
                        code: 2,
                        title: "Geolocalização indisponível",
                        message: "Por favor habilite seu GPS ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                    };
                }
                else if (err.code == 3) {
                    _this.error = {
                        code: 3,
                        title: "Tempo para obter geolocalização foi excedido",
                        message: "Por favor verifique se seu GPS está habilitado e tente novamente, ou cadastre um novo endereço para que possamos exibir os estabelecimentos próximos a você"
                    };
                }
                _this.loading = false;
                _this.change.detectChanges();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            });
            _this.change.detectChanges();
        });
    };
    /**
     * Verificar de 10 em 10 segundos se a Filial está fechada (Fora do Horário de Funcionamento)
     */
    FilialSearchPage.prototype.checkFilialsOpen = function (filials) {
        var _this = this;
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 10 * 1000)
            .subscribe(function () {
            var now = _this.shared.now;
            for (var _i = 0, filials_1 = filials; _i < filials_1.length; _i++) {
                var filial = filials_1[_i];
                _models_filial__WEBPACK_IMPORTED_MODULE_3__["Filial"].checkBusinessHours(filial, now);
            }
        });
    };
    FilialSearchPage.prototype.suggestRestaurant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Qual estabelecimento você gostaria de ver no Facilita?",
                            inputs: [
                                {
                                    name: "place",
                                    type: "text",
                                    placeholder: "Nome do estabelecimento",
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancelar",
                                    role: "cancel"
                                }, {
                                    text: "Ok",
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var thank_you;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log("Log criado", {
                                                        origin: _models_log__WEBPACK_IMPORTED_MODULE_11__["LogOriginTypes"].COMPANY_SUGGESTION,
                                                        title: data.place,
                                                        date: new Date(),
                                                        user: this.shared.user || null
                                                    });
                                                    if (data.place) {
                                                        _models_log__WEBPACK_IMPORTED_MODULE_11__["Log"].add({
                                                            origin: _models_log__WEBPACK_IMPORTED_MODULE_11__["LogOriginTypes"].COMPANY_SUGGESTION,
                                                            title: data.restaurant,
                                                            date: firebase__WEBPACK_IMPORTED_MODULE_15__["firestore"].Timestamp.fromDate(new Date()),
                                                            user: this.shared.user || null
                                                        }).subscribe();
                                                    }
                                                    return [4 /*yield*/, this.alertCtrl.create({
                                                            header: "Obrigado",
                                                            message: "Muito obrigado pela sugestão. Nossa equipe vai trabalhar para garantir a qualidade de nossos serviços e trazer mais estabelecimentos para melhor atendê-lo.",
                                                            buttons: ["Ok"]
                                                        })];
                                                case 1:
                                                    thank_you = _a.sent();
                                                    thank_you.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
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
     * Exibir ou não a filial de acordo com o filtro de tipo aplicado
     * Retorna true se filial possuir algum dos tipos selecionados
     * @author Guibson Martins
     */
    FilialSearchPage.prototype.hasTypeSelected = function (filial) {
        var typeFounded = false;
        if (this.typesSelecteds && this.typesSelecteds.length == 0)
            return true;
        if (filial.type) {
            if (Object(_modules_firestore_utils__WEBPACK_IMPORTED_MODULE_12__["elementIsInsideArray"])(filial.type.name, this.typesSelecteds)) {
                return typeFounded = true;
            }
        }
        return typeFounded;
    };
    FilialSearchPage.prototype.goFilialMenu = function (filial) {
        return __awaiter(this, void 0, void 0, function () {
            var prompt_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filial__WEBPACK_IMPORTED_MODULE_3__["Filial"].checkBusinessHours(filial, this.shared.now);
                        if (!filial.open) return [3 /*break*/, 1];
                        this.nav.navigateForward(['mobile/filial-stock', {
                                id: filial.id
                            }]);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Estabelecimento fechado',
                            message: "Você ainda pode visualizar as informações do estabelecimento, mas não poderá realizar um pedido.",
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Continuar',
                                    handler: function () {
                                        _this.nav.navigateForward(['mobile/filial-stock', {
                                                id: filial.id
                                            }]);
                                    }
                                }
                            ]
                        })];
                    case 2:
                        prompt_1 = _a.sent();
                        prompt_1.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FilialSearchPage.prototype.getGeolocation = function () {
        this.loadFilials();
    };
    FilialSearchPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_13__["LoginAppPage"],
                            componentProps: {
                                page: 'CustomerPage'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilialSearchPage.prototype.openAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shared.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _customer_address_customer_address_page__WEBPACK_IMPORTED_MODULE_16__["CustomerAddressPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.modalCtrl.create({
                            component: _address_edit_address_edit_page__WEBPACK_IMPORTED_MODULE_17__["AddressEditPage"]
                        })];
                    case 3:
                        modal = _a.sent();
                        modal.present();
                        modal.onDidDismiss().then(function (data) {
                            console.log("Data: ", data);
                            _this.loadFilials();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FilialSearchPage.prototype.goProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modalLogin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.shared.user) return [3 /*break*/, 1];
                        this.nav.navigateRoot(["mobile/customer-details"]);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_app_login_app_page__WEBPACK_IMPORTED_MODULE_13__["LoginAppPage"],
                            componentProps: {
                                page: 'CustomerPage'
                            }
                        })];
                    case 2:
                        modalLogin = _a.sent();
                        modalLogin.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Alterna o valor de searchMode
     */
    FilialSearchPage.prototype.togglesearch = function () {
        this.searchMode = !this.searchMode;
    };
    /**
     * Alimenta o array de tipos selecionados,
     * adicionando ou removendo tipos escolhidos pelo usuário.
     * @author Guibson Martins
     */
    FilialSearchPage.prototype.filter = function (str) {
        str.selected = !str.selected;
        if (str.selected) {
            //Adicionar tipo selecionado
            this.typesSelecteds.push(str.name);
        }
        else if (Object(_modules_firestore_utils__WEBPACK_IMPORTED_MODULE_12__["elementIsInsideArray"])(str.name, this.typesSelecteds)) {
            //Remover tipo selecionado
            var index = this.typesSelecteds.indexOf(str.name);
            this.typesSelecteds.splice(index, 1);
        }
    };
    FilialSearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filial-search',
            template: __webpack_require__(/*! ./filial-search.page.html */ "./src/app/mobile/pages/filial-search/filial-search.page.html"),
            styles: [__webpack_require__(/*! ./filial-search.page.scss */ "./src/app/mobile/pages/filial-search/filial-search.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_places_service__WEBPACK_IMPORTED_MODULE_7__["PlacesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"]])
    ], FilialSearchPage);
    return FilialSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-pages-filial-search-filial-search-module.js.map