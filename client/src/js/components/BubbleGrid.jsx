import React from 'react';
import '../../css/bubble.css';
import Bubble from './Bubble';

class BubbleGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cuisine: ['Mexican', 'Italian', 'Asian', 'American', 'French', 'HackReactor'],
      'Type of Food': ['Meat', 'Fish', 'Poultry', 'Vegetarian', 'Vegan', 'HackReactor'],
      'Meals Served': ['Brunch', 'Lunch', 'Dinner', 'Late Night'],
      showOptions: false,
      bubbleSize: this.props.bubbleSize,
    };
  }

  render() {
    return (
      <div className="bubble-container">
        {this.props.collection.map((category, index) => <Bubble key={index} category={category} userChoiceHandler={this.props.userChoiceHandler} bubbleSize={this.state.bubbleSize} />)}
      </div>
    );
  };
}

export default BubbleGrid;
