import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./languageSlice";
import drawerSlice from "./drawerSlice";

const store = configureStore({
  reducer: { language: languageSlice.reducer, drawer: drawerSlice.reducer },
});

export const languageActions = languageSlice.actions;
export const drawerActions = drawerSlice.actions;

export default store;
