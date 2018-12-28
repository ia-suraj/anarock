import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import AppHeader from "./modules/header/AppHeader";
import Main from "./modules/maincontent/main";
import AppFooter from "./modules/footer/AppFooter";
import "./css/main.css";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import FAQ from "./pages/faq";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <FAQ />
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
                frameBorder="0"
                allowFullScreen
                title="anc"
                id="anarock_video"
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
