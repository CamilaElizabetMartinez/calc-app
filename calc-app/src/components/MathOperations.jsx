import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation}></Button>
    <Button text="-" clickHandler={onClickOperation}></Button>
    <Button text="*" clickHandler={onClickOperation}></Button>
    <Button text="/" clickHandler={onClickOperation}></Button>
    <Button text="=" clickHandler={onClickEqual}></Button>
  </section>
);

MathOperations.propTypes = {
  onClickOperation: propTypes.func.isRequired,
  onClickEqual: propTypes.func.isRequired,
};

export default MathOperations;
