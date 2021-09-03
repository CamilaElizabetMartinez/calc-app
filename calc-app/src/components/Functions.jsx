import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';
import './App.css'

const Functions = ({onContenClear, onDelete}) => (
  <section className="functions">
    <Button text="clear" clickHandler={onContenClear}></Button>
    <Button text="&larr;" clickHandler={onDelete}></Button>

  </section>
)

Functions.propTypes ={
  onContenClear: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired
}
export default Functions