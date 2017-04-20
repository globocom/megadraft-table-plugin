
const MIN_ROWS = 1;

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