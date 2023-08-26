import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_URL } from "../../Constants";

axios.defaults.baseURL = DEFAULT_URL;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const fetchCurrentUser = createAsyncThunk(
  "/auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
      return thunkAPI.rejectedWithValue();
      // return state!;
    }
    token.set(persisterToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      throw error;
    }
  }
);
const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data?.data.token);
    return data?.data;
  } catch (error) {
    throw error;
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("/auth/logout");
    token.unset();
  } catch (error) {
    throw error;
  }
});

const authOperations = {
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
