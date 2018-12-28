import React, { Component } from "react";
import BasicDataBox from "../components/global/basicdatabox";
import Cta from "../components/global/cta";
import InnerBanner from "../components/global/innerbanner";
import Slider from "react-slick";
import axios from "axios";

export default class BlogListing extends Component {
  state = {
    blogcontent: []
  };
  render() {
    if (this.state.blogcontent.spotlight) {
      return (
        <div className="aboutus-wrapper">
          <InnerBanner
            mybg={this.state.blogcontent.spotlight[0]["image-url"]}
            bannerHeading={this.state.blogcontent.spotlight[0]["title"]}
            bannerText={this.state.blogcontent.spotlight[0]["shorttext"]}
          />
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li> About Us </li>
          </ol>
          {this.setDescription()}
          {this.setBrandAnalog()}
          {this.setBrandVisionMission()}
          {this.setBODsList()}
          {this.setKBSList()}
          {this.setClientsList()}
          {this.setCaseStudy()}
          {this.setAwardsRecognition()}
          {this.setcorporate()}
        </div>
      );
    } else {
      return <div />;
    }
  }

  setDescription() {
    return this.state.blogcontent.description.map((bld, index) => {
      return (
        <section className="wrapper aboutUsCopy marginTop50" key={index}>
          <div className="container">
            <h2 className="h2 side-bar marginBottom50">About Us</h2>
            <p>{bld}</p>
          </div>
        </section>
      );
    });
  }

  setBrandAnalog() {
    return this.state.blogcontent.brand_analogy.map((blba, index) => {
      return (
        <section className="wrapper brandanalogy marginTop50" key={index}>
          <div className="container">
            <div className="brandanalogycontainer">
              <div className="brandanalogybox c-purple-block c-small-purple-block c-left-top-purple-block">
                <h2 className="h2 side-bar marginBottom50">Brand Analogy</h2>
                <div className="brandinnerbox">{blba}</div>
              </div>
            </div>
          </div>
        </section>
      );
    });
  }

  setBrandVisionMission() {
    var aaa = [];
    aaa.push(
      <section className="wrapper visionmission marginTop50">
        <div className="container">
          {this.state.blogcontent.vision.map((blv, index) => {
            return (
              <div className="col-sm-6 visionwrap">
                <h2 className="h2 side-bar marginBottom50">Vision</h2>
                <div className="visionimgwrap marginTop50  c-purple-block c-small-purple-block c-left-top-purple-block">
                  <img
                    src={blv["image-url"]}
                    className="img-responsive"
                    alt="vision"
                  />
                </div>
                <p>{blv["description"]}</p>
              </div>
            );
          })}
          {this.state.blogcontent.mission.map((blm, index) => {
            return (
              <div className="col-sm-6 visionwrap">
                <h2 className="h2 side-bar marginBottom50">Mission</h2>
                <div className="visionimgwrapright marginTop50  c-purple-block c-small-purple-block c-right-bottom-purple-block">
                  <img
                    src={blm["image-url"]}
                    className="img-responsive"
                    alt="mission"
                  />
                </div>
                <div>{blm["description"]}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
    return aaa;
  }

  setCaseStudy() {
    var bb = [];
    bb.push(
      <section className="wrapper casestudy marginTop50">
        <div className="container">
          <h2 className="h2 side-bar marginBottom50">Case Study</h2>
          {this.state.blogcontent.casestudy.map((blcs, index) => {
            return (
              <div className="col-md-6 col-sm-12 basicdatawrapper" key={index}>
                <BasicDataBox
                  imgSrc={blcs["image-url"]}
                  basicDataHeadingPurple={blcs["title"]}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
    return bb;
  }

  setAwardsRecognition() {
    var aaa = [];
    aaa.push(
      <section className="wrapper awardsrecognition marginTop50">
        <div className="container">
          {this.state.blogcontent.awards.map((bla, index) => {
            return (
              <div className="col-sm-6 visionwrap" key={index}>
                <h2 className="h2 side-bar marginBottom50">
                  Awards and recognition
                </h2>
                <BasicDataBox
                  imgSrc={bla["image-url"]}
                  basicDataHeadingBlack={bla["title"]}
                  basicDataLineOne={bla["description"]}
                  ctaLink="abc.html"
                />
              </div>
            );
          })}
          <div className="col-sm-6 visionwrap">
            <h2 className="h2 side-bar marginBottom50">CSR</h2>
            <BasicDataBox
              imgSrc={this.state.blogcontent.csr[0]["image-url"]}
              basicDataHeadingBlack={this.state.blogcontent.csr[0]["title"]}
              basicDataLineOne={this.state.blogcontent.csr[0]["description"]}
              ctaLink="abc.html"
            />
          </div>
        </div>
      </section>
    );
    return aaa;
  }

  setcorporate() {
    var bnb = [];
    bnb.push(
      <section className="wrapper cgovernance marginTop50">
        <div className="container">
          <h2 className="h2 side-bar marginBottom50">corporate governance</h2>
          {this.state.blogcontent.corporate.map((blc, index) => {
            return (
              <div key={index}>
                {blc.content}
                <div>
                  <Cta myTarget={blc.link} myClasses="" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
    return bnb;
  }

  setClientsList() {
    var setting = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    var clients = [];
    clients.push(
      <section className="wrapper clients marginTop50">
        <div className="container">
          <h2 className="h2 side-bar marginBottom50">clients</h2>
          <Slider className="clients_Slider" {...setting}>
            {this.state.blogcontent.clients.map((blcts, index) => {
              return (
                <div key={index}>
                  <img src={blcts["image-url"]} alt="clients" />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    );
    return clients;
  }

  setBODsList() {
    var bods = [];
    bods.push(
      <section className="wrapper bod marginTop50">
        <div className="container">
          <h2 className="h2 side-bar marginBottom50">Board of directors</h2>
          <div className="row">
            {this.state.blogcontent.members.map((blms, index) => {
              if (blms.type == 1) {
                return (
                  <div className="col-md-4">
                    <BasicDataBox
                      imgSrc={blms["image-url"]}
                      basicDataHeadingPurple={blms["name"]}
                      basicDataLineOne={blms["position"]}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
    return bods;
  }

  setKBSList() {
    var setting = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    var kbs = [];
    kbs.push(
      <section className="wrapper kbs marginTop50">
        <div className="container">
          <h2 className="h2 side-bar marginBottom50">
            key business stakeholders
          </h2>
          <Slider className="clients_Slider" {...setting}>
            {this.state.blogcontent.members.map((blms, index) => {
              if (blms.type == 2) {
                return (
                  <div key={index}>
                    <BasicDataBox
                      imgSrc={blms["image-url"]}
                      basicDataHeadingPurple={blms["name"]}
                      basicDataLineOne={blms["position"]}
                    />
                  </div>
                );
              }
            })}
          </Slider>
        </div>
      </section>
    );
    return kbs;
  }
  componentDidMount() {
    axios
      .get(`http://livestaging.interactiveavenues.net/anarock/api/aboutus.php`)
      .then(res => {
        const blogcontent = res.data;
        this.setState({ blogcontent });
      });
  }
}
