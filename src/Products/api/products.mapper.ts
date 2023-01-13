import { ProductsState } from "../store/products.state";
import { Data } from "./dto";

export const ProductsMapper = {
  get: (data: Data): ProductsState.Base => {
    const pagination = {
      page: data.page,
      per_page: data.per_page,
      total: data.total,
      total_pages: data.total_pages,
    };

    return {
      pagination,
      list: data.data,
    };
  },
};
