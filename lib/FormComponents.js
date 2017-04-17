"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItem = FormItem;
exports.Checkbox = Checkbox;
exports.Input = Input;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

function FormItem(_ref) {
  var children = _ref.children,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$hasErrors = _ref.hasErrors,
      hasErrors = _ref$hasErrors === undefined ? false : _ref$hasErrors,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? "" : _ref$className;

  var inputClassNames = (0, _classnames2.default)({
    "bs-ui-input": true,
    "bs-ui-input--required": isRequired,
    "bs-ui-input--error": hasErrors
  }, className);

  return _react2.default.createElement(
    "div",
    { className: inputClassNames },
    children
  );
}

function Checkbox(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      isChecked = _ref2.isChecked,
      className = _ref2.className,
      onChange = _ref2.onChange;

  return _react2.default.createElement("input", { type: "checkbox",
    className: className,
    name: name,
    checked: isChecked,
    value: value,
    onChange: onChange });
}

function Input(_ref3) {
  var title = _ref3.title,
      name = _ref3.name,
      value = _ref3.value,
      _ref3$errors = _ref3.errors,
      errors = _ref3$errors === undefined ? [] : _ref3$errors,
      onChange = _ref3.onChange,
      onBlur = _ref3.onBlur,
      _ref3$isRequired = _ref3.isRequired,
      isRequired = _ref3$isRequired === undefined ? true : _ref3$isRequired;

  return _react2.default.createElement(
    FormItem,
    { isRequired: isRequired, hasErrors: errors.length !== 0 },
    _react2.default.createElement(
      "label",
      { className: "bs-ui-input__label", htmlFor: name },
      title
    ),
    _react2.default.createElement("input", { className: "bs-ui-input__field",
      type: "text",
      name: name,
      value: value,
      onChange: onChange,
      onBlur: onBlur, required: isRequired }),
    _react2.default.createElement(
      "p",
      { className: "bs-ui-input__field-error" },
      errors.map(function (error, index) {
        return _react2.default.createElement(
          "span",
          { key: index },
          error
        );
      })
    )
  );
}