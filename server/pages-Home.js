/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages-Home";
exports.ids = ["pages-Home"];
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

/***/ "../src/pages/Home.tsx":
/*!*****************************!*\
  !*** ../src/pages/Home.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Home\n/* harmony export */ });\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Title */ \"../src/components/Title/index.ts\");\n/* harmony import */ var _assets_img_qwe_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/qwe.jpg */ \"../src/assets/img/qwe.jpg\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Home() {\n  const {\n    t\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(['menu']);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__.default, {\n    title: t('home')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"h1\", null, t('translation:React')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"img\", {\n    src: _assets_img_qwe_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    alt: \"pic\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    gutterBottom: true,\n    variant: \"h6\",\n    component: \"h2\"\n  }, \"WELCOME\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, aut beatae blanditiis cupiditate dolore dolorum ea esse eum explicabo harum incidunt laudantium maxime nam necessitatibus nobis non obcaecati odio porro possimus quam, quisquam ratione repudiandae tempora tenetur ullam voluptatibus voluptatum. Ab accusamus aliquid asperiores beatae consequatur consequuntur culpa cumque delectus doloremque enim excepturi facilis, harum ipsam, maiores minima minus molestiae numquam odio optio placeat quaerat quo quod quos rem sed sequi tempora ut? Asperiores eius eum facere fugiat, illo incidunt, ipsa laborum laudantium magnam maxime minima necessitatibus nihil nisi quis suscipit temporibus voluptatum. Ab ad autem beatae, commodi consectetur corporis cumque cupiditate deserunt distinctio ea eligendi esse est ex facilis inventore ipsa laboriosam laudantium magnam maxime molestiae nesciunt nisi odit officiis praesentium quaerat quasi quis ratione reprehenderit rerum vel veniam voluptas voluptate voluptatem? Debitis dignissimos doloremque eos error et eveniet iure iusto maiores neque! Aspernatur eaque enim natus qui.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, aut beatae blanditiis cupiditate dolore dolorum ea esse eum explicabo harum incidunt laudantium maxime nam necessitatibus nobis non obcaecati odio porro possimus quam, quisquam ratione repudiandae tempora tenetur ullam voluptatibus voluptatum. Ab accusamus aliquid asperiores beatae consequatur consequuntur culpa cumque delectus doloremque enim excepturi facilis, harum ipsam, maiores minima minus molestiae numquam odio optio placeat quaerat quo quod quos rem sed sequi tempora ut? Asperiores eius eum facere fugiat, illo incidunt, ipsa laborum laudantium magnam maxime minima necessitatibus nihil nisi quis suscipit temporibus voluptatum. Ab ad autem beatae, commodi consectetur corporis cumque cupiditate deserunt distinctio ea eligendi esse est ex facilis inventore ipsa laboriosam laudantium magnam maxime molestiae nesciunt nisi odit officiis praesentium quaerat quasi quis ratione reprehenderit rerum vel veniam voluptas voluptate voluptatem? Debitis dignissimos doloremque eos error et eveniet iure iusto maiores neque! Aspernatur eaque enim natus qui.\"))));\n}\n\n//# sourceURL=webpack:///../src/pages/Home.tsx?");

/***/ }),

/***/ "../src/components/Title/title.scss":
/*!******************************************!*\
  !*** ../src/components/Title/title.scss ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".app-title {\\n  margin-top: 15px;\\n  margin-bottom: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../src/components/Title/title.scss?");

/***/ }),

/***/ "../src/assets/img/qwe.jpg":
/*!*********************************!*\
  !*** ../src/assets/img/qwe.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c177e7cfb1afb80c4d3b.jpg\";\n\n//# sourceURL=webpack:///../src/assets/img/qwe.jpg?");

/***/ })

};
;