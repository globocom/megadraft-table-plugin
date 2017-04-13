const createHeaderStyle = (options = {}) => {
  return {
    top: options.top || false,
    bottom: options.bottom || false,
    right: options.right || false,
    left: options.left || false
  };
};

export const TableConfig = function() {
  return {
    title: "",
    headerStyle: createHeaderStyle(),
    source: "",
    rows: []
  };
};