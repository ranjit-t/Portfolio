import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__heading">Hello, I'm a Web Developer</h1>
        <p className="hero__subheading">
          I specialize in building beautiful and responsive websites with React
          and CSS.
        </p>
      </div>
    </section>
  );
}

export default Hero;
