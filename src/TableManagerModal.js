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
import {TableConfig, validate} from "./TableConfig";
import {addRow, removeRow, addColumn, removeColumn} from "./TableManagerHelper";


export default class TableManagerModal extends Component {

  static propTypes = {
    onCloseRequest: PropTypes.func,
    onSaveRequest: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._onSaveRequest = ::this._onSaveRequest;
    this.onFormItemChange = ::this.onFormItemChange;
    this.addRow = ::this.addRow;
    this.removeRow = ::this.removeRow;
    this.addColumn = ::this.addColumn;
    this.removeColumn = ::this.removeColumn;
    this.state = {
      data: new TableConfig(this.props.data),
      selectedCell: [],
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    const data = new TableConfig({...nextProps.data});
    const errors = {};
    this.setState({data, errors});
  }

  _onSaveRequest() {
    if (this.isValid()) {
      this.props.onSaveRequest(this.state.data);
    }
  }

  isValid() {
    const newErrors = validate(this.state.data);
    this.setState({errors: newErrors});
    return JSON.stringify(newErrors) === JSON.stringify({});
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

  addRow() {
    const position = this.state.selectedCell.length == 2 ? this.state.selectedCell[1] : null;
    const rows = addRow(this.state.data.rows, position);
    this._changeDataValue("rows", rows);
  }

  removeRow() {
    const position = this.state.selectedCell.length == 2 ? this.state.selectedCell[1] : null;
    const rows = removeRow(this.state.data.rows, position);
    this._changeDataValue("rows", rows);
  }

  addColumn() {
    const position = this.state.selectedCell.length == 2 ? this.state.selectedCell[0] : null;
    const rows = addColumn(this.state.data.rows, position);
    this._changeDataValue("rows", rows);
  }

  removeColumn() {
    const position = this.state.selectedCell.length == 2 ? this.state.selectedCell[0] : null;
    const rows = removeColumn(this.state.data.rows, position);
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
              onAdd={this.addRow}
              onRemove={this.removeRow} />

            <AddRemove title="Colunas"
              className="add-remove-columns"
              onAdd={this.addColumn}
              onRemove={this.removeColumn} />

            <Input title="Fonte"
              name="source"
              value={data.source}
              onChange={this.onFormItemChange}
              isRequired={false} />

          </div>

          <div className="table-manager-modal__editable-table">"preview"</div>
        </ModalBody>
        <ModalFooter className="table-manager-modal__footer">
          <button className="table-manager-modal__add-button bs-ui-button bs-ui-button--background-blue bs-ui-button--small"
                  onClick={this._onSaveRequest}>Adicionar</button>
        </ModalFooter>
      </Modal>
    );
  }

}

