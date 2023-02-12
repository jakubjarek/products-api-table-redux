import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Item } from "../../model/products.model";
import { ProductsAction } from "../products.action";
import productsSelector from "../products.selector";

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
  private static moduleSelector = productsSelector.get;

  static getAll = createSelector(this.moduleSelector, (s) => s.items);
}

export class ItemsSelectorHooks {
  static useGetAll = () => useSelector(ItemsSelector.getAll);
}
