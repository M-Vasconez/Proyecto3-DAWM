"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 9681:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 8476);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3185:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 9681);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 8476);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 8476:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 4588);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 1075:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  padding: 10% 0;\n}\nion-header ion-toolbar ion-img {\n  width: 20%;\n  height: 20%;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\nion-header ion-toolbar ion-row {\n  padding-left: 10%;\n  padding-right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFhSSxjQUFBO0FBWlI7QUFBUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUFFWjtBQUNRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNaIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwJSAwO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 4588:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-img src=\"../../assets/Team icons/CFL_2016_logo.png\" ></ion-img>\n      <ion-title  >Canadian Football league</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Proyecto 3</ion-card-title>\n      <ion-card-subtitle>Aplicacion de la CFL</ion-card-subtitle>\n    </ion-card-header>\n    <br>\n    <ion-card-content>\n      <ion-card-title>Datos del proyecto</ion-card-title>\n      <ion-list>\n        <ion-item>\n          <ion-label>Se uso angular con ionic para el frontend</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Se uso express js para el backend</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Clear Db como base de datos relacional </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Heroku como plataforma de hosting para el BE y FE</ion-label>\n        </ion-item>\n      </ion-list>\n      <br>\n      <ion-card-title>Desarrolado por:</ion-card-title>\n      <ion-list>\n        <ion-item>Matias Vasconez</ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>Paralelo 1</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer collapse=\"fade\">\n  <ion-toolbar>\n    <ion-title>Guayaquil,Ecuador 2022</ion-title>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map