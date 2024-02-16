import React from "react";

import classes from "./Section.module.css";
const Section = ({ children, className, cardProps }) => {
  return (
    <section className={`${classes.main} ${cardProps}`}>
      <div className={`${classes.content} ${className}`}>{children}</div>
    </section>
  );
};

export default Section;
