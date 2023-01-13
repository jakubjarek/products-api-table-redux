import { all } from "redux-saga/effects";
import paginationSaga from "./pagination/pagination.saga";

export default function* productsSaga() {
  yield paginationSaga();
}
