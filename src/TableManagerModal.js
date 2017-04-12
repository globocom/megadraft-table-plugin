/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";

import Modal, {ModalBody, ModalFooter} from "backstage-modal";

import {HeaderStyle} from "./HeaderStyle";
import {Input} from "./FormComponents";
import {AddRemove} from "./AddRemove";

export default class TableManagerModal extends Component {

  static propTypes = {
    onCloseRequest: PropTypes.func,
    onSaveRequest: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._onSaveRequest = ::this._onSaveRequest;
    this.onFormItemChange = ::this.onFormItemChange;
    this.addLine = ::this.addLine;

    this.state = {
      data: {
        title: "",
        source: "",
        headerStyle: {
          top: false,
          bottom: false,
          right: false,
          left: false
        },
        rows: []
      },
      errors: {
        title: []
      }
    };
  }

  _onSaveRequest() {
    if (this.isValid()) {
      this.props.onSaveRequest(this.state);
    }
  }

  isValid() {
    let newErrors = {title: []};
    if (this.state.data.title === "") {
      newErrors.title = ["Campo requirido"];
    }
    this.setState({errors: newErrors});
    return newErrors.title.length === 0;
  }

  _changeDataValue(prop, newValue) {
    const newData = { [prop]: newValue };
    const data = Object.assign({}, this.state.data, newData);
    this.setState({data});
  }

  onFormItemChange(e) {
    const {name, value} = e.target;
    this._changeDataValue(name, value);
  }

  addLine() {
    const rows = this.state.data.rows.slice();
    rows.push([]);
    this._changeDataValue("rows", rows);
  }

  render() {
    const {data, errors} = this.state;
    return (
      <Modal className="table-manager-modal"
             title="Criar"
             isOpen={this.props.isOpen}
             onCloseRequest={this.props.onCloseRequest}
             width="90%">
        <ModalBody>
          <div className="table-manager-modal__form">
            <Input title="Título"
              name="title"
              value={data.title}
              errors={errors.title}
              onChange={this.onFormItemChange} />

            <HeaderStyle name="headerStyle"
              selectedOptions={data.headerStyle}
              onChange={this.onFormItemChange}/>

            <AddRemove
              className="add-remove-rows"
              title="Linhas"
              onAdd={this.addLine}/>

            <AddRemove title="Colunas" />

            <Input title="Fonte"
              name="source"
              value={data.source}
              onChange={this.onFormItemChange} />

          </div>

          <div className="table-manager-modal__editable-table">"preview"</div>
        </ModalBody>
        <ModalFooter className="table-manager-modal__footer">
          <button className="table-manager-modal__add-button bs-ui-button bs-ui-button--blue"
                  onClick={this._onSaveRequest}>Adicionar</button>
        </ModalFooter>
      </Modal>
    );
  }

}

