import React from 'react';
import axios from 'axios';
import BubbleGrid from './BubbleGrid';
import Search from './Search';
import Results from './Results';
import { collectionModifier } from '../../../../helpers/clientHelpers';
import Modal from './Modal';

import '../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      placeData: {
        name: 'Some cool Place',
        img: 'http://3.bp.blogspot.com/-HqI4ArpBe0Y/VN81CLNpEAI/AAAAAAAABkk/mb5yFx5Ng9Y/s1600/feed-me.jpg',
      },
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
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getPlace() {
    const { userPref } = this.state;
    axios.get('/places', {
      params: {
        categories: userPref,
      },
    })
      .then((response) => {
        const placeDatas = {
          name: response.data.name,
          img: response.data.image_url,
        };
        this.showModal();
        this.setState({
          placeData: placeDatas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showModal() {
    this.setState({ showResults: true });
  }

  hideModal() {
    this.setState({ showResults: false });
  }

  userChoiceHandler(category) {
    this.state.userPref = this.state.userPref.concat([category]);
    this.state.collection[category] = false;
    this.setState({});
  }

  render() {
    return (
      <div>
        <div>
          <Modal show={this.state.showResults} handleClose={this.hideModal} placeData={this.state.placeData} />
        </div>
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
