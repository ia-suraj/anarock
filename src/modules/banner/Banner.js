import React, { Component } from "react";
import Cta from "../../components/global/cta";
import $ from "jquery";
/* import "./Banner.css"; */
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.jpg";

import Slider from "react-slick";

const bannerdetails = [
  {
    id: 1,
    name: "Values over value",
    detail:
      "Ethics, Integrity, Transparency, Trust and Respect is our core belief.",
    img_src: banner
  },
  {
    id: 1,
    name: "Values over value",
    detail:
      "Ethics, Integrity, Transparency, Trust and Respect is our core belief. Ethics, Integrity, Transparency, Trust and Respect is our core belief.",
    img_src: banner2
  }
];

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      bannerdetails: []
    };
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <section className="wrapper topBanner">
        <Slider className="wrapper topBannerSlider" {...settings}>
          {this.setBanner()}
        </Slider>

        <em className="horizontalLine firstLine" />
        <em className="horizontalLine secondLine" />
        <em className="horizontalLine thirdLine" />
        <em className="horizontalLine fourthLine" />

        <em className="downArrow" />
      </section>
    );
  }
  setBanner() {
    var b = [];
    if (this.props.mydata) {
      var a = this.props.mydata;
    }
    $(a).each(function(index) {
      b.push(
        <div className="wrapper colWrap" key={index}>
          <img
            src={a[index]["image-url"]}
            alt=""
            className="bannerDesktopImg"
          />
          <div className="container">
            <div className="contentBox">
              <h1 className="h1">{a[index].title}</h1>
              <p>{a[index].shorttext}</p>
              <a href="a[index]['know-url']" className="knowmore_Btn">
                <span>Know</span>
                <span>More</span>
                <span>
                  <abbr className="plusWrap" />
                </span>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return b;
  }
  componentDidMount() {
    document.querySelector(".downArrow").addEventListener("click", function(e) {
      const hash = document.querySelector(".servicesWrap").offsetTop - 50;
      window.scrollTo({
        top: hash,
        behavior: "smooth"
      });
    });
  }
}

class SimpleData {
  constructor(obj1) {
    this._one = obj1;
  }
  getDay() {
    return this._one[0];
  }
}

export default Banner;
