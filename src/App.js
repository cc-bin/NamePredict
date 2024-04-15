import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="ParamsSwitch">
          <p className="Params">Params</p>
          <Switch
            isOn={value}
            onColor="#EF476F"
            handleToggle={() => setValue(!value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
