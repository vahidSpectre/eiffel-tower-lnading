import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: localStorage.getItem("i18nextLng") || "en" };

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    french(state) {
      state.language = "fr";
      localStorage.setItem("i18nextLng", "fr");
    },
    english(state) {
      state.language = "en";
      localStorage.setItem("i18nextLng", "en");
    },
    spanish(state) {
      state.language = "es";
      localStorage.setItem("i18nextLng", "es");
    },
    italian(state) {
      state.language = "it";
      localStorage.setItem("i18nextLng", "it");
    },
    deutsch(state) {
      state.language = "de";
      localStorage.setItem("i18nextLng", "de");
    },
    portgues(state) {
      state.language = "pt";
      localStorage.setItem("i18nextLng", "pt");
    },
    japanese(state) {
      state.language = "ja";
      localStorage.setItem("i18nextLng", "ja");
    },
    persian(state) {
      state.language = "fa";
      localStorage.setItem("i18nextLng", "fa");
    },
  },
});

export default languageSlice;
