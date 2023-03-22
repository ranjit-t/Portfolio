// import React from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";

import Rlogo from "./Rlogo.svg";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div>
        <img src={Rlogo} alt="R" className="r-logo" />
      </div>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
