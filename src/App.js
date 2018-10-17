import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/* Modules Import */
import AppHeader from "./modules/header/AppHeader";
import Banner from "./modules/banner/Banner";
import MainContent from "./modules/maincontent/MainContent";
import AppFooter from "./modules/footer/AppFooter";
import "./assets/css/main.css";
import { ReactDOM } from "react-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Banner />
        <MainContent />
        <AppFooter />
        <iframeVideo />
        <em className="verticleLine firstLine" />
        <em className="verticleLine secondLine" />
        <em className="verticleLine thirdLine" />
        <em className="verticleLine fourthLine" />
        <em className="verticleLine fifthLine" />
        <em className="verticleLine sixLine" />
      </div>
    );
  }

  handleScroll = () => {
    var ReactDOM = require("react-dom");
    var navbar = ReactDOM.findDOMNode(this.refs.navbar);
    var windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop >= 3) {
      navbar.classList.add("navbar-fixed-top");
    } else {
      navbar.classList.remove("navbar-fixed-top");
    }
  };

  /* componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  } */
}

class iframeVideo extends Component {
  render() {
    return (
      <div>
        <div class="videoPopupWrapper" />
        <div class="popupVideo">
          <div id="iframeVideo" />
          <span class="closeVideo" />
        </div>
      </div>
    );
  }
}
