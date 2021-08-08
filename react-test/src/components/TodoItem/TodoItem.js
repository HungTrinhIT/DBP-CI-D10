import React, { Component } from "react";

import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { title, isCompleted } = this.props.todo;
    const completeClass = isCompleted ? "complete" : "";
    return <p className={completeClass}>{title}</p>;
  }
}

export default TodoItem;

// Props
// State
// Data binding: one-way databinding
// Angular: two-ways data binding
