import React, { useEffect, useState } from "react";

import classes from "./EventCard.module.css";
const EventCard = ({ src, title, caption }) => {
  const [isRtl, setIsRtl] = useState(false);
  const language = localStorage.getItem("i18nextLng");

  useEffect(() => {
    language === "fa" ? setIsRtl(true) : setIsRtl(false);
  }, [language]);

  return (
    <div className={classes.wrapper} style={{textAlign:`${isRtl?"right":"left"}`}}>
      <span className={classes.image_container}>
        <img className={classes.image} src={src} alt="event" />
      </span>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.caption}>{caption}</p>
    </div>
  );
};

export default EventCard;
