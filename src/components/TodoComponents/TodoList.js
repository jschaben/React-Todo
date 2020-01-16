// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Task from "./Todo.js";

const TodoList = props => {
  return (
    <div className="todo-list">
      {/* make sure the whole list is printed to screen */}
      {props.taskList.map(task => {
        return <Task task={task} key={task.id} finishTask={props.finishTask} />;
      })}
    </div>
  );
};

export default TodoList;