import { ItemsState } from "./items/items.state";
import { PaginationState } from "./pagination/pagination.state";

export declare namespace ProductsState {
  export interface Get {
    pagination: PaginationState.Get;
    list: ItemsState.List;
  }
}
