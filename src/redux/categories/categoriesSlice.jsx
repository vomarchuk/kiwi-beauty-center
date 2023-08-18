import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = { value: 0 };

const clicksSlice = createSlice({
  name: "clicks",
  initialState,
  reducers: {
    update(state) {
      state.value += 1;
    },
  },
});

const persistConfig = {
  key: "clicks",
  storage,
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);
export const { update } = clicksSlice.actions;

//Selectors

export const getClicksValue = (state) => state.clicks.value;
