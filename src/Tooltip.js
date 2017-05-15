/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

export default class TableManagerModal extends Component {

  render() {
    return <span className="jsonform-description header-style__tooltip" data-toggle="tooltip" title="Linha e/ou coluna destacada de uma tabela"></span>;
  }

  componentDidMount() {
    /* istanbul ignore next: hope this will be removed soon */
    if (window.$ && window.$.fn && window.$.fn.tooltip) {
      window.$(".header-style__tooltip").tooltip();
    }
  }

}
