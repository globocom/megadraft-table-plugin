const createHeaderStyle = (options = {}) => {
  return {
    top: options.top || false,
    bottom: options.bottom || false,
    right: options.right || false,
    left: options.left || false
  };
};

export const EmptyTableConfig = {
  title: "",
  headerStyle: createHeaderStyle(),
  source: "",
  rows: []
};

export const ValidTableConfig = Object.assign({}, EmptyTableConfig, {title: "Bloblo", headerStyle: createHeaderStyle({top: true})});