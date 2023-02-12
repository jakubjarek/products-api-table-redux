import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "../../App/store";
import { ProductsAction } from "../store/products.action";

const DEFAULT_PARAMS = {
  page: "1",
};

export default function useMountedSearchParams() {
  const dispatch: AppDispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const abortControler = new AbortController();
    const page = searchParams.get("page");

    if (!page) {
      setSearchParams(DEFAULT_PARAMS, { replace: true });
      return;
    }

    dispatch(
      ProductsAction.getByPage({
        page: page,
        options: {
          signal: abortControler.signal,
        },
      })
    );

    return () => {
      abortControler.abort();
    };
  }, []);
}
