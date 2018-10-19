import React, { Component } from "react";
import Slider from "react-slick";

/* import "./Research.css"; */

import researchnews1 from "../../assets/images/researchInsights.jpg";

export default class Research extends Component {
  constructor() {
    super();
    this.state = {
      research_slider: [
        {
          id: 1,
          date: "September 21, 2018",
          title: `Yelahanka, Bengaluru - A well-planned residential settlement with immense real estate growth potential`,
          content: `Yelahanka is home to many defence establishments such as CRPF training school...`,
          img_src: researchnews1,
          link_url: ""
        },
        {
          id: 2,
          date: "September 22, 2018",
          title: `Yelahanka, Bengaluru - A well-planned residential settlement with immense real estate growth potential`,
          content: `Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri
            Housing sales in NCR up 23% in April-June over previous quarter: Anuj Puri`,
          img_src: researchnews1,
          link_url: ""
        }
      ],
      research_boxes: [
        {
          id: 1,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
          link_url: ""
        },
        {
          id: 2,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
          link_url: ""
        },
        {
          id: 3,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
          link_url: ""
        },
        {
          id: 4,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
          link_url: ""
        },
        {
          id: 5,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
          link_url: ""
        },
        {
          id: 6,
          date: "September 20, 2018",
          details: `Delay in handover 5.76L homes of Rs.4.6L cr in seven largest cities, says ANAROCK Report`,
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
    const researchslider = this.state.research_slider;
    const researchboxes = this.state.research_boxes;

    return (
      <section className="wrapper researchInsights">
        <div className="researchInsights_Main">
          <h2 className="h2 underlineOrange">research and insights</h2>
          <Slider className="wrapper researchInsights_Slider" {...settings}>
            {researchslider.map(rs => (
              <div className="wrapper colWrap" key={rs.id}>
                <img src={rs.img_src} alt="" />
                <div className="wrapper innerContent">
                  <span className="date">{rs.date}</span>
                  <h2 className="h2">{rs.title}</h2>
                  <p>{rs.content}</p>
                  <a href="javascript:void(0)" className="arrowBtn" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="featuredNews">
          <div className="wrapper allNews">
            {researchboxes.map(rb => (
              <div className="colWrap" key={rb.id}>
                <span className="date">{rb.date}</span>
                <p>{rb.details}</p>
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
      </section>
    );
  }
}
