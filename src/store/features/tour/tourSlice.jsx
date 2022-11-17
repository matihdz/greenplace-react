import { createSlice } from "@reduxjs/toolkit";
import eventsTour from "./eventsTour";
import homeTour from "./homeTour";
import infoTour from "./infoTour";
import navTour from "./navTour";
import profileTour from "./profileTour";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    steps: [...profileTour],
  },
  reducers: {
    addStep(state, action) {
      state.steps.push(action.payload);
    },
  },
});

export const { addStep } = tourSlice.actions;

export default tourSlice.reducer;
