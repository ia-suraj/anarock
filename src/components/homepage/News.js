import React, { Component } from "react";
import Slider from "react-slick";
import Cta from "../global/cta";
import OverlayPropertyBox from "../global/overlaypropertybox";
import BasicDataBox from "../global/basicdatabox";
import PersonnelBox from "../global/personnelbox";
import { Bootstrap, Grid, Row, Col } from "react-bootstrap";
import $ from "jquery";

/* import "./News.css"; */

import bignews1 from "../../assets/images/bigNews1.jpg";
import bignews2 from "../../assets/images/bigNews2.jpg";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      big_news: [
        {
          id: 1,
          date: "September 11, 2018",
          content:
            "Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri",
          img_src: bignews1,
          link_url: ""
        },
        {
          id: 2,
          date: "September 12, 2018",
          content: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri
            Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          img_src: bignews2,
          link_url: ""
        }
      ],
      featured_news: [
        {
          id: 1,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        },
        {
          id: 2,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        },
        {
          id: 3,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        },
        {
          id: 4,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        },
        {
          id: 5,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        },
        {
          id: 6,
          date: "September 20, 2018",
          details: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          link_url: ""
        }
      ]
    };
  }

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
    const bignews = this.state.big_news;
    const featurednews = this.state.featured_news;
    return (
      <section className="wrapper big_featured_News marginTopBottom80">
        <div className="container">
          <div className="bigNews">
            <h2 className="h2 side-bar marginBottom50">Big News</h2>
            <div className="innerWrap">
              <Slider className="bigNews_Slider" {...settings}>
                {this.setMyNews("bignews")}
              </Slider>
            </div>
          </div>
          <div className="featuredNews">
            <h2 className="h2 side-bar">FEATURED NEWS</h2>
            <div className="wrapper allNews">{this.setMyNews("fnews")}</div>
            <a href="javascript:void(0)" className="knowmore_Btn" tabIndex="0">
              <span>View</span>
              <span>All</span>
              <span>
                <abbr className="plusWrap" />
              </span>
            </a>
          </div>
        </div>
        {/*  <Cta ctaType="view-all" myTarget="abc.html" myClasses="" />
        <PersonnelBox
          personnelName="Anuj Puri"
          imgSrc={bignews1}
        /> */}
        {/* <OverlayPropertyBox
          propertyType="Retail"
          propertyName="Metro mall"
          propertyDetails="Ultimate shopping experience"
          imgSrc={bignews1}
          ctaLink="abc.html"
        />  */}
        {/*  <BasicDataBox
          basicDataHeadingPurple=""
          basicDataHeadingBlack="cbc"
          basicDataDate="01 march 2018"
          basicDataLineOne="line one"
          basicDataLineTwo="line two"
          ctaLink="abc.html"
        /> */}
      </section>
    );
  }
  setMyNews(newsType) {
    var bgnews = [],
      fnews = [];
    var mynews_list = "";
    if (this.props.mydata) {
      mynews_list = this.props.mydata;
    }
    $(mynews_list).each(function(index) {
      mynews_list[index].isbig === true
        ? bgnews.push(
            <div className="colWrap" key={index}>
              <img src={mynews_list[index]["image-url"]} alt="" />
              <div className="wrapper contentWrap">
                <span className="date">{mynews_list[index]["date"]}</span>
                <h2 className="h2">{mynews_list[index]["shorttext"]}</h2>
                <a href={mynews_list[index]["know-url"]} className="arrowBtn" />
              </div>
            </div>
          )
        : fnews.push(
            <div className="colWrap" key={index}>
              <span className="date">{mynews_list[index]["date"]}</span>
              <p>{mynews_list[index]["shorttext"]}</p>
              <a href={mynews_list[index]["know-url"]} className="arrowBtn" />
            </div>
          );
    });
    if (newsType === "bignews") {
      return bgnews;
    } else {
      return fnews;
    }
  }
}
