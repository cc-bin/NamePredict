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
          return (
            <div className="collect-item-container" key={index}>
              <p className="collect-type">{item.type}</p>
              <div className="collect-item">
                <p className="collect-activity">{item.activity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
