import React, {Component, PropTypes} from "react";

// import * as Table from 'reactabular-table';

export default class TableView extends Component {

  constructor(props) {
      super(props);
      let columns = this.buildColumns(props.rows);
      let rows = this.buildRows(props.rows, columns)
      this.state = {
          columns: columns,
          rows: rows
      };

  }

  buildColumns(rows) {
    let columns = []
    for(let i=0; i < rows[0].length; i++) {
      let propertyName = "c" + i;
      columns.push({property: propertyName});
    }
    return columns;
  }

  buildRows(rows, columns) {
    let newRows = [];
    for(let i=0 ; i< rows.length; i++) {
      let row = {};
      for(let j=0; j < rows[i].length; j++) {
        let propertyName = columns[j].property;
        row[propertyName] = rows[i][j];
        row["id"] = this.buildRowId(propertyName, i, j);
      }
      newRows.push(row);
    }
    return newRows;
  }

  buildRowId(propertyName, i, j) {
    return propertyName + i + "-"+ j;
  }

  buildPropertyName(columnIndex) {
    return "c" + columnIndex;
  }

  render() {
      return (<h1></h1>
          );
  }
}
