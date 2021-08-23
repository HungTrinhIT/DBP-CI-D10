import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoApp from "./TodoApp/TodoApp";
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
