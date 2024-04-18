import React, { useState, useEffect } from "react";
import "./GenerateActivity.css";
import BoredApi from "../net/BoredApi";
import ActivityModal from "./ActivityModal";

import tipsIcon from "../img/tips.svg";

import { showToast } from "./GlobalToast";

export default function GenerateActivity() {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [activityData, setActivityData] = useState({});
  const [params, setParams] = useState();

  const fetchActivityData = () => {
    const par = {
      type: document.getElementById("activityType").value,
      participants: document.getElementById("activityParticipants").value,
      maxPrice: document.getElementById("activityPrice").value,
      accessibility: document.getElementById("activityAccessibility").value,
    };
    setParams(par);

    showToast("please wait...", "success");
    BoredApi.boredAPi.getActivity(par).then((value) => {
      if (value.error) {
        showToast(value.error, "error");
      } else {
        setActivityData(value);
        setShowActivityModal(true);
      }
    });
  };

  return (
    <div className="Generate-Activity-Container">
      {/* <img src={tipsIcon} className="Generate-Activity-Tips" /> */}

      <div className="Generate-Activity-MainContainer">
        <p className="Generate-Activity-Title">Activity type</p>
        <select id="activityType" className="Generate-Activity-Select">
          <option value="">All</option>
          <option value="education">education</option>
          <option value="recreational">recreational</option>
          <option value="social">social</option>
          <option value="diy">diy</option>
          <option value="charity">charity</option>
          <option value="cooking">cooking</option>
          <option value="relaxation">relaxation</option>
          <option value="music">music</option>
          <option value="busywork">busywork</option>
        </select>

        <p className="Generate-Activity-Title">Participants</p>
        <input
          id="activityParticipants"
          type="number"
          className="Generate-Activity-Input"
          placeholder="[0,n]"
          min="0"
          max="99"
          step="1"
        />

        <p className="Generate-Activity-Title">Expense level</p>
        <input
          id="activityPrice"
          type="number"
          className="Generate-Activity-Input"
          placeholder="[0.0, 1.0]"
          min="0"
          max="1"
          step="0.1"
        />

        <p className="Generate-Activity-Title">Accessibility</p>
        <input
          id="activityAccessibility"
          type="number"
          className="Generate-Activity-Input"
          placeholder="[0.0, 1.0]"
          min="0"
          max="1"
          step="0.1"
        />

        <div className="Generate-Activity-Get-Container">
          <button
            className="Generate-Activity-Get"
            onClick={(e) => {
              fetchActivityData();
            }}
          >
            Get
          </button>
        </div>

        <ActivityModal
          isOpen={showActivityModal}
          data={activityData}
          params={params}
          onClose={() => {
            setShowActivityModal(false);
          }}
          onRefresh={() => {
            fetchActivityData();
          }}
        />
      </div>
    </div>
  );
}
