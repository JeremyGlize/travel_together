(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_js_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/js/navbar.js */ "./assets/styles/js/navbar.js");
/* harmony import */ var _styles_js_navbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_js_navbar_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! froala-editor */ "./node_modules/froala-editor/js/froala_editor.min.js");
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ "./node_modules/froala-editor/css/froala_editor.pkgd.min.css");
/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ "./node_modules/froala-editor/css/froala_style.min.css");
/* harmony import */ var froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! froala-editor/js/languages/fr.js */ "./node_modules/froala-editor/js/languages/fr.js");
/* harmony import */ var froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! froala-editor/js/plugins.pkgd.min.js */ "./node_modules/froala-editor/js/plugins.pkgd.min.js");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var froala_editor_css_plugins_pkgd_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! froala-editor/css/plugins.pkgd.min.css */ "./node_modules/froala-editor/css/plugins.pkgd.min.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)

 // start the Stimulus application

 // froala editor



 // Load your languages

 // Load all plugins, or specific ones



window.FroalaEditor = (froala_editor__WEBPACK_IMPORTED_MODULE_4___default());

function froalaDisplayError(p_editor, error) {
  alert("Error ".concat(error.code, ": ").concat(error.message));
}

window.froalaDisplayError = froalaDisplayError;

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/js/navbar.js":
/*!************************************!*\
  !*** ./assets/styles/js/navbar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle(); // Close one dropdown when selecting another

      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    }); // Clicking away from dropdown will remove the dropdown class

    $('html').click(function () {
      $('.nav-dropdown').hide();
    }); // Toggle open and close nav styles on click

    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    }); // Hamburger to X toggle

    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

/***/ }),

