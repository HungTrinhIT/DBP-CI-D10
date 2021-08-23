import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todoItem, onDeleteTodo } = this.props;
    return (
      <li className={todoItem.complete ? "done" : ""}>
        {todoItem.title}
        {!todoItem.complete && (
          <button onClick={() => onDeleteTodo(todoItem.id)}>Delete</button>
        )}
      </li>
    );
  }
}

export default TodoItem;
