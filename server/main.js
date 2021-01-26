/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/App.tsx":
/*!**********************!*\
  !*** ../src/App.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ErrorFallback_ErrorFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ErrorFallback/ErrorFallback */ \"../src/components/ErrorFallback/ErrorFallback.tsx\");\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-error-boundary */ \"react-error-boundary\");\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Layout */ \"../src/components/Layout/index.ts\");\n\n\n\n\n\n\nconst Home = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Home\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Home */ \"pages-Home\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home */ \"../src/pages/Home.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Home */ \"../src/pages/Home.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Home\");\n  }\n\n});\nconst About = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-About\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-About */ \"pages-About\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/About */ \"../src/pages/About.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/About */ \"../src/pages/About.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/About\");\n  }\n\n});\nconst Account = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Account\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Account */ \"pages-Account\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Account */ \"../src/pages/Account.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Account */ \"../src/pages/Account.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Account\");\n  }\n\n});\nconst Blog = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Blog\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Blog */ \"pages-Blog\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Blog */ \"../src/pages/Blog.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Blog */ \"../src/pages/Blog.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Blog\");\n  }\n\n});\nconst Ui = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Ui\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Ui */ \"pages-Ui\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Ui */ \"../src/pages/Ui.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Ui */ \"../src/pages/Ui.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Ui\");\n  }\n\n});\nconst Pwa = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Pwa\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Pwa */ \"pages-Pwa\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Pwa */ \"../src/pages/Pwa.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Pwa */ \"../src/pages/Pwa.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Pwa\");\n  }\n\n});\nconst Article = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-Article\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Article */ \"pages-Article\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Article */ \"../src/pages/Article.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Article */ \"../src/pages/Article.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Article\");\n  }\n\n});\nconst NotFound = _loadable_component__WEBPACK_IMPORTED_MODULE_4___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"pages-NotFound\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | pages-NotFound */ \"pages-NotFound\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/NotFound */ \"../src/pages/NotFound.tsx\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/NotFound */ \"../src/pages/NotFound.tsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/NotFound\");\n  }\n\n});\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, {\n    FallbackComponent: _components_ErrorFallback_ErrorFallback__WEBPACK_IMPORTED_MODULE_2__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: Home\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/about\",\n    component: About\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/blog\",\n    component: Blog\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/blog/:id\",\n    component: Article\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/ui\",\n    component: Ui\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/pwa\",\n    component: Pwa\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/account\",\n    component: Account\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    component: NotFound\n  })))));\n}\n\n//# sourceURL=webpack:///../src/App.tsx?");

/***/ }),

/***/ "../src/components/ErrorFallback/ErrorFallback.tsx":
/*!*********************************************************!*\
  !*** ../src/components/ErrorFallback/ErrorFallback.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ErrorFallback = ({\n  error\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Something went wrong.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", {\n  style: {\n    color: 'red'\n  }\n}, error?.message));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorFallback);\n\n//# sourceURL=webpack:///../src/components/ErrorFallback/ErrorFallback.tsx?");

/***/ }),

/***/ "../src/components/Footer/Footer.tsx":
/*!*******************************************!*\
  !*** ../src/components/Footer/Footer.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Footer\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({\n  footer: {\n    backgroundColor: '#e6e6e6',\n    padding: theme.spacing(4),\n    marginTop: '30px'\n  }\n}));\nfunction Footer() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"footer\", {\n    className: classes.footer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    variant: \"h6\",\n    align: \"center\",\n    gutterBottom: true\n  }, \"Footer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    variant: \"subtitle1\",\n    align: \"center\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Something here to give the footer a purpose!\"));\n}\n\n//# sourceURL=webpack:///../src/components/Footer/Footer.tsx?");

/***/ }),

/***/ "../src/components/Footer/index.ts":
/*!*****************************************!*\
  !*** ../src/components/Footer/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"../src/components/Footer/Footer.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Footer/index.ts?");

/***/ }),

