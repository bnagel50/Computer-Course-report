import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-container">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>HT ASSASINS</h4>
              <h1 className="list-unstyled">
                <li>555-555-5555</li>
                <li>Columbus, Ohio</li>
                <li>123 Street South North</li>
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <Link className="btn btn-lg btn-primary m-2" to="/contact-us">
                Contact Us!
              </Link>
              <ul className="list-unstyled">
                <li>Htassassinboys@gmail.com</li>
                <li>555-555-5555</li>
                <li>Github.com/sweetbaby/boys</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Another Column</h4>
              <ui className="list-unstyled">
                <li>Place Holder</li>
                <li>Place Holder</li>
                <li>Place Holder</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} HT-ASSASINS | All rights reserved
              | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
