import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onclickOperation}></Button>
    <Button text="-" clickHandler={onclickOperation}></Button>
    <Button text="*" clickHandler={onclickOperation}></Button>
    <Button text="/" clickHandler={onclickOperation}></Button>
    <Button text="=" clickHandler={onclickEqual}></Button>
  </section>
);

MathOperation.propTypes = {
  onClickOperation: propTypes.func.isRequired,
  onClickEqual: propTypes.func.isRequired,
};

export default MathOperations;
