/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import Button from "./Button";
import TableBlock from "./Block";
import constants from "./constants";


export default {
  title: "Megadraft Table Plugin",
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: TableBlock,
  options: {
    displayOptions: [],
    defaultDisplay: null
  }
};
