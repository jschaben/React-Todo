import React from 'react';
import data from "./components/data";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

let error = 0;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      taskList: data,
      error: error
      
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  finishTask = id => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (id === item.id) {
          console.log("clicked!", item.completed);
          return {
            ...item,
            completed: !item.completed 
          };
        }
        return item;
      })
    });
  };

  addTask = taskText => {
    let testTask = this.state.taskList.filter(item => {
      return item.task === taskText;
    });
    
    if (testTask.length > 0) {
      this.setState({ error: 1 }); 
    } else {
      const newTask = {
        task: taskText,
        completed: false,
        id: Date.now()
      };

      this.setState({
        taskList: [...this.state.taskList, newTask],
        error: 0
      });
    }
  };

  clearTask = id => {
    this.setState({
      taskList: this.state.taskList.filter(item => {
        return item.completed === false;
      })
    });
  };
  
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1> Things To Do</h1>
      </div>
      <br />
      <div className="list-body">
        <TodoList
          taskList={this.state.taskList}
          finishTask={this.finishTask}
        />
        <br />
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
        {/* <TodoError error={this.state.error} /> */}
      </div>
    </div>
    
    );
  }
}

export default App;
