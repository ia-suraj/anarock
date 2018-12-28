import React, { Component } from "react";

export default class Cta extends Component {
  render() {
    let _myClasses = `c-cta-btn ${this.props.myClasses} ${
      this.props.ctaType === "know-more"
        ? "c-knowmore-btn"
        : this.props.ctaType === "view-all"
          ? "c-viewall-btn"
          : "c-knowmore-link"
    }
    `;
    const abc = this.props.myClasses;
    if (abc.includes("c-cta-lined")) {
      return (
        <div className="ctalinedbtn">
          <a href={this.props.myTarget} className={_myClasses}>
            <span className="c-cta-btn-text-one" />
            <span className="c-cta-btn-text-two" />
            <span className="c-cta-btn-plusWrap">
              <abbr className="plusWrap" />
            </span>
          </a>
        </div>
      );
    } else {
      return (
        <a href={this.props.myTarget} className={_myClasses}>
          <span className="c-cta-btn-text-one" />
          <span className="c-cta-btn-text-two" />
          <span className="c-cta-btn-plusWrap">
            <abbr className="plusWrap" />
          </span>
        </a>
      );
    }
  }
}
