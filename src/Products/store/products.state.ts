import { ItemsState } from "./items/items.state";
import { PaginationState } from "./pagination/pagination.state";

export declare namespace ProductsState {
  export interface Base {
    pagination: PaginationState.Base;
    list: ItemsState.List;
  }
}
