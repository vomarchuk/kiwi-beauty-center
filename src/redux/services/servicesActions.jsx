import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchAllServicesByCategoryRequest = createAction(
  "services/fetchAllServicesByCategoryRequest"
);
//fulfilled
export const fetchAllServicesByCategorySuccess = createAction(
  "services/fetchAllServicesByCategorySuccess"
);
//rejected
export const fetchAllServicesByCategoryError = createAction(
  "service/fetchAllServicesByCategoryError"
);
