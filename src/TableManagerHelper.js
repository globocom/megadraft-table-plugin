
function createNewRow(quantityOfColumns) {
  return Array.apply(null, new Array(quantityOfColumns)).map(x => "");
}

export function addRow(rows, position) {
  position = position ? position : rows.length + 1;
  const newRows = [
    ...rows.slice(0, position),
    createNewRow(rows[0].length),
    ...rows.slice(position)
  ];
  return newRows;
}