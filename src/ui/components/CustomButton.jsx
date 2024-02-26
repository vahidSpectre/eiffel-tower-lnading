import React, { useEffect, useState } from "react";

import classes from "./CustomButton.module.css";

const CustomButton = ({ text, className, border, onClick }) => {
  const [isRtl, setIsRtl] = useState(false);
  const language = localStorage.getItem("i18nextLng");
  useEffect(() => {
    language === "fa" ? setIsRtl(true) : setIsRtl(false);
  }, [language]);

  return (
    <button
      type="button"
      className={`${classes.button} ${
        border ? classes.button_border : ""
      } ${className}`}
      onClick={onClick}
      style={{ direction: `${isRtl ? "rtl" : "ltr"}` }}
    >
      <div>{text}</div>
    </button>
  );
};

export default CustomButton;
