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
              <h4>NOBSBC</h4>
              <h1 className="list-unstyled">
                <li>(614)-555-5555</li>
                {/* <li>Columbus, Ohio</li>
                <li>123 Street South North</li> */}
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>
              <Link to="/ContactUs" className='text-white'>Contact Us!</Link>
              </h4>
              <ul className="list-unstyled">
                <li>nobsbc1@gmail.com</li>
                <li>Columbus, Ohio</li>
                <li>123 Nathan Russell Street</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Download the App!</h4>
              <ul className="list-unstyled">
                <li>Coming Soon!</li>
                <li> Apple Store</li>
                <li>Google Play</li>
              </ul>
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
