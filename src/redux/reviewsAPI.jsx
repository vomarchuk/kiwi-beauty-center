import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsAPI = createApi({
  reducerPath: "reviewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kiwi-rest-api.herokuapp.com/api/",
  }),
  endpoints: (build) => ({
    getReviews: build.query({
      query: () => `reviews`,
    }),
  }),
});
export const { useGetReviewsQuery } = reviewsAPI;
