import React, { Component } from "react";
import "./circle.css";

const setIntervalColor = (interval, cb) => {
  return setInterval(() => {
    const newColor = Math.floor(Math.random() * 999999);
    cb(`#${newColor}`);
  }, interval);
};

class Circle extends Component {
  state = {
    color: "#000000",
  };

  componentDidMount() {
    this.intervalColor = setInterval(() => {
      const nextColor = Math.floor(Math.random() * 999999);
      this.setState({
        color: `#${nextColor}`,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalColor);
  }
  render() {
    return (
      <div
        class="circle"
        style={{
          background: this.state.color,
        }}
      ></div>
    );
  }
}
export default Circle;
