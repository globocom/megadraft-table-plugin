/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

import {FormItem} from "./FormComponents";

export function AddRemove({title, onAdd, onRemove}) {
  return (
    <FormItem>
      <label>{title}</label>
      <button className="btn-add" onClick={onAdd}>+ Adicionar</button>
      <button className="btn-remove" onClick={onRemove}>X Remover</button>
    </FormItem>
  );
}
