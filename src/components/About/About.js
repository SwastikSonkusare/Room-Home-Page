import React from "react";

import image1 from "../../assets/images/image-about-dark.jpg";
import image2 from "../../assets/images/image-about-light.jpg";

import "./About.scss";

const About = () => {
  return (
    <main className="main">
      <img className="main__image" src={image1} alt="about"></img>

      <div className="main__container">
        <div>
          <h3>About our furniture</h3>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>

      <img className="main__image" src={image2} alt="about"></img>
    </main>
  );
};

export default About;
