import React, { Component } from 'react';

import './styles.css';
import garageData from './garageData';

import Header from './Header';
import GarageTask from './GarageTask';

/*
 / create a new array called garageTasks which is the result of 
 / mapping over the updatedTasks array
*/
/*
 / React requires a key prop, which is used to track 
 / which items have changed, are added, or are removed.
*/
/*
 / pass the handleChange method down to the GarageTask component and then,
 / in the GarageTask component, onChange will call method and pass in the id
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: garageData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };
    });
  }

  render() {
    const garageTasks = this.state.tasks.map(task => (
      <GarageTask
        key={task.id}
        task={task}
        handleChange={this.handleChange}
      />
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
