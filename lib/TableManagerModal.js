"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
                    * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
                    *
                    * License: MIT
                    */

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _backstageModal = require("backstage-modal");

var _backstageModal2 = _interopRequireDefault(_backstageModal);

var _HeaderStyle = require("./HeaderStyle");

var _FormComponents = require("./FormComponents");

var _AddRemove = require("./AddRemove");

var _TableConfig = require("./TableConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableManagerModal = (_temp = _class = function (_Component) {
  _inherits(TableManagerModal, _Component);

  function TableManagerModal(props) {
    _classCallCheck(this, TableManagerModal);

    var _this = _possibleConstructorReturn(this, (TableManagerModal.__proto__ || Object.getPrototypeOf(TableManagerModal)).call(this, props));

    _this._onSaveRequest = _this._onSaveRequest.bind(_this);
    _this.onFormItemChange = _this.onFormItemChange.bind(_this);
    _this.addRow = _this.addRow.bind(_this);
    _this.removeRow = _this.removeRow.bind(_this);
    _this.addColumn = _this.addColumn.bind(_this);
    _this.state = {
      data: new _TableConfig.TableConfig(_this.props.data),
      selectedCell: [],
      errors: {
        title: []
      }
    };
    return _this;
  }

  _createClass(TableManagerModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = new _TableConfig.TableConfig(_extends({}, nextProps.data));
      this.setState({ data: data });
    }
  }, {
    key: "_onSaveRequest",
    value: function _onSaveRequest() {
      if (this.isValid()) {
        this.props.onSaveRequest(this.state.data);
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var newErrors = { title: [] };
      if (this.state.data.title === "") {
        newErrors.title = ["Campo requirido"];
      }
      this.setState({ errors: newErrors });
      return newErrors.title.length === 0;
    }
  }, {
    key: "_changeDataValue",
    value: function _changeDataValue(prop, newValue) {
      var newData = _defineProperty({}, prop, newValue);
      var data = Object.assign({}, this.state.data, newData);
      this.setState({ data: data });
    }
  }, {
    key: "onFormItemChange",
    value: function onFormItemChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this._changeDataValue(name, value);
    }
  }, {
    key: "_createNewRow",
    value: function _createNewRow() {
      if (this.state.data.rows.length > 0) {
        return Array.apply(null, new Array(this.state.data.rows[0].length)).map(function (x) {
          return "";
        });
      } else {
        return [];
      }
    }
  }, {
    key: "addRow",
    value: function addRow() {
      var rowNum = void 0;
      if (this.state.selectedCell.length == 2) {
        rowNum = this.state.selectedCell[1] + 1;
      } else {
        rowNum = this.state.data.rows.length + 1;
      }
      var rows = [].concat(_toConsumableArray(this.state.data.rows.slice(0, rowNum)), [this._createNewRow()], _toConsumableArray(this.state.data.rows.slice(rowNum)));
      this._changeDataValue("rows", rows);
    }
  }, {
    key: "removeRow",
    value: function removeRow() {
      var rowNum = void 0;
      if (this.state.selectedCell.length == 2) {
        rowNum = this.state.selectedCell[1];
      } else {
        rowNum = this.state.data.rows.length - 1;
      }
      var rows = [].concat(_toConsumableArray(this.state.data.rows));
      rows.splice(rowNum, 1);
      this._changeDataValue("rows", rows);
    }
  }, {
    key: "addColumn",
    value: function addColumn() {
      var columnNum = void 0;
      if (this.state.selectedCell.length == 2) {
        columnNum = this.state.selectedCell[0] + 1;
      } else {
        columnNum = this.state.data.rows[0].length;
      }
      var rows = this.state.data.rows.map(function (row) {
        return [].concat(_toConsumableArray(row.slice(0, columnNum)), [""], _toConsumableArray(row.slice(columnNum)));
      });
      this._changeDataValue("rows", rows);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          data = _state.data,
          errors = _state.errors;

      return _react2.default.createElement(
        _backstageModal2.default,
        { className: "table-manager-modal",
          title: "Criar",
          isOpen: this.props.isOpen,
          onCloseRequest: this.props.onCloseRequest,
          width: "90%" },
        _react2.default.createElement(
          _backstageModal.ModalBody,
          null,
          _react2.default.createElement(
            "div",
            { className: "table-manager-modal__form" },
            _react2.default.createElement(_FormComponents.Input, { title: "T\xEDtulo",
              name: "title",
              value: data.title,
              errors: errors.title,
              onChange: this.onFormItemChange }),
            _react2.default.createElement(_HeaderStyle.HeaderStyle, { name: "headerStyle",
              selectedOptions: data.headerStyle,
              onChange: this.onFormItemChange }),
            _react2.default.createElement(_AddRemove.AddRemove, {
              className: "add-remove-rows",
              title: "Linhas",
              onAdd: this.addRow,
              onRemove: this.removeRow }),
            _react2.default.createElement(_AddRemove.AddRemove, { title: "Colunas",
              className: "add-remove-columns",
              onAdd: this.addColumn }),
            _react2.default.createElement(_FormComponents.Input, { title: "Fonte",
              name: "source",
              value: data.source,
              onChange: this.onFormItemChange })
          ),
          _react2.default.createElement(
            "div",
            { className: "table-manager-modal__editable-table" },
            "\"preview\""
          )
        ),
        _react2.default.createElement(
          _backstageModal.ModalFooter,
          { className: "table-manager-modal__footer" },
          _react2.default.createElement(
            "button",
            { className: "table-manager-modal__add-button bs-ui-button bs-ui-button--background-blue",
              onClick: this._onSaveRequest },
            "Adicionar"
          )
        )
      );
    }
  }]);

  return TableManagerModal;
}(_react.Component), _class.propTypes = {
  onCloseRequest: _react.PropTypes.func,
  onSaveRequest: _react.PropTypes.func
}, _temp);
exports.default = TableManagerModal;