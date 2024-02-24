import React from "react";
import { motion } from "framer-motion";

import classes from "./HeroTimeingWrapper.module.css";
import { nanoid } from "@reduxjs/toolkit";
const HeroTimeingWrapper = ({ children, className, title, arrow, animate }) => {
  const id = nanoid();
  return (
    <motion.div
      className={`${classes.wrapper} ${className} ${
        arrow ? classes.arrow : ""
      }`}
      whileHover={{ scale: animate ? 1.05 : 1 }}
      key={id}
    >
      <span className={classes.title}>{title}</span>
      <span className={classes.content}>{children}</span>
    </motion.div>
  );
};

export default HeroTimeingWrapper;