/***/ "../src/components/Header/Header.tsx":
/*!*******************************************!*\
  !*** ../src/components/Header/Header.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ \"@material-ui/core/Badge\");\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ \"@material-ui/icons/Mail\");\n/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Notifications */ \"@material-ui/icons/Notifications\");\n/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ \"@material-ui/icons/MoreVert\");\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Navigation */ \"../src/components/Navigation/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ \"@material-ui/icons/MoveToInbox\");\n/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _components_OfflineIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/OfflineIndicator */ \"../src/components/Header/components/OfflineIndicator.tsx\");\n/* harmony import */ var _components_LangSwitcher__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/LangSwitcher */ \"../src/components/Header/components/LangSwitcher/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.createStyles)({\n  grow: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    display: 'none',\n    [theme.breakpoints.up('sm')]: {\n      display: 'block'\n    }\n  },\n  search: {\n    'position': 'relative',\n    'borderRadius': theme.shape.borderRadius,\n    'backgroundColor': (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.fade)(theme.palette.common.white, 0.15),\n    '&:hover': {\n      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.fade)(theme.palette.common.white, 0.25)\n    },\n    'marginRight': theme.spacing(2),\n    'marginLeft': 0,\n    'width': '100%',\n    [theme.breakpoints.up('sm')]: {\n      marginLeft: theme.spacing(3),\n      width: 'auto'\n    }\n  },\n  searchIcon: {\n    padding: theme.spacing(0, 2),\n    height: '100%',\n    position: 'absolute',\n    pointerEvents: 'none',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  inputRoot: {\n    color: 'inherit'\n  },\n  inputInput: {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,\n    transition: theme.transitions.create('width'),\n    width: '100%',\n    [theme.breakpoints.up('md')]: {\n      width: '20ch'\n    }\n  },\n  sectionDesktop: {\n    display: 'none',\n    [theme.breakpoints.up('md')]: {\n      display: 'flex'\n    }\n  },\n  sectionMobile: {\n    display: 'flex',\n    [theme.breakpoints.up('md')]: {\n      display: 'none'\n    }\n  },\n  list: {\n    width: 250\n  },\n  fullList: {\n    width: 'auto'\n  }\n}));\nfunction Header() {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useHistory)();\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const isMenuOpen = Boolean(anchorEl);\n  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);\n\n  function toggleDrawer() {\n    setOpen(!isOpen);\n  }\n\n  function handleProfileMenuOpen(event) {\n    setAnchorEl(event.currentTarget);\n  }\n\n  function handleMobileMenuClose() {\n    setMobileMoreAnchorEl(null);\n  }\n\n  function handleMenuClose() {\n    setAnchorEl(null);\n    handleMobileMenuClose();\n    history.push('/account');\n  }\n\n  function handleMobileMenuOpen(event) {\n    setMobileMoreAnchorEl(event.currentTarget);\n  }\n\n  const menuId = 'primary-search-account-menu';\n  const renderMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {\n    anchorEl: anchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: menuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMenuOpen,\n    onClose: handleMenuClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {\n    onClick: handleMenuClose\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {\n    onClick: handleMenuClose\n  }, \"My account\"));\n  const mobileMenuId = 'primary-search-account-menu-mobile';\n  const renderMobileMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {\n    anchorEl: mobileMoreAnchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    id: mobileMenuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: isMobileMenuOpen,\n    onClose: handleMobileMenuClose\n  }, [{\n    name: 'Home',\n    link: '/'\n  }, {\n    name: 'About',\n    link: '/about'\n  }, {\n    name: 'Blog',\n    link: '/blog'\n  }, {\n    name: 'Ui',\n    link: '/ui'\n  }].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {\n    key: item.name\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {\n    to: item.link\n  }, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"show 4 new mails\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default()), {\n    badgeContent: 4,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Messages\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"show 11 new notifications\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default()), {\n    badgeContent: 11,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Notifications\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {\n    onClick: handleProfileMenuOpen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"primary-search-account-menu\",\n    \"aria-haspopup\": \"true\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Profile\")));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.grow\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Drawer, {\n    open: isOpen,\n    onClose: toggleDrawer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: clsx__WEBPACK_IMPORTED_MODULE_17___default()(classes.list),\n    role: \"presentation\",\n    onClick: toggleDrawer,\n    onKeyDown: toggleDrawer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.List, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItem, {\n    button: true,\n    key: text\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItemIcon, null, index % 2 === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItemText, {\n    primary: text\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.List, null, ['All mail', 'Trash', 'Spam'].map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItem, {\n    button: true,\n    key: text\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItemIcon, null, index % 2 === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.ListItemText, {\n    primary: text\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n    position: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    edge: \"start\",\n    className: classes.menuButton,\n    color: \"inherit\",\n    \"aria-label\": \"open drawer\",\n    onClick: toggleDrawer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    className: classes.title,\n    variant: \"h6\",\n    noWrap: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {\n    style: {\n      color: '#fff',\n      textDecoration: 'none'\n    },\n    to: \"/\"\n  }, \"Logo\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.sectionDesktop\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_14__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.grow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OfflineIndicator__WEBPACK_IMPORTED_MODULE_19__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LangSwitcher__WEBPACK_IMPORTED_MODULE_20__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.sectionDesktop\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"show 4 new mails\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default()), {\n    badgeContent: 4,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"show 17 new notifications\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default()), {\n    badgeContent: 17,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    edge: \"end\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": menuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleProfileMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.sectionMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {\n    \"aria-label\": \"show more\",\n    \"aria-controls\": mobileMenuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleMobileMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default()), null))))), renderMobileMenu, renderMenu);\n}\n\n//# sourceURL=webpack:///../src/components/Header/Header.tsx?");

/***/ }),

