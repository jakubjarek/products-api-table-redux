import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../../App/store";
import { Item } from "../../model/products.model";
import { ProductsAction } from "../products.action";

export const items = createSlice({
  name: "items",
  initialState: [] as Array<Item>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      ProductsAction.getByPage.fulfilled,
      (_, action) => action.payload.list
    );
  },
});

export class ItemsSelector {
  private static getDomain = (state: RootState) => state.products;

  static getAll = createSelector(this.getDomain, (s) => s.items);
}

export class ItemsSelectorHooks {
  static useGetAll = () => useSelector(ItemsSelector.getAll);
}
