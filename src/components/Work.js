import "./Work.css";
import ConfigDark from "../config/particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Github, YouTube, Twitter } from "../assets/AllSVGs.js";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function Work() {
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
        <h1 className="about-page-heading">Work</h1>

        <div className="contact-bar">
          <a
            href="https://github.com/ranjit-t/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Github fill="white" width="30px" />
          </a>

          <YouTube fill="white" width="30px" />
          <Twitter fill="white" width="30px" />
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
              navigate("/about");
            }}
          >
            About
          </p>
          <p
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </p>
          <hr />
        </div>
      </div>
    </motion.div>
  );
}
