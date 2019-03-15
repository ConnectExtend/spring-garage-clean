import React from 'react';

import './styles.css';
import App from './App';

function GarageTask() {
  return (
    <main>
      <form className="task-list">
        <input type="checkbox" id="checkbox" />
        <label className="task-item" for="checkbox">
          Spray cleaner on cloth and wipe-down shelves, light
          switches, door jambs, door knobs, and window frames
        </label>
      </form>
    </main>
  );
}
export default GarageTask;
