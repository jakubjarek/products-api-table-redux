import ky, { Options } from "ky";
import { ProductsModel } from "../model/products.model";
import {
  ProductsBaseEntity,
  ProductsEntitySchema,
  ProductsSingleEntity,
} from "./products.entity";

const BASE_URL = "https://reqres.in/api/products";

export class ProductsService {
  static async get(options: Options = {}): Promise<ProductsModel.Base> {
    return await ky
      .get(BASE_URL, options)
      .json()
      .then(ProductsEntitySchema.Base.parse)
      .then(ProductsMapper.fromBaseEntity)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  static async getSingle(options: Options = {}): Promise<ProductsModel.Single> {
    return await ky
      .get(BASE_URL, options)
      .json()
      .then(ProductsEntitySchema.Single.parse)
      .then(ProductsMapper.formSingleItemEntity)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

export class ProductsMapper {
  static fromBaseEntity = (data: ProductsBaseEntity) => {
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

  static formSingleItemEntity = (entity: ProductsSingleEntity) => {
    return entity.data;
  };
}
