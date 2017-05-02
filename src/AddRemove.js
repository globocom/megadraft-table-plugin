/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

import {FormItem} from "./FormComponents";
import {PlusIcon, CloseIcon} from "./Icons";

export function AddRemove({title, className, onAdd, onRemove}) {
  return (
    <FormItem className={className}>
      <label className="bs-ui-form-control__label">{title}</label>
      <button className="bs-ui-button bs-ui-button--small bs-ui-button--blue btn-add" onClick={onAdd}>
        <PlusIcon /> Adicionar
      </button>
      <button className="bs-ui-button bs-ui-button--small bs-ui-button--red btn-remove" onClick={onRemove}>
        <CloseIcon /> Remover
      </button>
    </FormItem>
  );
}