/***/ "../src/components/Header/components/LangSwitcher/LangSwitcher.tsx":
/*!*************************************************************************!*\
  !*** ../src/components/Header/components/LangSwitcher/LangSwitcher.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LangSwitcher\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../libs/i18n */ \"../src/libs/i18n/index.ts\");\n\n\n\n\n\n\nfunction LangSwitcher() {\n  const [anchorLangEl, setAnchorLangEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const menuId = 'Lang-switcher';\n  const isMenuOpen = Boolean(anchorLangEl);\n\n  function handleMenuOpen(event) {\n    setAnchorLangEl(event.currentTarget);\n  }\n\n  function handleMenuClose() {\n    setAnchorLangEl(null);\n  }\n\n  async function changeLanguage(event) {\n    const lang = event.target.getAttribute('value');\n\n    if (lang) {\n      await i18next__WEBPACK_IMPORTED_MODULE_4___default().changeLanguage(lang);\n    }\n\n    handleMenuClose();\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginRight: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {\n    edge: \"end\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": menuId,\n    \"aria-haspopup\": \"true\",\n    onClick: handleMenuOpen,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      fontSize: '18px'\n    }\n  }, i18next__WEBPACK_IMPORTED_MODULE_4___default().language.toLocaleUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default()), {\n    anchorEl: anchorLangEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'left'\n    },\n    id: menuId,\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'left'\n    },\n    open: isMenuOpen,\n    onClose: handleMenuClose\n  }, _libs_i18n__WEBPACK_IMPORTED_MODULE_5__.LANGUAGES.map(lang => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: lang,\n    key: lang,\n    onClick: changeLanguage\n  }, lang))));\n}\n\n//# sourceURL=webpack:///../src/components/Header/components/LangSwitcher/LangSwitcher.tsx?");

/***/ }),

/***/ "../src/components/Header/components/LangSwitcher/index.ts":
/*!*****************************************************************!*\
  !*** ../src/components/Header/components/LangSwitcher/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _LangSwitcher__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _LangSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LangSwitcher */ \"../src/components/Header/components/LangSwitcher/LangSwitcher.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Header/components/LangSwitcher/index.ts?");

