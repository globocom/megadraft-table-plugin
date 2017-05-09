/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";
import TableManagerModal from "./TableManagerModal";
import TableView from "./TableView";

const {BlockContent, CommonBlock} = MegadraftPlugin;


export default class TableBlock extends Component {
  constructor(props) {
    super(props);

    this._handleEdit = ::this._handleEdit;
    this._onModalClose = ::this._onModalClose;
    this._onSave = ::this._onSave;

    this.state = {
      isEditing: false
    };

    this.actions = [
      {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleEdit() {
    this.setState({isEditing: true});
  }

  _onModalClose() {
    if (this.state.isEditing) {
      this.setState({isEditing: false});
    }
  }

  _onSave(data) {
    this.setState({isEditing: false});
    this.props.container.updateData({...data});
  }

  _sourceRender(source) {
    let sourceText = "";
    if(source) {
      sourceText = "Fonte: " + source;
    }
    return (
      <div className="table-manager-block__source-wrapper">
        <p className="table-manager-block__source">{sourceText}</p>
      </div>
    );
  }

  render(){
    return (
      <div>
        <CommonBlock {...this.props} actions={this.actions}>
          <BlockContent>
          <div className="table-manager-block">


            <div className="table-manager-block__wrapper">
              <h1 className="table-manager-block__title">{this.props.data.title}</h1>
              <div className="table-manager-block__inner-wrapper">
                <TableView rows={this.props.data.rows} onEditCell={this.props.onEditTableCell} headerStyle={this.props.data.headerStyle} editable={false} />
                {this._sourceRender(this.props.data.source)}
              </div>

            </div>
          </div>
          </BlockContent>
        </CommonBlock>
        <TableManagerModal isOpen={this.state.isEditing} onCloseRequest={this._onModalClose} onSaveRequest={this._onSave} data={this.props.data} />
      </div>
    );
  }
}
