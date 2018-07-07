import React from 'react';
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
        Music: true,
        Cuisine: true,
        HackReactor: true,
      },
    };
    this.userChoiceHandler = this.userChoiceHandler.bind(this);
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
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
