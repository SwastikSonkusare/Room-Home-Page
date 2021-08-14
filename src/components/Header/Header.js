import React, { useState } from "react";

import Carousel from "../Carousel/Carousel";
import ShopSection from "../ShopSection/ShopSection";

import "./Header.scss";

const Header = () => {
  const [slider, setSlider] = useState(1);

  return (
    <header>
      <Carousel slider={slider} />
      <ShopSection slider={slider} setSlider={setSlider} />
    </header>
  );
};

export default Header;
