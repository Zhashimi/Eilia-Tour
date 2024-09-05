import React, { useRef, useEffect } from "react";
import { bamyandetails, banddetails, culturdetail } from "../data";

const MoreAbout = ({ onClose, isOpen }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTimeout(() => onClose(), 300);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <div className="modal-header">
          <h4 className="modal-subtitle">Bamyan & Band Amir</h4>
          <span className="close-btn" onClick={onClose}>
            X
          </span>
        </div>
        <div>
          <p>{bamyandetails}</p>
          <p>{banddetails}</p>
          <p>{culturdetail}</p>
        </div>
        <div>
          <a
            className="btn"
            href="https://www.weathercrave.com/weather-forecast-afghanistan/natural-site-52521/weather-forecast-band-e-amir-national-park-today"
            style={{ margin: "10px" }}
          >
            weather
          </a>
          <a
            className="btn"
            href="https://en-us.topographic-map.com/map-fnjhkl/Band-e-Amir-National-Park/?center=35.01718%2C67.51878&zoom=9"
            style={{ margin: "10px" }}
          >
            map
          </a>
          <a
            className="btn"
            href="https://www.youtube.com/watch?v=PYAxY4eiuY4"
            style={{ margin: "10px" }}
          >
            youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
