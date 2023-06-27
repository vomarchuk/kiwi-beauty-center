import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { DEFAULT_URL } from "../../Constants";
axios.defaults.baseURL = DEFAULT_URL;

export const fetchAllServicesByCategoryById = createAsyncThunk(
  "services/fetchAllServicesByCategoryById",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/services/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
