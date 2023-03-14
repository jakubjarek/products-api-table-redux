import {
  replace,
  ROUTER_ON_LOCATION_CHANGED,
} from "@lagunovsky/redux-react-router";
import {
  call,
  debounce,
  fork,
  put,
  take,
  takeLatest,
} from "redux-saga/effects";
import queryString from "query-string";
import { ProductsAction } from "../products.action";
import { TABLE_MOUNTED } from "../../component/Table";
import { setAll } from "../items/items.slice";
import { ProductsModel } from "../../model/products.model";
import { PaginationAction } from "./pagination.slice";
import { ProductsService } from "../../service/products.service";
import { PayloadAction } from "@reduxjs/toolkit";

function* onLocationChange() {
  const parsedParams = queryString.parse(location.search);

  if (parsedParams.page) {
    yield put<any>(
      ProductsAction.getByPage({ page: parsedParams.page as string })
    );
    return;
  }
}

function* onMountSaga() {
  const parsedLoc = queryString.parse(location.search);
  let page = `${parsedLoc.page ?? "1"}`;

  yield put<any>(ProductsAction.getByPage({ page }));

  const fulfilledAction: ReturnType<typeof ProductsAction.getByPage.fulfilled> =
    yield take(ProductsAction.getByPage.fulfilled);

  yield put(
    replace(
      `/?${queryString.stringify({
        page: fulfilledAction.payload.pagination.page,
      })}`
    )
  );
}

function* onSearchSaga(action: PayloadAction<string>) {
  if (!action.payload) {
    const data: ProductsModel.Base = yield call(ProductsService.get, {
      searchParams: {
        page: 1,
        per_page: 5,
      },
    });

    yield put(setAll(data.list));
    yield put(PaginationAction.update(data.pagination));

    yield put(
      replace(
        `/?${queryString.stringify({
          page: data.pagination.page,
        })}`
      )
    );
  }

  if (action.payload) {
    yield fork(
      () =>
        new Promise(() =>
          setTimeout(() => {
            alert("non blocking async action");
          }, 1000)
        )
    );

    yield put<any>(ProductsAction.getById(+action.payload));
    yield put<any>(
      PaginationAction.update({
        page: 1,
        per_page: 1,
        total: 1,
        total_pages: 1,
      })
    );

    yield put(
      replace(
        `/?${queryString.stringify({
          id: action.payload,
        })}`
      )
    );
  }
}

export default function* paginationSaga() {
  yield takeLatest(TABLE_MOUNTED, onMountSaga);
  yield takeLatest(ROUTER_ON_LOCATION_CHANGED, onLocationChange);
  yield debounce(500, ProductsAction.debouncedGet.type, onSearchSaga);
}
