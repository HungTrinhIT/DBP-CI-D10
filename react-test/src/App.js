import "./App.css";
import React, { Component } from "react";
// import TodoList from "./components/TodoList";
// import DemoState from "./DemoSatete/DemoState";
// import Car from "./Car/Car";
import SmartphoneStore from "./SmartphoneStore/SmartstoreComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TodoList /> */}
        {/* <DemoState /> */}
        {/* <Car /> */}
        <SmartphoneStore />
      </div>
    );
  }
}

export default App;
