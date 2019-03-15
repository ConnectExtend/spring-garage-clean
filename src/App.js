import React, { Component } from 'react';

import './styles.css';

import Header from './Header';
import GarageTask from './GarageTask';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GarageTask />
      </div>
    );
  }
}

export default App;
