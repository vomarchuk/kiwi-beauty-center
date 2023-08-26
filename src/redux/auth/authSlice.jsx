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

    [authOperations.logOut.fulfilled](state) {
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, { error }) {
      state.message = error?.message;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