/***/ }),

/***/ "../src/components/Header/components/OfflineIndicator.tsx":
/*!****************************************************************!*\
  !*** ../src/components/Header/components/OfflineIndicator.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ OfflineIndicator\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_WifiOff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/WifiOff */ \"@material-ui/icons/WifiOff\");\n/* harmony import */ var _material_ui_icons_WifiOff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WifiOff__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _indicator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicator.scss */ \"../src/components/Header/components/indicator.scss\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction OfflineIndicator() {\n  const [offline, setOffline] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {\n    window.addEventListener('online', onlineListener);\n    window.addEventListener('offline', offlineListener);\n    setOffline(!window.navigator.onLine);\n    return () => {\n      window.removeEventListener('offline', onlineListener);\n      window.removeEventListener('offline', offlineListener);\n    };\n  }, []);\n\n  const onlineListener = () => setOffline(false);\n\n  const offlineListener = () => setOffline(true);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"indicator\"\n  }, offline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_0___default()), {\n    \"aria-label\": \"show 4 new mails\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Badge, {\n    color: \"secondary\",\n    variant: \"dot\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_icons_WifiOff__WEBPACK_IMPORTED_MODULE_1___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"OFFLINE\")) : null);\n}\n\n//# sourceURL=webpack:///../src/components/Header/components/OfflineIndicator.tsx?");

/***/ }),

/***/ "../src/components/Header/index.ts":
/*!*****************************************!*\
  !*** ../src/components/Header/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"../src/components/Header/Header.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Header/index.ts?");

/***/ }),

/***/ "../src/components/Layout/Layout.tsx":
/*!*******************************************!*\
  !*** ../src/components/Layout/Layout.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Header */ \"../src/components/Header/index.ts\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ \"../src/components/Footer/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Layout(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"app-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_0__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    maxWidth: \"lg\"\n  }, props.children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__.default, null));\n}\n\n//# sourceURL=webpack:///../src/components/Layout/Layout.tsx?");

/***/ }),

/***/ "../src/components/Layout/index.ts":
/*!*****************************************!*\
  !*** ../src/components/Layout/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"../src/components/Layout/Layout.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Layout/index.ts?");

/***/ }),

/***/ "../src/components/Navigation/Navigation.tsx":
/*!***************************************************!*\
  !*** ../src/components/Navigation/Navigation.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Navigation\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.scss */ \"../src/components/Navigation/navigation.scss\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Navigation() {\n  const {\n    t\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('menu');\n  const menu = [{\n    name: t('home'),\n    link: '/'\n  }, {\n    name: t('blog'),\n    link: '/blog'\n  }, {\n    name: t('about'),\n    link: '/about'\n  }, {\n    name: 'Ui',\n    link: '/ui'\n  }, {\n    name: 'Pwa',\n    link: '/pwa'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-header\"\n  }, menu.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    key: item.name,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    style: {\n      color: '#fff',\n      textDecoration: 'none'\n    },\n    to: item.link\n  }, item.name))));\n}\n\n//# sourceURL=webpack:///../src/components/Navigation/Navigation.tsx?");

/***/ }),

/***/ "../src/components/Navigation/index.ts":
/*!*********************************************!*\
  !*** ../src/components/Navigation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ \"../src/components/Navigation/Navigation.tsx\");\n\n\n//# sourceURL=webpack:///../src/components/Navigation/index.ts?");

/***/ }),

