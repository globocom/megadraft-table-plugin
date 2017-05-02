/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import classNames from "classnames";

export function FormItem({children, isRequired = false, hasErrors = false, className = ""}) {
  const inputClassNames = classNames({
    "bs-ui-form-control": true,
    "bs-ui-form-control--required": isRequired,
    "bs-ui-form-control--error": hasErrors
  }, className);

  return (
    <div className={inputClassNames}>
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

export function Input({title, name, value, errors = [], onChange, onBlur, isRequired = true}) {
  return (
    <FormItem isRequired={isRequired} hasErrors={errors.length !== 0}>
      <label className="bs-ui-form-control__label" htmlFor={name}>{title}</label>
      <input className="bs-ui-form-control__field"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur} required={isRequired}/>
      <p className="bs-ui-form-control__field-error">
        {errors.map( (error, index) => <span key={index}>{error}</span>)}
      </p>
    </FormItem>
  );
}
