import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "../../pages/HomePage";
import BlogListing from "../../pages/bloglisting";
import AboutUs from "./../../pages/aboutus";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={BlogListing} />
        <Route path="/aboutus" component={AboutUs} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    );
  }
}
