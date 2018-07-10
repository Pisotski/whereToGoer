import React from 'react';
import '../../css/bubble.css';

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cuisine: ['Mexican', 'Italian', 'Asian', 'American', 'French', 'HackReactor'],
      'Type of Food': ['Meat', 'Fish', 'Poultry', 'Vegetarian', 'Vegan', 'HackReactor'],
      'Meals Served': ['Brunch', 'Lunch', 'Dinner', 'Late Night'],
      showOptions: false,
    };
    this.categoryHelper = this.categoryHelper.bind(this);
  }

  categoryHelper() {
    this.props.userChoiceHandler(this.props.category);
  }
  
  render() {
    return (
      <div className="bubble-item-0" onClick={this.categoryHelper}>
          {this.props.category}
      </div>
    );
  }
}


export default Bubble;
