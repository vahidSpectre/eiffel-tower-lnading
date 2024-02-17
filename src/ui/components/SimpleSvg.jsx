import React from "react";

import classes from "./SimpleSvg.module.css";
const SimpleSvg = ({ src, title }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.image_container}>
        <img className={classes.image} src={src} alt="" />
      </span>
      <p className={classes.title}>{title}</p>
    </div>
  );
};

export default SimpleSvg;
