import React from "react";
import "./Button.scss";
const Button = ({ secondary, text, onclick, style }) => {
  return (
    <button
      onClick={onclick}
      className={secondary ? "button secondary" : "button primary"}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
