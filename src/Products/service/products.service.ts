import ky, { Options } from "ky";
import { z } from "zod";
import { ProductsModel } from "../model/products.model";

const ProductsEntitySchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total: z.number(),
  total_pages: z.number(),

  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      year: z.number(),
      color: z.string(),
      pantone_value: z.string(),
    })
  ),

  support: z.object({
    url: z.string(),
    text: z.string(),
  }),
});

type ProductsEntity = z.infer<typeof ProductsEntitySchema>;

const BASE_URL = "https://reqres.in/api/products";

export class ProductsService {
  static async get(options: Options = {}): Promise<ProductsModel> {
    return await ky
      .get(BASE_URL, options)
      .json()
      .then(ProductsEntitySchema.parse)
      .then(ProductsMapper.fromEntity)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

class ProductsMapper {
  static fromEntity = (data: ProductsEntity) => {
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
  };
}
