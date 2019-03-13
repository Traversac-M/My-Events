import React from "react";
import { NavLink } from "react-router-dom";

export function Dropdown1(props) {
  const isLogged =
    props.fbToken || props.googleToken ? (
      <div>
        <button className="dropdown-item" onClick={props.onClick}>
          Logout
        </button>
      </div>
    ) : (
      <NavLink className="dropdown-item" to="/register">
        Register
      </NavLink>
    );
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="fa fa-user" />
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        {isLogged}
      </div>
    </li>
  );
}
