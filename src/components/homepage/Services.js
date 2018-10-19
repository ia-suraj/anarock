import React, { Component } from "react";
/* import "./Services.css"; */
import icon1 from "../../assets/images/Residential.png";
import icon2 from "../../assets/images/Investment_Management.png";
import icon3 from "../../assets/images/Investment_Management.png";
import services1 from "../../assets/images/services1.jpg";

export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      services_list: [
        {
          id: 1,
          name: "Residential",
          img_src: icon1
        },
        {
          id: 2,
          name: "Investment Management",
          img_src: icon2
        },
        {
          id: 3,
          name: "Investment Banking",
          img_src: icon3
        }
      ],
      service_intro:
        "ANAROCK Property Consultants Pvt Ltd. is one of India’s leading real estate services company having diversified interest across real estate value chain. ",
      services_block_details: [
        {
          id: 1,
          name: "Strategic Partners",
          details: `With our Industry expertise and insights, we provide end to
        end solutions to help you achieve the goals.`,
          img_src: services1,
          box_link: ""
        },
        {
          id: 2,
          name: "Strategic Partners",
          details: `With our Industry expertise and insights, we provide end to
        end solutions to help you achieve the goals.`,
          img_src: services1,
          box_link: ""
        },
        {
          id: 3,
          name: "Strategic Partners",
          details: `With our Industry expertise and insights, we provide end to
        end solutions to help you achieve the goals.`,
          img_src: services1,
          box_link: ""
        }
      ]
    };
  }

  render() {
    const servicelist = this.state.services_list;
    const serviceblockdetails = this.state.services_block_details;
    const sbdlength = serviceblockdetails.length;

    return (
      <section className="wrapper servicesWrap">
        <div className="container">
          <h2 className="h2 marginTopBottom80">{this.state.service_intro}</h2>
        </div>
        <div className="wrapper innerServiceWrap">
          <div className="servicesList">
            <h2 className="h2 underlineOrange">Services</h2>
            <div className="wrapper innerList">
              <ul>
                {servicelist.map((s, index) => {
                  return index === 0 ? (
                    <li className="showSingle active" target={s.id} key={s.id}>
                      <a href="javascript:void(0)" className="service_type">
                        <img src={s.img_src} alt="" />
                        <span>{s.name}</span>
                      </a>
                    </li>
                  ) : (
                    <li className="showSingle" target={s.id} key={s.id}>
                      <a href="javascript:void(0)" className="service_type">
                        <img src={s.img_src} alt="" />
                        <span>{s.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div id="div1" className="targetDiv servicesColumn active">
            {serviceblockdetails.map((sbd, index) => {
              return index + 1 !== sbdlength ? (
                <div className="colWrap" key={sbd.id}>
                  <img src={sbd.img_src} alt="" className="serviceImg" />
                  <span className="overlayBlack" />
                  <h3 className="h3 stripContent">{sbd.name}</h3>
                  <div className="overlapContent">
                    <div className="innerWrap">
                      <img src="images/servicesIcon1.png" alt="" />
                      <h3 className="h3">{sbd.name}</h3>
                      <p>{sbd.details}</p>
                      <a href="javascript:void(0)" className="arrowBtn" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="colWrap colLast" key={sbd.id}>
                  <img src={sbd.img_src} alt="" className="serviceImg" />
                  <a href="javascript:void(0)" className="orangeOverlayContent">
                    <span className="innerContent">
                      <abbr>View All</abbr>
                      <em className="plusWrap" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
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
