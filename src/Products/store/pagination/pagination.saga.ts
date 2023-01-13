import { ROUTER_ON_LOCATION_CHANGED } from "@lagunovsky/redux-react-router";
import { put, takeLatest } from "redux-saga/effects";
import queryString from "query-string";
import { ProductsAction } from "../products.action";
import { SearchParamsOption } from "ky";

function* onLocationChange() {
  const { page } = queryString.parse(location.search);

  if (!page) return;

  yield put<any>(
    ProductsAction.get({
      page: page,
      per_page: 5,
    } as SearchParamsOption)
  );
}

export default function* paginationSaga() {
  yield takeLatest(ROUTER_ON_LOCATION_CHANGED, onLocationChange);
}
