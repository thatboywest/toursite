// Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <center>
        <h2>TUGENDE CONNECTION</h2>{" "}
      </center>
      <div className="li">
        <div className="div1">
          <ul>
            <li>Sites</li>
            <li>Guides</li>
            <li>Hotels</li>
            <li>Register as Guide</li>
            <li>Register your hotel</li>
          </ul>
        </div>
        <div className="div2">
          <ul>
            <li>Tours</li>
            <li>About</li>
            <li>Carrers</li>
            <li>Mobile app</li>
          </ul>
        </div>
      </div>
      <div className="final">
        <center>
          <p>&copy; 2023 Homestar holdings. All rights reserved.</p>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
