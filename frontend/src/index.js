import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import ErrorMessage from "./components/UI/ErrorMessage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ErrorMessage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
