const createHeaderStyle = (options = {}) => {
  return {
    top: options.top || false,
    bottom: options.bottom || false,
    right: options.right || false,
    left: options.left || false
  };
};

export const TableConfig = function(values = {}) {
  return {
    title: values.title || "",
    headerStyle: createHeaderStyle(values.headerStyle),
    source: values.source || "",
    rows: values.rows || [[""]]
  };
};

export function validate(tableConfig) {
  const errors = {};
  if (tableConfig.title === "") {
    errors["title"] = ["Campo requirido"];
  }
  return errors;
}