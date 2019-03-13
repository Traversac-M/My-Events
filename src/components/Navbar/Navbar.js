import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { Dropdown1 } from "./Dropdown1";

import Logo from "../Images/logo.png";

import "./NavbarStyle.css";
import "../Style.css";

export default class Navbar extends Component {
  state = {
    fbToken: localStorage.getItem("fbToken"),
    googleToken: localStorage.getItem("googleToken")
  };

  logoutFunction = event => {
    window.location.reload();
    localStorage.removeItem("fbToken");
    localStorage.removeItem("googleToken");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-navbar font-weight-bold">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="My Events" />
          </NavLink>
          <BurgerMenu />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mr-auto" />
            <ul className="navbar-nav">
              <Dropdown1
                googleToken={this.state.googleToken}
                fbToken={this.state.fbToken}
                onClick={this.logoutFunction}
              />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
