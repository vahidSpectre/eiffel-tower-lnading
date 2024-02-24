import React from "react";
import { motion } from "framer-motion";

import classes from "./Svg.module.css";
import { nanoid } from "@reduxjs/toolkit";
const Svg = ({ border, imageProps, src, caption }) => {
  const id = nanoid();
  return (
    <div className={classes.wrapper}>
      <motion.span
        className={`${classes.image_wrapper} ${border ? classes.border : ""}`}
        whileHover={{
          boxShadow: [
            "0px 0px 8px rgb(232, 232, 232)",
            "0px 0px 30px #222200",
            "0px 0px 8px #555555",
          ],
        }}
        transition={{duration:0.25,type:'tween'}}
        key={id}
      >
        <img className={`${classes.image} ${imageProps}`} src={src} alt="" />
      </motion.span>
      <p className={classes.caption}>{caption}</p>
    </div>
  );
};

export default Svg;
