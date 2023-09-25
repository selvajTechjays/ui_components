import React from "react";
import "./style.css";

export default function CustomButton({ label, width, className, icon }) {
  return (
    <div>
      <button className={className} style={{ width: width }}>
        {icon && <span className="btn-icon">{icon}</span>}
        {label}
      </button>
    </div>
  );
}

// width
// label
// icon
// custom classname for styling
// disable button
// validation
// onClick
