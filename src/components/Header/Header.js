import React from "react";

import Carousel from "../Carousel/Carousel";
import ShopSection from "../ShopSection/ShopSection";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Carousel />
      <ShopSection />
    </header>
  );
};

export default Header;