/***/ "../src/libs/i18n/index.ts":
/*!*********************************!*\
  !*** ../src/libs/i18n/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LANGUAGES\": () => /* binding */ LANGUAGES,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"i18next-browser-languagedetector\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-xhr-backend */ \"i18next-xhr-backend\");\n/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // import en from '../../../public/locales/en/en.json';\n// import ru from '../../../public/locales/ru/ru.json';\n// import uk from '../../../public/locales/uk/uk.json';\n\nconst LANGUAGES = ['en', 'ru', 'uk'];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0___default().use((i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2___default())).use((i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_3___default())).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n  debug: false,\n  ns: ['menu', 'translation'],\n  resources: {\n    en: {\n      translation: {\n        React: 'Welcome to React and react-i18next'\n      },\n      menu: {\n        home: 'Home',\n        blog: 'Blog',\n        about: 'About'\n      }\n    },\n    ru: {\n      translation: {\n        React: 'Добро пожаловать в React и react-i18next'\n      },\n      menu: {\n        home: 'Главная',\n        blog: 'Блог',\n        about: 'О Нас'\n      }\n    },\n    uk: {\n      translation: {\n        React: 'Ласкаво просимо до React і response-i18next'\n      },\n      menu: {\n        home: 'Головна',\n        blog: 'Блог',\n        about: 'Про нас'\n      }\n    }\n  },\n  lng: 'en',\n  fallbackLng: 'en',\n  keySeparator: false,\n  interpolation: {\n    escapeValue: false // react already safes from xss\n\n  },\n  backend: {\n    loadPath: '/locales/{{lng}}/{{ns}}.json'\n  },\n  react: {\n    wait: true\n  }\n}, (_err, t) => {\n  t('myKey');\n  t('common:myKey');\n}));\n\n//# sourceURL=webpack:///../src/libs/i18n/index.ts?");

/***/ }),

/***/ "../src/server/app.tsx":
/*!*****************************!*\
  !*** ../src/server/app.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares */ \"../src/server/middlewares/index.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"../src/server/routes/index.ts\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // if (__DEV__) {\n//   // eslint-disable-next-line @typescript-eslint/no-var-requires\n//   const webpack = require('webpack');\n//   // eslint-disable-next-line @typescript-eslint/no-var-requires\n//   const webpackConfig = require('../../webpack/webpack.client');\n//   const compiler = webpack(webpackConfig({}, { mode: 'development' }));\n//\n//   app.use(\n//     // eslint-disable-next-line @typescript-eslint/no-var-requires\n//     require('webpack-dev-middleware')(compiler, {\n//       serverSideRender: true,\n//       index: false,\n//     }),\n//   );\n//   app.use(\n//     // eslint-disable-next-line @typescript-eslint/no-var-requires\n//     require('webpack-hot-middleware')(compiler, {\n//       path: '/__webpack_hmr',\n//       heartbeat: 10 * 1000,\n//     }),\n//   );\n// }\n// view engine setup\n\napp.set('views', path__WEBPACK_IMPORTED_MODULE_0___default().resolve('src/server', 'views'));\napp.set('view engine', 'ejs'); // static\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('build/client'))); // app.use(morgan('dev'));\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: false\n}));\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()({\n  level: 5\n}));\napp.use(serve_favicon__WEBPACK_IMPORTED_MODULE_7___default()(path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '../../public', 'favicon.ico')));\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_5__.default);\napp.use(_middlewares__WEBPACK_IMPORTED_MODULE_4__.ssrMiddleware); // catch 404 and forward to error handler\n\napp.use(({\n  next\n}) => {\n  if (next) {\n    next(http_errors__WEBPACK_IMPORTED_MODULE_2___default()(404));\n  }\n}); // error handler\n\napp.use((req, res, next) => {\n  // set locals, only providing error in development\n  res.locals.message = req.statusMessage;\n  res.locals.error = req.app.get('env') === 'development' ? req : {}; // render the error page\n\n  res.status(req.statusCode || 500);\n  res.render('error');\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack:///../src/server/app.tsx?");

/***/ }),

