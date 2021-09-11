import React, { Component } from "react";
import "./App.css";
import CircleClass from "./CustomHooks/CircleClass";
import CircleFunction from "./CustomHooks/CircleFunction";
import DemoUseEffect from "./DemoHooks/DemoUseEffect";
import DemoUseState from "./DemoHooks/DemoUseState";

class App extends Component {
  state = {
    isSearch: false,
  };

  onSearchChange = (value) => {
    this.setState({
      isSearch: true,
    });
  };
  render() {
    return (
      <div>
        <p>AppJS here</p>
        {/* <DemoUseState /> */}
        {/* <DemoUseEffect onSearchChange={this.onSearchChange} /> */}
        <CircleClass />
        <CircleFunction />
      </div>
    );
  }
}

export default App;
