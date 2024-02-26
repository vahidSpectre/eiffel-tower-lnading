import React from "react";

import classes from "./CustomButton.module.css";

const CustomButton = ({ text, className, border, onClick }) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${
        border ? classes.button_border : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
      <br />
    </button>
  );
};

export default CustomButton;
