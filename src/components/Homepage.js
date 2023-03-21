import React, { useState, useEffect } from "react";

import YinYang from "../yinyong.svg";
import Profile from "../profile-orig.png";
import { Github, YouTube, Twitter } from "../assets/AllSVGs.js";

import "./Homepage.css";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageJustLoaded, setPageJustLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageJustLoaded(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <div className="grid-lines"></div>
      <div
        className={
          pageJustLoaded
            ? "no-display"
            : isLoading
            ? "grid-line-1-no-display"
            : "grid-line-1"
        }
      ></div>
      <div className="grid-line-2"></div>
      <div
        className={isLoading ? "loading-spinner" : "loading-spinner-off"}
        onClick={() => {
          setIsLoading((prev) => !prev);
        }}
      >
        <img src={YinYang} className="spinner-logo" alt="Loading" />

        <p className={isLoading ? "" : "no-display"}>
          <b>START</b>
        </p>
      </div>
      <div className={isLoading ? "no-display" : "intro-box"}>
        <div className="intro-text">
          <h1>Hi, There! 👋</h1>
          <p>
            <b>I'm Ranjith</b>
          </p>
        </div>
        <div className="intro-img">
          <img src={Profile} className="Profile-PNG" alt="Profile" />
        </div>
      </div>
      <div className={isLoading ? "no-display" : "work-heading"}>
        <h2>Work</h2>
      </div>
      <div className={isLoading ? "no-display" : "about-heading"}>
        <h2>About</h2>
      </div>
      <div className={isLoading ? "no-display" : "contact-heading"}>
        <h2>Contact</h2>
      </div>
      <div className={isLoading ? "no-display" : "contact-bar"}>
        <a href="https://github.com/ranjit-t/" target="_blank" rel="noreferrer">
          {" "}
          <Github fill="white" width="30px" />
        </a>

        <YouTube fill="white" width="30px" />
        <Twitter fill="white" width="30px" />
        <hr />
      </div>
    </div>
  );
}
