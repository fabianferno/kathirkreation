import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Index from "./pages/Index";
import Error404 from "./pages/404";


import './App.css';

import AnimatedNavbar from 'animated-navbar';


export default class App extends Component {
  AnimatedNavbar.init({
    'header' => '.header'
});
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

