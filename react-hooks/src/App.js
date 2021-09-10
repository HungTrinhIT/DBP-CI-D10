import React, { Component } from "react";
import "./App.css";
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
        <DemoUseEffect onSearchChange={this.onSearchChange} />
      </div>
    );
  }
}

export default App;
