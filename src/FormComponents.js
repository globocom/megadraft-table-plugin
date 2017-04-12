import React from "react";

export function FormItem({children}) {
  return (
    <div className="form-item">
      {children}
    </div>
  );
}

export function Checkbox({name, value, isChecked, className, onChange}) {
  return (<input type="checkbox" className={className} name={name} checked={isChecked} value={value} onChange={onChange} />);
}

export function Input({title, name, errors = [], onChange, onBlur, isRequired = true}) {
  return (
    <FormItem>
      <label htmlFor={name}>{title}</label>
      <input className="bs-ui-input"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur} required={isRequired}/>
      <div className="errors">
        {errors.map( (error, index) => <span key={index}>{error}</span>)}
      </div>
    </FormItem>
  );
}