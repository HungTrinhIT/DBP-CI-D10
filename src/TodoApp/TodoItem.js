import React, { Component } from "react";

class TodoItem extends Component {
  //   btnDeleteTodo = () => {
  //     this.props.onDeleteTodo(this.props.todoItem.id);
  //   };
  render() {
    const { id, title, isCompleted } = this.props.todoItem;
    return (
      <li className={isCompleted ? "done" : ""}>
        {title}
        {!isCompleted && (
          <button onClick={() => this.props.onDeleteTodo(id)}>Delete</button>
        )}
      </li>
    );
  }
}

export default TodoItem;
