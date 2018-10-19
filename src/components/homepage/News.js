import React, { Component } from "react";
import Slider from "react-slick";

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
            <h2 className="h2 underlineOrange marginBottom50">Big News</h2>
            <div className="innerWrap">
              <Slider className="bigNews_Slider" {...settings}>
                {bignews.map(bn => (
                  <div className="colWrap" key={bn.id}>
                    <img src={bn.img_src} alt="" />
                    <div className="wrapper contentWrap">
                      <span className="date">{bn.date}</span>
                      <h2 className="h2">{bn.content}</h2>
                      <a href="javascript:void" className="arrowBtn" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="featuredNews">
            <h2 className="h2 underlineOrange">FEATURED NEWS</h2>
            <div className="wrapper allNews">
              {featurednews.map(fn => (
                <div className="colWrap" key={fn.id}>
                  <span className="date">{fn.date}</span>
                  <p>{fn.details}</p>
                  <a href="javascript:void(0)" className="arrowBtn" />
                </div>
              ))}
            </div>
            <a href="javascript:void(0)" className="knowmore_Btn" tabIndex="0">
              <span>View</span>
              <span>All</span>
              <span>
                <abbr className="plusWrap" />
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
