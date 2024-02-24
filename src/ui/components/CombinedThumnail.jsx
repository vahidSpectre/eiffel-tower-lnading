import React, { useEffect, useState } from "react";

import { animate, motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";

import classes from "./CombinedThumnail.module.css";
const CombinedThumnail = ({ src, topTitle, caption, botTitle }) => {
  const [isRtl, setIsRtl] = useState(false);
  const language = localStorage.getItem("i18nextLng");

  useEffect(() => {
    language === "fa" ? setIsRtl(true) : setIsRtl(false);
  }, [language]);

  const id = nanoid();

  const arrow = {
    initial: { x: 0 },
    animate: { x: 5 },
  };
  const card = {
    initial: { y: 0 },
    animate: { y: -20 },
  };

  return (
    <motion.div
      className={classes.wrapper}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
      }}
      layout
      key={topTitle}
      initial="initial"
      animate="initial"
      variants={card}
      whileHover='animate'
    >
      <img src={src} alt="" />
      <div className={classes.content}>
        <p
          className={classes.top_title}
          style={{ direction: `${isRtl ? "rtl" : "ltr"}` }}
        >
          {topTitle}
        </p>
        <p
          className={classes.caption}
          style={{ direction: `${isRtl ? "rtl" : "ltr"}` }}
        >
          {caption}
        </p>
      </div>
      <span className={classes.bottom_content}>
        <motion.div className={classes.arrow} variants={arrow}>
          &#10095;
        </motion.div>
        <p
          className={classes.bot_title}
          style={{ direction: `${isRtl ? "rtl" : "ltr"}` }}
        >
          {botTitle}
        </p>
      </span>
    </motion.div>
  );
};

export default CombinedThumnail;