/***/ "../src/server/middlewares/index.ts":
/*!******************************************!*\
  !*** ../src/server/middlewares/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrMiddleware\": () => /* reexport safe */ _ssr_middleware__WEBPACK_IMPORTED_MODULE_0__.ssrMiddleware\n/* harmony export */ });\n/* harmony import */ var _ssr_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-middleware */ \"../src/server/middlewares/ssr-middleware.tsx\");\n // export { webpackMiddleware } from './webpack-middleware';\n\n//# sourceURL=webpack:///../src/server/middlewares/index.ts?");

/***/ }),

/***/ "../src/server/middlewares/ssr-middleware.tsx":
/*!****************************************************!*\
  !*** ../src/server/middlewares/ssr-middleware.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrMiddleware\": () => /* binding */ ssrMiddleware\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clean_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clean-css */ \"clean-css\");\n/* harmony import */ var clean_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clean_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"../src/server/utils/index.ts\");\n/* harmony import */ var _rockpack_ussr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rockpack/ussr */ \"@rockpack/ussr\");\n/* harmony import */ var _rockpack_ussr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_rockpack_ussr__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../App */ \"../src/App.tsx\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/theme */ \"../src/theme/theme.ts\");\n\n\n\n\n\n\n\n\n\n // import { renderToStaticMarkup } from 'react-dom/server';\n\n/**\r\n * SSR Middleware\r\n */\n\nasync function ssrMiddleware(req, res) {\n  const webStats = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, '../client/loadable-stats.json');\n  const webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_4__.ChunkExtractor({\n    statsFile: webStats\n  });\n  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.ServerStyleSheets();\n  const state = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.serializeState)({// device: getDeviceType(),\n  });\n  const {\n    html\n  } = await (0,_rockpack_ussr__WEBPACK_IMPORTED_MODULE_7__.serverRender)(() => webExtractor.collectChunks(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n    theme: _theme_theme__WEBPACK_IMPORTED_MODULE_9__.theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    basename: \"pwa\",\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_8__.default, null))))));\n  const links = webExtractor.getLinkTags();\n  const scripts = webExtractor.getScriptTags();\n  const styleTags = webExtractor.getStyleTags();\n  const minCss = new (clean_css__WEBPACK_IMPORTED_MODULE_2___default())({}).minify(sheets.toString());\n  const styles = `<style id=\"jss-server-side\">${minCss.styles}</style>`; // const devServer = `${\n  //   __DEV__ ? renderToStaticMarkup(<script src=\"./dev-server.js\" />) : ''\n  // }`;\n\n  res.render('index', {\n    lang: 'en',\n    links,\n    styleTags,\n    styles,\n    html,\n    scripts,\n    state,\n    devServer: ''\n  });\n}\n\n//# sourceURL=webpack:///../src/server/middlewares/ssr-middleware.tsx?");

/***/ }),

/***/ "../src/server/routes/index.ts":
/*!*************************************!*\
  !*** ../src/server/routes/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get('/www', (_req, res) => {\n  res.send({\n    www: true\n  });\n  res.end();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack:///../src/server/routes/index.ts?");

/***/ }),

/***/ "../src/server/server.ts":
/*!*******************************!*\
  !*** ../src/server/server.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"../src/server/app.tsx\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-error */ \"pretty-error\");\n/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pretty_error__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst pe = new (pretty_error__WEBPACK_IMPORTED_MODULE_3___default())();\n/**\r\n * Get port from environment and store in Express.\r\n */\n\nconst port = normalizePort(process.env.PORT || '3000');\n_app__WEBPACK_IMPORTED_MODULE_0__.default.set('port', port);\n/**\r\n * Create HTTP server.\r\n */\n\nconst server = http__WEBPACK_IMPORTED_MODULE_2___default().createServer(_app__WEBPACK_IMPORTED_MODULE_0__.default);\n/**\r\n * Listen on provided port, on all network interfaces.\r\n */\n\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n/**\r\n * Normalize a port into a number, string, or false.\r\n */\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n/**\r\n * Event listener for HTTP server \"error\" event.\r\n */\n\n\nfunction onError(error) {\n  console.error(pe.render(error));\n\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n/**\r\n * Event listener for HTTP server \"listening\" event.\r\n */\n\n\nfunction onListening() {\n  const addr = server.address();\n  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;\n  debug__WEBPACK_IMPORTED_MODULE_1___default()('Listening on ' + bind);\n  console.warn(`Server 🚀 http://localhost:${port}`);\n}\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/server/server.ts?");

