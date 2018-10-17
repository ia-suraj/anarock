import React, { Component } from "react";

import "./Project.css";

import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      project_box: [
        {
          id: 1,
          type: "Residential",
          title: `Amantra`,
          content: `The crown jewel of the New BKC`,
          img_src: project1,
          link_url: ""
        },
        {
          id: 2,
          type: "Retail",
          title: `Amantra`,
          content: `The crown jewel of the New BKC`,
          img_src: project2,
          link_url: ""
        },
        {
          id: 3,
          type: "Hospitality",
          title: `Amantra`,
          content: `The crown jewel of the New BKC`,
          img_src: project3,
          link_url: ""
        },
        {
          id: 4,
          type: "Investment Management",
          title: `Amantra`,
          content: `The crown jewel of the New BKC`,
          img_src: project4,
          link_url: ""
        }
      ]
    };
  }

  render() {
    const projectbox = this.state.project_box;

    return (
      <section className="wrapper projectsWrap marginTopBottom80">
        <div className="container">
          <h2 className="h2 underlineOrange">projects</h2>
        </div>
        {projectbox.map((rs, index) => {
          return index === 0 ? (
            <div className="colWrap40" key={rs.id}>
              <div className="wrapper innerContent">
                <img src={rs.img_src} alt="" className="projectImg" />
                <span className="projectType">{rs.type}</span>
                <div className="overlapContent">
                  <h2 className="h2">{rs.title}</h2>
                  <p>{rs.content}</p>
                  <a href="javascript:void(0)" className="arrowBtn" />
                </div>
              </div>
            </div>
          ) : (
            <div className="colWrap20" key={rs.id}>
              <div className="wrapper innerContent">
                <img src={rs.img_src} alt="" className="projectImg" />
                <span className="projectType">{rs.type}</span>
                <div className="overlapContent">
                  <h2 className="h2">{rs.title}</h2>
                  <p>{rs.content}</p>
                  <a href="javascript:void(0)" className="arrowBtn" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
