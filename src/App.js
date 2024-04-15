import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Switch from "./components/Switch";
import GenerateActivity from "./components/GenerateActivity";

function App() {
  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <header className="MainContainer">
        <div className="Toolbar">
          <p className="ToolbarTitle">Bored</p>
        </div>

        <div className="MainContent">
          <GenerateActivity />
        </div>
      </header>
    </div>
  );
}

export default App;
