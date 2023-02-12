import { configureStore } from "@reduxjs/toolkit";
import { reviewsAPI } from "./reviewsAPI";

import categoriesReducer from "./categories/categoriesReducer";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsAPI.middleware),
});
