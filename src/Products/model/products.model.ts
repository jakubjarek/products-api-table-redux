export declare namespace ProductsModel {
  export type Pagination = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };

  export type Single = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };

  export type Base = {
    pagination: Pagination;
    list: Array<ProductsModel.Single>;
  };
}
