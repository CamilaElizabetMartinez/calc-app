import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

const Functions = ({onContenClear, onDelete}) => (
  <section className="functions">
    <Button type="button-long-text" text="clear" clickHandler={onContenClear}/>
    <Button type="" text="&larr;" clickHandler={onDelete}/>
  </section>
)

Functions.propTypes = {
  onContenClear: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired
}
export default Functions 