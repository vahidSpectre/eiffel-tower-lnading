import React from "react";

import classes from "./HeroTimeingWrapper.module.css";
const HeroTimeingWrapper = ({ children, className, title,arrow }) => {
  return (
    <div className={`${classes.wrapper} ${className} ${arrow?classes.arrow:''}`}>
      <span className={classes.title}>{title}</span>
      <span className={classes.content}>{children}</span>
    </div>
  );
};

export default HeroTimeingWrapper;
