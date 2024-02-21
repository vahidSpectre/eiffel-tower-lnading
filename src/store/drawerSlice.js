import { createSlice } from "@reduxjs/toolkit";

const initialState = { drawer: false };

const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    drawerClose(state) {
      state.drawer = false;
    },
    drawerOpen(state) {
      state.drawer = true;
    },
  },
});

export default drawerSlice;
