import React from "react";

import closeIcon from "../../assets/images/icon-close.svg";

import "./SideBar.scss";

const Sidebar = ({ sidebarRef }) => {
  const closeSideBarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar__toggle">
        <img src={closeIcon} alt={closeIcon} onClick={closeSideBarHandler} />
      </div>

      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
