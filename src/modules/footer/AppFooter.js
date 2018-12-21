import React, { Component } from "react";
import socialIcon1 from "../../assets/images/socialIcon1.png";
import socialIcon2 from "../../assets/images/socialIcon2.png";
import socialIcon3 from "../../assets/images/socialIcon3.png";
import socialIcon4 from "../../assets/images/socialIcon4.png";
import socialIcon5 from "../../assets/images/socialIcon5.png";
/* import "./AppFooter.css"; */

class AppFooter extends Component {
  render() {
    return (
      <footer className="wrapper">
        <div className="wrapper footerAll_Links">
          <div className="container">
            <div className="colWrap services_links">
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

            <div className="colWrap projects_links">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <strong>Projects</strong>
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

            <div className="colWrap about_links">
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

            <div className="colWrap faq_links">
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
                    <img src={socialIcon1} alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src={socialIcon2} alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src={socialIcon3} alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src={socialIcon4} alt="" />
                  </a>
                </li>

                <li>
                  <a href="javascript:void(0)">
                    <img src={socialIcon5} alt="" />
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
