import { configureStore } from "@reduxjs/toolkit";
import { reviewsAPI } from "./reviewsAPI";

import categoriesReducer from "./categories/categoriesReducer";
import servicesReducer from "./services/servicesReducer";

// import servicesSlice from './services/slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    services: servicesReducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsAPI.middleware),
});
