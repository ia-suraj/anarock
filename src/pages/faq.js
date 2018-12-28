import React, { Component } from "react";
import InnerBanner from "../components/global/innerbanner";
import $ from "jquery";
import axios from "axios";

class FAQ extends Component {
  state = {
    faqlist: []
  };
  render() {
    console.log(this.state.faqlist);
    return (
      <div className="faqWrapper">
        <InnerBanner
          mybg={
            this.state.faqlist.length ? this.state.faqlist[0]["image-url"] : ""
          }
        />
        <section className="breadcrumbwrap">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>FAQs</li>
            </ol>
          </div>
        </section>
        <section className="wrapper faqwrap marginTop50">
          <div className="container">
            <h2 className="h2 side-bar marginBottom50">FAQ's</h2>
            <ul className="accordian marginBottom80">
              {this.state.faqlist.map((fl, index) => {
                return (
                  <li className="faqlist" key={index}>
                    <h4 onClick={this._handleClick}>
                      {fl["title"]}
                      <a
                        href="javascript:void(0)"
                        className="plusbtn"
                        tabIndex="0"
                      >
                        <span
                          className={
                            index == 0
                              ? "pluswrapbtn up-arrow"
                              : "pluswrapbtn down-arrow"
                          }
                        />
                      </a>
                    </h4>
                    <div className="accordian-container">{fl["shorttext"]}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
  _handleClick = e => {
    e.preventDefault();
    var _this = e.target;

    $(".faqwrap .accordian-container").slideUp();
    $(".accordian h4 span")
      .addClass("down-arrow")
      .removeClass("up-arrow");
    if (
      $(_this)
        .next(".accordian-container")
        .is(":hidden") === true
    ) {
      $(_this)
        .next(".accordian-container")
        .slideDown();
      $(_this)
        .find("span")
        .removeClass("down-arrow")
        .addClass("up-arrow");
    }
  };

  abcd() {
    console.log("called");
    $(".faqwrap .accordian li:first-child .accordian-container").css(
      "display",
      "block"
    );
    $(".faqwrap .accordian h4").on("click", function(event) {
      console.log("here");
      event.preventDefault();
      $(".faqwrap .accordian-container").slideUp();

      $(".accordian h4 span")
        .addClass("down-arrow")
        .removeClass("up-arrow");
      if (
        $(this)
          .next(".accordian-container")
          .is(":hidden") === true
      ) {
        $(this)
          .next(".accordian-container")
          .slideDown();
        $(this)
          .find("span")
          .removeClass("down-arrow")
          .addClass("up-arrow");
      }
    });
  }

  componentDidMount() {
    axios
      .get(`http://livestaging.interactiveavenues.net/anarock/api/homepage.php`)
      .then(res => {
        const faqlist = res.data.news;
        console.log(res.data.news);
        this.setState({ faqlist });
      });
    this.abcd();
  }
}
export default FAQ;
