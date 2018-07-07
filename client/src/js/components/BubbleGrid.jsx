import React from 'react';
import '../../css/bubble.css';
import Bubble from './Bubble';

const BubbleGrid = props => (
  <div className="bubble-container">
    {props.collection.map((category, index) => <Bubble key={index} category={category} userChoiceHandler={props.userChoiceHandler} />)}
  </div>
);

export default BubbleGrid;
