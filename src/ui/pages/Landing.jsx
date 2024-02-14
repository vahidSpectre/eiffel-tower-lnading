import React from "react";
import Header from "../layout/Header";
import CustomButton from "../components/CustomButton";
import Wrapper from "../components/Wrapper";

import classes from "./Landing.module.css";
import UnderlinkedText from "../components/UnderlinedText";
import HeroTimeingWrapper from "../components/HeroTimeingWrapper";
const Landing = () => {
  return (
    <div>
      <Header />
      <Wrapper className={classes.main_hero_wrapper}>
        <video className={classes.player} autoPlay loop muted>
          <source
            src={"assets/video/tour-eiffel-timelapse-jour-nuit-recadre.mp4"}
            type="video/mp4"
          />
        </video>
        <Wrapper className={classes.hero_text_container}>
          <h1>The Eiffel Tower</h1>
          <h3>There's no felling like it...</h3>
          <CustomButton text={"Buy a Ticket"} />
        </Wrapper>
      </Wrapper>
        <section className={classes.timingContainer}>
          <HeroTimeingWrapper className={classes.timing_text}>
            hello
          </HeroTimeingWrapper>
          <HeroTimeingWrapper className={classes.timing_secondary}>
            hello
          </HeroTimeingWrapper>
          <HeroTimeingWrapper className={classes.timing_secondary}>
            hello
          </HeroTimeingWrapper>
          <HeroTimeingWrapper className={classes.timing_secondary}>
            hello
          </HeroTimeingWrapper>
        </section>
      <UnderlinkedText text={"Events at the Tower"} />

      <div style={{ height: "1000rem", backgroundColor: "red" }}></div>
    </div>
  );
};

export default Landing;
