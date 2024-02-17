import React from "react";

import classes from "./Svg.module.css";
const Svg = ({ border,imageProps,src, caption }) => {
  return (
    <div className={classes.wrapper}>
      <span className={`${classes.image_wrapper} ${border?classes.border:''}`}>
        <img className={`${classes.image} ${imageProps}`} src={src} alt="" />
      </span>
      <p className={classes.caption}>{caption}</p>
    </div>
  );
};

export default Svg;
