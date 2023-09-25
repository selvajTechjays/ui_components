import React from "react";
import "./style.css";

export default function CustomSelectBox({
  options,
  label,
  width,
  placeholder,
}) {
  return (
    <div className="field-box">
      {label && <label>{label}</label>}

      <select style={{ width: width }}>
        <option disabled selected hidden value="">
          {placeholder}
        </option>
        {options ? (
          options.map((data) => <option value={data.name}>{data.name}</option>)
        ) : (
          <option disabled value="">
            No data to display
          </option>
        )}
      </select>
    </div>
  );
}
