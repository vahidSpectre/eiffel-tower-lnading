import React from "react";

import classes from "./Footer.module.css";
import UnderlinkedText from "../components/UnderlinedText";
import CustomButton from "../components/CustomButton";

import data from "../../data/data.json";
import Section from "../components/Section";
import SimpleSvg from "../components/SimpleSvg";
import Svg from "../components/Svg";
const Footer = () => {
  return (
    <footer>
      <section
        className={`${classes.footer_top} ${classes.color_black} ${classes.text_white}`}
      >
        <UnderlinkedText text={"Book a ticket"} />
        <Section className={classes.footer_content}>
          <img src={data.footer_svgs.clock} alt="clock" />
          <p>Save time, buy your tickets online</p>
          <CustomButton text={"Buy a ticket"} />
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
          <span className={classes.text_white}>TOUREIFFEL.PARIS</span> THE
          OFFICIAL WEBSITE OF THE EIFFEL TOWER
        </p>
        <p className={classes.own}>
          A website owned by Sociéte d'Exploitation de la tour Eiffel
        </p>
      </section>
      <section className={`${classes.svgs_container} ${classes.color_black}`}>
        <Section className={`${classes.svgs} ${classes.text_white}`}>
          <SimpleSvg
            src={data.footer_svgs.access_map.src}
            title={data.footer_svgs.access_map.title}
          />
          <SimpleSvg
            src={data.footer_svgs.contact.src}
            title={data.footer_svgs.contact.title}
          />
          <SimpleSvg
            src={data.footer_svgs.faq.src}
            title={data.footer_svgs.faq.title}
          />
          <SimpleSvg
            src={data.footer_svgs.jobs.src}
            title={data.footer_svgs.jobs.title}
          />
          <SimpleSvg
            src={data.footer_svgs.press.src}
            title={data.footer_svgs.press.title}
          />
          <SimpleSvg
            src={data.footer_svgs.companies.src}
            title={data.footer_svgs.companies.title}
          />
          <SimpleSvg
            src={data.footer_svgs.schools.src}
            title={data.footer_svgs.schools.title}
          />
          <SimpleSvg
            src={data.footer_svgs.industry.src}
            title={data.footer_svgs.industry.title}
          />
          <SimpleSvg
            src={data.footer_svgs.sete.src}
            title={data.footer_svgs.sete.title}
          />
        </Section>
      </section>
      <section
        className={`${classes.info} ${classes.color_grey} ${classes.text_grey}`}
      >
        <Section className={classes.bottom_content}>
          <img className={classes.paris_svg} src={data.footer_svgs.paris.src} alt="" />
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
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.facebook.src}/>
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.x.src}/>
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.linkedin.src}/>
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.youtube.src}/>
          <Svg imageProps={classes.social_svg} src={data.footer_svgs.instagram.src}/>
        </Section>
      </section>
    </footer>
  );
};

export default Footer;
