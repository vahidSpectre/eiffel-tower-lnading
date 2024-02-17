import React from "react";

import classes from "./CustomButton.module.css";
const CustomButton = ({ text, style, border, onClick }) => {
  return (
    <div
      className={`${classes.button} ${
        border ? classes.button_border : ""
      } ${style}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CustomButton;
