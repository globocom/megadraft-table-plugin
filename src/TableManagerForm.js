import React, { Component, PropTypes } from "react";

export default class TableManagerForm extends Component {

  static propTypes = {
    onTitleChange: PropTypes.func.isRequired,
    onSourceChange: PropTypes.func.isRequired,
    onHeaderStyleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="table-manager-modal__form">
        <FormItem>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" />
        </FormItem>

        <FormItem>
          <label htmlFor="header-style">Destaques</label>
          <input type="radio" name="header-style" value="top" />S
              <input type="radio" name="header-style" value="bottom" />I
              <input type="radio" name="header-style" value="right" /> LD
              <input type="radio" name="header-style" value="left" />LE
            </FormItem>

        <AddRemoveComponent title="Linhas" />

        <AddRemoveComponent title="Colunas" />

        <FormItem>
          <label htmlFor="source">Fonte</label>
          <input type="text" name="source" />
        </FormItem>

      </div>
    );
  }
}

class FormItem extends Component {
  render() {
    return (
      <div className="form-item">
        {this.props.children}
      </div>
    );
  }
}

class AddRemoveComponent extends Component {

  render() {
    return (
      <FormItem>
        <label>{this.props.title}</label>
        <button className="btn-adicionar">+ Adicionar</button>
        <button className="btn-remover">X Remover</button>
      </FormItem>
    );
  }
}