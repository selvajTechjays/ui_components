import React, { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";

import CustomSelectBox from "../../components/SelectBox/CustomSelectBox";
import CustomButton from "../../components/Button/CustomButton";
import CustomTextField from "../../components/TextField/CustomTextField";

export default function Form() {
  let cars = [
    { id: 1, name: "Volvo" },
    { id: 2, name: "Saab" },
    { id: 3, name: "Mercedes" },
    { id: 4, name: "Audi" },
  ];

  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("res", res);
      setOptions(res.data);
    });
  }, []);

  console.log("options", options);

  return (
    <div className="container">
      <CustomSelectBox
        options={cars}
        label={"Choose a car:"}
        width="300px"
        placeholder="Select the car"
      />
      <CustomSelectBox
        options={options}
        label={"Choose a car:"}
        width="300px"
        placeholder="Select the car"
      />
      <CustomSelectBox
        label={"Choose a car:"}
        width="300px"
        placeholder="Select..."
      />
      <CustomTextField label={"Enter the Name"} width="300px" />

      <CustomButton
        className="primaryBtn"
        label="Submit"
        width="300px"
        variant="filled"
        icon="✅"
      />
      <CustomButton
        className="secondaryBtn"
        label="Cancel"
        width="300px"
        variant="outlined"
      />
    </div>
  );
}
