import React, { Component } from "react";

export default class InnerBanner extends Component {
  render() {
    return (
      <section className="wrapper internaltopBanner aboutTopBanner">
        <div className="wrapper topBannerSlider">
          <div className="wrapper colWrap">
            <div
              className="parallax"
              style={{ backgroundImage: `url(${this.props.mybg})` }}
            >
              {this.props.bannerHeading && (
                <div className="container">
                  <div className="contentBox">
                    <h1 className="h1">{this.props.bannerHeading}</h1>
                    <p>{this.props.bannerText ? this.props.bannerText : ""}</p>
                  </div>
                </div>
              )}
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
  componentDidMount() {
    var parallax = document.querySelector(".parallax");

    window.addEventListener("scroll", function() {
      var scrolledHeight = window.pageYOffset,
        limit = parallax.offsetTop + parallax.offsetHeight;

      if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY =
          (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
      } else {
        parallax.style.backgroundPositionY = "0";
      }
    });
  }
}
