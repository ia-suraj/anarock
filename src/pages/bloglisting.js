import React, { Component } from "react";
import BasicDataBox from "../components/global/basicdatabox";
import Cta from "../components/global/cta";
import InnerBanner from "../components/global/innerbanner";
import axios from "axios";

export default class BlogListing extends Component {
  state = {
    blogcontent: []
  };
  render() {
    console.log(this.state.blogcontent);
    return (
      <div>
        <InnerBanner
          mybg={
            this.state.blogcontent.length
              ? this.state.blogcontent[0]["image-url"]
              : ""
          }
        />
        <div className="bloglisting">
          <div className="container">
            {this.state.blogcontent.map((bl, index) => {
              return (
                <div className="row sectionmargin" key={index}>
                  <div className="col-md-6 col-sm-12 c-purple-block c-big-purple-block image-div c-left-top-purple-block">
                    <img src={bl["image-url"]} />
                  </div>
                  <div className="col-md-6 col-sm-12 content-box">
                    <BasicDataBox
                      basicDataHeadingPurple=""
                      basicDataHeadingBlack={bl["title"]}
                      basicDataDate={bl["date"]}
                      basicDataLineOne={bl["shorttext"]}
                      basicDataLineTwo=""
                      ctaLink={bl["know-url"]}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container">
            <div className="row">
              {this.state.blogcontent.map((bl, index) => {
                if (index < 3) {
                  return (
                    <div className="col-md-4 col-sm-12" key={index}>
                      <BasicDataBox
                        basicDataHeadingPurple=""
                        basicDataHeadingBlack={bl["shorttext"]}
                        basicDataDate={bl["date"]}
                        basicDataLineOne={bl["title"]}
                        basicDataLineTwo=""
                        ctaLink={bl["know-url"]}
                        imgSrc={bl["image-url"]}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="row">
              <div className="col-md-12">
                <Cta
                  ctaType="view-all"
                  myTarget="abc.html"
                  myClasses="c-cta-lined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`http://livestaging.interactiveavenues.net/anarock/api/homepage.php`)
      .then(res => {
        const blogcontent = res.data.news;
        console.log(res.data.news);
        this.setState({ blogcontent });
      });
  }
}
