import React from "react";
import propTypes from "prop-types";

//componente funcional
const Button = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default Button;
