import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Counter: constructor");
  }

  onDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  onIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Shallow Comparison => So sanh object for...of key
  /*
    loahad
    state: {
        name: "hung",
        age: 22,
        info: {
            address: "",
            phoneNumber:"",
            subInfo
        }
    }
  */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      return true;
    }

    return false;
  }

  render() {
    console.log("Counter: render");
    return (
      <div>
        <button onClick={this.onDecrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.onIncrease}>+</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("Counter: Mount");
  }

  componentDidUpdate() {
    console.log("Counter: Update");
  }

  componentWillUnmount() {
    console.log("Counter: Unmount");
  }
}

export default Counter;
