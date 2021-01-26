/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages-Pwa";
exports.ids = ["pages-Pwa"];
exports.modules = {

/***/ "../src/components/Title/Title.tsx":
/*!*****************************************!*\
  !*** ../src/components/Title/Title.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Title\n/* harmony export */ });\n/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.scss */ \"../src/components/Title/title.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Title(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", {\n    className: \"app-title\"\n  }, props.title);\n}\n\n//# sourceURL=webpack:///../src/components/Title/Title.tsx?");

/***/ }),

/***/ "../src/components/Title/index.ts":
/*!****************************************!*\
  !*** ../src/components/Title/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _Title__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ \"../src/components/Title/Title.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Title/index.ts?");

/***/ }),

/***/ "../src/pages/Pwa.tsx":
/*!****************************!*\
  !*** ../src/pages/Pwa.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Pwa\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ \"../src/components/Title/index.ts\");\n/* harmony import */ var _assets_img_pwa_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/pwa.jpg */ \"../src/assets/img/pwa.jpg\");\n/* harmony import */ var _assets_img_pwa2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/img/pwa2.jpg */ \"../src/assets/img/pwa2.jpg\");\n/* harmony import */ var _assets_img_pwa3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/img/pwa3.jpg */ \"../src/assets/img/pwa3.jpg\");\n\n\n\n\n\nfunction Pwa() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"PWA\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    style: {\n      width: '100%'\n    },\n    src: _assets_img_pwa_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"pic\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    style: {\n      width: '100%'\n    },\n    src: _assets_img_pwa2_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    alt: \"pic\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    style: {\n      width: '100%'\n    },\n    src: _assets_img_pwa3_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    alt: \"pic\"\n  }));\n}\n\n//# sourceURL=webpack:///../src/pages/Pwa.tsx?");

/***/ }),

/***/ "../src/components/Title/title.scss":
/*!******************************************!*\
  !*** ../src/components/Title/title.scss ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".app-title {\\n  margin-top: 15px;\\n  margin-bottom: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../src/components/Title/title.scss?");

/***/ }),

/***/ "../src/assets/img/pwa.jpg":
/*!*********************************!*\
  !*** ../src/assets/img/pwa.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d3c0a6d4fd6b87e7f7cd.jpg\";\n\n//# sourceURL=webpack:///../src/assets/img/pwa.jpg?");

/***/ }),

/***/ "../src/assets/img/pwa2.jpg":
/*!**********************************!*\
  !*** ../src/assets/img/pwa2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31ac244390662e895509.jpg\";\n\n//# sourceURL=webpack:///../src/assets/img/pwa2.jpg?");

/***/ }),

/***/ "../src/assets/img/pwa3.jpg":
/*!**********************************!*\
  !*** ../src/assets/img/pwa3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3472ae1804dcda436663.jpg\";\n\n//# sourceURL=webpack:///../src/assets/img/pwa3.jpg?");

/***/ })

};
;