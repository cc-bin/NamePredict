import React, { useState, useEffect } from "react";
import "./CollectList.css";

import priceIcon from "../img/price.svg";
import participantsIcon from "../img/participants.svg";
import accessibilityIcon from "../img/accessibility.svg";
import shareBlueIcon from "../img/share_blue.svg";
import { activityShare } from "../utils/Utils";

export default function CollectList() {
  const [collectList, setCollectList] = useState([]);

  useEffect(() => {
    const savedDataList = localStorage.getItem("collectList");
    if (savedDataList) {
      setCollectList(JSON.parse(savedDataList).slice().reverse());
    }
  }, []);

  return (
    <div className="collect-list-container">
      <div className="collect-list">
        {collectList.length == 0 ? (
          <p className="collect-empty-tip">
            There are currently no collections, go get the activity now!
          </p>
        ) : (
          collectList.map((item, index) => {
            return (
              <div className="collect-item-container" key={index}>
                <p className="collect-type">{item.type}</p>
                <img
                  src={shareBlueIcon}
                  className="collect-share"
                  onClick={() => {
                    activityShare(item);
                  }}
                />
                <div className="collect-item">
                  <p className="collect-activity">{item.activity}</p>
                  <div className="collect-item-detail">
                    {CollectDetailItem(priceIcon, item.price)}
                    {CollectDetailItem(participantsIcon, item.participants)}
                    {CollectDetailItem(accessibilityIcon, item.accessibility)}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function CollectDetailItem(icon, title) {
  return (
    <div className="collect-detail-item">
      <img src={icon} className="collect-detail-item-icon" alt="" />
      <p className="collect-detail-item-title">{title}</p>
    </div>
  );
}
