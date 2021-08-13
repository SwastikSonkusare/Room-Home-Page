import React from "react";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>

      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
