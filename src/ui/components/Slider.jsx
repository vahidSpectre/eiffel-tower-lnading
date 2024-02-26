import React, { useEffect, useState } from "react";

import classes from "./Slider.module.css";
import { nanoid } from "@reduxjs/toolkit";
import Thumb from "./Thumb";
const Slider = ({ className, imgArray, titleArray, captionArray }) => {
  const [scroll, setScroll] = useState(0);
  const [isRtl, setIsRtl] = useState(false);

  const language = localStorage.getItem('i18nextLng');

  useEffect(() => {
    language === 'fa'?setIsRtl(true):setIsRtl(false);
  }, [language])
  
  const imgCount = imgArray.length;
  return (
    <div className={`${classes.main} ${className}`}>
      <div className={`${classes.wrapper}`}>
        <div
          className={classes.sheet}
          style={{ transform: `translateX(${scroll / imgCount}%)` }}
        >
          {imgArray.map((elem, i) => {
            const id = nanoid();
            return (
              <div className={classes.contant_wrapper} key={id}>
                <div className={classes.content}>
                  <img src={elem} alt="" />
                </div>
                <div className={classes.content_text}>
                  <div className={classes.text_wrapper}>
                    <h3 className={`${isRtl?classes.rtl:""}`}>{titleArray[i]}</h3>
                    <p className={`${isRtl?classes.rtl:""}`}>{captionArray[i]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.dot_container}>
        {imgArray.map((elem, i) => {
          const id = nanoid()
          return (
            <Thumb
              active={scroll == -i * 100 ? true:false}
              onClick={() => setScroll(-i * 100)}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
