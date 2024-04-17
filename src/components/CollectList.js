import React, { useState, useEffect } from "react";
import "./CollectList.css";

export default function CollectList() {
  const [collectList, setCollectList] = useState([]);

  useEffect(() => {
    const savedDataList = localStorage.getItem("collectList");
    if (savedDataList) {
      setCollectList(JSON.parse(savedDataList));
    }
  }, []);

  return (
    <div className="collect-list-container">
      <div className="collect-list">
        {collectList.map((item, index) => {
          console.log(JSON.stringify(item));
          return (
            <div className="collect-item" key={index}>
              <p className="collect-title">{item.activity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
