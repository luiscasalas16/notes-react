import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

import routerRoot from "./routes/root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routerRoot} />
  </React.StrictMode>
);
