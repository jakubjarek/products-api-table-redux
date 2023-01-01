import { createSlice } from "@reduxjs/toolkit";
import { ProductsAction } from "../products.action";
import { ItemsState } from "./items.state";

const initialState = [] as ItemsState.List;

export const items = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      ProductsAction.get.fulfilled,
      (_, action) => action.payload.list
    );
  },
});
