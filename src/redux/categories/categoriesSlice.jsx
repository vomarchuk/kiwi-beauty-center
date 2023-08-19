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
  baseQuery: fetchBaseQuery({ baseUrl: DEFAULT_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `category`,
    }),
  }),
});
export const { useGetAllCategoriesQuery } = categoriesAPI;
