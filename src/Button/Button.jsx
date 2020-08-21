import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button className="Button">
    {props.buttonName}
  </button>
);

export default Button;