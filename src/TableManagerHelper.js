
const MIN_ROWS = 1;
const MIN_COLUMNS = 1;

function createNewRow(quantityOfColumns) {
  return Array.apply(null, new Array(quantityOfColumns)).map(x => "");
}

export function addRow(rows, position = null) {
  position = position !== null ? position : rows.length;
  const newRows = [
    ...rows.slice(0, position + 1),
    createNewRow(rows[0].length),
    ...rows.slice(position + 1)
  ];
  return newRows;
}

export function removeRow(rows, position = null) {
  const newRows = [...rows];
  if (rows.length > MIN_ROWS) {
    position = position !== null ? position : rows.length - 1;
    newRows.splice(position, 1);
  }
  return newRows;
}

export function addColumn(rows, position = null) {
  const newRows = rows.map(row => {
    const newPosition = position !== null ? position + 1 : row.length;
    return [...row.slice(0, newPosition), "", ...row.slice(newPosition)];
  });
  return newRows;
}

export function removeColumn(rows, position = null) {
  const newRows = rows.map(row => {
    const newRow = [...row];
    if(row.length > MIN_COLUMNS) {
      const newPosition = position !== null ? position : row.length - 1;
      newRow.splice(newPosition, 1);
    }
    return newRow;
  });
  return newRows;
}

export function highlightedClass(headerStyle) {
  let classNames = "";
  if(headerStyle.top) {
    classNames += "highlight-top ";
  }
  if( headerStyle.bottom) {
    classNames += "highlight-bottom ";
  }
  if(headerStyle.left) {
    classNames += "highlight-left ";
  }
  if(headerStyle.right) {
    classNames += "highlight-right ";
  }

  return classNames;
}

export function getTableFromClipBoard(data) {
  const rows = data.split("\n");
  let newRows = [];

  for(let i = 0; i< rows.length; i++) {
    const cells = rows[i].split("\t");
    newRows.push(cells);
  }

  return newRows;
}

export function isTableData(rows) {
  if(rows.length === 1 && rows[0].length === 1) {
    return false;
  }
  return true;
}

export function addSelectedCellClass(rowIndex, columnIndex) {
  const previousSelectedCell = document.querySelector(".table-manager-modal .selected-cell");
  if(previousSelectedCell) {
    previousSelectedCell.classList.remove("selected-cell");
  }

  const selectedRow = document.querySelectorAll(".table-manager-modal .table-row")[rowIndex];
  if(selectedRow) {
    const selectedCell = selectedRow.querySelectorAll(".table-cell")[columnIndex];
    selectedCell.classList.add("selected-cell");
  }

}
