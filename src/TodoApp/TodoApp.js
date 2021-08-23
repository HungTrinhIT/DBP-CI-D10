import React, { Component } from "react";
import AddNewTodo from "./AddNewTodo";
import SearchTodo from "./SearchTodo";
import "./TodoApp.css";
import TodoList from "./TodoList";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      query: "",
    };
  }

  componentDidMount() {
    // Mô phỏng việc fetch API from backend
    const itemsFromBackend = [
      { id: 1, title: "Pay Bills", isCompleted: true },
      { id: 2, title: "@vue/cli vs create-react-app", isCompleted: false },
      { id: 3, title: "vue-router vs react-router", isCompleted: true },
      { id: 4, title: "redux vs vuex", isCompleted: false },
      { id: 5, title: "learn FBM Platform", isCompleted: false },
    ];

    this.setState({
      todos: itemsFromBackend,
    });
  }

  onAddTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  onDeleteTodo = (id) => {
    // Modify incompleted => false
    const updatedTodos = this.state.todos.map((todoItem) => {
      return todoItem.id === id
        ? {
            ...todoItem,
            isCompleted: true,
          }
        : todoItem;
    });

    // Set state => new todos
    this.setState({
      todos: updatedTodos,
    });
  };

  onQueryTodo = (query) => {
    this.setState({
      query,
    });
  };

  render() {
    const { todos, query } = this.state;

    return (
      <div className="container">
        <h1>Todo App here</h1>
        <SearchTodo onQueryTodo={this.onQueryTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.onDeleteTodo}
          query={query}
        />
        <AddNewTodo onAddTodo={this.onAddTodo} todos={todos} />
      </div>
    );
  }
}

export default TodoApp;

/*
    CRUD:
        C: Create => POST
        R: Read => GET 
        U: Update => PATCH/PUT
        D: Delete => DELETE
    
*/
