//  Change circle color after every 2000ms
import React, { Component } from "react";

class CircleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#268d39",
    };
  }

  componentDidMount() {
    this.colorInterval = setInterval(() => {
      const newColor = Math.floor(Math.random() * 999999);
      this.setState({
        color: `#${newColor}`,
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.colorInterval);
  }
  render() {
    return (
      <div
        className="circle"
        style={{
          backgroundColor: this.state.color,
        }}
      ></div>
    );
  }
}

export default CircleClass;
