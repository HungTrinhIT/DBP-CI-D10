import React, { Component } from "react";
import TodoList from "./TodoList";
import "./TodoApp.css";
import AddNewTodo from "./AddNewTodo";
import SearchBar from "./SearchBar";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      query: "",
    };
  }

  componentDidMount() {
    const items_from_backend = [
      { id: 1, title: "Pay Bills", complete: true },
      { id: 2, title: "@vue/cli vs create-react-app", complete: false },
      { id: 3, title: "vue-router vs react-router", complete: true },
      { id: 4, title: "redux vs vuex", complete: false },
      { id: 5, title: "learn FBM Platform", complete: false },
    ];
    this.setState({
      todos: items_from_backend,
    });
  }
  onTaskItemAdded = (newTask) => {
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  onDeleteTodo = (id) => {
    const updatedTodos = this.state.todos.map((todoItem) => {
      return todoItem.id === id
        ? {
            ...todoItem,
            complete: true,
          }
        : todoItem;
    });

    this.setState({
      todos: updatedTodos,
    });
  };

  onQueryChange = (query) => {
    this.setState({
      query,
    });
  };
  render() {
    const { todos, query } = this.state;
    return (
      <div className="container">
        <SearchBar onQueryChange={this.onQueryChange} />
        <TodoList
          todoList={todos}
          onDeleteTodo={this.onDeleteTodo}
          query={query}
        />
        <AddNewTodo onTaskItemAdded={this.onTaskItemAdded} />
      </div>
    );
  }
}

export default TodoApp;
