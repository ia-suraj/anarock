import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";
/* import "./Partners.css"; */

import partners1 from "../../assets/images/partners1.jpg";
import partners2 from "../../assets/images/partners2.jpg";
import partners3 from "../../assets/images/partners3.jpg";
import partners4 from "../../assets/images/partners4.jpg";
import testimonials1 from "../../assets/images/testimonials1.jpg";

export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      partners: [
        {
          id: 1,
          img_src: partners1
        },
        {
          id: 2,
          img_src: partners2
        },
        {
          id: 3,
          img_src: partners3
        },
        {
          id: 4,
          img_src: partners4
        }
      ],
      testimonial: [
        {
          id: 1,
          name: "VIKAS OBEROI",
          company: "Oberoi Realty",
          details: `ANAROCK has skyrocketed in a short span of time to become a leading property consulting company.`,
          img_src: testimonials1,
          link_url: ""
        },
        {
          id: 2,
          name: "VIKAS OBEROI",
          company: "Oberoi Realty2",
          details: `ANAROCK has skyrocketed in a short span of time to become a leading property consulting company.`,
          img_src: testimonials1,
          link_url: ""
        },
        {
          id: 3,
          name: "VIKAS OBEROI",
          company: "Oberoi Realty3",
          details: `ANAROCK has skyrocketed in a short span of time to become a leading property consulting company.`,
          img_src: testimonials1,
          link_url: ""
        },
        {
          id: 4,
          name: "VIKAS OBEROI",
          company: "Oberoi Realty4",
          details: `ANAROCK has skyrocketed in a short span of time to become a leading property consulting company.`,
          img_src: testimonials1,
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
    const partners = this.state.partners;
    const testimonial = this.state.testimonial;

    return (
      <section className="wrapper partners_testimonials">
        <div className="partners">
          <h2 className="h2 side-bar">partners</h2>
          <div className="wrappper partnersLogo">
            <ul>{this.setMyPartners()}</ul>
          </div>
        </div>
        <div className="testimonials">
          <h2 className="h2 side-bar">testimonials</h2>
          <div className="testimonialsWrap">
            <Slider className="wrapper testimonials_Slider" {...settings}>
              {this.setMyTestimonials()}
            </Slider>
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

  setMyPartners() {
    var partners = [];
    var partners_list = "";
    if (this.props.mypartnerdata) {
      partners_list = this.props.mypartnerdata;
    }
    $(partners_list).each(function(index) {
      partners.push(
        <li key={index}>
          <span>
            <img src={partners_list[index]["image-url"]} alt="" />
          </span>
        </li>
      );
    });
    return partners;
  }
  setMyTestimonials() {
    var testimonials = [];
    var testimonials_list = "";
    if (this.props.mytestimonialdata) {
      testimonials_list = this.props.mytestimonialdata;
    }
    $(testimonials_list).each(function(index) {
      testimonials.push(
        <div className="colWrap" key={index}>
          <div className="wrapper imgContent">
            <span className="imgWrap">
              <img src={testimonials_list[index]["image-url"]} alt="" />
            </span>
            <h2 className="h2 nameWrap">
              <abbr>{testimonials_list[index]["name"]}</abbr>
              <span>{testimonials_list[index]["job"]}</span>
            </h2>
          </div>
          <p>{testimonials_list[index]["shortdesc"]}</p>
        </div>
      );
    });
    return testimonials;
  }
}
