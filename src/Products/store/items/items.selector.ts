import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import productsSelector from "../products.selector";

const selector = {
  list: createSelector(productsSelector.get, (p) => p.items),

  single: (id: number) =>
    createSelector(productsSelector.get, (p) =>
      p.items.find((i) => i.id === id)
    ),
};

export default {
  list: {
    selector: selector.list,
    hook: () => useSelector(selector.list),
  },

  single: {
    selector: (id: number) => selector.single(id),
    hook: (id: number) => () => useSelector(selector.single(id)),
  },
};
