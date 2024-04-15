import React, { useState } from "react";
import "./GenerateActivity.css";

export default function GenerateActivity() {
  return (
    <div className="Generate-Activity-MainContainer">
      <p className="Generate-Activity-Title">Activity type</p>
      <input type="text" className="Generate-Activity-Input" />

      <p className="Generate-Activity-Title">Price</p>
      <input type="number" className="Generate-Activity-Input" />

      <p className="Generate-Activity-Title">Accessibility</p>
      <input type="number" className="Generate-Activity-Input" />

      <p className="Generate-Activity-Title">Participants</p>
      <input type="number" className="Generate-Activity-Input" />

      <div className="Generate-Activity-Get-Container">
        <button className="Generate-Activity-Get">Get</button>
      </div>
    </div>
  );
}
