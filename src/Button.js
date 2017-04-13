/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {PluginIcon} from "./Icons.js";
import constants from "./constants";
import {insertDataBlock} from "megadraft";
import {TableConfig} from "./TableConfig";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      type: constants.PLUGIN_TYPE,
      isFirstTime: true,
      ...new TableConfig()
    };

    this.props.onChange(insertDataBlock(this.props.editorState, data));
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick} title={this.props.title}>
        <PluginIcon className="sidemenu__button__icon" />
      </button>
    );
  }
}
