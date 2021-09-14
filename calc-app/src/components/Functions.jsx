import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Functions = ({ onContenClear, onDelete }) => (
  <section className="functions">
    <Button type="button-long-text" text="clear" clickHandler={onContenClear} />
    <Button text="&larr;" clickHandler={onDelete} />
  </section>
);

Functions.propTypes = {
  onContenClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Functions;
