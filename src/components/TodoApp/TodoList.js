import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todoList, onDeleteTodo, query } = this.props;
    return (
      <div>
        <h3>Todo</h3>
        <ul>
          {todoList
            .filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((todoItem) => {
              return (
                <TodoItem
                  todoItem={todoItem}
                  key={todoItem.id}
                  onDeleteTodo={onDeleteTodo}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
