import React, { Component } from "react";
/* import "./appheader.css"; */
import logo from "../../assets/images/Anarock-logo.svg";

class AppHeader extends Component {
  render() {
    return (
      <header className="wrapper" ref="navbar" id="header">
        <div className="container">
          <a href="javascript:void(0)" className="logoWrap">
            <img src={logo} alt="" />
          </a>
          <nav>
            <div className="wrapper firstNav">
              <ul>
                <li>
                  <a href="javascript:void(0)">News and Media</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact Us</a>
                </li>
                <li>
                  <select>
                    <option>INDIA</option>
                    <option>Bangladesh</option>
                    <option>Egypt</option>
                    <option>Singapore</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="wrapper secondNav">
              <span className="searchIcon" />
              <ul className="mobileNav">
                <li>
                  <a href="javascript:void(0)">Services</a>
                  <span className="plusWrap" />
                  <div className="innerNav">
                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Residential</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Strategic Partners</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Exclusive Projects</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Leasing Solution</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Corporate Divestment</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Investment Banking</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Corporate Finance</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Land Services</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          Warehousing &amp; Industrial Logistics
                        </a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Retail</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Transction Advisory</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Retail Capital Market</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Retail Consultancy</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Investment Management</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Fund</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Managed Accounts</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Asset Management</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Hospitality</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Asset Sale</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Funding</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>ANAROCK Digital</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Technology Products</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Digital Solutions</a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <strong>Research and Consulting</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)">Projects</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Research and Insights</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Careers</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About Us</a>
                </li>
                <li className="mobileLink">
                  <a href="javascript:void(0)">news and media</a>
                </li>
                <li className="mobileLink">
                  <a href="javascript:void(0)">contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
          <a
            className="hamburger"
            href="javascript:void(0)"
            onClick={this.burgerMenuClick}
          >
            <span />
          </a>
        </div>
      </header>
    );
  }
  burgerMenuClick = event => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector("ul.mobileNav").classList.toggle("open");
  };
}

export default AppHeader;
