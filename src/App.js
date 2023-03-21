import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Rlogo from "./Rlogo.svg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={Rlogo} alt="R" className="r-logo" />
      </div>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
