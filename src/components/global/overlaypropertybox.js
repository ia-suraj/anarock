import React, { Component } from "react";
import Cta from "./cta";

export default class OverlayPropertyBox extends Component {
  render() {
    const _type = this.props.propertyType;
    const _name = this.props.propertyName;
    const _details = this.props.propertyDetails;
    const _imgsrc = this.props.imgSrc;
    const _myClasses = `c-overlay-property-box ${this.props.myClasses}`;
    const _ctalink = this.props.ctaLink;
    return (
      <div class={_myClasses}>
        <img src={_imgsrc} class="img-responsive" />
        <div class="c-overlay-property-type">{_type}</div>
        <div class="c-overlay-property-overlay">
          <h6 className="h6 c-overlay-property-name">{_name}</h6>
          <div class="h7 c-overlay-property-desc">{_details}</div>
          <Cta ctaType="know-more-link" myTarget={_ctalink} myClasses="" />
        </div>
      </div>
    );
  }
}
