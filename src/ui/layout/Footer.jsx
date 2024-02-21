import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Footer.module.css";
import UnderlinkedText from "../components/UnderlinedText";
import CustomButton from "../components/CustomButton";

import data from "../../data/data.json";
import Section from "../components/Section";
import SimpleSvg from "../components/SimpleSvg";
import Svg from "../components/Svg";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section
        className={`${classes.footer_top} ${classes.color_black} ${classes.text_white}`}
      >
        <UnderlinkedText text={`${t("booking")}`} />
        <Section className={classes.footer_content}>
          <img src={data.footer_svgs.clock} alt="clock" />
          <p>{`${t("save_time")}`}</p>
          <CustomButton text={`${t("buy_ticket")}`} />
        </Section>
      </section>
      <section
        className={`${classes.copy_right} ${classes.color_grey} ${classes.text_grey}`}
      >
        <span className={classes.image_container}>
          <img
            className={classes.image}
            src={data.footer_svgs.tower}
            alt="tower"
          />
        </span>
        <p className={classes.announce}>
          <span className={classes.text_white}>{`${t("tp_white")}`}</span>
          {`${t("tp_grey")}`}
        </p>
        <p className={classes.own}>{`${t("copyright")}`}</p>
      </section>
      <section className={`${classes.svgs_container} ${classes.color_black}`}>
        <Section className={`${classes.svgs} ${classes.text_white}`}>
          <SimpleSvg
            src={data.footer_svgs.access_map.src}
            title={`${t("access_map")}`}
          />
          <SimpleSvg
            src={data.footer_svgs.contact.src}
            title={`${t("contact")}`}
          />
          <SimpleSvg src={data.footer_svgs.faq.src} title={`${t("faq")}`} />
          <SimpleSvg src={data.footer_svgs.jobs.src} title={`${t("jobs")}`} />
          <SimpleSvg src={data.footer_svgs.press.src} title={`${t("press")}`} />
          <SimpleSvg
            src={data.footer_svgs.companies.src}
            title={`${t("companies")}`}
          />
          <SimpleSvg
            src={data.footer_svgs.schools.src}
            title={`${t("schools")}`}
          />
          <SimpleSvg
            src={data.footer_svgs.industry.src}
            title={`${t("pro")}`}
          />
          <SimpleSvg src={data.footer_svgs.sete.src} title={`${t("sete")}`} />
        </Section>
      </section>
      <section
        className={`${classes.info} ${classes.color_grey} ${classes.text_grey}`}
      >
        <Section className={classes.bottom_content}>
          <img
            className={classes.paris_svg}
            src={data.footer_svgs.paris.src}
            alt=""
          />
          <p>-</p>
          <h2>Legal information</h2>
          <p>-</p>
          <h2>Data protection policy</h2>
          <p>-</p>
          <h2>Cookies</h2>
          <p>-</p>
          <h2>Credits</h2>
        </Section>
        <p>Follow us on</p>
        <Section className={classes.social_meida}>
          <Svg
            imageProps={classes.social_svg}
            src={data.footer_svgs.facebook.src}
          />
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.x.src} />
          <Svg
            imageProps={classes.social_svg}
            src={data.footer_svgs.linkedin.src}
          />
          <Svg
            imageProps={classes.social_svg}
            src={data.footer_svgs.youtube.src}
          />
          <Svg
            imageProps={classes.social_svg}
            src={data.footer_svgs.instagram.src}
          />
        </Section>
      </section>
    </footer>
  );
};

export default Footer;
