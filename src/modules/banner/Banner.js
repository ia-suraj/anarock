import React, { Component } from "react";
import "./Banner.css";
import $ from "jquery";

class Banner extends Component {
  render() {
    return (
      <section className="wrapper topBanner">
        <div className="wrapper topBannerSlider">
          <div className="wrapper colWrap">
            <img src="images/banner.jpg" alt="" className="bannerDesktopImg" />
            <div className="container">
              <div className="contentBox">
                <h1 className="h1">Values over value</h1>
                <p>
                  Ethics, Integrity, Transparency, Trust and Respect is our core
                  belief.
                </p>
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

          <div className="wrapper colWrap">
            <img src="images/banner2.jpg" alt="" className="bannerDesktopImg" />
            <div className="container">
              <div className="contentBox">
                <h1 className="h1">Values over value Values over value</h1>
                <p>
                  Ethics, Integrity, Transparency, Trust and Respect is our core
                  belief. Ethics, Integrity, Transparency, Trust and Respect is
                  our core belief.
                </p>
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
        </div>

        <em className="horizontalLine firstLine" />
        <em className="horizontalLine secondLine" />
        <em className="horizontalLine thirdLine" />
        <em className="horizontalLine fourthLine" />

        <em className="downArrow" />
      </section>
    );
  }
  componentDidMount() {}
}

export default Banner;
