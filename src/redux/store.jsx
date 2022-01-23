import { configureStore } from "@reduxjs/toolkit";
import { reviewsAPI } from "./reviewsAPI";

export const store = configureStore({
  reducer: {
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsAPI.middleware),
});
