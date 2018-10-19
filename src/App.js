import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/* Modules Import */
import AppHeader from "./modules/header/AppHeader";
import Banner from "./modules/banner/Banner";
import MainContent from "./modules/maincontent/MainContent";
import AppFooter from "./modules/footer/AppFooter";
import "./assets/css/main.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Banner />
        <MainContent />
        <AppFooter />
        <IframeVideo />
        <em className="verticleLine firstLine" />
        <em className="verticleLine secondLine" />
        <em className="verticleLine thirdLine" />
        <em className="verticleLine fourthLine" />
        <em className="verticleLine fifthLine" />
        <em className="verticleLine sixLine" />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY === 0) {
      document.querySelector("#header").classList.remove("sticky-header");
    } else if (window.scrollY !== 0) {
      document.querySelector("#header").classList.add("sticky-header");
    }
  }
}

class IframeVideo extends Component {
  render() {
    return (
      <div>
        <div className="videoPopupWrapper">
          <div className="popupVideo">
            <div id="iframeVideo">
              <iframe
                src=""
                frameborder="0"
                allowfullscreen
                title="anc"
                id="anarock_video"
                frameborder="0"
                allowfullscreen
              />
              <span className="closeVideo" onClick={this.closethisvideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  closethisvideo = event => {
    document.querySelector(".videoPopupWrapper").classList.remove("active");
    document.getElementById("anarock_video").setAttribute("src", "");
  };
}
