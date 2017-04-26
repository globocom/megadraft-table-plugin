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

  const _cssRule = function() {
    const modalClass = ".table-manager-modal";
    if(selectedOptions.top) {
      return modalClass + " .table-row:first-child { font-weight: bold;}";
    }
    else if(selectedOptions.bottom) {
      return modalClass + " .table-row:last-child { font-weight: bold;}";
    }
    else if(selectedOptions.left) {
      return modalClass + " .table-row td:first-child { font-weight: bold;}";
    }
    else if(selectedOptions.right) {
      return modalClass + " .table-row td:last-child { font-weight: bold;}";
    }
    else {
      return "";
    }
  };

  return (
    <div>
      <FormItem>
        <label className="bs-ui-input__label">Destaque</label>
        {options.map(option => {
          return (<label key={option} className="bs-ui-checkbox bs-ui-checkbox--small">
            <Checkbox className="header-style"
              name="header-style"
              value={option}
              onChange={_onChange}
              isChecked={selectedOptions[option]} />
            <HighlightIcon className={`header-style--${option}`} />
          </label>);
        })}

      </FormItem>
      <style type="text/css" >{_cssRule()}</style>
    </div>

  );
}
