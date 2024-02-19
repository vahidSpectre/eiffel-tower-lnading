import React from "react";

import classes from "./EventCard.module.css";
const EventCard = ({ src, title, caption }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.image_container}>
        <img className={classes.image} src={src} alt="event" />
      </span>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.caption}>{caption}</p>
    </div>
  );
};

export default EventCard;
