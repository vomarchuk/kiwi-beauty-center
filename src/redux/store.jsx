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

import { reviewsAPI } from "./reviewsAPI";
import categoriesReducer from "./categories/categoriesReducer";
import servicesReducer from "./services/servicesReducer";
import { clicksReducer } from "./categories/categoriesSlice";
//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
export const { useGetPokemonByNameQuery } = pokemonApi;
//
export const store = configureStore({
  reducer: {
    clicks: clicksReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    categories: categoriesReducer,
    services: servicesReducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(reviewsAPI.middleware),
});

export const persistor = persistStore(store);
