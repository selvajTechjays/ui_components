import React from "react";
import "./style.css";

export default function CustomTextField({ label, width, height, className }) {
  return (
    <div className="field-box">
      {label && <label>{label}</label>}
      <input style={{ width: width, height: height }} />
    </div>
  );
}
