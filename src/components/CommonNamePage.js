import { Input } from "postcss";
import React, { useEffect, useRef, useState } from "react";
import "./CommonNamePage.css";
import searchIcon from "../img/search.svg";

export default function CommonNamePage({ id, title, color, api }) {
  const [name, setName] = useState("");
  const [genderData, setGenderData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.${api}.io?name=${name}`);
      const data = await response.json();
      console.log(data);
      setGenderData(data);
    } catch (error) {
      console.error("Error fetching gender data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Name-Main-Container">
      <pre className="Name-Title">{title}</pre>
      <div className="Name-Search-Box-Container">
        <div className="Name-Input-Container">
          <input
            className="Name-Input"
            placeholder="First or full name"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="Search-Button"
          style={{ backgroundColor: color }}
          onClick={handleSearchClick}
          children={<img className="Search-Img" src={searchIcon} />}
        />
      </div>
      {loading ? (
        <p className="Name-Result">Predict...</p>
      ) : genderData ? (
        <p className="Name-Result">
          {genderData.name} is {genderData.gender} with{" "}
          {Math.round(genderData.probability * 100)}% certainty
        </p>
      ) : (
        <p className="Name-Result"></p>
      )}
    </div>
  );
}
