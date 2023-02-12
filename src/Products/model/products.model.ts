export type Pagination = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type Item = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type ProductsModel = {
  pagination: Pagination;
  list: Array<Item>;
};
