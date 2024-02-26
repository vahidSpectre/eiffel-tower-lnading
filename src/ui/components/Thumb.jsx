import React from "react";

import classes from "./Thumb.module.css";
const Thumb = ({ onClick, active, id }) => {
  return (
    <button
      className={`${classes.thumb} ${active ? classes.thumb_active : ""}`}
      onClick={onClick}
      type="button"
      key={id}
    >
    </button>
  );
};

export default Thumb;
