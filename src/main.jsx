import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { GreenplaceApp } from "./GreenplaceApp";
import { store } from "./store";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GreenplaceApp />
    </Provider>
  </React.StrictMode>
);
