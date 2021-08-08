import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  // const isAuthenticated = true;

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

/**
 * Functional Programming
 * Top-down programing
 * Object-oriented programming (Es6)
 * Event-driven programming
 */

/*
  - ToDoWrapper
    - Header
    - TodoInput
    - TodoList
      + TodoItem
        + 
        + 
        + 
      + TodoItem
        +
        +
        +
      + TodoItem
      + TodoItem
    - TodoStatus
      + Button : all
      + Button: active
      + Button: completed
*/