/***/ }),

/***/ "../src/server/utils/deviceType.ts":
/*!*****************************************!*\
  !*** ../src/server/utils/deviceType.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDeviceType\": () => /* binding */ getDeviceType\n/* harmony export */ });\n/**\r\n * Get Device Type\r\n */\nconst getDeviceType = () => {\n  const ua = navigator.userAgent;\n\n  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {\n    return 'tablet';\n  }\n\n  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {\n    return 'mobile';\n  }\n\n  return 'pc';\n};\n\n//# sourceURL=webpack:///../src/server/utils/deviceType.ts?");

/***/ }),

/***/ "../src/server/utils/index.ts":
/*!************************************!*\
  !*** ../src/server/utils/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_0__.logger,\n/* harmony export */   \"getStyles\": () => /* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_1__.getStyles,\n/* harmony export */   \"serializeState\": () => /* reexport safe */ _serialize__WEBPACK_IMPORTED_MODULE_2__.serializeState,\n/* harmony export */   \"getDeviceType\": () => /* reexport safe */ _deviceType__WEBPACK_IMPORTED_MODULE_3__.getDeviceType\n/* harmony export */ });\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ \"../src/server/utils/logger.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"../src/server/utils/styles.ts\");\n/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize */ \"../src/server/utils/serialize.ts\");\n/* harmony import */ var _deviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deviceType */ \"../src/server/utils/deviceType.ts\");\n\n\n\n\n\n//# sourceURL=webpack:///../src/server/utils/index.ts?");

/***/ }),

/***/ "../src/server/utils/logger.ts":
/*!*************************************!*\
  !*** ../src/server/utils/logger.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => /* binding */ logger\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\r\n * Options\r\n */\n\nconst options = {\n  file: {\n    level: 'info',\n    filename: 'info.log',\n    dirname: path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/logs'),\n    json: true,\n    maxsize: 5242880,\n    // 5MB\n    maxFiles: 5\n  },\n  errors: {\n    level: 'error',\n    filename: 'error.log',\n    dirname: path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/logs')\n  },\n  console: {\n    level: 'debug',\n    handleExceptions: true,\n    format: winston__WEBPACK_IMPORTED_MODULE_1__.format.combine(winston__WEBPACK_IMPORTED_MODULE_1__.format.colorize(), winston__WEBPACK_IMPORTED_MODULE_1__.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`))\n  }\n};\n/**\r\n * Logger\r\n */\n\nconst logger = (0,winston__WEBPACK_IMPORTED_MODULE_1__.createLogger)({\n  format: winston__WEBPACK_IMPORTED_MODULE_1__.format.combine(winston__WEBPACK_IMPORTED_MODULE_1__.format.timestamp({\n    format: 'DD-MM-YYYY HH:mm:ss:ms'\n  }), winston__WEBPACK_IMPORTED_MODULE_1__.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_1__.transports.File(options.file), new winston__WEBPACK_IMPORTED_MODULE_1__.transports.File(options.errors)],\n  exitOnError: false\n}); // if (CONFIG.debug) {\n//   logger.add(new transports.Console(options.console));\n// }\n\n\n\n//# sourceURL=webpack:///../src/server/utils/logger.ts?");

/***/ }),

/***/ "../src/server/utils/serialize.ts":
/*!****************************************!*\
  !*** ../src/server/utils/serialize.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serializeState\": () => /* binding */ serializeState\n/* harmony export */ });\n/**\r\n * Serialize State\r\n * @param state\r\n */\nconst serializeState = state => {\n  return JSON.stringify(state).replace(/</g, '\\\\u003c');\n};\n\n//# sourceURL=webpack:///../src/server/utils/serialize.ts?");

/***/ }),

/***/ "../src/server/utils/styles.ts":
/*!*************************************!*\
  !*** ../src/server/utils/styles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStyles\": () => /* binding */ getStyles\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStyles = loadableStats => {\n  const stats = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(loadableStats, 'utf8'));\n\n  const createCssLink = path => {\n    return `<link rel=\"stylesheet\" type=\"text/css\" href=\"/${path}\" />`;\n  };\n\n  return stats.assets.filter(file => path__WEBPACK_IMPORTED_MODULE_1___default().extname(file.name) === '.css').map(style => createCssLink(style.name));\n};\n\n//# sourceURL=webpack:///../src/server/utils/styles.ts?");

/***/ }),

