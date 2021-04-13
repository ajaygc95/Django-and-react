import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn-outline"];
const SIZES = ["btn--medium", "btn-large", "btn-mobile", "btn-wide"];
const COLOR = ["primary", "blue", "red", "green"];

export default Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {

    conts checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0]

    conts check = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0]

    conts checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};
