import React, { Component } from "react";

export default class DemoForm extends Component {
  state = {
    username: "",
    password: "",
  };

  //   ES6: Object Literals
  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  //   onUsernameChange = (e) => {
  //     const { name, value } = e.target;
  //     this.setState({
  //       username: value,
  //     });
  //   };

  //   onPasswordChange = (e) => {
  //     const { name, value } = e.target;
  //     this.setState({
  //       password: value,
  //     });
  //   };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // Goi API them san pham vao gio hang
    console.log(this.state);
    

  };
  render() {
    return (
      <div>
        <h1>Demo form</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              onChange={this.onChangeHandler}
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              onChange={this.onChangeHandler}
              value={this.state.password}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
