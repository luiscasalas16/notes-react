import { createBrowserRouter, Navigate } from "react-router-dom";

import Master from "../shared/components/Master";

import { CounterApp } from "../00examples/01counter/CounterApp";
import { GifApp } from "../00examples/03gifs/GifApp";

import HomePage from "../home/HomePage";

import AboutMaster from "../about/AboutMaster";
import ApplicationPage from "../about/pages/ApplicationPage";
import DeveloperPage from "../about/pages/DeveloperPage";

import { Components, Bindings, Rendering, Events, Composition } from "../01basic";
import { UseState, UseEffect, UseRef, UseCallback, UseContext, UseMemo, UseReducer } from "../02hooks";
import { Http } from "../03http";

import ErrorPage from "../shared/page/ErrorPage";
import NotFoundPage from "../shared/page/NotFoundPage";

export default createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="home" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutMaster />,
      children: [
        {
          path: "application",
          element: <ApplicationPage />,
        },
        {
          path: "developer",
          element: <DeveloperPage />,
        },
      ],
    },
    {
      path: "examples",
      element: <Master />,
      children: [
        { path: "counter", element: <CounterApp /> },
        { path: "gifs", element: <GifApp /> },
      ],
    },
    {
      path: "components",
      element: <Master />,
      children: [
        { path: "components", element: <Components /> },
        { path: "bindings", element: <Bindings /> },
        { path: "rendering", element: <Rendering /> },
        { path: "events", element: <Events /> },
        { path: "composition", element: <Composition /> },
      ],
    },
    {
      path: "hooks",
      element: <Master />,
      children: [
        { path: "useState", element: <UseState /> },
        { path: "useEffect", element: <UseEffect /> },
        { path: "useRef", element: <UseRef /> },
        { path: "useCallback", element: <UseCallback /> },
        { path: "useContext", element: <UseContext /> },
        { path: "useMemo", element: <UseMemo /> },
        { path: "useReducer", element: <UseReducer /> },
      ],
    },
    {
      path: "http",
      element: <Master />,
      children: [{ path: "basic", element: <Http /> }],
    },
    //not fount route
    {
      path: "notfound",
      element: <NotFoundPage />,
    },
    //default route redirection
    {
      path: "*",
      element: <Navigate to="notfound" replace />,
    },
  ],
  {
    basename: "/notes-react/",
  }
);
