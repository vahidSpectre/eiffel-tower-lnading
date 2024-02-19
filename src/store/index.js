import { configureStore, createSlice } from "@reduxjs/toolkit";

const initiaState = { language: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState: initiaState,
  reducers: {
    fr(state) {
      state.language = "fr";
    },
    en(state) {
      state.language = "en";
    },
    es(state) {
      state.language = "es";
    },
    it(state) {
      state.language = "it";
    },
    de(state) {
      state.language = "de";
    },
    pt(state) {
      state.language = "pt";
    },
    cn(state) {
      state.language = "en";
    },
    ja(state) {
      state.language = "ja";
    },
    ar(state) {
      state.language = "ar";
    },
  },
});


const store = configureStore({ reducer: { lan: languageSlice.reducer } });

export const languageActions = languageSlice.actions;

export default store;
