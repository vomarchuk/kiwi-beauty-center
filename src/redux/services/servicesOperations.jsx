import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { DEFAULT_URL } from "../../Constants";
axios.defaults.baseURL = DEFAULT_URL;

export const getServicesByCategory = createAsyncThunk(
  "services/getServicesByCategory",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/services/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const addServiceByCategory = createAsyncThunk(
  "services/addServiceByCategory",
  async ({ categoryId, newService }) => {
    try {
      const { data } = await axios.post(
        `/api/services/${categoryId}/addService`,
        newService
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const removeServicesByCategory = createAsyncThunk(
  "services/removeServicesByCategory",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/services/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
