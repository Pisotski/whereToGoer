import React from 'react';
import '../../css/results.css';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="results-container">
        <img className="results-img" src={this.props.placeData.img} alt={this.props.placeData.name} />
        <div className="results-name">
          {this.props.placeData.name}
        </div>
      </div>
    );
  }
}
export default Results;
