import React, {Component, PropTypes} from "react";

// import * as Table from 'reactabular-table';

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

  buildColumns(rows) {
    let columns = [];
    for(let rowIndex=0; rowIndex < rows[0].length; rowIndex++) {
      let propertyName = "c" + rowIndex;
      columns.push({property: propertyName});
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

  render() {
      return (<h1></h1>
          );
  }
}
