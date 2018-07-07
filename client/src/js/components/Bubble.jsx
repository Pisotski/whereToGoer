import React from 'react';
import '../../css/bubble.css';

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.categoryHelper = this.categoryHelper.bind(this);
  }

  categoryHelper() {
    this.props.userChoiceHandler(this.props.category);
  }

  render() {
    return (
      <div className="bubble-item" onClick={this.categoryHelper}>
        {this.props.category}
      </div>
    );
  }
}


export default Bubble;
