import "./Work.css";
import ConfigDark from "../config/particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import YinYang from "../yinyong.png";

// import { Github, YouTube, Twitter } from "../assets/AllSVGs.js";
import { Github } from "../assets/AllSVGs.js";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import housemarketplace from "../assets/Project-Images/housemarketplace.png";
import ecommerce from "../assets/Project-Images/e-commerce.png";
import moneytracker from "../assets/Project-Images/moneytracker.png";
import memorygame from "../assets/Project-Images/memorygame.png";

// import React, { useEffect } from "react";

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
              <h1>
                <b>House Marketplace</b>
              </h1>
              <div className="Project-Descr">
                <div className="para">
                  <ul>
                    <li>
                      Build this for to provide an app-like experience.Customers
                      can browse through house listings, with detailed
                      information and images provided for each property. The
                      addition of Google Maps makes it easy for customers to
                      view each property's location and surrounding area.
                    </li>
                    <li>
                      The website also allows customers to create their own
                      accounts and add their own listings with images and
                      location co-ordinates to the marketplace.
                    </li>
                    <li>
                      <b>Technologies Used:</b> HTML, CSS, React.Js, Firebase
                      Storage and Authentication.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="projects">
              <img src={ecommerce} alt="e-commerce" />
              <h1>
                <b>E-Commerce Site</b>
              </h1>
              <div className="Project-Descr">
                <div className="para">
                  <ul>
                    <li>
                      {" "}
                      Developed this project using React for a dynamic and
                      responsive online store, with an intuitive user interface
                      and seamless navigation, it contains a wide range of
                      products, including images, descriptions, and prices and
                      customers can easily browse and add products to their
                      cart.
                    </li>
                    <li>
                      <b>Technologies Used:</b> HTML, CSS, React.Js,
                      Localstorage.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="projects">
              <img src={moneytracker} alt="moneytracker" />
              <h1>
                <b>Money Tracker</b>
              </h1>
              <div className="Project-Descr">
                <div className="para">
                  <ul>
                    <li>
                      A web app that helps users to keep track of their daily
                      expenses. Create your account, add the transactions you
                      made and delete them when you need to.
                    </li>
                    <li>
                      The app will store the transactions for you, so you can
                      come back whenever you wish. Just log back in and you'll
                      find everything as you've left it!
                    </li>
                    <li>
                      <b>Technologies Used:</b> HTML, CSS, React.Js, Firebase
                      Storage and Authentication.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="projects">
              <img src={memorygame} alt="memorygame" />
              <h1>
                <b>Memory Game</b>
              </h1>
              <div className="Project-Descr">
                <div className="para">
                  <ul>
                    <li>
                      Ready for a fun mental challenges ? Here is a game with
                      some hidden cards to unreveil.
                    </li>
                    <li>
                      As a player your task is to match pairs of images that are
                      randomly placed.
                    </li>
                    <li>
                      <b>Technologies Used:</b> HTML, CSS, React.Js.
                    </li>
                  </ul>
                </div>
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

          {/* <YouTube fill="white" width="30px" />
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
              navigate("/about");
            }}
          >
            About
          </p>

          <p>
            <a href="mailto:amailtoranjith@gmail.com">Contact</a>
          </p>

          <hr />
        </div>
      </div>
    </motion.div>
  );
}
