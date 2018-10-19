import React, { Component } from "react";
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

  /* componentDidMount() {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        that.setState({ bannerdetails: data });
      });
  }
 */
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
          {bannerdetails.map(b => (
            <div className="wrapper colWrap" key={b.id}>
              <img src={b.img_src} alt="" className="bannerDesktopImg" />
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
}

export default Banner;
