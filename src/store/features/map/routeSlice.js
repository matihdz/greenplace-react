import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "routeMap",
  initialState: {
    steps: [],
    duration: 0,
    distance: 0,
  },
  reducers: {
    setRouteValues: (state, action) => {
      state.steps = [...action.payload.steps];
      state.duration = action.payload.duration;
      state.distance = action.payload.distance;
    },
  },
});

export const { setRouteValues } = routeSlice.actions;

export default routeSlice.reducer;
