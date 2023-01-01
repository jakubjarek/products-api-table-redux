import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { Route, Routes } from "react-router-dom";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import { history } from "./App/store";
import App from "./App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter history={history}>
        <Routes>
          <Route path={"*"} element={<App />} />
        </Routes>
      </ReduxRouter>
    </Provider>
  </React.StrictMode>
);
