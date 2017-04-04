/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";
import TableManagerModal from "./TableManagerModal";

const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;


export default class Block extends Component {
  constructor(props) {
    super(props);

    this._handleCaptionChange = ::this._handleCaptionChange;
    this._handleEdit = ::this._handleEdit;

    this.state = {
      isEditing: true
    };

    this.actions = [
      {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleEdit() {
    this.setState({isEditing: true});
  }

  _handleCaptionChange(event) {
    this.props.container.updateData({caption: event.target.value});
  }

  _onModalClose() {
    this.setState({isEditing: false});
  }

  render(){
    return (
      <div>
        <CommonBlock {...this.props} actions={this.actions}>
          <BlockContent>
            <pre>{this.props.data.caption || "- NO TEXT -"}</pre>
          </BlockContent>

          <BlockData>
            <BlockInput
              placeholder="Caption"
              value={this.props.data.caption}
              onChange={this._handleCaptionChange} />
          </BlockData>
        </CommonBlock>
        <TableManagerModal isOpen={this.state.isEditing} onCloseRequest={::this._onModalClose} />
      </div>
    );
  }
}
