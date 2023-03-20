import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__heading">About Me</h2>
          <p className="about__text">
            I'm a web developer with 5 years of experience in building beautiful
            and responsive websites. I specialize in React and CSS and have
            worked with clients from various industries.
          </p>
          <ul className="about__skills">
            <li>React</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
