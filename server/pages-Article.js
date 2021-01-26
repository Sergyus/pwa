/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages-Article";
exports.ids = ["pages-Article"];
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

/***/ "../src/components/UI/MediaCard.tsx":
/*!******************************************!*\
  !*** ../src/components/UI/MediaCard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ MediaCard\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"@material-ui/core/CardActionArea\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"@material-ui/icons/Remove\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction MediaCard(props) {\n  const {\n    remove,\n    id,\n    title,\n    body\n  } = props;\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n\n  function onSelect() {\n    history.push(`/blog/${id}`);\n  }\n\n  function onRemove() {\n    if (remove) {\n      remove(id);\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: onRemove\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default()), {\n    color: \"secondary\",\n    size: \"small\",\n    \"aria-label\": \"add\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2___default()), {\n    onClick: onSelect\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), {\n    style: {\n      height: '180px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, body))));\n}\n\n//# sourceURL=webpack:///../src/components/UI/MediaCard.tsx?");

/***/ }),

/***/ "../src/modules/Api/consts.ts":
/*!************************************!*\
  !*** ../src/modules/Api/consts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONFIG\": () => /* binding */ CONFIG\n/* harmony export */ });\nconst CONFIG = {\n  url: 'https://jsonplaceholder.typicode.com/'\n};\n\n//# sourceURL=webpack:///../src/modules/Api/consts.ts?");

/***/ }),

/***/ "../src/modules/Api/index.ts":
/*!***********************************!*\
  !*** ../src/modules/Api/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"../src/modules/Api/service.ts\");\n\n\n//# sourceURL=webpack:///../src/modules/Api/index.ts?");

/***/ }),

/***/ "../src/modules/Api/service.ts":
/*!*************************************!*\
  !*** ../src/modules/Api/service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"../src/modules/Api/consts.ts\");\n\n/**\n * Api Service\n */\n\nclass ApiService {\n  constructor() {\n    this.url = _consts__WEBPACK_IMPORTED_MODULE_0__.CONFIG.url;\n  }\n\n  async request(source) {\n    const response = await fetch(this.url + source);\n    return await response.json();\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ApiService());\n\n//# sourceURL=webpack:///../src/modules/Api/service.ts?");

/***/ }),

/***/ "../src/modules/Post/index.ts":
/*!************************************!*\
  !*** ../src/modules/Post/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"../src/modules/Post/service.ts\");\n\n\n//# sourceURL=webpack:///../src/modules/Post/index.ts?");

/***/ }),

/***/ "../src/modules/Post/service.ts":
/*!**************************************!*\
  !*** ../src/modules/Post/service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"../src/modules/Post/store.ts\");\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api */ \"../src/modules/Api/index.ts\");\n\n\n/**\n * Post Service\n */\n\nclass PostService extends _store__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(...args) {\n    super(...args);\n    this.api = _Api__WEBPACK_IMPORTED_MODULE_1__.default;\n  }\n\n  getPosts(from = 1, to = 10) {\n    const params = `posts?_start=${from}&_end=${to}`;\n    return this.api.request(params);\n  }\n\n  getPost(id) {\n    return this.api.request(`posts/${id}`);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PostService());\n\n//# sourceURL=webpack:///../src/modules/Post/service.ts?");

/***/ }),

/***/ "../src/modules/Post/store.ts":
/*!************************************!*\
  !*** ../src/modules/Post/store.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ PostStore\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ \"@babel/runtime/helpers/initializerDefineProperty\");\n/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ \"@babel/runtime/helpers/applyDecoratedDescriptor\");\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ \"@babel/runtime/helpers/initializerWarningHelper\");\n/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _class, _descriptor, _descriptor2, _temp;\n\n\n/**\n * Post Store\n */\n\nlet PostStore = (_class = (_temp = class PostStore {\n  constructor() {\n    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"posts\", _descriptor, this);\n\n    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, \"setPostsState\", _descriptor2, this);\n\n    (0,mobx__WEBPACK_IMPORTED_MODULE_3__.makeObservable)(this);\n  }\n\n}, _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, \"posts\", [mobx__WEBPACK_IMPORTED_MODULE_3__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return [];\n  }\n}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, \"setPostsState\", [mobx__WEBPACK_IMPORTED_MODULE_3__.action], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return posts => {\n      this.posts = posts;\n    };\n  }\n})), _class);\n\n\n//# sourceURL=webpack:///../src/modules/Post/store.ts?");

/***/ }),

/***/ "../src/pages/Article.tsx":
/*!********************************!*\
  !*** ../src/pages/Article.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Article\n/* harmony export */ });\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Title */ \"../src/components/Title/index.ts\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../modules/Post */ \"../src/modules/Post/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_UI_MediaCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/UI/MediaCard */ \"../src/components/UI/MediaCard.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.createStyles)({\n  root: {\n    'display': 'flex',\n    'justifyContent': 'center',\n    'alignItems': 'center',\n    'height': '630px',\n    '& > * + *': {\n      marginLeft: theme.spacing(2)\n    }\n  }\n}));\nfunction Article() {\n  const classes = useStyles();\n  const {\n    id\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useParams)();\n  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n  const [skeletons] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Array.from(Array(3).keys()));\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    _modules_Post__WEBPACK_IMPORTED_MODULE_5__.default.getPost(id).then(r => {\n      setPost(r);\n    });\n    _modules_Post__WEBPACK_IMPORTED_MODULE_5__.default.getPosts(+id, +id + 3).then(posts => {\n      setPosts(posts);\n      setOpen(false);\n    });\n  }, [id]);\n\n  if (post === undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n      className: classes.root\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, null));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_0__.default, {\n    title: \"Article\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default()), {\n    style: {\n      height: '180px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, post?.title.toLocaleUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, post?.body))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"h2\", null, \"Recommended...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: 1\n  }, open && skeletons.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    key: item,\n    item: true,\n    xs: 12,\n    sm: 6,\n    md: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default()), {\n    height: 180\n  }))), posts.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    key: item.id,\n    item: true,\n    xs: 12,\n    sm: 6,\n    md: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_UI_MediaCard__WEBPACK_IMPORTED_MODULE_10__.default, item)))));\n}\n\n//# sourceURL=webpack:///../src/pages/Article.tsx?");

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