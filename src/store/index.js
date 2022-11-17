import { configureStore } from "@reduxjs/toolkit";
import tourSliceReducer from "./features/tour/tourSlice";

export const store = configureStore({
  reducer: {
    tour: tourSliceReducer,
  },
});
