import ky, { Options } from "ky";
import { ProductsState } from "../store/products.state";
import { ProductsMapper } from "./products.mapper";
import { Data } from "./dto";

const BASE_URL = "https://reqres.in/api/products";

export const ProductsApi = {
  get: async (options?: Options): Promise<ProductsState.Get> => {
    try {
      const data: Data = await ky
        .get(BASE_URL, {
          ...options,
        })
        .json();

      return ProductsMapper.get(data);
    } catch (error) {
      throw error;
    }
  },
};
