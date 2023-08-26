import { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "./styles/base.scss";
import { Loader } from "./components/Loader/Loader";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
