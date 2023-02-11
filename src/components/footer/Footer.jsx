import React from "react";
import './footer.css'

function Footer() {
  return (
    <>
      <footer id="footer-web" className="footer-bs">
        <div className="container-custom">
          <div className="row mx-0">
            <div className="col-lg-3 col-xs-6 col-sm-6 col-md-3 pl-3 footer-social animated fadeInDown">
              <p>Get to know us</p>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Our pages</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6 col-md-3 footer-social animated fadeInDown">
              <p>Let us help you</p>
              <ul>
                <li>
                  <a href="myaccount">Account</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Cancelation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Track my order</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6 col-md-3 footer-social animated fadeInDown">
              <p className="stay-connected">Stay connected</p>
              <a className="stay-text">Get alerts about on Zero Armario.</a>
              <div style={{height: "20px"}}></div>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <span className="input-group-btn">
                  <button className="btn" type="button">
                    <i className="bx bx-envelope"></i>
                  </button>
                </span>
                <div className="border"></div>
                <div className="social-icons" style={{justifyContent: "space-evenly"}}>
                  <a href="#">
                    <i className="bx bxl-facebook bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-youtube bx-xs"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6 col-md-3 pr-3 footer-social animated fadeInDown">
              <p>Payment method</p>
              <div id="pay">
                <img src="/assets/images/png/pays.png" width="60%" alt="" />
              </div>
            </div>
          </div>
          <p
            style={{textAlign: "center", fontSize: "14px", borderBottom: "none", position: "absolute",
  bottom: "0vh",
  left: "50vw"}}
          >
            &copy; Spaxe
          </p>
        </div>
      </footer>
      <footer id="footer-mobile" className="footer-bs">
        <div className="container-custom">
          <div className="row mx-0">
            <div className="col-12 footer-social animated fadeInDown">
              <div className="accordion" id="accordionExampleMobile">
                <div id="headingOneMobile">
                  <button
                    className="btn-block dropdown-toggle2 collapsed text-left"
                    data-toggle="collapse"
                    data-target="#collapseOneMobile"
                    aria-expanded="false"
                    aria-controls="collapseOneMobile"
                  >
                    Get to know us
                  </button>
                </div>
                <div
                  id="collapseOneMobile"
                  className="collapse"
                  aria-labelledby="headingOneMobile"
                  data-parent="#accordionExampleMobile"
                >
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Our pages</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div id="headingTwoMobile">
                  <button
                    className="btn-block dropdown-toggle2 collapsed text-left"
                    data-toggle="collapse"
                    data-target="#collapseTwoMobile"
                    aria-expanded="false"
                    aria-controls="collapseTwoMobile"
                  >
                    Let us help you
                  </button>
                </div>
                <div
                  id="collapseTwoMobile"
                  className="collapse"
                  aria-labelledby="headingTwoMobile"
                  data-parent="#accordionExampleMobile"
                >
                  <ul>
                    <li>
                      <a href="myaccount">Account</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Cancelation</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Track my order</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6 col-sm-6 col-md-3 col-12 footer-social animated fadeInDown">
              <p className="stay-connected">Stay connected</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <span className="input-group-btn">
                  <button className="btn" type="button">
                    <i className="bx bx-envelope"></i>
                  </button>
                </span>
                <div className="border"></div>
                <div className="social-icons" style={{justifyContent: "space-evenly"}}>
                  <a href="#">
                    <i className="bx bxl-facebook bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram bx-xs"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-youtube bx-xs"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-xs-6 col-sm-6 col-md-3 col-12 footer-social animated fadeInDown"
              style={{marginBottom: "25vh"}}
            >
              <p>Payment Accepted</p>
              <div className="row no-gutters">
                <div className="col-10">
                  <img
                    src="/assets/images/png/pays-mobile.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
