import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onDeleteTodo, query } = this.props;
    return (
      <div>
        <h3>TO DO</h3>
        <ul>
          {todos.length > 0 ? (
            todos
              .filter((todoItem) => {
                return todoItem.title
                  .toLowerCase()
                  .includes(query.toLowerCase());
              })
              .map((todoItem) => {
                return (
                  <TodoItem
                    todoItem={todoItem}
                    key={todoItem.id}
                    onDeleteTodo={onDeleteTodo}
                  />
                );
              })
          ) : (
            <p>Add your tasks!!!</p>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;
