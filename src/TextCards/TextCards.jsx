import React from 'react';
import './TextCards.scss';

const TextCards = (props) => (
  <p className="TextCards">
    <img src={props.imgUrl} alt={props.name} />
    {props.text}
  </p>
);

export default TextCards;