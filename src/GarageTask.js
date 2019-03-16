import React from 'react';

import './styles.css';

/* 
 / Because HTML form elements naturally keep some internal state,
 / they work a little differently in React: controlled components 
*/

function GarageTask(props) {
  const completedTask = {
    fontStyle: 'italic',
    color: '#c4c3c2',
    textDecoration: 'line-through',
  };
  return (
    <main className="task-item">
      <form>
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={() => props.handleChange(props.task.id)}
        />
        <label style={props.task.completed ? completedTask : null}>
          {props.task.text}
        </label>
      </form>
    </main>
  );
}
export default GarageTask;
