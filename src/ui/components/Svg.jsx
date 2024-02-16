import React from "react";

import classes from "./Svg.module.css";
const Svg = ({ src, caption }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.image_wrapper}>
        <img className={classes.image} src={src} alt="" />
      </span>
      <p className={classes.caption}>{caption}</p>
    </div>
  );
};

export default Svg;
