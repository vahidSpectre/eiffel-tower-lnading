import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { drawerActions } from "../../store";
import Section from "../components/Section";
import RoundedButton from "../components/RoundedButton";
import data from "../../data/data.json";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ locale }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY;
    const pageHeight = window.innerHeight;
    if (scroll >= pageHeight) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  });
  const string = String(localStorage.getItem("i18nextLng"));
  return (
    <div
      className={`${classes.header} ${
        isHeaderSticky ? classes.fixed_header : classes.abs_header
      }`}
    >
      <Section className={classes.content_wrapper}>
        <ul className={classes.header_left_content}>
          <li>{`${t("header_1")}`}</li>
          <li>{`${t("header_2")}`}</li>
          <li>{`${t("header_3")}`}</li>
          <li>{`${t("header_4")}`}</li>
          <li>{`${t("header_5")}`}</li>
          <li>{`${t("header_6")}`}</li>
        </ul>
        <span className={classes.header_right_content}>
          {locale && (
            <RoundedButton
              onClick={() => dispatch(drawerActions.drawerOpen())}
              text={string}
              className={classes.locale_button}
            />
          )}
          <span className={classes.search_container}>
            <img src={data.header.search} alt="" />
          </span>
        </span>
      </Section>
    </div>
  );
};

export default Header;
