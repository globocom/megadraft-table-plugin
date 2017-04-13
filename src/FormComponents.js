/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";
import classNames from "classnames";

export function FormItem({children, isRequired = false, hasErrors = false, className = ""}) {
  const inputClassNames = classNames(
    "bs-ui-input",
    className,
    {
      "bs-ui-input--required": isRequired,
      "bs-ui-input--error": hasErrors
    }
  );

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

export function Input({title, name, errors = [], onChange, onBlur, isRequired = true}) {
  return (
    <FormItem isRequired={isRequired} hasErrors={errors.length !== 0}>
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
