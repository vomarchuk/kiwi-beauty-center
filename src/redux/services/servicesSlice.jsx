import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DEFAULT_URL } from "../../Constants";

export const servicesAPI = createApi({
  reducerPath: "servicesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: DEFAULT_URL }),
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getAllServicesByCategoryId: builder.query({
      query: (categoryId) => `services/${categoryId}`,
      transformResponse: (response) => response.data,
      providesTags: ["Service"],
    }),
    addService: builder.mutation({
      method: "POST",
      query: ({ categoryId, newService }) => ({
        url: `services/${categoryId}`,
        method: "POST",
        body: newService,
        providesTags: ["Service"],
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: builder.mutation({
      query: (servicesId) => ({
        url: `services/${servicesId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});
export const {
  useGetAllServicesByCategoryIdQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
} = servicesAPI;
