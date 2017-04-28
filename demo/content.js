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
          title: "Destino dos Recursos de Contas Inativas do FGTS por Faixa de Renda",
          source: "Redação/G1",
          rows: [
            ["Renda", "Quitar dívidas em atraso", "Poupança", "Comprar bens", "Lazer", "Pagamento impostos", "Outras finalidades"],
            ["Acre", "53,8", "53,8", "53,8", "53,8", "53,8", "53,8"],
            ["Alagoas", "156,7", "156,7", "156,7", "156,7", "156,7", "156,7"],
            ["Amazonas", "341,2", "341,2", "341,2", "341,2", "341,2", "341,2"],
            ["Amapá", "40,9", "40,9", "40,9", "40,9", "40,9", "40,9"],
            ["Total", "41,2%", "41,2%", "41,2%", "41,2%", "41,2%", "41,2%"]]
        })
      },
      entityRanges: []
    }
  ]
};
