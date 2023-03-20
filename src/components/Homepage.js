import React, { useState } from "react";
// useEffect,
import YinYang from "../yinyong.svg";
import "./Homepage.css";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <div
        className={isLoading ? "loading-spinner" : "loading-spinner-off"}
        onClick={() => {
          setIsLoading((prev) => !prev);
        }}
      >
        <img src={YinYang} className="spinner-logo" alt="Loading" />
        <p>Start</p>
      </div>
      <div className={isLoading ? "no-display" : "intro-box"}>
        <h1>About Me</h1>
        <p>Here is some information about myself.</p>
      </div>
      <hr></hr>

      <div className={isLoading ? "no-display" : "work-heading"}>
        <h2>Work</h2>
      </div>
      <div className={isLoading ? "no-display" : "about-heading"}>
        <h2>About</h2>
      </div>
      <div className={isLoading ? "no-display" : "contact-heading"}>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
// <div className={isLoading ? "no-display" : "work-heading"}>
//     <h2>Work</h2>
//   </div>
//   <div className={isLoading ? "no-display" : "about-heading"}>
//     <h2>About</h2>
//   </div>
//   <div className={isLoading ? "no-display" : "contact-heading"}>
//     <h2>Contact</h2>
//   </div>
//   <img
//     src={YinYang}
//     className={isLoading ? "no-display" : "spinner-logo-in-app"}
//     alt="Loading"
//   />

//   {isLoading ? (
//     <div
//       className="loading-spinner"
//       onClick={() => {
//         setStartApp(true);
//         setIsLoading(false);
//       }}
//     >
//       <img
//         src={YinYang}
//         className="spinner-logo"
//         style={{ width: "200px", height: "200px" }}
//         alt="Loading"
//       />
//       <p>Start</p>
//     </div>
//   ) : (
//     <div className="all-parent">
//       <div className="intro-box">
//         <h1>About Me</h1>
//         <p>Here is some information about myself.</p>
//       </div>
//     </div>
//   )}
