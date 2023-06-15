import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchAllServicesByCategoryById } from "./servicesOperations";

const entities = createReducer([], {
  [fetchAllServicesByCategoryById.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchAllServicesByCategoryById.pending]: () => true,
  [fetchAllServicesByCategoryById.fulfilled]: () => false,
  [fetchAllServicesByCategoryById.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchAllServicesByCategoryById.rejected]: (_, action) => action.payload,
  [fetchAllServicesByCategoryById.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
