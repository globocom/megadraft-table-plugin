"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icons = require("./Icons.js");

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

var _megadraft = require("megadraft");

var _TableManagerModal = require("./TableManagerModal");

var _TableManagerModal2 = _interopRequireDefault(_TableManagerModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onSave = _this.onSave.bind(_this);
    _this.onModalClose = _this.onModalClose.bind(_this);

    _this.state = { isEditing: false };
    return _this;
  }

  _createClass(Button, [{
    key: "onClick",
    value: function onClick(e) {
      this.setState({ isEditing: true });
    }
  }, {
    key: "onModalClose",
    value: function onModalClose() {
      if (this.state.isEditing) {
        this.setState({ isEditing: false });
      }
    }
  }, {
    key: "onSave",
    value: function onSave(tableConfig) {
      this.setState({ isEditing: false });
      var data = _extends({
        type: _constants2.default.PLUGIN_TYPE
      }, tableConfig);

      this.props.onChange((0, _megadraft.insertDataBlock)(this.props.editorState, data));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          { className: this.props.className, type: "button", onClick: this.onClick, title: this.props.title },
          _react2.default.createElement(_Icons.PluginIcon, { className: "sidemenu__button__icon" })
        ),
        _react2.default.createElement(_TableManagerModal2.default, { isOpen: this.state.isEditing, onCloseRequest: this.onModalClose, onSaveRequest: this.onSave, data: {} })
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;