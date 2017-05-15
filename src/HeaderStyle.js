/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import {Checkbox, FormItem} from "./FormComponents";
import {HighlightIcon} from "./Icons";
import Tooltip from "./Tooltip";

export function HeaderStyle({name, onChange, selectedOptions}) {

  const options = ["top", "bottom", "right", "left"];

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
      <label className="bs-ui-form-control__label header-style__label" title="Linha e/ou coluna destacada de uma tabela">Destaque</label>
      <Tooltip/>
      <div>
        {options.map(option => {
          return (<label key={option} className="bs-ui-checkbox bs-ui-checkbox--small">
            <Checkbox className="header-style"
              name="header-style"
              value={option}
              onChange={_onChange}
              isChecked={selectedOptions[option]} />
            <HighlightIcon className={`header-style--${option} header-style-icon`} />
          </label>);
        })}
      </div>
    </FormItem>
  );
}
