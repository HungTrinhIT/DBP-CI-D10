// Class Component is class
import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";

export class TodoList extends Component {
  // Constructor
  constructor() {
    super();

    this.todos = [
      {
        title: "Học React",
        isCompleted: false,
      },
      {
        title: "Học Angular",
        isCompleted: true,
      },
      {
        title: "Học VueJS",
        isCompleted: false,
      },
      {
        title: "Học C++",
        isCompleted: true,
      },
    ];
  }
  onClickHandler = (param) => {
    alert(`Hello ${param}`);
  };
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <button onClick={() => this.onClickHandler("abc")}>Click me</button>

        {this.todos.map((todo, index) => {
          return <TodoItem todo={todo} key={index} />;
        })}
      </div>
    );
  }
}

export default TodoList;

// constructor => render
//props
