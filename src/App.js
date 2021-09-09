import React, { Component } from "react";
import "./App.css";
import Circle from "./components/Circle";
import CircleHook from "./components/CircleHooks";

class App extends Component {
  render() {
    return (
      <div>
        <p>AppJS here</p>
        <Circle />
        <CircleHook />
      </div>
    );
  }
}

export default App;
