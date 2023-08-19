import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DEFAULT_URL } from "../../Constants";
import { NewService } from "../../components/Modal";

export const servicesAPI = createApi({
  reducerPath: "servicesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: DEFAULT_URL }),
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getAllServicesByCategoryId: builder.query({
      query: (categoryId) => `services/${categoryId}`,
      providesTags: ["Service"],
    }),
    addService: builder.mutation({
      query: (categoryId) => ({
        url: `services/${categoryId}`,
        method: "POST",
        body: NewService,
      }),
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

// router.delete(
//   '/:serviceId',
//   auth,
//   controllerWrapper(serviceCtrl.removeService)
// );
