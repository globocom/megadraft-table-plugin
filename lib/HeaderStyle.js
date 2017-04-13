"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderStyle = HeaderStyle;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormComponents = require("./FormComponents");

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderStyle(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      selectedOptions = _ref.selectedOptions;


  var _onChange = function _onChange(e) {
    var value = {
      top: selectedOptions.top,
      bottom: selectedOptions.bottom,
      right: selectedOptions.right,
      left: selectedOptions.left
    };
    value[e.target.value] = e.target.checked;
    onChange({ target: { name: name, value: value } });
  };

  return _react2.default.createElement(
    _FormComponents.FormItem,
    null,
    _react2.default.createElement(
      "label",
      { className: "bs-ui-input__label" },
      "Destaque"
    ),
    _react2.default.createElement(
      "label",
      { className: "bs-ui-checkbox" },
      _react2.default.createElement(_FormComponents.Checkbox, { className: "header-style",
        name: "header-style",
        value: "top",
        onChange: _onChange,
        isChecked: selectedOptions.top }),
      _react2.default.createElement(_Icons.HighlightIcon, { className: "header-style--top" })
    ),
    _react2.default.createElement(
      "label",
      { className: "bs-ui-checkbox" },
      _react2.default.createElement(_FormComponents.Checkbox, { className: "header-style",
        name: "header-style",
        value: "bottom",
        onChange: _onChange,
        isChecked: selectedOptions.bottom }),
      _react2.default.createElement(_Icons.HighlightIcon, { className: "header-style--bottom" })
    ),
    _react2.default.createElement(
      "label",
      { className: "bs-ui-checkbox" },
      _react2.default.createElement(_FormComponents.Checkbox, { className: "header-style",
        name: "header-style",
        value: "right",
        onChange: _onChange,
        isChecked: selectedOptions.right }),
      _react2.default.createElement(_Icons.HighlightIcon, { className: "header-style--right" })
    ),
    _react2.default.createElement(
      "label",
      { className: "bs-ui-checkbox" },
      _react2.default.createElement(_FormComponents.Checkbox, { className: "header-style",
        name: "header-style",
        value: "left",
        onChange: _onChange,
        isChecked: selectedOptions.left }),
      _react2.default.createElement(_Icons.HighlightIcon, { className: "header-style--left" })
    )
  );
} /*
   * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
   *
   * License: MIT
   */