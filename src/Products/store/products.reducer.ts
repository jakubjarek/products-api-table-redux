import { combineReducers } from "@reduxjs/toolkit";
import { items } from "./items/items.slice";
import { pagination } from "./pagination/pagination.slice";

export const productsReducer = combineReducers({
  items: items.reducer,
  pagination: pagination.reducer,
});
