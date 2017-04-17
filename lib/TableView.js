"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactabularTable = require("reactabular-table");

var Table = _interopRequireWildcard(_reactabularTable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableView = function (_Component) {
  _inherits(TableView, _Component);

  function TableView(props) {
    _classCallCheck(this, TableView);

    var _this = _possibleConstructorReturn(this, (TableView.__proto__ || Object.getPrototypeOf(TableView)).call(this, props));

    var columns = _this.buildColumns(props.rows);
    var rows = _this.buildRows(props.rows, columns);
    _this.state = {
      columns: columns,
      rows: rows
    };

    return _this;
  }

  _createClass(TableView, [{
    key: "buildColumns",
    value: function buildColumns(rows) {
      var columns = [];
      for (var rowIndex = 0; rowIndex < rows[0].length; rowIndex++) {
        var propertyName = "c" + rowIndex;
        columns.push({ property: propertyName });
      }
      return columns;
    }
  }, {
    key: "buildRows",
    value: function buildRows(rows, columns) {
      var newRows = [];
      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var row = {};
        for (var columnIndex = 0; columnIndex < rows[rowIndex].length; columnIndex++) {
          var propertyName = columns[columnIndex].property;
          row[propertyName] = rows[rowIndex][columnIndex];
          row["id"] = this.buildRowId(propertyName, rowIndex, columnIndex);
        }
        if (Object.keys(row).length !== 0) {
          newRows.push(row);
        }
      }
      return newRows;
    }
  }, {
    key: "buildRowId",
    value: function buildRowId(propertyName, rowIndex, columnIndex) {
      return propertyName + rowIndex + "-" + columnIndex;
    }
  }, {
    key: "buildPropertyName",
    value: function buildPropertyName(columnIndex) {
      return "c" + columnIndex;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        Table.Provider,
        { columns: this.state.columns },
        _react2.default.createElement(Table.Body, { rows: this.state.rows, rowKey: "id" })
      );
    }
  }]);

  return TableView;
}(_react.Component);

exports.default = TableView;