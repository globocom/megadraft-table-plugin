/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

export default class TableManagerModal extends Component {

  render() {
    return (
      <span className="head-tooltip-toggle" aria-label="Linha e/ou coluna destacada de uma tabela">
        <i className="material-icons info-icon">info_outline</i>
      </span>
    );
  }

}
