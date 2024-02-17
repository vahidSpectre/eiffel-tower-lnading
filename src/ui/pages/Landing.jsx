import React, { useState } from "react";
import Header from "../layout/Header";
import CustomButton from "../components/CustomButton";

import classes from "./Landing.module.css";
import UnderlinkedText from "../components/UnderlinedText";
import HeroTimeingWrapper from "../components/HeroTimeingWrapper";
import Section from "../components/Section";
import Thumnail from "../components/Thumnail";
import Svg from "../components/Svg";
import data from "../../data/data.json";
import Footer from "../layout/Footer";
import { Navigate, useNavigate } from "react-router-dom";
const Landing = () => {
  const [loadingVideo, setLoadingVideo] = useState(true);

  const navigate = useNavigate();
  return (
    <div className={classes.main_container}>
      <Header />
      <section className={classes.main_hero_wrapper}>
        <img
          className={`${classes.background_cover} ${
            loadingVideo ? classes.visible : classes.hidden
          }`}
          src={data.background_cover}
          alt="Eiffel Tower image"
        />
        <video
          className={`${classes.player} 
            ${!loadingVideo ? classes.visible : classes.hidden}
            `}
          autoPlay
          loop
          muted
          onLoadedData={() => setLoadingVideo(false)}
        >
          <source src={data.hero_video} type="video/mp4" />
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
        <CustomButton
          text={"View all Events"}
          border={true}
          onClick={() => navigate("/events")}
        />
        <CustomButton
          text={"Discover the Eiffel Tower"}
          border={true}
          onClick={() => navigate("/discover")}
        />
      </Section>
      <Section className={classes.now}>
        <UnderlinkedText text={"Now at the Tower"} />
      </Section>
      <Section className={classes.news}>
        <UnderlinkedText text={"News"} />
        <CustomButton
          text={"See all news"}
          border={true}
          onClick={() => navigate("/news")}
        />
      </Section>
      <Section
        className={classes.dontmiss}
        cardProps={classes.dontmiss_container}
      >
        <UnderlinkedText text={"Don't miss"} />
        <div className={classes.thumnail_container}>
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_1.image}
            title={data.thumnails.thumnail_1.title}
            caption={data.thumnails.thumnail_1.caption}
          />
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_2.image}
            title={data.thumnails.thumnail_2.title}
            caption={data.thumnails.thumnail_2.caption}
          />
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_3.image}
            title={data.thumnails.thumnail_3.title}
            caption={data.thumnails.thumnail_3.caption}
          />
        </div>
      </Section>
      <Section className={classes.youare}>
        <UnderlinkedText text={"If you are"} />
        <div className={classes.youare_container}>
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/family-group-svgrepo-com.svg"
            }
            caption={"Family"}
            border={true}
          />
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/travel.svg"
            }
            caption={"Professional in the Tourism Industry"}
            border={true}
          />
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/businessman-svgrepo-com.svg"
            }
            caption={"A business"}
            border={true}
          />
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/teacher-svgrepo-com.svg"
            }
            caption={"Teachers"}
            border={true}
          />
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/wheelchair-svgrepo-com.svg"
            }
            caption={"Visitors with disabilities"}
            border={true}
          />
          <Svg
            src={
              "https://vahidspectre.github.io/eiffel-tower-lnading/assets/images/ifyou-svgs/jurnal.svg"
            }
            caption={"A journalist"}
            border={true}
          />
        </div>
      </Section>
      <Section>
        <UnderlinkedText text={"The Eiffel Tower on social media"} />
        <CustomButton
          text={`   See more photos    `}
          border={true}
          onClick={() => navigate("/photos")}
        />
      </Section>
      <Footer />
    </div>
  );
};

export default Landing;
