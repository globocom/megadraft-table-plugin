import React, {Component} from "react";

import * as Table from "reactabular-table";
import { cloneDeep, findIndex } from "lodash";
import * as edit from "react-edit";

import {highlightedClass, getTableFromClipBoard, isTableData, addSelectedCellClass} from "./TableManagerHelper";


export default class TableView extends Component {

  constructor(props) {
    super(props);
    let columns = this.buildColumns(props.rows);
    let rows = this.buildRows(props.rows, columns);
    this.state = {
      columns: columns,
      rows: rows
    };
  }

  componentWillReceiveProps(nextProps) {
    const columns = this.buildColumns(nextProps.rows);
    const rows = this.buildRows(nextProps.rows, columns);
    this.setState({columns: columns, rows: rows});
  }

  buildColumns(rows) {
    let columns = [];
    const editable = edit.edit({
      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,
      onActivate: ({ columnIndex, rowData }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);

        rows[index].editing = columnIndex;
        addSelectedCellClass(index, columnIndex);
        this.setState({ rows });
      },
      onValue: ({ value, rowData, property }) => {
        const index = findIndex(this.state.rows, { id: rowData.id });
        const rows = cloneDeep(this.state.rows);
        const columnIndex = findIndex(this.state.columns, {property});

        rows[index][property] = value;
        rows[index].editing = false;

        if (this.props.onEditCell) {
          this.props.onEditCell(index, columnIndex, value);
        }
        this.setState({ rows });
      }
    });

    for(let rowIndex=0; rowIndex < rows[0].length; rowIndex++) {
      let propertyName = "c" + rowIndex;
      columns.push({
        property: propertyName,
        style: { width: 50 },
        cell: {
          transforms: this.props.editable ? [editable(edit.input({props: {onPaste: (e) => {this.buildTableFromPasteData(e.clipboardData.getData("Text"));}}}))] : [],
          formatters: this.props.editable ? [(value, info) => { return this.buildTableCellFormatter(value, info);}] : [],
          props: {
            className: "table-cell"
          }}});
    }
    return columns;
  }

  buildRows(rows, columns) {
    let newRows = [];
    for(let rowIndex=0 ; rowIndex< rows.length; rowIndex++) {
      let row = {};
      for(let columnIndex=0; columnIndex < rows[rowIndex].length; columnIndex++) {
        let propertyName = columns[columnIndex].property;
        row[propertyName] = rows[rowIndex][columnIndex];
        row["id"] = this.buildRowId(propertyName, rowIndex, columnIndex);
      }
      if(Object.keys(row).length !== 0) {
        newRows.push(row);
      }

    }
    return newRows;
  }

  buildRowId(propertyName, rowIndex, columnIndex) {
    return propertyName + rowIndex + "-"+ columnIndex;
  }

  buildPropertyName(columnIndex) {
    return "c" + columnIndex;
  }

  buildTableFromPasteData(data) {
    const rows = getTableFromClipBoard(data);
    if(isTableData(rows)) {
      this.props.onChangeRows(rows);
    }
  }

  buildTableCellFormatter(value, info) {
    return (
      <div className="table-cell-content" onKeyUp={(e) => {this.changeSelectedCell(e);}} tabIndex="0">{value}</div>
    );
  }

  changeSelectedCell(e) {
    e.target.click();
    e.preventDefault();
  }

  render() {
    return (
        <Table.Provider columns={this.state.columns} >
          <Table.Body className={highlightedClass(this.props.headerStyle)} rows={this.state.rows} rowKey="id" onRow={() => { return {className: "table-row"};}} />
        </Table.Provider>
          );
  }
}
