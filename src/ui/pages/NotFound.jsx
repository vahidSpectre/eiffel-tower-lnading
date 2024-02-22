import React, { useEffect, useState } from "react";

import classes from "./NotFound.module.css";
import Header from "../layout/Header";
import Section from "../components/Section";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [renderText, setRenderText] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  const text = "page not found !";

  useEffect(() => {
    let timeout;

    if (textIndex < text.length) {
      timeout = setTimeout(() => {
        setTextIndex((pre) => pre + 1);
        setRenderText((pre) => pre + text.charAt(textIndex));
      }, 50);
    }

    return () => clearInterval(timeout);
  }, [textIndex]);

  return (
    <div>
      <Header />
      <Section className={classes.content}>
     
        <div className={classes.text_container}>
          <span className={classes.ops_text}>Ooops</span>
          <span className={classes.error_text}>Error</span>
          <span className={classes.state_code}>404</span>
          <span className={classes.not_found}>{renderText}</span>
          <span className={classes.buttons}>
            <CustomButton
              text={"  Go Back  "}
              border={true}
              onClick={() => navigate(-1)}
            />
            <CustomButton
              text={"Homepage"}
              border={true}
              onClick={() => navigate(`/`)}
            />
          </span>
        </div>
      </Section>
    </div>
  );
};

export default NotFound;
