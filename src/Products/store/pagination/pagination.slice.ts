import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsAction } from "../products.action";
import { PaginationState } from "./pagination.state";

const initialState = {} as PaginationState.Base;

export const pagination = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    set: (_, action: PayloadAction<PaginationState.Base>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProductsAction.get.fulfilled,
      (_, action) => action.payload.pagination
    );
  },
});
