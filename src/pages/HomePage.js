import React, { Component } from "react";
import Services from "../components/homepage/Services";
import News from "../components/homepage/News";
import Research from "../components/homepage/Research";
import Project from "../components/homepage/Project";
import Partners from "../components/homepage/Partners";
import Social from "../components/homepage/Social";

class MainContent extends Component {
  render() {
    return (
      <div>
        <Services />
        <News />
        <Research />
        <Project />
        <Partners />
        <Social />
      </div>
    );
  }
}
export default MainContent;
