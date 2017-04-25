/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {PluginIcon} from "./Icons.js";
import constants from "./constants";
import {insertDataBlock} from "megadraft";

import TableManagerModal from "./TableManagerModal";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
    this.onSave = ::this.onSave;
    this.onModalClose = ::this.onModalClose;

    this.state = {isEditing: false};
  }

  onClick(e) {
    this.setState({isEditing: true});

    e.stopPropagation();
  }

  onModalClose() {
    if (this.state.isEditing) {
      this.setState({isEditing: false});
    }
  }

  onSave(tableConfig) {
    this.setState({isEditing: false});
    const data = {
      type: constants.PLUGIN_TYPE,
      ...tableConfig
    };

    this.props.onChange(insertDataBlock(this.props.editorState, data));
  }

  render() {
    return (
      <div>
        <button className={this.props.className} type="button" onClick={this.onClick} title={this.props.title}>
          <PluginIcon className="sidemenu__button__icon" />
        </button>
        <TableManagerModal isOpen={this.state.isEditing} onCloseRequest={this.onModalClose} onSaveRequest={this.onSave} data={{}} />
      </div>
    );
  }
}
