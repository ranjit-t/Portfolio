import React, { useEffect, useState } from "react";
import "./App.css";
import YinYang from "./yinyong.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [startApp, setStartApp] = useState(false);

  return (
    <div className="App">
      <div className={isLoading ? "no-display" : "work-heading"}>
        <h2>Work</h2>
      </div>
      <div className={isLoading ? "no-display" : "about-heading"}>
        <h2>About</h2>
      </div>
      <div className={isLoading ? "no-display" : "contact-heading"}>
        <h2>Contact</h2>
      </div>
      <img
        src={YinYang}
        className={isLoading ? "no-display" : "spinner-logo-in-app"}
        alt="Loading"
      />

      {isLoading ? (
        <div
          className="loading-spinner"
          onClick={() => {
            setStartApp(true);
            setIsLoading(false);
          }}
        >
          <img
            src={YinYang}
            className="spinner-logo"
            style={{ width: "200px", height: "200px" }}
            alt="Loading"
          />
          <p>Start</p>
        </div>
      ) : (
        <div className="all-parent">
          <div className="intro-box">
            <h1>About Me</h1>
            <p>Here is some information about myself.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
