import React, { useEffect, useState } from "react";

import classes from "./Drawer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions, languageActions } from "../../store";
import RoundedButton from "../components/RoundedButton";
import { useNavigate } from "react-router-dom";
import data from '../../data/data.json'

const Drawer = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const store = useSelector((state) => state.drawer);
  const lan = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    setDrawerOpen(store.drawer);
  }, [store.drawer]);

const handleCloseDrawer =()=>{
  dispatch(drawerActions.drawerClose())
}

  const navigate = useNavigate();

  const handleChangeLanguageFrance = () => {
    dispatch(languageActions.french());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/fr");
  };
  const handleChangeLanguageEnglish = () => {
    dispatch(languageActions.english());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/en");
  };
  const handleChangeLanguageEspanish = () => {
    dispatch(languageActions.spanish());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/es");
  };
  const handleChangeLanguageItalian = () => {
    dispatch(languageActions.italian());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/it");
  };
  const handleChangeLanguageDutsch = () => {
    dispatch(languageActions.deutsch());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/de");
  };
  const handleChangeLanguagePortu = () => {
    dispatch(languageActions.portgues());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/pt");
  };
  const handleChangeLanguageJapanese = () => {
    dispatch(languageActions.japanese());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/ja");
  };
  const handleChangeLanguageArabic = () => {
    dispatch(languageActions.persian());
    dispatch(drawerActions.drawerClose());
    navigate("eiffel-tower-lnading/fa");
  };

  return (
    <div className={classes.wrapper}>
      <div
        className={`${classes.backdrop} ${
          drawerOpen ? classes.visible : classes.hidden
        }`}
        onClick={handleCloseDrawer}
      ></div>
      <div
        className={`${classes.drawer_container} ${
          drawerOpen ? classes.open : classes.close
        }`}
      >
        <div className={classes.button_btn}>
          <RoundedButton
            text={"fr"}
            onClick={handleChangeLanguageFrance}
            disabled={
              localStorage.getItem("i18nextLng") === "fr" ? true : false
            }
          />
          <RoundedButton
            text={"en"}
            onClick={handleChangeLanguageEnglish}
            disabled={
              localStorage.getItem("i18nextLng") === "en" ? true : false
            }
          />
          <RoundedButton
            text={"es"}
            onClick={handleChangeLanguageEspanish}
            disabled={
              localStorage.getItem("i18nextLng") === "es" ? true : false
            }
          />
          <RoundedButton
            text={"it"}
            onClick={handleChangeLanguageItalian}
            disabled={
              localStorage.getItem("i18nextLng") === "it" ? true : false
            }
          />
          <RoundedButton
            text={"de"}
            onClick={handleChangeLanguageDutsch}
            disabled={
              localStorage.getItem("i18nextLng") === "de" ? true : false
            }
          />
          <RoundedButton
            text={"pt"}
            onClick={handleChangeLanguagePortu}
            disabled={
              localStorage.getItem("i18nextLng") === "pt" ? true : false
            }
          />
          <RoundedButton
            text={"ja"}
            onClick={handleChangeLanguageJapanese}
            disabled={
              localStorage.getItem("i18nextLng") === "ja" ? true : false
            }
          />
          <RoundedButton
            text={"fa"}
            onClick={handleChangeLanguageArabic}
            disabled={
              localStorage.getItem("i18nextLng") === "fa" ? true : false
            }
          />
        </div>
        <ul
          className={`${classes.button_text} ${
            drawerOpen ? classes.visible : classes.hidden
          }`}
        >
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "fr"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageFrance}
          >
            Français
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "en"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageEnglish}
          >
            English
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "es"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageEspanish}
          >
            Español
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "it"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageItalian}
          >
            Italiano
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "de"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageDutsch}
          >
            Deutsch
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "pt"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguagePortu}
          >
            Português
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "ja"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageJapanese}
          >
            日本語
          </li>
          <li
            className={`${
              localStorage.getItem("i18nextLng") === "fa"
                ? classes.disabled_text
                : ""
            }`}
            onClick={handleChangeLanguageArabic}
          >
            فارسی
          </li>
        </ul>
        <button type="button" className={classes.close_button} onClick={handleCloseDrawer}>
          <img src={data.drawer.x} alt="" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
