"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createHeaderStyle = function createHeaderStyle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    top: options.top || false,
    bottom: options.bottom || false,
    right: options.right || false,
    left: options.left || false
  };
};

var TableConfig = exports.TableConfig = function TableConfig() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    title: values.title || "",
    headerStyle: createHeaderStyle(values.headerStyle),
    source: values.source || "",
    rows: values.rows || []
  };
};