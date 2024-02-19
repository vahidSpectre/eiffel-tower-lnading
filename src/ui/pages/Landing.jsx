import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import Photo from "../components/Photo";
import { useSelector, useDispatch } from "react-redux";
import { languageActions } from "../../store/index";

const Landing = () => {
  const [loadingVideo, setLoadingVideo] = useState(true);

  const navigate = useNavigate();
  const language = useSelector((state) => state.lan);
  const dispatch = useDispatch();

  const handleChangeLanguage = () => {
    dispatch(languageActions.ar());
  };
  useEffect(() => {
    console.log(language.language);
  }, [language.language]);

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
          <CustomButton
            text={"Buy a Ticket"}
            onClick={() => navigate("/a;sdkfj")}
          />
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

      <Section className={classes.events} cardProps={classes.events_card}>
        <UnderlinkedText text={"Events at the Tower"} />
        <EventCard
          src={data.events.event_1.src}
          title={data.events.event_1.title}
          caption={data.events.event_1.caption}
        />
        <CustomButton
          text={"View all Events"}
          border={true}
          onClick={() => navigate("/events")}
        />
        <div className={classes.journytop}>
          <div className={classes.image_container}>
            <img src={data.events.background} alt="Event background" />
          </div>
          <div className={classes.event_text_container}>
            <h3 className={classes.event_title}>A journey to the top</h3>
            <p className={classes.event_caption}>
              Come and discover the Eiffel Tower on the only trip to the top of
              it's kink in Europe, and let pure emotions carry you from the
              esplanade to the top.
            </p>
            <CustomButton
              text={"Discover the Eiffel Tower"}
              border={true}
              onClick={() => navigate("/discover")}
              style={classes.discover_btn}
            />
          </div>
        </div>
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
            src={data.youare.family.src}
            caption={data.youare.family.caption}
            border={true}
          />
          <Svg
            src={data.youare.industry.src}
            caption={data.youare.industry.caption}
            border={true}
          />
          <Svg
            src={data.youare.biz.src}
            caption={data.youare.biz.caption}
            border={true}
          />
          <Svg
            src={data.youare.teacher.src}
            caption={data.youare.teacher.caption}
            border={true}
          />
          <Svg
            src={data.youare.dis.src}
            caption={data.youare.dis.caption}
            border={true}
          />
          <Svg
            src={data.youare.journalist.src}
            caption={data.youare.journalist.caption}
            border={true}
          />
        </div>
      </Section>

      <Section className={classes.socialmedia}>
        <UnderlinkedText text={"The Eiffel Tower on social media"} />
        <div className={classes.gallery}>
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
          <Photo src={data.background_cover} />
        </div>
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
