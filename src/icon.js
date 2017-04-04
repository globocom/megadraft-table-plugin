/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

export default class extends React.Component {
  render() {
    return (
        <svg {...this.props} width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"/>
          <path d="M19.095 11.619h-1.143V8.571c0-.838-.685-1.523-1.523-1.523H13.38V5.905a1.905 1.905 0 0 0-3.81 0v1.143H6.524c-.838 0-1.516.685-1.516 1.523v2.896h1.135a2.058 2.058 0 0 1 0 4.114H5v2.895C5 19.314 5.686 20 6.524 20h2.895v-1.143a2.058 2.058 0 0 1 4.114 0V20h2.896c.838 0 1.523-.686 1.523-1.524V15.43h1.143a1.905 1.905 0 0 0 0-3.81z" fill="currentColor"/>
          </g>
        </svg>
    );
  }
}
