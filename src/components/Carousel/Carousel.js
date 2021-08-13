import React from "react";

import Navbar from "../Navbar/Navbar";

import hero1 from "../../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../../assets/images/desktop-image-hero-3.jpg";

import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel__container">
      <Navbar />
      <img src={hero1} alt="hero" className="carousel__image"></img>
    </div>
  );
};

export default Carousel;
