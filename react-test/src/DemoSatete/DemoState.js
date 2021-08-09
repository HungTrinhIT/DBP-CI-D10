import React, { Component } from "react";

export default class DemoState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    // Thuooc tinh username
    this.username = "Hung Trinh";
  }

  // Login method
  onLogin = () => {
    // this.state.isAuthenticated = true;
    this.setState(
      {
        isAuthenticated: true,
      },
      () => {
        console.log("State sau khi set:", this.state.isAuthenticated);
      }
    );
  };

  // Logout method
  onLogout = () => {
    this.setState({
      isAuthenticated: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.isAuthenticated ? (
          <div>
            <p>Hello {this.username}</p>
            <button onClick={this.onLogout}>Log out</button>
          </div>
        ) : (
          <button onClick={this.onLogin}>Click me to log in</button>
        )}
      </div>
    );
  }
}
