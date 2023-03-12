import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../../App/store";
import { ProductsModel } from "../../model/products.model";
import { ProductsAction } from "../products.action";

export const items = createSlice({
  name: "items",
  initialState: [] as Array<ProductsModel.Single>,
  reducers: {
    setAll: (_, action: PayloadAction<Array<ProductsModel.Single>>) =>
      action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        ProductsAction.getByPage.fulfilled,
        (_, action) => action.payload.list
      )
      .addCase(ProductsAction.getById.fulfilled, (_, action) => [
        action.payload,
      ]);
  },
});

export const { setAll } = items.actions;

export class ItemsSelector {
  private static getDomain = (state: RootState) => state.products;

  static getAll = createSelector(this.getDomain, (s) => s.items);
}

export class ItemsSelectorHook {
  static useGetAll = () => useSelector(ItemsSelector.getAll);
}
