import React from "react";
import Header from "../layout/Header";
import CustomButton from "../components/CustomButton";
import Wrapper from "../components/Wrapper";

import classes from "./Landing.module.css";
import UnderlinkedText from "../components/UnderlinedText";
import HeroTimeingWrapper from "../components/HeroTimeingWrapper";
import Section from "../components/Section";
import Thumnail from "../components/Thumnail";
import Svg from "../components/Svg";
const Landing = () => {
  return (
    <div className={classes.main_container}>
      <Header />
      <section className={classes.main_hero_wrapper}>
        <video className={classes.player} autoPlay loop muted>
          <source
            src={
              "/assets/video/tour-eiffel-timelapse-jour-nuit-recadre.mp4"
            }
            type="video/mp4"
          />
        </video>
        <span className={classes.hero_text_container}>
          <h1>The Eiffel Tower</h1>
          <h3>There's no felling like it...</h3>
          <CustomButton text={"Buy a Ticket"} />
        </span>
      </section>

      <Section className={classes.timingContainer}>
        <HeroTimeingWrapper
          className={classes.timing_text}
          title={"What to know today"}
        >
          xzcv
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={"Waiting times"}
          arrow={true}
        >
          hello
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={"Opening times"}
          arrow={true}
        >
          hello
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={"Access map"}
          arrow={true}
        >
          hello
        </HeroTimeingWrapper>
      </Section>

      <Section className={classes.events}>
        <UnderlinkedText text={"Events at the Tower"} />
      </Section>
      <Section className={classes.now}>
        <UnderlinkedText text={"Now at the Tower"} />
      </Section>
      <Section className={classes.news}>
        <UnderlinkedText text={"News"} />
      </Section>
      <Section
        className={classes.dontmiss}
        cardProps={classes.dontmiss_container}
      >
        <UnderlinkedText text={"Don't miss"} />
        <div className={classes.thumnail_container}>
          <Thumnail
            className={classes.thumnail}
            src={
              "/assets/images/le-monument-thumbnail.jpg"
            }
            title={"The Tower"}
            caption={
              " History, key figures, lights, paintings, explore all the secrets of the world's most iconic monument"
            }
          />
          <Thumnail
            className={classes.thumnail}
            src={
              "/assets/images/retaurants-boutiques-thumbnail.jpg"
            }
            title={"The Tower"}
            caption={
              " History, key figures, lights, paintings, explore all the secrets of the world's most iconic monument"
            }
          />
          <Thumnail
            className={classes.thumnail}
            src={
              "/assets/images/le-salon-gustave-eiffel-thumbnail.jpg"
            }
            title={"The Tower"}
            caption={
              " History, key figures, lights, paintings, explore all the secrets of the world's most iconic monument"
            }
          />
        </div>
      </Section>
      <Section className={classes.youare}>
        <UnderlinkedText text={"If you are"} />
        <div className={classes.youare_container}>
          <Svg
            src={
              "/assets/images/ifyou-svgs/family-group-svgrepo-com.svg"
            }
            caption={"Family"}
          />
          <Svg
            src={
              "/assets/images/ifyou-svgs/travel.svg"
            }
            caption={"Professional in the Tourism Industry"}
          />
          <Svg
            src={
              "/assets/images/ifyou-svgs/businessman-svgrepo-com.svg"
            }
            caption={"A business"}
          />
          <Svg
            src={
              "/assets/images/ifyou-svgs/teacher-svgrepo-com.svg"
            }
            caption={"Teachers"}
          />
          <Svg
            src={
              "/assets/images/ifyou-svgs/wheelchair-svgrepo-com.svg"
            }
            caption={"Visitors with disabilities"}
          />
          <Svg
            src={
              "/assets/images/ifyou-svgs/jurnal.svg"
            }
            caption={"A journalist"}
          />
        </div>
      </Section>
    </div>
  );
};

export default Landing;
