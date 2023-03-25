import "./Work.css";
import ConfigDark from "../config/particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Github, YouTube, Twitter } from "../assets/AllSVGs.js";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import housemarketplace from "../assets/Project-Images/housemarketplace.png";

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
      <div>
        <h1 className="project-page-heading">Work</h1>
        <Particles
          id="tsparticles"
          style={{ position: "absolute", top: 0, zIndex: "-10" }}
          params={ConfigDark}
          init={particlesInit}
        />
        <div className="Project-Page">
          <div className="projects-parent">
            <div className="projects">
              <img src={housemarketplace} alt="housemarketplace" />
              <h3> House Marketplace</h3>
              <div className="Project-Descr">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ut cumque debitis earum perferendis porro ratione ex
                  soluta, repudiandae sint! Nulla labore debitis sequi est dicta
                  mollitia voluptate illum itaque? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Dicta adipisci maiores, nisi
                  nihil quasi facere esse in labore incidunt laboriosam!
                  Voluptatum minima ex quos fugit numquam, eveniet labore vel
                  aliquam.
                </p>
              </div>
            </div>
            <div className="projects">
              <img src={housemarketplace} alt="housemarketplace" />
              <h3> House Marketplace</h3>
              <div className="Project-Descr">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ut cumque debitis earum perferendis porro ratione ex
                  soluta, repudiandae sint! Nulla labore debitis sequi est dicta
                  mollitia voluptate illum itaque? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Dicta adipisci maiores, nisi
                  nihil quasi facere esse in labore incidunt laboriosam!
                  Voluptatum minima ex quos fugit numquam, eveniet labore vel
                  aliquam.
                </p>
              </div>
            </div>
            <div className="projects">
              <img src={housemarketplace} alt="housemarketplace" />
              <h3> House Marketplace</h3>
              <div className="Project-Descr">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ut cumque debitis earum perferendis porro ratione ex
                  soluta, repudiandae sint! Nulla labore debitis sequi est dicta
                  mollitia voluptate illum itaque? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Dicta adipisci maiores, nisi
                  nihil quasi facere esse in labore incidunt laboriosam!
                  Voluptatum minima ex quos fugit numquam, eveniet labore vel
                  aliquam.
                </p>
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
