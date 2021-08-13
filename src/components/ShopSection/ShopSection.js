import React from "react";

import iconArrow from "../../assets/images/icon-arrow.svg";
import iconAngleLeft from "../../assets/images/icon-angle-left.svg";
import iconAngleright from "../../assets/images/icon-angle-right.svg";

import "./ShopSection.scss";

const ShopSection = () => {
  return (
    <div className="shop-section">
      <div className="shop-section__container">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="shop-section__button">
          <span>shop now</span>
          <img src={iconArrow} alt="arrow"></img>
        </div>
      </div>
      <div className="shop-section__angle">
        <button>
          <img src={iconAngleLeft} alt="left"></img>
        </button>
        <button>
          <img src={iconAngleright} alt="right"></img>
        </button>
      </div>
    </div>
  );
};

export default ShopSection;
