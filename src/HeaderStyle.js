/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import {Checkbox, FormItem} from "./FormComponents";

export function HeaderStyle({name, onChange, selectedOptions}) {

  const _onChange = function(e) {
    let value = {
      top: selectedOptions.top,
      bottom: selectedOptions.bottom,
      right: selectedOptions.right,
      left: selectedOptions.left
    };
    value[e.target.value] = e.target.checked;
    onChange({ target: { name, value } });
  };

  return (
    <FormItem>
      <label className="bs-ui-input__label">Destaque</label>
      <label className="bs-ui-checkbox">
        <Checkbox className="header-style"
          name="header-style"
          value="top"
          onChange={_onChange}
          isChecked={selectedOptions.top}/>TOP
      </label>
      <label className="bs-ui-checkbox">
        <Checkbox className="header-style"
          name="header-style"
          value="bottom"
          onChange={_onChange}
          isChecked={selectedOptions.bottom} />BOTTOM
      </label>
      <label className="bs-ui-checkbox">
        <Checkbox className="header-style"
          name="header-style"
          value="right"
          onChange={_onChange}
          isChecked={selectedOptions.right} />RIGHT
      </label>
      <label className="bs-ui-checkbox">
        <Checkbox className="header-style"
          name="header-style"
          value="left"
          onChange={_onChange}
          isChecked={selectedOptions.left} />LEFT
      </label>
    </FormItem>
  );
}
