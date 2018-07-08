import React from 'react';
import axios from 'axios';
import BubbleGrid from './BubbleGrid';
import Search from './Search';
import { collectionModifier } from '../../../../helpers/clientHelpers';

import '../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPref: [],
      collection: {
        'Meals Served': true,
        'Type of Food': true,
        Pizza: true,
        Cuisine: true,
        HackReactor: true,
      },
    };
    this.userChoiceHandler = this.userChoiceHandler.bind(this);
    this.getPlace = this.getPlace.bind(this);
  }

  getPlace() {
    const { userPref } = this.state;
    axios.get('/places', {
      params: {
        categories: userPref,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  userChoiceHandler(category) {
    this.state.userPref = this.state.userPref.concat([category]);
    this.state.collection[category] = false;
    console.log(this.state.userPref, this.state.collection);
    this.setState({
    });
  }

  render() {
    return (
      <div>
        <div id="logo">
        WhereToGoer
        </div>
        <div>
          <BubbleGrid collection={collectionModifier(this.state.collection)} userChoiceHandler={this.userChoiceHandler} />
        </div>
        <div>
          <Search getPlace={this.getPlace} />
        </div>
      </div>
    );
  }
}

export default App;
