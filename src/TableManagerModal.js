/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";

import Modal, {ModalBody, ModalFooter} from "backstage-modal";

import TableView from "./TableView";
import {TableConfig, validate} from "./TableConfig";
import {TableManagerActions} from "./TableManagerActions";
import {TableManagerMetadata} from "./TableManagerMetadata";


export default class TableManagerModal extends Component {

  static propTypes = {
    onCloseRequest: PropTypes.func,
    onSaveRequest: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._onSaveRequest = ::this._onSaveRequest;
    this.onFormItemChange = ::this.onFormItemChange;
    this.onChangeRows = ::this.onChangeRows;
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

  onChangeRows(rows) {
    this._changeDataValue("rows", rows);
  }


  onEditTableCell(rowIndex, columnIndex, value ) {
    this.state.data.rows[rowIndex][columnIndex] = value;
    this._changeDataValue("rows", this.state.data.rows);
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

            {/* Metadado */}
            <TableManagerMetadata
              onChange={this.onFormItemChange}
              data={data}
              errors={errors} />

            {/* Metadado */}

            {/* <Acoes onChangeRows selectedCell rows /> */}

            <TableManagerActions
              onChangeRows={this.onChangeRows}
              selectedCell={this.state.selectedCell}
              rows={data.rows} />

            {/**/}

          </div>

          <div className="table-manager-modal__editable-table">
            <div className="table-manager-modal__table-wrapper">
              <TableView rows={this.state.data.rows} onEditCell={::this.onEditTableCell} onChangeRows={this.onChangeRows} headerStyle={data.headerStyle} editable={true} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="table-manager-modal__footer">
          <button className="table-manager-modal__add-button bs-ui-button bs-ui-button--background-blue bs-ui-button--small"
                  onClick={this._onSaveRequest}>Adicionar</button>
        </ModalFooter>
      </Modal>
    );
  }

}

