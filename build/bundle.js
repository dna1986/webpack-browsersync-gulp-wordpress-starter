webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _hello = __webpack_require__(172);

	var _hello2 = _interopRequireDefault(_hello);

	__webpack_require__(174);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*jshint esversion: 6 */
	_reactDom2.default.render(_react2.default.createElement(_hello2.default, { name: 'ciao' }), document.getElementById('app'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "hello",

	  openModal: function openModal() {

	    console.log("modale modale");

	    $('.ui.basic.modal').modal('show');
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "button",
	        { className: "ui button", id: "test", onClick: this.openModal },
	        "Open Modal"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "ui basic modal" },
	        _react2.default.createElement("i", { className: "close icon" }),
	        _react2.default.createElement(
	          "div",
	          { className: "header" },
	          "Archive Old Messages"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "image content" },
	          _react2.default.createElement(
	            "div",
	            { className: "image" },
	            _react2.default.createElement("i", { className: "archive icon" })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "description" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "Your inbox is getting full, would you like us to enable automatic archiving of old messages?"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "actions" },
	          _react2.default.createElement(
	            "div",
	            { className: "two fluid ui inverted buttons" },
	            _react2.default.createElement(
	              "div",
	              { className: "ui cancel red basic inverted button" },
	              _react2.default.createElement("i", { className: "remove icon" }),
	              "No"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "ui ok green basic inverted button" },
	              _react2.default.createElement("i", { className: "checkmark icon" }),
	              "Yes"
	            )
	          )
	        )
	      )
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(173)))

/***/ },

/***/ 174:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});