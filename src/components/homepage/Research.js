import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";

/* import "./Research.css"; */

export default class Research extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true
    };

    return (
      <section className="wrapper researchInsights">
        <div className="researchInsights_Main">
          <h2 className="h2 side-bar">research and insights</h2>
          <Slider className="wrapper researchInsights_Slider" {...settings}>
            {this.setMyResearch("bigres")}
          </Slider>
        </div>
        <div className="featuredNews">
          <div className="wrapper allNews">{this.setMyResearch("sres")}</div>
          <a href="javascript:void(0)" className="knowmore_Btn" tabIndex="0">
            <span>View</span>
            <span>All</span>
            <span>
              <abbr className="plusWrap" />
            </span>
          </a>
        </div>
      </section>
    );
  }
  setMyResearch(resType) {
    var bgres = [],
      sres = [];
    var myres_list = "";
    if (this.props.mydata) {
      myres_list = this.props.mydata;
    }
    $(myres_list).each(function(index) {
      myres_list[index].isbig === true
        ? bgres.push(
            <div className="wrapper colWrap" key={index}>
              <img src={myres_list[index]["image-url"]} alt="" />
              <div className="wrapper innerContent">
                <span className="date">{myres_list[index]["date"]}</span>
                <h2 className="h2">{myres_list[index]["title"]}</h2>
                <p>{myres_list[index]["shorttext"]}</p>
                <a href="javascript:void(0)" className="arrowBtn" />
              </div>
            </div>
          )
        : sres.push(
            <div className="colWrap" key={index}>
              <span className="date">{myres_list[index]["date"]}</span>
              <p>{myres_list[index]["shorttext"]}</p>
              <a href={myres_list[index]["know-url"]} className="arrowBtn" />
            </div>
          );
    });
    if (resType === "bigres") {
      return bgres;
    } else {
      return sres;
    }
  }
}
