import React, { Component } from "react";
import Services from "../components/homepage/Services";
import News from "../components/homepage/News";
import Research from "../components/homepage/Research";
import Project from "../components/homepage/Project";
import Partners from "../components/homepage/Partners";
import Social from "../components/homepage/Social";
import Banner from "../modules/banner/Banner";
import axios from "axios";

class Home extends Component {
  state = {
    homecontent: []
  };
  render() {
    return (
      <div>
        <Banner mydata={this.state.homecontent.spotlight} />
        <Services mydata={this.state.homecontent.services} />
        <News mydata={this.state.homecontent.news} />
        <Research mydata={this.state.homecontent.reasearch} />
        <Project mydata={this.state.homecontent.project} />
        <Partners
          mytestimonialdata={this.state.homecontent.testimonials}
          mypartnerdata={this.state.homecontent.partners}
        />
        <Social myImage={this.state.homecontent.lifeatanarock} />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`http://livestaging.interactiveavenues.net/anarock/api/homepage.php`)
      .then(res => {
        const homecontent = res.data;
        console.log(homecontent);
        this.setState({ homecontent });
      });
  }
}
export default Home;
