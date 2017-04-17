"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var TableBlock = function (_Component) {
  _inherits(TableBlock, _Component);

  function TableBlock(props) {
    _classCallCheck(this, TableBlock);

    var _this = _possibleConstructorReturn(this, (TableBlock.__proto__ || Object.getPrototypeOf(TableBlock)).call(this, props));

    _this._handleEdit = _this._handleEdit.bind(_this);
    _this._onModalClose = _this._onModalClose.bind(_this);
    _this._onSave = _this._onSave.bind(_this);

    _this.state = {
      isEditing: false
    };

    _this.actions = [{ "key": "edit", "icon": _megadraft.MegadraftIcons.EditIcon, "action": _this._handleEdit }, { "key": "delete", "icon": _megadraft.MegadraftIcons.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(TableBlock, [{
    key: "_handleEdit",
    value: function _handleEdit() {
      this.setState({ isEditing: true });
    }
  }, {
    key: "_onModalClose",
    value: function _onModalClose() {
      if (this.state.isEditing) {
        this.setState({ isEditing: false });
      }
    }
  }, {
    key: "_onSave",
    value: function _onSave(data) {
      this.setState({ isEditing: false });
      this.props.container.updateData(_extends({}, data));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          CommonBlock,
          _extends({}, this.props, { actions: this.actions }),
          _react2.default.createElement(BlockContent, null)
        ),
        _react2.default.createElement(_TableManagerModal2.default, { isOpen: this.state.isEditing, onCloseRequest: this._onModalClose, onSaveRequest: this._onSave, data: this.props.data })
      );
    }
  }]);

  return TableBlock;
}(_react.Component);

exports.default = TableBlock;