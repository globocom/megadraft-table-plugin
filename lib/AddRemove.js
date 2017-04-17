"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddRemove = AddRemove;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormComponents = require("./FormComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

function AddRemove(_ref) {
  var title = _ref.title,
      className = _ref.className,
      onAdd = _ref.onAdd,
      onRemove = _ref.onRemove;

  return _react2.default.createElement(
    _FormComponents.FormItem,
    { className: className },
    _react2.default.createElement(
      "label",
      { className: "bs-ui-input__label" },
      title
    ),
    _react2.default.createElement(
      "button",
      { className: "bs-ui-button bs-ui-button--blue btn-add", onClick: onAdd },
      "+ Adicionar"
    ),
    _react2.default.createElement(
      "button",
      { className: "bs-ui-button bs-ui-button--red btn-remove", onClick: onRemove },
      "X Remover"
    )
  );
}