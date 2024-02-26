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
import { useTranslation } from "react-i18next";
import CombinedThumnail from "../components/CombinedThumnail";
import Slider from "../components/Slider";
import Thumb from "../components/Thumb";

const Landing = () => {
  const [loadingVideo, setLoadingVideo] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [timingContentIndex, setTimingContentIndex] = useState(0);

  const navigate = useNavigate();
  const language = localStorage.getItem("i18nextLng");

  const { t } = useTranslation();

  useEffect(() => {
    language === "fa" ? setIsRtl(true) : setIsRtl(false);
  }, [language, isRtl]);

  return (
    <div className={classes.main_container}>
      <Header locale={true} />
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
        <span
          className={classes.hero_text_container}
          style={{ direction: `${isRtl ? "rtl" : "ltr"}` }}
        >
          <h1>{t("hero_title")}</h1>
          <h3>{t("hero_caption")}</h3>
          <CustomButton text={t("buy_ticket")} onClick={() => navigate("/")} />
        </span>
      </section>
      <Section className={classes.timingContainer}>
        <HeroTimeingWrapper
          className={classes.timing_text}
          title={`${t("timing_title_1")}`}
        >
          <div className={classes.timing_content_wrapper}>
            <div
              className={classes.timing_sheet}
              style={{
                transform: `translateY(${(timingContentIndex * 100) / 2}%)`,
              }}
            >
              <div className={classes.timing_content}>asdf</div>
              <div className={classes.timing_content}>1234</div>
            </div>
          </div>
          <Thumb
            onClick={() => setTimingContentIndex(0)}
            active={timingContentIndex === 0 ? true : false}
          />
          <Thumb
            onClick={() => setTimingContentIndex(-1)}
            active={timingContentIndex === -1 ? true : false}
          />
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={`${t("timing_title_2")}`}
          arrow={true}
          animate={true}
        >
          hello
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={`${t("timing_title_3")}`}
          arrow={true}
          animate={true}
        >
          hello
        </HeroTimeingWrapper>
        <HeroTimeingWrapper
          className={classes.timing_secondary}
          title={`${t("timing_title_4")}`}
          arrow={true}
          animate={true}
        >
          hello
        </HeroTimeingWrapper>
      </Section>

      <Section className={classes.events} cardProps={classes.events_card}>
        <UnderlinkedText text={`${t("events_title")}`} />
        <EventCard
          src={data.events.event_1.src}
          title={`${t("events_p1_title")}`}
          caption={`${t("events_p1_caption")}`}
        />
        <CustomButton
          text={`${t("all_events")}`}
          border={true}
          onClick={() =>
            navigate(`/${localStorage.getItem("i18nextLng")}/events`)
          }
        />
        <div className={classes.journytop}>
          <div className={classes.image_container}>
            <img src={data.events.background} alt="Event background" />
          </div>
          <div className={classes.event_text_container}>
            <h3 className={classes.event_title}>A journey to the top</h3>
            <p className={classes.event_caption}>{`${t(
              "journty_top_title"
            )}`}</p>
            <CustomButton
              text={`${t("discover")}`}
              border={true}
              onClick={() =>
                navigate(`/${localStorage.getItem("i18nextLng")}/discover`)
              }
              className={classes.discover_btn}
            />
          </div>
        </div>
      </Section>

      <Section className={classes.now}>
        <UnderlinkedText text={t("now_title")} />
        <span className={classes.now_thum_container}>
          <CombinedThumnail
            src={data.now.pic_1}
            topTitle={t("now_thumnail_1_top_title")}
            caption={t("now_thumnail_1_caption")}
            botTitle={t("now_thumnail_1_bot_title")}
          />
          <CombinedThumnail
            src={data.now.pic_2}
            topTitle={t("now_thumnail_2_top_title")}
            caption={t("now_thumnail_2_caption")}
            botTitle={t("now_thumnail_2_bot_title")}
          />
          <CombinedThumnail
            src={data.now.pic_3}
            topTitle={t("now_thumnail_3_top_title")}
            caption={t("now_thumnail_3_caption")}
            botTitle={t("now_thumnail_3_bot_title")}
          />
        </span>
      </Section>

      <Section className={classes.news} cardProps={classes.news_card}>
        <UnderlinkedText text={`${t("news_title")}`} />

        <Slider
          imgArray={[data.news.pic_1, data.news.pic_2]}
          titleArray={[t("news_1_title"), t("news_2_title")]}
          captionArray={[t("news_1_caption"), t("news_2_caption")]}
        />

        <CustomButton
          text={`${t("all_news")}`}
          border={true}
          onClick={() =>
            navigate(`/${localStorage.getItem("i18nextLng")}/news`)
          }
        />
      </Section>

      <Section
        className={classes.dontmiss}
        cardProps={classes.dontmiss_container}
      >
        <UnderlinkedText text={`${t("miss_title")}`} />
        <div className={classes.thumnail_container}>
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_1.image}
            title={`${t("miss_1_title")}`}
            caption={`${t("miss_1_caption")}`}
          />
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_2.image}
            title={`${t("miss_2_title")}`}
            caption={`${t("miss_2_caption")}`}
          />
          <Thumnail
            className={classes.thumnail}
            src={data.thumnails.thumnail_3.image}
            title={`${t("miss_3_title")}`}
            caption={`${t("miss_3_caption")}`}
          />
        </div>
      </Section>

      <Section className={classes.youare}>
        <UnderlinkedText text={`${t("you_title")}`} />
        <div className={classes.youare_container}>
          <Svg
            src={data.youare.family.src}
            caption={`${t("you_1")}`}
            border={true}
          />
          <Svg
            src={data.youare.industry.src}
            caption={`${t("you_2")}`}
            border={true}
          />
          <Svg
            src={data.youare.biz.src}
            caption={`${t("you_3")}`}
            border={true}
          />
          <Svg
            src={data.youare.teacher.src}
            caption={`${t("you_4")}`}
            border={true}
          />
          <Svg
            src={data.youare.dis.src}
            caption={`${t("you_5")}`}
            border={true}
          />
          <Svg
            src={data.youare.journalist.src}
            caption={`${t("you_6")}`}
            border={true}
          />
        </div>
      </Section>

      <Section className={classes.socialmedia}>
        <UnderlinkedText text={`${t("media_title")}`} />
        {/* <div className={classes.gallery}>
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
        </div> */}
        <CustomButton
          text={`   ${t("all_media")}   `}
          border={true}
          onClick={() =>
            navigate(`/${localStorage.getItem("i18nextLng")}/photos`)
          }
        />
      </Section>
      <Footer />
    </div>
  );
};

export default Landing;
