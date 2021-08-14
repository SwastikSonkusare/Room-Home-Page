import React from "react";

import iconArrow from "../../assets/images/icon-arrow.svg";
import iconAngleLeft from "../../assets/images/icon-angle-left.svg";
import iconAngleright from "../../assets/images/icon-angle-right.svg";

import { contents } from "../../assets/data";

import "./ShopSection.scss";

const ShopSection = ({ slider, setSlider }) => {
  const prevImageHandler = () => {
    if (slider === 1) {
      setSlider(4 - 1);
    } else {
      setSlider(slider - 1);
    }
  };

  const nextImageHandler = () => {
    if (slider === 3) {
      setSlider(0 + 1);
    } else {
      setSlider(slider + 1);
    }
  };

  return (
    <div className="shop-section">
      <div className="shop-section__container">
        {contents.map((c) => (
          <div
            className={
              slider === c.id
                ? "shop-section__content active"
                : "shop-section__content"
            }
            key={c.id}
          >
            <h1>{c.heading}</h1>
            <p>{c.paragraph}</p>
          </div>
        ))}

        <div className="shop-section__button">
          <span>shop now</span>
          <img src={iconArrow} alt="arrow"></img>
        </div>
      </div>
      <div className="shop-section__angle">
        <button onClick={prevImageHandler}>
          <img src={iconAngleLeft} alt="left"></img>
        </button>
        <button onClick={nextImageHandler}>
          <img src={iconAngleright} alt="right"></img>
        </button>
      </div>
    </div>
  );
};

export default ShopSection;
