import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { DEFAULT_URL } from "../../Constants";
axios.defaults.baseURL = DEFAULT_URL;

const fetchAllServicesByCategory = async (id) => {
  const { data } = await axios.get(`/api/services/${id}`);
  const result = data?.data;
  return result;
};

export const fetchAllServicesByCategoryById = createAsyncThunk(
  "services/fetchAllServicesByCategoryById",
  async (id) => {
    const result = await fetchAllServicesByCategory(id);
    return result;
  }
);
