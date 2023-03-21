import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";

import Rlogo from "./Rlogo.svg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={Rlogo} alt="R" className="r-logo" />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
