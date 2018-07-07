import React from 'react';
import Bubble from './Bubble';

import '../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ['xyi'],
    };
  }

  render() {
    return (
      <div>
        <Bubble />
      </div>

    );
  }
}

export default App;
