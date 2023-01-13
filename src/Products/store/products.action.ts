import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchParamsOption } from "ky";
import { ProductsApi } from "../api/products.api";
import { ProductsState } from "./products.state";

const DEFAULT_SEARCH_PARAMS: SearchParamsOption = {
  page: 1,
  per_page: 5,
};

export const ProductsAction = {
  get: createAsyncThunk<ProductsState.Base, SearchParamsOption>(
    "products/get",
    async (searchParams = DEFAULT_SEARCH_PARAMS) =>
      await ProductsApi.get(searchParams)
  ),
};
