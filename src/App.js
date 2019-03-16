import React, { Component } from 'react';

import './styles.css';
import garageData from './garageData';

import Header from './Header';
import GarageTask from './GarageTask';

/*
 / create a new array called garageTasks which is the result of 
 / mapping over the original array of task objects
*/
/*
 / React requires a key prop, which is used to track 
 / which items have changed, are added, or are removed.
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: garageData,
    };
  }

  render() {
    const garageTasks = garageData.map(task => (
      <GarageTask key={task.id} task={task} />
    ));
    return (
      <div className="task-list">
        <Header />
        {garageTasks}
      </div>
    );
  }
}

export default App;
