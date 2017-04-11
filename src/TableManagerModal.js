import React, {Component, PropTypes} from "react";

import Modal, {ModalBody, ModalFooter} from "backstage-modal";

export default class TableManagerModal extends Component {

  static propTypes = {
    onCloseRequest: PropTypes.func,
    onSaveRequest: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._onCloseRequest = ::this._onCloseRequest;
    this._onSaveRequest = ::this._onSaveRequest;
    this.onFormItemChange = ::this.onFormItemChange;

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
        rows: [[], []]
      },
      errors: {
        title: []
      }
    };
  }

  _onCloseRequest() {
    this.props.onCloseRequest();
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
      this.setState({errors: newErrors});
    }
    return newErrors.title.length === 0;
  }

  _changeDataValue(prop, newValue) {
    const newData = {};
    newData[prop] = newValue;
    const data = Object.assign({}, this.state.data, newData);
    this.setState({data});
  }

  onFormItemChange(e) {
    const {name, value} = e.target;
    this._changeDataValue(name, value);
  }

  render() {
    const {data, errors} = this.state;
    return (
      <Modal className="table-manager-modal"
             title="Criar"
             isOpen={this.props.isOpen}
             onCloseRequest={this._onCloseRequest}
             width="90%">
        <ModalBody>
          <div className="table-manager-modal__form">
            <InputComponent title="Título"
                            name="title"
                            value={data.title}
                            errors={errors.title}
                            onChange={this.onFormItemChange}
                            />

            <RadioComponent title="Destaques"
                            name="header-style"
                            options={["top", "bottom", "right", "left"]}
                            selectedOption={data.headerStyle}
                            onChange={this.onFormItemChange} />

            <AddRemoveComponent title="Linhas" />

            <AddRemoveComponent title="Colunas" />

            <InputComponent title="Fonte"
                            name="source"
                            value={data.source}
                            errors={errors.source}
                            onChange={this.onFormItemChange}  />

          </div>

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


const RadioComponent = (
  { title, name, options, selectedOption = "", onChange }
) => {
  return (
    <FormItem>
      <label htmlFor={name}>{title}</label>
      <div className="radio-group">
        {options.map((option, index) => {
          return (<label key={name + index}>
            <input type="radio"
              name={name}
              value={option}
              checked={selectedOption === option}
              onChange={onChange} /> {option}
          </label>
          );
        })}
      </div>
    </FormItem>
  );
};

const InputComponent = (
  { title, name, errors = [], onChange, onBlur, isRequired = true }
) => {
  return (
    <FormItem>
      <label htmlFor={name}>{title}</label>
      <input className="bs-ui-input"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur} required={isRequired}/>
      <div className="errors">
        {errors.map( (error, index) => <span key={index}>{error}</span>)}
      </div>
    </FormItem>
  );
};

const FormItem =({children}) => {
  return (
    <div className="form-item">
      {children}
    </div>
  );
};

const AddRemoveComponent = ({title}) => {
  return (
    <FormItem>
      <label>{title}</label>
      <button className="btn-adicionar">+ Adicionar</button>
      <button className="btn-remover">X Remover</button>
    </FormItem>
  );
};
