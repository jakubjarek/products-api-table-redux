import { createAsyncThunk } from "@reduxjs/toolkit";
import { Options, SearchParamsOption } from "ky";
import { ProductsModel } from "../model/products.model";
import { ProductsService } from "../service/products.service";

const DEFAULT_SEARCH_PARAMS: SearchParamsOption = {
  page: 1,
  per_page: 5,
};

const PER_PAGE = 5;

export class ProductsAction {
  static get = createAsyncThunk<ProductsModel, SearchParamsOption>(
    "products/get",
    async (searchParams = DEFAULT_SEARCH_PARAMS) =>
      await ProductsService.get({ searchParams })
  );

  static getByPage = createAsyncThunk<
    ProductsModel,
    { page: string; options?: Options }
  >(
    "products/getByPage",
    async ({ page, options }) =>
      await ProductsService.get({
        searchParams: { page: page, per_page: PER_PAGE },
        ...options,
      })
  );
}
