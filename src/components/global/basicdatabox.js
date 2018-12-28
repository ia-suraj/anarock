import React, { Component } from "react";
import Cta from "./cta";

export default class BasicDataBox extends Component {
  render() {
    let _propertyheadingPurple = "",
      _propertyheadingblack = "",
      _date = "",
      _lineone,
      _linetwo,
      _imgsrc,
      _myClasses,
      _ctalink;

    this.props.basicDataHeadingPurple
      ? (_propertyheadingPurple = this.props.basicDataHeadingPurple)
      : (_propertyheadingPurple = "");
    this.props.basicDataHeadingBlack
      ? (_propertyheadingblack = this.props.basicDataHeadingBlack)
      : (_propertyheadingblack = "");
    this.props.basicDataDate
      ? (_date = this.props.basicDataDate)
      : (_date = "");
    this.props.basicDataLineOne
      ? (_lineone = this.props.basicDataLineOne)
      : (_lineone = "");
    this.props.basicDataLineTwo
      ? (_linetwo = this.props.basicDataLineTwo)
      : (_linetwo = "");
    this.props.imgSrc ? (_imgsrc = this.props.imgSrc) : (_imgsrc = "");
    this.props.ctaLink ? (_ctalink = this.props.ctaLink) : (_ctalink = "");
    this.props._myClasses
      ? (_myClasses = `c-basic-data-box ${this.props.myClasses}`)
      : (_myClasses = "c-basic-data-box");
    return (
      <div className={_myClasses}>
        {_imgsrc.length > 0 && <img src={_imgsrc} className="img-responsive" />}
        {_date.length > 0 && (
          <div className="h8 c-basic-data-date">{_date}</div>
        )}
        {_propertyheadingPurple.length > 0 && (
          <h2 className="h2 c-basic-data-heading-purple">
            {_propertyheadingPurple}
          </h2>
        )}
        {_propertyheadingblack.length > 0 && (
          <h2 className="h2 c-basic-data-heading-black">
            {_propertyheadingblack}
          </h2>
        )}
        {_lineone.length > 0 && (
          <div className="h7 c-basic-data-line-one">{_lineone}</div>
        )}
        {_linetwo.length > 0 && (
          <div className="h7 c-basic-data-line-two">{_linetwo}</div>
        )}
        <div className="clearfix" />
        {_ctalink.length > 0 && (
          <Cta ctaType="know-more-link" myTarget={_ctalink} myClasses="" />
        )}
      </div>
    );
  }
}
