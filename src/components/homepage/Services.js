import React, { Component } from "react";
import Slider from "react-slick";
/* import "./Services.css"; */
import icon1 from "../../assets/images/Residential.png";
import icon2 from "../../assets/images/Investment_Management.png";
import icon3 from "../../assets/images/Investment_Management.png";
import services1 from "../../assets/images/services1.jpg";
import $ from "jquery";

export default class Services extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    /* const servicelist = this.state.services_list;
    const serviceblockdetails = this.state.services_block_details;
    const sbdlength = serviceblockdetails.length; */

    var settings = {
      dots: false,
      infinite: false,
      arrows: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true
    };
    return (
      <section className="wrapper servicesWrap">
        <div className="container">
          <h2 className="h2 marginTopBottom80">{this.state.service_intro}</h2>
        </div>
        <div className="wrapper innerServiceWrap">
          <div className="servicesList">
            <h2 className="h2 side-bar">Services</h2>
            <div className="wrapper innerList">
              <ul>{this.setMyServicesList()}</ul>
            </div>
          </div>
          <div id="div1" className="targetDiv servicesColumn active">
            {this.setMyServiceBlocks()}
          </div>
        </div>
      </section>
    );
  }

  setMyServicesList() {
    var myservices_list = "";
    var ren = [];
    if (this.props.mydata) {
      var services = this.props.mydata;
      myservices_list = Object.keys(services);
    }
    $(myservices_list).each(function(index) {
      index === 0
        ? ren.push(
            <li
              className="showSingle active"
              target={index}
              key={index}
              data-myblock={myservices_list[index]}
              onClick={() => {
                this.setMyServiceBlocks(myservices_list[index]);
              }}
            >
              <a href="javascript:void(0)" className="service_type">
                {/* <img src={myservices_list[s].img_src} alt="" /> */}
                <span>{myservices_list[index]}</span>
              </a>
            </li>
          )
        : ren.push(
            <li
              className="showSingle"
              target={index}
              key={index}
              data-myblock={myservices_list[index]}
              onClick={() => {
                this.setMyServiceBlocks(myservices_list[index]);
              }}
            >
              <a href="javascript:void(0)" className="service_type">
                {/* <img src={s.img_src} alt="" /> */}
                <span>{myservices_list[index]}</span>
              </a>
            </li>
          );
    });
    return ren;
  }
  setMyServiceBlocks(x) {
    var myservices = "",
      firstservice = "",
      myxvalue = "",
      firstservices = "";
    var ren = [];
    if (this.props.mydata) {
      myservices = this.props.mydata;
      firstservices = Object.keys(myservices);
      firstservice = firstservices[0];

      x === "" || x === undefined || x === null
        ? (myxvalue = firstservice)
        : (myxvalue = x);
      if ($(".showSingle").length) {
        document.querySelectorAll(".showSingle").classList.remove("active");
        document
          .querySelectorAll('data-myblock=["' + myxvalue + '"]')
          .classList.add("active");
      }

      var aa = myservices[myxvalue];
      var amylistlength = aa.length;
      Object.keys(aa).forEach(item => {
        ren.push(
          parseInt(item) + 1 != amylistlength ? (
            <div className="colWrap" key={item}>
              <img src={aa[item]["image-url"]} alt="" className="serviceImg" />
              <span className="overlayBlack" />
              <h3 className="h3 stripContent">{aa[item].title}</h3>
              <div className="overlapContent">
                <div className="innerWrap">
                  <img src="images/servicesIcon1.png" alt="" />
                  <h3 className="h3">{aa[item].title}</h3>
                  <p>{aa[item].shorttext}</p>
                  <a href="javascript:void(0)" className="arrowBtn" />
                </div>
              </div>
            </div>
          ) : (
            <div className="colWrap colLast" key={item}>
              <img src={aa[item]["image-url"]} alt="" className="serviceImg" />
              <a href="javascript:void(0)" className="orangeOverlayContent">
                <span className="innerContent">
                  <abbr>View All</abbr>
                  <em className="plusWrap" />
                </span>
              </a>
            </div>
          )
        );
      });
      return ren;
    } else {
    }
  }

  componentDidMount() {
    var service_type_links = document.querySelectorAll(".showSingle");
    service_type_links.forEach(function(i, idx) {
      i.addEventListener("click", function() {
        service_type_links.forEach(function(item, e) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  }
}
