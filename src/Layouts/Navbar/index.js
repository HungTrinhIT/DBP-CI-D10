import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" activeClassName="nav-active">
        <p className="navbar__title">Github Finder</p>
      </Link>
      <ul>
        <li>
          <Link activeClassName="nav-active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
