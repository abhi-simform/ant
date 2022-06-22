import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "../node_modules/antd/dist/antd.less";
import "../node_modules/antd/dist/antd.dark.less";
import "../node_modules/antd/dist/antd.compact.less";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
