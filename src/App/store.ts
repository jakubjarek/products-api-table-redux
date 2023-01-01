import {
  createRouterMiddleware,
  createRouterReducerMapObject,
} from "@lagunovsky/redux-react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { productsReducer } from "../Products/store/products.reducer";

export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const { router } = createRouterReducerMapObject(history);

export const store = configureStore({
  reducer: {
    router,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(routerMiddleware).prepend(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
