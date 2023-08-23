import { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";

import "./styles/base.scss";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
