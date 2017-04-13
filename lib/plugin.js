"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _Block = require("./Block");

var _Block2 = _interopRequireDefault(_Block);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  title: "Table",
  type: _constants2.default.PLUGIN_TYPE,
  buttonComponent: _Button2.default,
  blockComponent: _Block2.default,
  options: {
    displayOptions: [],
    defaultDisplay: null
  }
}; /*
    * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
    *
    * License: MIT
    */