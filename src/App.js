import React, { Component } from 'react';

import './styles.css';
import garageData from './garageData';

import Header from './Header';
import GarageTask from './GarageTask';

function App() {
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

export default App;
