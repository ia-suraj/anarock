import React, { Component } from "react";
import axios from "axios";

export default class ContactUs extends Component {
  state = {
    contactus: [],
    value: "Mumbai",
    valueData: []
  };
  render() {
    let optionItems = this.state.contactus.map((contactus, index) => (
      <option key={index}>{contactus.city}</option>
    ));
    return (
      <div clasaName="contactusWrapper">
        <section className="wrapper topBanner contactus">
          <div className="wrapper">
            <div className="col-sm-5 nopad">
              <div className="ourlocation">
                <h2 className="h2 purplebar marginBottom50">Our Locations</h2>
                <div className="locationmenu">
                  <div className="select-menu">
                    <select onChange={this.change} value={this.state.value}>
                      {optionItems}
                    </select>
                  </div>
                  <div className="menutab">
                    <a
                      href="javascript:void(0);"
                      data-menu="menu1"
                      className="current"
                    >
                      {" "}
                      Mumbai
                    </a>
                    <a href="javascript:void(0);" data-menu="menu2">
                      {" "}
                      Lorem Ipsum
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>

                <div className="menufade in menu1 marginTop80">
                  <h3>{this.state.valueData.city}</h3>
                  <p className="marginTopBottom40">
                    {this.state.valueData.address}
                  </p>
                  <p> {this.state.valueData.name}</p>
                  <a href={"tel :" + this.state.valueData.mobile}>
                    {this.state.valueData.mobile}
                  </a>
                  <a href="mailto:rajkumar.singh@anarock.com">
                    {this.state.valueData.email}
                  </a>
                </div>
                <div className="menufade menu2 marginTop80">
                  <h3> Lorem Ipsum</h3>
                  <p className="marginTopBottom40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua
                  </p>
                  <p>Lorem Ipsum</p>
                  <a href="tel: 9867870300">9867870300</a>
                  <a href="mailto:rajkumar.singh@anarock.com">Lorem Ipsum</a>
                </div>
              </div>
            </div>

            <div className="col-sm-7 nopad">
              <div className="map">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="mapframe"
                      width="600"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=1002%20-%2010th%20Floor%2C%20B%20Wing%2C%20One%20BKC%2C%20Plot%20C-66%2C%20G%20Block%2C%20BKC%2C%20Bandra%20(E)&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <em className="downArrow" />
        </section>
        <section className="wrapper contactCopy marginBottom50">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li> Contact Us </li>
            </ol>
            <h2 className="h2 side-bar marginBottom50">Contact Us</h2>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  For Media related queries,
                  <br />
                  please write to <br />
                  <a href="mailto:media@anarock.com">media@anarock.com</a>
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  For Marketing inquiries, <br />
                  please reach out <br />
                  <a href="mailto:marketing@anarock.com">
                    marketing@anarock.com
                  </a>
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  For Alliances and Partnerships, <br />
                  please write to <br />
                  <a href="mailto:Liza.Fernandes@anarock.com">
                    Liza.Fernandes@anarock.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  change = e => {
    this.setState({ value: e.target.value }, function() {
      this.setAddressState();
    });
  };

  setAddressState = val => {
    let a = this.state.value;
    this.state.contactus.map((contactus, index) => {
      if (contactus.city === a) {
        this.setState({ valueData: contactus });
      }
    });
  };
  componentDidMount() {
    var winH = window.innerHeight;
    var hearderht = document.getElementById("header").clientHeight;
    document.querySelector(".ourlocation").style.height =
      winH - hearderht + "px";
    document.querySelector(".mapouter").style.height = winH - hearderht + "px";
    axios
      .get(
        `http://livestaging.interactiveavenues.net/anarock/api/contactus.php`
      )
      .then(res => {
        const contactus = res.data;
        this.setState({ contactus });
        this.setState({ value: "Mumbai" }, function() {
          this.setAddressState();
        });
      });
  }
}
