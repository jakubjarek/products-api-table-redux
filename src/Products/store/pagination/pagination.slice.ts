import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../../App/store";
import { Pagination } from "../../model/products.model";
import { ProductsAction } from "../products.action";

export const pagination = createSlice({
  name: "pagination",
  initialState: {} as Pagination,
  reducers: {
    update: (_, action: PayloadAction<Pagination>) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProductsAction.getByPage.fulfilled,
      (_, action) => action.payload.pagination
    );
  },
});

export const PaginationAction = pagination.actions;

export class PaginationSelector {
  private static getDomain = (state: RootState) => state.products;

  static getAll = createSelector(this.getDomain, (s) => s.pagination);
}

export class PaginationSelectorHooks {
  static useGetAll = () => useSelector(PaginationSelector.getAll);
}
