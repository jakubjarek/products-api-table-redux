import ky, { SearchParamsOption } from "ky";
import { ProductsType } from "../store/products.state";
import { ProductsMapper } from "./products.mapper";
import { Data } from "./dto";

const BASE_URL = "https://reqres.in/api/products";

export const ProductsApi = {
  get: async (searchParams: SearchParamsOption): Promise<ProductsType.Base> => {
    try {
      const data: Data = await ky
        .get(BASE_URL, {
          searchParams,
        })
        .json();

      return ProductsMapper.get(data);
    } catch (error) {
      throw error;
    }
  },
};
