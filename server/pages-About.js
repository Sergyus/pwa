/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages-About";
exports.ids = ["pages-About"];
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

/***/ "../src/pages/About.tsx":
/*!******************************!*\
  !*** ../src/pages/About.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ About\n/* harmony export */ });\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Title */ \"../src/components/Title/index.ts\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction About() {\n  const {\n    t\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(['menu']);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__.default, {\n    title: t('about')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {\n    gutterBottom: true,\n    variant: \"h6\",\n    component: \"h2\"\n  }, \"TECHNOLOGY STACK\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"REACT\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"R\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Typescript\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"MobX\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Material UI\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"i18n\",\n    color: \"primary\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"HTML/SCSS\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"H\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Responsive\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Animation\",\n    color: \"primary\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Node.js\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"N\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Express\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"Morgan\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"SSR\",\n    color: \"primary\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"PWA\",\n    color: \"primary\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"REST API\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"R\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"GRAPHQL\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"G\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {\n    label: \"WS\",\n    color: \"primary\",\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, null, \"W\")\n  })))));\n}\n\n//# sourceURL=webpack:///../src/pages/About.tsx?");

/***/ }),

/***/ "../src/components/Title/title.scss":
/*!******************************************!*\
  !*** ../src/components/Title/title.scss ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".app-title {\\n  margin-top: 15px;\\n  margin-bottom: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../src/components/Title/title.scss?");

/***/ })

};
;