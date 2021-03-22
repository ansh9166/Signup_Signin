import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";

import Register from "./components/Register";




class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        
        <Route path="/Logout" component={Logout} />
        <Route path="/Register" component={Register} />
      </Switch>
    );
  }
}


export default App;
