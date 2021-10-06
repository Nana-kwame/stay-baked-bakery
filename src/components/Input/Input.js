import React, { useState } from "react";
import './Input.scss';
const Input = ({ label, placeholder, onchange, value, type, multi }) => {
  return (
    <div className="input">
      <p className="input__label">{label}</p>

      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onchange}
        multiple={multi}
        className="input__box"
      />
    </div>
  );
};

export default Input;
