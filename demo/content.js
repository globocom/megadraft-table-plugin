/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import constants from "../src/constants";
import {TableConfig} from "../src/TableConfig";

export default {
  entityMap: {
  },
  blocks: [
    {
      key: "ag6qs",
      text: "Megadraft Table Plugin - Megadraft Plugin",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: []
    },
    {
      key: "9vgd",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      text: "",
      data: {
        type: constants.PLUGIN_TYPE,
        ...new TableConfig({
          title: "Tabela XPTO",
          source: "Fonte da minha tabela",
          rows: [["A1", "B1"], ["A2", "B2"]]
        })
      },
      entityRanges: []
    }
  ]
};
