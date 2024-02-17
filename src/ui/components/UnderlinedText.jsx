import React from "react";

import classes from "./UnderlinedText.module.css";
const UnderlinkedText = ({ text }) => {
  return (
    <div className={classes.text_wrapper}>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default UnderlinkedText;
