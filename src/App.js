import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import NavBar from "./Layouts/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            {routes.map(({ path, exact, component }) => (
              <Route exact={exact} path={path} render={() => component} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
