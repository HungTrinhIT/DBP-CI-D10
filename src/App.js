import React, { Component } from "react";
import "./App.css";
import Counter from "./DemoLifecycle/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCounter: true,
    };
    console.log("App: constructor");
  }

  onRemoveCounter = () => {
    this.setState({
      isShowCounter: false,
    });
  };

  render() {
    console.log("App: render");
    return (
      <div>
        <button onClick={this.onRemoveCounter}>Remove Counter</button>
        {/* {this.state.isShowCounter === true ? <Counter /> : null} */}
        {this.state.isShowCounter && <Counter />}
      </div>
    );
  }

  componentDidMount() {
    console.log("App: Mount");
  }
  componentDidUpdate() {
    console.log("App: Update");
  }
  componentWillUnmount() {
    console.log("App: Unmount");
  }
}

export default App;
