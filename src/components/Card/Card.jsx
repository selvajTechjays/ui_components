import React from "react";
import "./style.css";

export default function Card() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="hidden-circle"></div>
        <div className="icon-circle"></div>
        <div className="card">
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
}
