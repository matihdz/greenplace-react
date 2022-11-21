import { configureStore } from "@reduxjs/toolkit";
import tourSliceReducer from "./features/tour/tourSlice";
import routeSliceReducer from "./features/map/routeSlice";

export const store = configureStore({
  reducer: {
    tour: tourSliceReducer,
    route: routeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
