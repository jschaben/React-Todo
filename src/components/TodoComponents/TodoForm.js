import React from "react";

import { Button, Form, Input } from "reactstrap";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  changeHandler = e => {
    this.setState({ todoText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoText);
    this.setState({ todoText: "" });
    console.log("props.error: ", this.error);
  };

  submitClear = e => {
    e.preventDefault();
    this.props.clearTask();
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          type="text"
          name="todoText"
          placeholder="New Task"
          value={this.state.todoText}
          onChange={this.changeHandler}
        />{" "}
        <Button type="submit">Add</Button>
        <br />
        <br />
        <Button onClick={this.submitClear}>Clear Completed</Button>
      </Form>
    );
  }
}

export default TodoForm;