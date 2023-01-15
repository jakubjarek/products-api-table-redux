import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsAction } from "../products.action";
import { PaginationState } from "./pagination.state";

const initialState = {} as PaginationState.Get;

export const pagination = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    set: (_, action: PayloadAction<PaginationState.Get>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProductsAction.getByPage.fulfilled,
      (_, action) => action.payload.pagination
    );
  },
});
