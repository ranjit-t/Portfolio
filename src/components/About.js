import "./About.css";
import ConfigDark from "../config/particlesjs-config.json";
import Spaceman from "../assets/Images/spaceman.png";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0, zIndex: "-10" }}
        params={ConfigDark}
        init={particlesInit}
      />
      <h1 className="about-page-heading">About</h1>
      <div className="about-box">
        <div>
          I am Ranjith Thota,
          <br /> <br />
          I'm a front-end developer located in France. I love to create simple
          yet beautiful websites with great user experience. I have been in web
          development since 2017. And eversince, Front End Design has not only
          my work but my Art.
          <br /> <br />
          "I believe everything is an Art when you put your consciousness in
          it."
        </div>
      </div>

      <div className="space-man">
        <img src={Spaceman} alt="spaceman" />
      </div>
      <div className="skills-box">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet ea sit, possimus dolore repudiandae ipsam magni iure? Debitis
          hic iusto, totam provident est omnis fugit vitae corporis at eos!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet ea sit, possimus dolore repudiandae ipsam magni iure? Debitis
          hic iusto, totam provident est omnis fugit vitae corporis at eos!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet ea sit, possimus dolore repudiandae ipsam magni iure? Debitis
          hic iusto, totam provident est omnis fugit vitae corporis at eos!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet ea sit, possimus dolore repudiandae ipsam magni iure? Debitis
          hic iusto, totam provident est omnis fugit vitae corporis at eos!
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
