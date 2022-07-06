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
/* harmony import */ var _styles_js_info_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/js/info_popup.js */ "./assets/styles/js/info_popup.js");
/* harmony import */ var _styles_js_info_popup_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_js_info_popup_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor */ "./node_modules/froala-editor/js/froala_editor.min.js");
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ "./node_modules/froala-editor/css/froala_editor.pkgd.min.css");
/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ "./node_modules/froala-editor/css/froala_style.min.css");
/* harmony import */ var froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! froala-editor/js/languages/fr.js */ "./node_modules/froala-editor/js/languages/fr.js");
/* harmony import */ var froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_languages_fr_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! froala-editor/js/plugins.pkgd.min.js */ "./node_modules/froala-editor/js/plugins.pkgd.min.js");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var froala_editor_css_plugins_pkgd_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! froala-editor/css/plugins.pkgd.min.css */ "./node_modules/froala-editor/css/plugins.pkgd.min.css");


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



window.FroalaEditor = (froala_editor__WEBPACK_IMPORTED_MODULE_5___default());

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

/***/ "./assets/styles/js/info_popup.js":
/*!****************************************!*\
  !*** ./assets/styles/js/info_popup.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
jQuery(document).ready(function () {
  jQuery('.fa-solid').on('click', function () {
    jQuery('#overlay').addClass('overlay-active');
    jQuery(".pop-up").fadeIn("fast", function () {
      jQuery('.pop-up').addClass('pop-up-active');
    });
  });
  jQuery('.btn-close,#overlay').on('click', function () {
    jQuery('#overlay').removeClass('overlay-active');
    jQuery(".pop-up").fadeOut("fast", function () {
      jQuery('.pop-up').removeClass('pop-up-active');
    });
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsZUFBRCxDQUFELENBQW1CTSxJQUFuQjtJQUNILENBRkQsRUFUUyxDQVlUOztJQUNBTixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixZQUFXO01BQzlCRCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlRLFdBQVo7SUFDSCxDQUZELEVBYlMsQ0FnQlQ7O0lBQ0FSLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJMLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7TUFDcEMsS0FBS2MsU0FBTCxDQUFlTCxNQUFmLENBQXNCLFFBQXRCO0lBQ0gsQ0FGRDtFQUdILENBcEJBLENBQUQsQ0FEUyxDQXFCTDtBQUNQLENBdEJELEVBc0JHWixNQXRCSCxHQXNCWTs7Ozs7Ozs7OztBQ3RCWjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2pzL2luZm9fcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9qcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGFzbjEuanNcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxicm9yYW5kfGNyeXB0byIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeS1zaWduXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5LXNpZ25cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcY3JlYXRlLWVjZGhcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8QzpcXFVzZXJzXFxQUkZcXERvY3VtZW50c1xcdHJhdmVsX3RvZ2V0aGVyXFxub2RlX21vZHVsZXNcXGRpZmZpZS1oZWxsbWFuXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxlbGxpcHRpY1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcaGFzaC1iYXNlXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxoYXNoLWJhc2VcXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXFBSRlxcRG9jdW1lbnRzXFx0cmF2ZWxfdG9nZXRoZXJcXG5vZGVfbW9kdWxlc1xcbWlsbGVyLXJhYmluXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovLy9pZ25vcmVkfEM6XFxVc2Vyc1xcUFJGXFxEb2N1bWVudHNcXHRyYXZlbF90b2dldGhlclxcbm9kZV9tb2R1bGVzXFxwdWJsaWMtZW5jcnlwdFxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvanMvbmF2YmFyLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvanMvaW5mb19wb3B1cC5qcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGZyb2FsYSBlZGl0b3JcbmltcG9ydCBGcm9hbGFFZGl0b3IgZnJvbSAnZnJvYWxhLWVkaXRvcic7XG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9lZGl0b3IucGtnZC5taW4uY3NzJztcbmltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX3N0eWxlLm1pbi5jc3MnO1xuXG4vLyBMb2FkIHlvdXIgbGFuZ3VhZ2VzXG5pbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvanMvbGFuZ3VhZ2VzL2ZyLmpzJztcblxuLy8gTG9hZCBhbGwgcGx1Z2lucywgb3Igc3BlY2lmaWMgb25lc1xuaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2pzL3BsdWdpbnMucGtnZC5taW4uanMnO1xuaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9wbHVnaW5zLnBrZ2QubWluLmNzcyc7XG5cbndpbmRvdy5Gcm9hbGFFZGl0b3IgPSBGcm9hbGFFZGl0b3I7XG5cbmZ1bmN0aW9uIGZyb2FsYURpc3BsYXlFcnJvcihwX2VkaXRvciwgZXJyb3IgKSB7XG4gICAgYWxlcnQoYEVycm9yICR7ZXJyb3IuY29kZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbn1cblxud2luZG93LmZyb2FsYURpc3BsYXlFcnJvciA9IGZyb2FsYURpc3BsYXlFcnJvcjsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBqUXVlcnkoJy5mYS1zb2xpZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnI292ZXJsYXknKS5hZGRDbGFzcygnb3ZlcmxheS1hY3RpdmUnKTtcclxuICAgICAgICBqUXVlcnkoXCIucG9wLXVwXCIpLmZhZGVJbihcImZhc3RcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBvcC11cCcpLmFkZENsYXNzKCdwb3AtdXAtYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeSgnLmJ0bi1jbG9zZSwjb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeSgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnb3ZlcmxheS1hY3RpdmUnKTtcclxuICAgICAgICBqUXVlcnkoXCIucG9wLXVwXCIpLmZhZGVPdXQoXCJmYXN0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wb3AtdXAnKS5yZW1vdmVDbGFzcygncG9wLXVwLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyIsIihmdW5jdGlvbigkKSB7IC8vIEJlZ2luIGpRdWVyeVxyXG4gICAgJChmdW5jdGlvbigpIHsgLy8gRE9NIHJlYWR5XHJcbiAgICAgICAgLy8gSWYgYSBsaW5rIGhhcyBhIGRyb3Bkb3duLCBhZGQgc3ViIG1lbnUgdG9nZ2xlLlxyXG4gICAgICAgICQoJ25hdiB1bCBsaSBhOm5vdCg6b25seS1jaGlsZCknKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5uYXYtZHJvcGRvd24nKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgLy8gQ2xvc2Ugb25lIGRyb3Bkb3duIHdoZW4gc2VsZWN0aW5nIGFub3RoZXJcclxuICAgICAgICAgICAgJCgnLm5hdi1kcm9wZG93bicpLm5vdCgkKHRoaXMpLnNpYmxpbmdzKCkpLmhpZGUoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDbGlja2luZyBhd2F5IGZyb20gZHJvcGRvd24gd2lsbCByZW1vdmUgdGhlIGRyb3Bkb3duIGNsYXNzXHJcbiAgICAgICAgJCgnaHRtbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2LWRyb3Bkb3duJykuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFRvZ2dsZSBvcGVuIGFuZCBjbG9zZSBuYXYgc3R5bGVzIG9uIGNsaWNrXHJcbiAgICAgICAgJCgnI25hdi10b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnbmF2IHVsJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBIYW1idXJnZXIgdG8gWCB0b2dnbGVcclxuICAgICAgICAkKCcjbmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IC8vIGVuZCBET00gcmVhZHlcclxufSkoalF1ZXJ5KTsgLy8gZW5kIGpRdWVyeSIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiRnJvYWxhRWRpdG9yIiwid2luZG93IiwiZnJvYWxhRGlzcGxheUVycm9yIiwicF9lZGl0b3IiLCJlcnJvciIsImFsZXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJhZGRDbGFzcyIsImZhZGVJbiIsInJlbW92ZUNsYXNzIiwiZmFkZU91dCIsIiQiLCJjbGljayIsImUiLCJzaWJsaW5ncyIsInRvZ2dsZSIsIm5vdCIsImhpZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzbGlkZVRvZ2dsZSIsImNsYXNzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=