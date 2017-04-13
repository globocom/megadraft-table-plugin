"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({}, this.props, { width: "24px", height: "24px", viewBox: "0 0 24 24" }),
        _react2.default.createElement("path", { d: "M19.8,3H4.2C3,3,2,4,2,5.3v13.5C2,20,3,21,4.2,21h15.5c1.2,0,2.2-1,2.2-2.3V5.3C22,4,21,3,19.8,3z M9.7,13.9v-3.8 c0,0,0-0.1,0-0.2h4.8c0,0,0,0.1,0,0.2v3.8H9.7L9.7,13.9z M14.4,15.4v4.1H9.7v-4.1H14.4z M3.5,10h4.7c0,0,0,0.1,0,0.2v3.8H3.5V10z M15.9,10h4.6v4h-4.6v-3.8C15.9,10,15.9,10,15.9,10z M4.2,4.5h15.5c0.4,0,0.7,0.3,0.7,0.7v3.2h-17V5.3C3.5,4.8,3.8,4.5,4.2,4.5z M3.5,18.8v-3.4h4.7v4.1h-4C3.8,19.5,3.5,19.2,3.5,18.8z M19.8,19.5h-3.9v-4.1h4.6v3.3C20.5,19.2,20.2,19.5,19.8,19.5z", fill: "currentColor" })
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;