import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import ProductsTable from "../Products/component/Table";
import { ProductsAction } from "../Products/store/products.action";

function App() {
  const dispatch: AppDispatch = useDispatch();

  dispatch(ProductsAction.get());

  return (
    <div>
      <ProductsTable />
    </div>
  );
}

export default App;
