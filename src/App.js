import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Dashboard from "./Containers/UserDetail";
import NavBar from "./Layouts/Navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
   Lấy tất cả các nhân viên trong công ty: (endpoint)
    GET /users  should
    GET /getUsers should not

    GET users/{id} 
    GET /users/detail/{id}  

    DELETE /users/{id}
    
    GET & POST

    fetch(url)

    PUT & PATCH
*/
{
  /* <Route exact path="/">
            <Home />
          </Route> */
}
{
  /* <Route path="/" exact render={() => <Home />} /> */
}
