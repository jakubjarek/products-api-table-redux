import { createAsyncThunk } from "@reduxjs/toolkit";
import { Options, SearchParamsOption } from "ky";
import { ProductsApi } from "../api/products.api";
import { ProductsState } from "./products.state";

const DEFAULT_SEARCH_PARAMS: SearchParamsOption = {
  page: 1,
  per_page: 5,
};

const PER_PAGE = 5;

export const ProductsAction = {
  get: createAsyncThunk<ProductsState.Get, SearchParamsOption>(
    "products/get",
    async (searchParams = DEFAULT_SEARCH_PARAMS) =>
      await ProductsApi.get({ searchParams })
  ),

  getByPage: createAsyncThunk<
    ProductsState.Get,
    { page: string; options?: Options }
  >(
    "products/getByPage",
    async ({ page, options }) =>
      await ProductsApi.get({
        searchParams: { page: page, per_page: PER_PAGE },
        ...options,
      })
  ),
};
