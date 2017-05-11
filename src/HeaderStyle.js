/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import {Checkbox, FormItem} from "./FormComponents";
import {HighlightIcon} from "./Icons";

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

  const _hasMaxSelectedInputs = function() {
    const values = Object.keys(selectedOptions).map(key => {
      return selectedOptions[key];
    });
    let count = 0;
    values.map(value => {
      if (value) { count++; }
    });
    if(count >= 2) {
      return true;
    }

    return false;
  };
  const _checkAndDisable = function() {
    options.map(option => {
      const input = document.querySelector("input.header-style[value="+ option + "]");
      if(input) {
        if(_hasMaxSelectedInputs() && !selectedOptions[option]) {
          input.disabled = true;
        }
        else {
          input.disabled = false;
        }
      }
    });

  };
  window.setTimeout(_checkAndDisable, 500);
  return (
    <FormItem>
      <label className="bs-ui-form-control__label" title="Linha e/ou coluna destacada de uma tabela">Destaque</label>
      <span className="jsonform-description" data-toggle="tooltip" title="Linha e/ou coluna destacada de uma tabela"></span>
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
    </FormItem>
  );
}
