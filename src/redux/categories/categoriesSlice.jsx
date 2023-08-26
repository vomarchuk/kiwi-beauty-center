// import { persistReducer } from 'redux-persist';
// const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState,
//   reducers: {
//     update(state) {
//       state.value += 1;
//     },
//   },
// });

// const persistConfig = {
//   key: 'clicks',
//   storage,
// };

// export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);
// export const { update } = clicksSlice.actions;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEFAULT_URL } from "../../Constants";
//

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: DEFAULT_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `category`,
      transformResponse: (response) => response.data,
      providesTags: ["Category"],
    }),
  }),
});
export const { useGetAllCategoriesQuery } = categoriesAPI;
