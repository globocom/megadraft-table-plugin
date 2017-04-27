/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {AddRemove} from "./AddRemove";
import {addRow, removeRow, addColumn, removeColumn} from "./TableManagerHelper";

export class TableManagerActions extends Component {

  constructor(props) {
    super(props);
    this.addRow = ::this.addRow;
    this.removeRow = ::this.removeRow;
    this.addColumn = ::this.addColumn;
    this.removeColumn = ::this.removeColumn;
  }

  addRow() {
    const position = this.props.selectedCell.length == 2 ? this.props.selectedCell[1] : null;
    const rows = addRow(this.props.rows, position);
    this.props.onChangeRows(rows);
  }

  removeRow() {
    const position = this.props.selectedCell.length == 2 ? this.props.selectedCell[1] : null;
    const rows = removeRow(this.props.rows, position);
    this.props.onChangeRows(rows);
  }

  addColumn() {
    const position = this.props.selectedCell.length == 2 ? this.props.selectedCell[0] : null;
    const rows = addColumn(this.props.rows, position);
    this.props.onChangeRows(rows);
  }

  removeColumn() {
    const position = this.props.selectedCell.length == 2 ? this.props.selectedCell[0] : null;
    const rows = removeColumn(this.props.rows, position);
    this.props.onChangeRows(rows);
  }

  render() {
    return (<div>
      <AddRemove
        className="add-remove-rows"
        title="Linhas"
        onAdd={this.addRow}
        onRemove={this.removeRow} />

      <AddRemove title="Colunas"
        className="add-remove-columns"
        onAdd={this.addColumn}
        onRemove={this.removeColumn} />
    </div>);
  }
}