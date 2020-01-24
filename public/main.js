/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/avatar.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/avatar.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/avatar.jpg?");

/***/ }),

/***/ "./src/assets/images/chart.svg":
/*!*************************************!*\
  !*** ./src/assets/images/chart.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/chart.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/chart.svg?");

/***/ }),

/***/ "./src/assets/images/colors.svg":
/*!**************************************!*\
  !*** ./src/assets/images/colors.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/colors.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/colors.svg?");

/***/ }),

/***/ "./src/assets/images/component.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/component.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/component.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/component.svg?");

/***/ }),

/***/ "./src/assets/images/extras.svg":
/*!**************************************!*\
  !*** ./src/assets/images/extras.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/extras.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/extras.svg?");

/***/ }),

/***/ "./src/assets/images/form.svg":
/*!************************************!*\
  !*** ./src/assets/images/form.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/form.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/form.svg?");

/***/ }),

/***/ "./src/assets/images/format_shapes.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/format_shapes.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/format_shapes.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/format_shapes.svg?");

/***/ }),

/***/ "./src/assets/images/graphic.svg":
/*!***************************************!*\
  !*** ./src/assets/images/graphic.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/graphic.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/graphic.svg?");

/***/ }),

/***/ "./src/assets/images/home.svg":
/*!************************************!*\
  !*** ./src/assets/images/home.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/home.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/home.svg?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/logo.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/images/logo2.svg":
/*!*************************************!*\
  !*** ./src/assets/images/logo2.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/logo2.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/logo2.svg?");

/***/ }),

/***/ "./src/assets/images/mail.svg":
/*!************************************!*\
  !*** ./src/assets/images/mail.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/mail.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/mail.svg?");

/***/ }),

/***/ "./src/assets/images/maps.svg":
/*!************************************!*\
  !*** ./src/assets/images/maps.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/maps.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/maps.svg?");

/***/ }),

/***/ "./src/assets/images/menu.svg":
/*!************************************!*\
  !*** ./src/assets/images/menu.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/menu.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/menu.svg?");

/***/ }),

/***/ "./src/assets/images/notification.svg":
/*!********************************************!*\
  !*** ./src/assets/images/notification.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/notification.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/notification.svg?");

/***/ }),

/***/ "./src/assets/images/pages.svg":
/*!*************************************!*\
  !*** ./src/assets/images/pages.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/pages.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/pages.svg?");

/***/ }),

/***/ "./src/assets/images/search.svg":
/*!**************************************!*\
  !*** ./src/assets/images/search.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/search.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/search.svg?");

/***/ }),

/***/ "./src/assets/images/square.svg":
/*!**************************************!*\
  !*** ./src/assets/images/square.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/square.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/square.svg?");

/***/ }),

/***/ "./src/assets/images/tables.svg":
/*!**************************************!*\
  !*** ./src/assets/images/tables.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/tables.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/tables.svg?");

/***/ }),

/***/ "./src/assets/images/text.svg":
/*!************************************!*\
  !*** ./src/assets/images/text.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/text.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/text.svg?");

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/avatar.jpg */ \"./src/assets/images/avatar.jpg\");\n/* harmony import */ var _assets_images_chart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chart.svg */ \"./src/assets/images/chart.svg\");\n/* harmony import */ var _assets_images_colors_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/colors.svg */ \"./src/assets/images/colors.svg\");\n/* harmony import */ var _assets_images_component_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/component.svg */ \"./src/assets/images/component.svg\");\n/* harmony import */ var _assets_images_extras_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/extras.svg */ \"./src/assets/images/extras.svg\");\n/* harmony import */ var _assets_images_form_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/form.svg */ \"./src/assets/images/form.svg\");\n/* harmony import */ var _assets_images_format_shapes_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/format_shapes.svg */ \"./src/assets/images/format_shapes.svg\");\n/* harmony import */ var _assets_images_graphic_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/graphic.svg */ \"./src/assets/images/graphic.svg\");\n/* harmony import */ var _assets_images_home_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/home.svg */ \"./src/assets/images/home.svg\");\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\n/* harmony import */ var _assets_images_logo2_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/logo2.svg */ \"./src/assets/images/logo2.svg\");\n/* harmony import */ var _assets_images_mail_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/mail.svg */ \"./src/assets/images/mail.svg\");\n/* harmony import */ var _assets_images_maps_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/maps.svg */ \"./src/assets/images/maps.svg\");\n/* harmony import */ var _assets_images_menu_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/menu.svg */ \"./src/assets/images/menu.svg\");\n/* harmony import */ var _assets_images_notification_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/notification.svg */ \"./src/assets/images/notification.svg\");\n/* harmony import */ var _assets_images_pages_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/pages.svg */ \"./src/assets/images/pages.svg\");\n/* harmony import */ var _assets_images_search_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/search.svg */ \"./src/assets/images/search.svg\");\n/* harmony import */ var _assets_images_square_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/square.svg */ \"./src/assets/images/square.svg\");\n/* harmony import */ var _assets_images_tables_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/images/tables.svg */ \"./src/assets/images/tables.svg\");\n/* harmony import */ var _assets_images_text_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/images/text.svg */ \"./src/assets/images/text.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });