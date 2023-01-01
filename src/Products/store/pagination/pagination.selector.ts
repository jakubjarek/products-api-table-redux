import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import productsSelector from "../products.selector";

const selector = {
  base: createSelector(productsSelector.get, (p) => p.pagination),
};

export default {
  base: {
    selector: selector.base,
    hook: () => useSelector(selector.base),
  },
};
