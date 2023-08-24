import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";
const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, { error }) {
      state.isLoggedIn = false;
      state.error = error?.message;
    },
  },
});

export default authSlice.reducer;
