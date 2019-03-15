import React from 'react';

import './styles.css';

function GarageTask(props) {
  return (
    <main className="task-item">
      {/* Because HTML form elements naturally keep some internal
      state, they work a little differently in React: controlled
      components */}
      <form>
        <input type="checkbox" checked={props.task.completed} />
        <label>{props.task.text}</label>
      </form>
    </main>
  );
}
export default GarageTask;
