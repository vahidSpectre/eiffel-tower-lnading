import React from "react";

import classes from "./RoundedButton.module.css";
const RoundedButton = ({ disabled, text, onClick,className }) => {
  return (
    <button
    type="button"
      className={`${classes.wrapper} ${
        disabled ? classes.disabled : classes.enabled
      } ${className}`}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default RoundedButton;
