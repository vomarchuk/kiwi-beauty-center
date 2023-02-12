import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { DEFAULT_URL } from "../../Constants";
axios.defaults.baseURL = DEFAULT_URL;

const fetchAllCategories = async () => {
  const { data } = await axios.get("/api/category");
  const result = data?.data;
  return result;
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const result = await fetchAllCategories();
    return result;
  }
);
