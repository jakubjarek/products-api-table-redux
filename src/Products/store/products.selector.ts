import { RootState } from "../../App/store";

const productsSelector = {
  get: (state: RootState) => state.products,
};

export default productsSelector;
