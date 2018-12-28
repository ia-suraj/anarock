import React, { Component } from "react";

/* import "./Project.css"; */

import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import $ from "jquery";

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
          <h2 className="h2 side-bar">projects</h2>
        </div>
        {this.setMyProjects()}
      </section>
    );
  }
  setMyProjects() {
    var projects = [];
    var proj_list = "";
    if (this.props.mydata) {
      proj_list = this.props.mydata;
    }
    $(proj_list).each(function(index) {
      index === 0
        ? projects.push(
            <div className="colWrap40" key={index}>
              <div className="wrapper innerContent">
                <img
                  src={proj_list[index]["image-url"]}
                  alt=""
                  className="projectImg"
                />
                <span className="projectType">{proj_list[index]["cat"]}</span>
                <div className="overlapContent">
                  <h2 className="h2">{proj_list[index]["title"]}</h2>
                  <p>{proj_list[index]["shorttext"]}</p>
                  <a href={proj_list[index]["know-url"]} className="arrowBtn" />
                </div>
              </div>
            </div>
          )
        : projects.push(
            <div className="colWrap20" key={index}>
              <div className="wrapper innerContent">
                <img
                  src={proj_list[index]["image-url"]}
                  alt=""
                  className="projectImg"
                />
                <span className="projectType">{proj_list[index]["cat"]}</span>
                <div className="overlapContent">
                  <h2 className="h2">{proj_list[index]["title"]}</h2>
                  <p>{proj_list[index]["shorttext"]}</p>
                  <a href={proj_list[index]["know-url"]} className="arrowBtn" />
                </div>
              </div>
            </div>
          );
    });
    return projects;
  }
}
