import React, { Component } from "react";
/* import "./AppFooter.css"; */

class AppFooter extends Component {
  render() {
    return (
      <footer className="wrapper">
        <div className="wrapper footerAll_Links">
          <div className="container">
            <div className="colWrap">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Services</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">Residential</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Investmen Management</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Investmen Banking</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Hospitality</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Retail</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Research and Consulting</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Anarock Digital</a>
                </li>
              </ul>
            </div>

            <div className="colWrap">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Anarock Digital</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">Residential</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Commercial</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Retail</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Hospitality</a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Research and insights</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Blog</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Careers</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="colWrap">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <strong>About Us</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">overview</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Milestones</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Management</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Clients And Case Studies</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Awards and Recognition</a>
                </li>
                <li>
                  <a href="javascript:void(0)">CSR</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Corporate Governance</a>
                </li>
              </ul>
            </div>

            <div className="colWrap">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Faqs</strong>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">News and Media</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact us</a>
                </li>
              </ul>

              <form className="wrapper">
                <span>Get the latest updates and offers.</span>
                <input type="text" />
                <a href="javascript:void(0)" className="subscibeBtn">
                  subscibe
                </a>
              </form>

              <ul className="social_allIcon">
                <li>
                  <a href="javascript:void(0)">
                    <img src="images/socialIcon1.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src="images/socialIcon2.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src="images/socialIcon3.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src="images/socialIcon4.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src="images/socialIcon5.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wrapper copyRight_TC">
          <div className="container">
            <ul className="tcLinks">
              <li>
                <a href="javascript:void(0)">Terms of use</a>
              </li>
              <li>
                <a href="javascript:void(0)">Privacy Policy</a>
              </li>
            </ul>

            <span className="copyRightsText">
              &copy; 2018 Anarock Property Consultants Pvt Ltd
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
