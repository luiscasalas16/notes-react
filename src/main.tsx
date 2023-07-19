import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

import DefaultRouter from "./routes/DefaultRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={DefaultRouter} />

    {/*
      <Http />

      <Composition2C></Composition2C>
      <Composition1C></Composition1C>

    */}
  </React.StrictMode>
);
