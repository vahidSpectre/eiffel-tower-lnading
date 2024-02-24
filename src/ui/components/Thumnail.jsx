import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import classes from "./Thumnail.module.css";
import { nanoid } from "@reduxjs/toolkit";
const Thumnail = ({ className, src, title, caption }) => {
  const [isRtl, setIsRtl] = useState(false);
  const language = localStorage.getItem("i18nextLng");

  useEffect(() => {
    language === "fa" ? setIsRtl(true) : setIsRtl(false);
  }, [language, isRtl]);

  const id = nanoid()
  
  return (
    <motion.div
      className={`${classes.wrapper} ${className}`}
      initial={{ y: 0 }}
      whileHover={{
        boxShadow: [
          "0px 5px 10px rgb(194, 194, 194)",
          "0px 5px 20px rgb(96, 96, 96)",
          "0px 5px 15px rgb(150, 150, 150)",
        ],
        y: [-20, -25, -10],
      }}
      transition={{type:'tween'}}
      key={id}
    >
      <span className={classes.image_container}>
        <img className={classes.image} src={src} alt="image" />
      </span>
      <span className={classes.text}>
        <span>
          <h2
            className={classes.title}
            style={{ textAlign: `${isRtl ? "right" : "left"}` }}
          >
            {title}
          </h2>
          <p
            className={classes.caption}
            style={{ textAlign: `${isRtl ? "right" : "left"}` }}
          >
            {caption}
          </p>
        </span>
      </span>
    </motion.div>
  );
};

export default Thumnail;
