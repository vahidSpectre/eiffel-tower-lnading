import React from "react";

import classes from "./Thumnail.module.css";
const Thumnail = ({ className, src, title, caption }) => {
  return (
    <div className={`${classes.wrapper} ${className}`}>
      <span className={classes.image_container}>
        <img className={classes.image} src={src} alt="image" />
      </span>
      <span className={classes.text}>
        <span>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.caption}>{caption}</p>
        </span>
      </span>
    </div>
  );
};

export default Thumnail;
