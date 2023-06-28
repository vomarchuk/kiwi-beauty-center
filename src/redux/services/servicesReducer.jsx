import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getServicesByCategory } from "./servicesOperations";

const entities = createReducer([], {
  [getServicesByCategory.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getServicesByCategory.pending]: () => true,
  [getServicesByCategory.fulfilled]: () => false,
  [getServicesByCategory.rejected]: () => false,
});

const error = createReducer(null, {
  [getServicesByCategory.rejected]: (_, action) => action.payload,
  [getServicesByCategory.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
