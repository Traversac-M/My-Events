import React, { Component } from "react";

import Logo from "./Logo";
import Company from "./Company";
import QuickLinks from "./QuickLinks";
import Social from "./Social";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";

import "./FooterStyle.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <Logo />
          <hr className="footer-line" />
          <div className="row">
            <Company />
            <QuickLinks />
            <Social />
            <Newsletter />
          </div>
          <Copyright />
        </div>
      </div>
    );
  }
}
