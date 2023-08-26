import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reviewsAPI } from "./reviewsAPI";
import { categoriesAPI } from "./categories/categoriesSlice";
import { servicesAPI } from "./services/servicesSlice";
import authSlice from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [servicesAPI.reducerPath]: servicesAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    reviewsAPI.middleware,
    categoriesAPI.middleware,
    servicesAPI.middleware,
  ],
});

export const persistor = persistStore(store);
