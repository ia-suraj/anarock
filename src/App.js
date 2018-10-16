import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/* Modules Import */
import AppHeader from "./modules/header/AppHeader";
import Banner from "./modules/banner/Banner";
import MainContent from "./modules/maincontent/MainComponent";
import AppFooter from "./modules/footer/AppFooter";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Banner />
        <AppFooter />
      </div>
    );
  }
}

export default App;
