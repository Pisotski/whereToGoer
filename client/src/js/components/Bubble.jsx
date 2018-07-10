import React from 'react';
import BubbleGrid from './BubbleGrid';

import '../../css/bubble.css';

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cuisine: ['Mexican', 'Italian', 'Asian', 'American', 'French'],
      'Type of Food': ['Meat', 'Fish', 'Poultry', 'Vegetarian', 'Vegan'],
      'Meals Served': ['Brunch', 'Lunch', 'Dinner', 'Late Night'],
      showOptions: false,
      bubbleSize: 0,
    };
    this.categoryHelper = this.categoryHelper.bind(this);
  }

  componentDidMount() {
    const bubbleSize = this.props.bubbleSize + 1;
    this.setState({
      bubbleSize: bubbleSize,
    })
  }

  categoryHelper() {
    this.props.userChoiceHandler(this.props.category);
    this.setState({
      showOptions: true,
    });
  }

  render() {
    const showHideElement = this.state.showOptions ? 'bubble-display-none' : `bubble-item-${this.state.bubbleSize}`;
    if (this.state.showOptions && this.state[this.props.category]) {
      return (
        <BubbleGrid bubbleSize={this.state.bubbleSize} collection={this.state[this.props.category]} userChoiceHandler={this.props.userChoiceHandler} />
      );
    }
    return (
      <div className={showHideElement} onClick={this.categoryHelper}>
        {this.props.category}
      </div>
    );
  }
}


export default Bubble;
