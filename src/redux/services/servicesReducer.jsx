import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getServicesByCategory,
  addServiceByCategory,
} from "./servicesOperations";

const entities = createReducer([], {
  [getServicesByCategory.fulfilled]: (_, action) => action.payload,
  [addServiceByCategory.fulfilled]: (state, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getServicesByCategory.pending]: () => true,

  [addServiceByCategory.fulfilled]: () => false,
  [getServicesByCategory.fulfilled]: () => false,

  [getServicesByCategory.rejected]: () => false,
  [addServiceByCategory.rejected]: () => false,
});

const error = createReducer(null, {
  [getServicesByCategory.rejected]: (_, action) => action.payload,
  [addServiceByCategory.rejected]: (_, action) => action.payload,

  [getServicesByCategory.pending]: () => null,
  [addServiceByCategory.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
