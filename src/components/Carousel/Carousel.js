import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { images } from "../../assets/data";
import Navbar from "../Navbar/Navbar";

import "./Carousel.scss";

const Carousel = ({ slider }) => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className="carousel__container">
      <Navbar />

      {images.map((img) => (
        <img
          src={matches ? img.alt : img.src}
          alt="hero"
          className={
            slider === img.id ? "carousel__image active" : "carousel__image"
          }
          key={img.id}
        ></img>
      ))}
    </div>
  );
};

export default Carousel;
