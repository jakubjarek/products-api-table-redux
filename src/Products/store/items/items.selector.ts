import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import productsSelector from "../products.selector";

export const itemsSelector = {
  list: createSelector(productsSelector.get, (p) => p.items),

  single: (id: number) =>
    createSelector(productsSelector.get, (p) =>
      p.items.find((i) => i.id === id)
    ),
};

export type SelectorKeys = keyof typeof itemsSelector;

export function useItemsSelector(key: SelectorKeys) {
  return useSelector(itemsSelector[key])
}
