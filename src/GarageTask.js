import React from 'react';

import './styles.css';

/* 
 / Because HTML form elements naturally keep some internal state,
 / they work a little differently in React: controlled components 
*/

function GarageTask(props) {
  return (
    <main className="task-item">
      <form>
        <input type="checkbox" checked={props.task.completed} />
        <label>{props.task.text}</label>
      </form>
    </main>
  );
}
export default GarageTask;
