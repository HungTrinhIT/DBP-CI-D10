import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import UserDetail from "./Containers/UserDeail";
class App extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const data = await axios.get(
      "https://api.github.com/search/users?q=hungtrinh"
    );
    this.setState({
      users: data.data,
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
