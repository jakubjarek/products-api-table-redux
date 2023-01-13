import { ROUTER_ON_LOCATION_CHANGED } from "@lagunovsky/redux-react-router";
import { put, takeLatest } from "redux-saga/effects";
import queryString from "query-string";
import { ProductsAction } from "../products.action";

function* onLocationChange() {
  const parsedParams = queryString.parse(location.search);

  if (parsedParams.page) {
    yield put<any>(ProductsAction.getByPage(parsedParams.page as string));
  }
}

export default function* paginationSaga() {
  yield takeLatest(ROUTER_ON_LOCATION_CHANGED, onLocationChange);
}
