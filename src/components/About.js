import "./About.css";
import ConfigDark from "../config/particlesjs-config.json";
import Spaceman from "../assets/Images/spaceman.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import html from "../frontend-png/html.png";
import css from "../frontend-png/css.png";
import js from "../frontend-png/js.png";
import react from "../frontend-png/react.png";
import node from "../frontend-png/node.png";
import firebase from "../frontend-png/firebase.png";
import git from "../frontend-png/git.png";
import redux from "../frontend-png/redux.png";
// import { Github, YouTube, Twitter } from "../assets/AllSVGs.js";
import { Github } from "../assets/AllSVGs.js";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const navigate = useNavigate();

  return (
    <motion.div
      className="App"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="About-Page">
        <Particles
          id="tsparticles"
          style={{ position: "absolute", top: 0, zIndex: "-10" }}
          params={ConfigDark}
          init={particlesInit}
        />
        <h1 className="about-page-heading">About</h1>
        <div className="row1">
          <div className="about-box">
            <div>
              I am Ranjith Thota,
              <br /> <br />
              A Front-End Developer located in France. I love creating simple
              yet beautiful websites with great user experience. I have been in
              web development since 2017. And eversince, Front End Design has
              not only my work but my Art.
              <br /> <br />
              "I believe everything is an Art when you put your consciousness in
              it."
            </div>
          </div>

          <div className="space-man">
            <img src={Spaceman} alt="spaceman" />
          </div>
        </div>
        <div className="row2" id="skills">
          <div className="skills-box">
            <h1 className="">Skills</h1>
            <p>
              Here are a few technologies that I've been working with recently.
            </p>
            <div className="skills-png">
              <div>
                HTML
                <img src={html} alt="html" />
              </div>
              <div>
                CSS
                <img src={css} alt="css" />
              </div>
              <div>
                Javascript
                <img src={js} alt="js" />
              </div>

              <div>
                Node.Js
                <img src={node} alt="node" />
              </div>
              <div>
                React
                <img src={react} alt="react" />
              </div>
              <div>
                Redux
                <img src={redux} alt="redux" />
              </div>
              <div>
                Git
                <img src={git} alt="git" />
              </div>
              <div>
                Firebase
                <img src={firebase} alt="firebase" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-bar">
          <a
            href="https://github.com/ranjit-t/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github fill="white" width="30px" />
          </a>
          {/* 
          <YouTube fill="white" width="30px" />
          <Twitter fill="white" width="30px" /> */}
          <hr />
        </div>
        <div className="nav-bar">
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              navigate("/work");
            }}
          >
            Work
          </p>
          <p>
            <a href="mailto:amailtoranjith@gmail.com">Contact</a>
          </p>

          <hr />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
