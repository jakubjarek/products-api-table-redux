import { ItemsState } from "./items/items.state";
import { PaginationState } from "./pagination/pagination.state";

export declare namespace ProductsType {
  export interface Base {
    pagination: PaginationState.Base;
    list: ItemsState.List;
  }
}