/***/ "../src/theme/theme.ts":
/*!*****************************!*\
  !*** ../src/theme/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => /* binding */ theme\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  palette: {\n    type: 'light',\n    primary: {\n      main: '#1565c0'\n    },\n    secondary: {\n      main: '#ee2828'\n    },\n    error: {\n      main: '#810404'\n    },\n    contrastThreshold: 3,\n    tonalOffset: 0.2\n  }\n});\n\n//# sourceURL=webpack:///../src/theme/theme.ts?");

/***/ }),

/***/ "../src/components/Header/components/indicator.scss":
/*!**********************************************************!*\
  !*** ../src/components/Header/components/indicator.scss ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".indicator p {\\n  margin-left: 10px;\\n  font-size: 14px;\\n  margin-bottom: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../src/components/Header/components/indicator.scss?");

/***/ }),

/***/ "../src/components/Navigation/navigation.scss":
/*!****************************************************!*\
  !*** ../src/components/Navigation/navigation.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav-header {\\n  margin-left: 80px;\\n  margin-right: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../src/components/Navigation/navigation.scss?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "@babel/runtime/helpers/applyDecoratedDescriptor":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/applyDecoratedDescriptor" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/applyDecoratedDescriptor");;

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/extends");;

/***/ }),

/***/ "@babel/runtime/helpers/initializerDefineProperty":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/initializerDefineProperty" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/initializerDefineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/initializerWarningHelper":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/initializerWarningHelper" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/initializerWarningHelper");;

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@loadable/component");;

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");;

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");;

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Badge");;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Card");;

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/CardActionArea");;

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/CardContent");;

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Checkbox");;

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Fab");;

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControlLabel");;

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/FormGroup");;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");;

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Menu");;

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");;

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Switch");;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Toolbar");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/AccountCircle");;

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");;

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Edit");;

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");;

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Mail");;

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");;

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/MoreVert");;

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/MoveToInbox");;

/***/ }),

/***/ "@material-ui/icons/Navigation":
/*!************************************************!*\
  !*** external "@material-ui/icons/Navigation" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Navigation");;

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Notifications");;

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Remove");;

/***/ }),

/***/ "@material-ui/icons/WifiOff":
/*!*********************************************!*\
  !*** external "@material-ui/icons/WifiOff" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/WifiOff");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@rockpack/ussr":
/*!*********************************!*\
  !*** external "@rockpack/ussr" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@rockpack/ussr");;

/***/ }),

/***/ "clean-css":
/*!****************************!*\
  !*** external "clean-css" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("clean-css");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

module.exports = require("debug");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-errors");;

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("i18next");;

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("i18next-browser-languagedetector");;

/***/ }),

/***/ "i18next-xhr-backend":
/*!**************************************!*\
  !*** external "i18next-xhr-backend" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("i18next-xhr-backend");;

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("mobx");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "pretty-error":
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("pretty-error");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-error-boundary":
/*!***************************************!*\
  !*** external "react-error-boundary" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-error-boundary");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-i18next");;

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-loading-skeleton");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");;

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("../src/server/server.ts");
/******/ })()
;