/***/ "?d546":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cad2":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?593c":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4068":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e7e4":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7bec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?802b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1e44":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0aec":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?fbf1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_froala-editor_css_fro-ceb18c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBRUksbUJBQVU7TUFDTixLQUFLQyxPQUFMLENBQWFDLFdBQWIsR0FBMkIsbUVBQTNCO0lBQ0g7Ozs7RUFId0JGOzs7Ozs7Ozs7Ozs7OztBQ1g3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBRUFJLE1BQU0sQ0FBQ0QsWUFBUCxHQUFzQkEsc0RBQXRCOztBQUVBLFNBQVNFLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQ0MsS0FBdEMsRUFBOEM7RUFDMUNDLEtBQUssaUJBQVVELEtBQUssQ0FBQ0UsSUFBaEIsZUFBeUJGLEtBQUssQ0FBQ0csT0FBL0IsRUFBTDtBQUNIOztBQUVETixNQUFNLENBQUNDLGtCQUFQLEdBQTRCQSxrQkFBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MvQkE7O0FBQ08sSUFBTU8sR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7OztBQ1ZBLENBQUMsVUFBU0UsQ0FBVCxFQUFZO0VBQUU7RUFDWEEsQ0FBQyxDQUFDLFlBQVc7SUFBRTtJQUNYO0lBQ0FBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxLQUFsQyxDQUF3QyxVQUFTQyxDQUFULEVBQVk7TUFDaERGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixlQUFqQixFQUFrQ0MsTUFBbEMsR0FEZ0QsQ0FFaEQ7O01BQ0FKLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLEdBQW5CLENBQXVCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLFFBQVIsRUFBdkIsRUFBMkNHLElBQTNDO01BQ0FKLENBQUMsQ0FBQ0ssZUFBRjtJQUNILENBTEQsRUFGUyxDQVFUOztJQUNBUCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEtBQVYsQ0FBZ0IsWUFBVztNQUN2QkQsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk0sSUFBbkI7SUFDSCxDQUZELEVBVFMsQ0FZVDs7SUFDQU4sQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztNQUM5QkQsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZUSxXQUFaO0lBQ0gsQ0FGRCxFQWJTLENBZ0JUOztJQUNBUixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFXO01BQ3BDLEtBQUtDLFNBQUwsQ0FBZU4sTUFBZixDQUFzQixRQUF0QjtJQUNILENBRkQ7RUFHSCxDQXBCQSxDQUFELENBRFMsQ0FxQkw7QUFDUCxDQXRCRCxFQXNCR08sTUF0QkgsR0FzQlk7Ozs7Ozs7Ozs7QUN0Qlo7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9qcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGFzbjEuanNcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxicm9yYW5kfGNyeXB0byIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeS1zaWduXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5LXNpZ25cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcY3JlYXRlLWVjZGhcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGRpZmZpZS1oZWxsbWFuXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxlbGxpcHRpY1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcaGFzaC1iYXNlXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxoYXNoLWJhc2VcXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcbWlsbGVyLXJhYmluXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxwdWJsaWMtZW5jcnlwdFxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvanMvbmF2YmFyLmpzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gZnJvYWxhIGVkaXRvclxuaW1wb3J0IEZyb2FsYUVkaXRvciBmcm9tICdmcm9hbGEtZWRpdG9yJztcbmltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX2VkaXRvci5wa2dkLm1pbi5jc3MnO1xuaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfc3R5bGUubWluLmNzcyc7XG5cbi8vIExvYWQgeW91ciBsYW5ndWFnZXNcbmltcG9ydCAnZnJvYWxhLWVkaXRvci9qcy9sYW5ndWFnZXMvZnIuanMnO1xuXG4vLyBMb2FkIGFsbCBwbHVnaW5zLCBvciBzcGVjaWZpYyBvbmVzXG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvanMvcGx1Z2lucy5wa2dkLm1pbi5qcyc7XG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL3BsdWdpbnMucGtnZC5taW4uY3NzJztcblxud2luZG93LkZyb2FsYUVkaXRvciA9IEZyb2FsYUVkaXRvcjtcblxuZnVuY3Rpb24gZnJvYWxhRGlzcGxheUVycm9yKHBfZWRpdG9yLCBlcnJvciApIHtcbiAgICBhbGVydChgRXJyb3IgJHtlcnJvci5jb2RlfTogJHtlcnJvci5tZXNzYWdlfWApO1xufVxuXG53aW5kb3cuZnJvYWxhRGlzcGxheUVycm9yID0gZnJvYWxhRGlzcGxheUVycm9yOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiKGZ1bmN0aW9uKCQpIHsgLy8gQmVnaW4galF1ZXJ5XHJcbiAgICAkKGZ1bmN0aW9uKCkgeyAvLyBET00gcmVhZHlcclxuICAgICAgICAvLyBJZiBhIGxpbmsgaGFzIGEgZHJvcGRvd24sIGFkZCBzdWIgbWVudSB0b2dnbGUuXHJcbiAgICAgICAgJCgnbmF2IHVsIGxpIGE6bm90KDpvbmx5LWNoaWxkKScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm5hdi1kcm9wZG93bicpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAvLyBDbG9zZSBvbmUgZHJvcGRvd24gd2hlbiBzZWxlY3RpbmcgYW5vdGhlclxyXG4gICAgICAgICAgICAkKCcubmF2LWRyb3Bkb3duJykubm90KCQodGhpcykuc2libGluZ3MoKSkuaGlkZSgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIENsaWNraW5nIGF3YXkgZnJvbSBkcm9wZG93biB3aWxsIHJlbW92ZSB0aGUgZHJvcGRvd24gY2xhc3NcclxuICAgICAgICAkKCdodG1sJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXYtZHJvcGRvd24nKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIG9wZW4gYW5kIGNsb3NlIG5hdiBzdHlsZXMgb24gY2xpY2tcclxuICAgICAgICAkKCcjbmF2LXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCduYXYgdWwnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEhhbWJ1cmdlciB0byBYIHRvZ2dsZVxyXG4gICAgICAgICQoJyNuYXYtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgLy8gZW5kIERPTSByZWFkeVxyXG59KShqUXVlcnkpOyAvLyBlbmQgalF1ZXJ5IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJGcm9hbGFFZGl0b3IiLCJ3aW5kb3ciLCJmcm9hbGFEaXNwbGF5RXJyb3IiLCJwX2VkaXRvciIsImVycm9yIiwiYWxlcnQiLCJjb2RlIiwibWVzc2FnZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIiQiLCJjbGljayIsImUiLCJzaWJsaW5ncyIsInRvZ2dsZSIsIm5vdCIsImhpZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzbGlkZVRvZ2dsZSIsIm9uIiwiY2xhc3NMaXN0IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==