import React, { Component } from "react";
import Cta from "../../components/global/cta";
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
    let bannerdetails1 = this.state.bannerdetails;
    return (
      <section className="wrapper topBanner">
        <Slider className="wrapper topBannerSlider" {...settings}>
          {bannerdetails1.map(b => (
            <div className="wrapper colWrap" key={b.id}>
              <img src={banner} alt="" className="bannerDesktopImg" />
              <div className="container">
                <div className="contentBox">
                  <h1 className="h1">{b.name}</h1>
                  <p>{b.detail}</p>
                  <a href="javascript:void(0)" className="knowmore_Btn">
                    <span>Know</span>
                    <span>More</span>
                    <span>
                      <abbr className="plusWrap" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <em className="horizontalLine firstLine" />
        <em className="horizontalLine secondLine" />
        <em className="horizontalLine thirdLine" />
        <em className="horizontalLine fourthLine" />

        <em className="downArrow" />
      </section>
    );
  }
  componentDidMount() {
    /* bannerdetails.map(b => {
      console.log(b);
    }); */
    document.querySelector(".downArrow").addEventListener("click", function(e) {
      const hash = document.querySelector(".servicesWrap").offsetTop - 50;
      console.log(hash);
      window.scrollTo({
        top: hash,
        behavior: "smooth"
      });
    });
    fetch("http://localhost:3000/json/bannerdetails.json")
      .then(r => r.json())
      .then(json => {
        // this.db = json;
        console.log(json);
        this.setState({ bannerdetails: json });
        /* const today = new SimpleData(json);
        var aaa = today.getDay();
        console.log(aaa); */
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
