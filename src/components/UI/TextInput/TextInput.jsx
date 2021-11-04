import React from 'react';
import s from "./TextInput.module.css";

const TextInput = ({ label, onChange, name, value}) => {
 
  return (
    <div className={s.form_item}>
      <input type="text" placeholder={label} onChange={onChange} value={value} name={name ? name : ""} className={s.form_input} required />
    </div>
  );
}
export default TextInput;