/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

export function FormItem({children}) {
  return (
    <div className="bs-ui-input">
      {children}
    </div>
  );
}

export function Checkbox({name, value, isChecked, className, onChange}) {
  return (
    <input type="checkbox"
      className={className}
      name={name}
      checked={isChecked}
      value={value}
      onChange={onChange} />
  );
}

export function Input({title, name, errors = [], onChange, onBlur, isRequired = true}) {
  return (
    <FormItem>
      <label className="bs-ui-input__label" htmlFor={name}>{title}</label>
      <input className="bs-ui-input__field"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur} required={isRequired}/>
      <p className="bs-ui-input__field-error">
        {errors.map( (error, index) => <span key={index}>{error}</span>)}
      </p>
    </FormItem>
  );
}
