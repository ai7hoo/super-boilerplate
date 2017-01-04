exports.ids = [0];
exports.modules = {

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__redux_actions__);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return LoginPage; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LoginPage = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
    _inherits(LoginPage, _Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    'About Page'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'Passed: ',
                    this.props.second,
                    's'
                )
            );
        }
    }]);

    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);



function mapStateToProps(state) {
    return {
        second: state.about
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_3__redux_actions__), dispatch)
    };
}

/***/ },

/***/ 47:
/***/ function(module, exports) {



/***/ }

};;