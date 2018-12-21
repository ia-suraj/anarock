import React, { Component } from "react";

export default class PersonnelBox extends Component {
  render() {
    const _name = this.props.personnelName;
    let _designation = "";
    this.props.designation
      ? (_designation = this.props.designation)
      : (_designation = "");
    /* const _designation = this.props.designation; */
    const _imgsrc = this.props.imgSrc;
    let _myClasses = `c-personnel-box ${this.props.myClasses}
    `;
    return (
      <div className={_myClasses}>
        <img src={_imgsrc} className="img-responsive" />
        <div className="c-personnel-greyoverlay">
          <h6 className="c-personnel-name h6">{_name}</h6>
          {_designation.length > 0 && (
            <div className="c-personnel-designation h7">{_designation}</div>
          )}
        </div>
      </div>
    );
  }
}
