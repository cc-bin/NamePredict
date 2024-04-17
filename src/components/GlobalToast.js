// GlobalToast.js

import React, { useState, useEffect } from "react";
import "./GlobalToast.css";

let showToastFunction;

const GlobalToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  const [duration, setDuration] = useState(3000);
  let timeout = null;

  useEffect(() => {
    showToastFunction = (message, type, dur) => {
      timeout && clearTimeout(timeout);
      dur = dur || 3000;
      setMessage(message);
      setType(type || "info");
      setDuration(dur);
      setIsVisible(true);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, dur);
    };
  }, []);

  return (
    <div className={`toast ${type} ${isVisible ? "show" : ""}`}>{message}</div>
  );
};

export default GlobalToast;

export const showToast = (message, type, dur = 3000) => {
  showToastFunction(message, type, dur);
};
