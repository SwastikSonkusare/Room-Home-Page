import React, { useRef } from "react";

import SideBar from "../SideBar/SideBar";

import logo from "../../assets/images/logo.svg";
import hamburgerLogo from "../../assets/images/icon-hamburger.svg";

import "./Navbar.scss";

const Navbar = () => {
  const sidebarRef = useRef();

  const sidebarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <>
      <SideBar sidebarRef={sidebarRef} />
      <nav>
        <img src={logo} alt="logo"></img>

        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className="hamburger" onClick={sidebarHandler}>
          <img src={hamburgerLogo} alt="hamburger" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
