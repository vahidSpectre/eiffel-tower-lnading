import React from "react";

import classes from "./CustomButton.module.css";
const CustomButton = ({ text, style, border }) => {
  return <div className={`${classes.button} ${border?classes.button_border:''} ${style}`}>{text}</div>;
};

export default CustomButton;
