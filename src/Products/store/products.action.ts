import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, SearchParamsOption } from "ky";
import { ProductsModel } from "../model/products.model";
import { ProductsService } from "../service/products.service";

const DEFAULT_SEARCH_PARAMS: SearchParamsOption = {
  page: 1,
  per_page: 5,
};

const PER_PAGE = 5;

export class ProductsAction {
  static debouncedGet = createAction<string>("products/debouncedGet");

  static get = createAsyncThunk<ProductsModel.Base, SearchParamsOption>(
    "products/get",
    async (searchParams = DEFAULT_SEARCH_PARAMS) =>
      await ProductsService.get({ searchParams })
  );

  static getByPage = createAsyncThunk<
    ProductsModel.Base,
    { page: string; options?: Options }
  >(
    "products/getByPage",
    async ({ page, options }) =>
      await ProductsService.get({
        searchParams: { page: page, per_page: PER_PAGE },
        ...options,
      })
  );

  static getById = createAsyncThunk<ProductsModel.Single, number>(
    "products/getById",
    async (id) =>
      await ProductsService.getSingle({
        searchParams: { id },
      })
  );
}
