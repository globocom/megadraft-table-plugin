import React, {Component, PropTypes} from "react";

import Modal, {ModalBody, ModalFooter} from "backstage-modal";
import TableManagerForm from "./TableManagerForm";

export default class TableManagerModal extends Component {

  static propTypes = {
    onCloseRequest: PropTypes.func,
    onSaveRequest: PropTypes.func
  }

  constructor() {
    super();
    this._onCloseRequest = ::this._onCloseRequest;
    this._onSaveRequest = ::this._onSaveRequest;
  }

  _onCloseRequest() {
    if (this.props.onCloseRequest) {
      this.props.onCloseRequest();
    }
  }

  _onSaveRequest() {
    if (this.props.onSaveRequest) {
      this.props.onSaveRequest();
    }
  }

  render() {
    return (
      <Modal className="table-manager-modal"
             title="Criar"
             isOpen={this.props.isOpen}
             onCloseRequest={this._onCloseRequest}
             width="90%">
        <ModalBody>
          <TableManagerForm />

          <div className="table-manager-modal__editable-table">"preview"</div>
        </ModalBody>
        <ModalFooter className="table-manager-modal__footer">
          <button className="bs-button bs-ui-button bs-button--blue"
                  onClick={this._onSaveRequest}>Adicionar</button>
        </ModalFooter>
      </Modal>
    );
  }

}
