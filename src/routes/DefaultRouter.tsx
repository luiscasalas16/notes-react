import { createBrowserRouter } from "react-router-dom";

import Master from "../shared/components/Master";

import { CounterApp } from "../00examples/01counter/CounterApp";
import { GifApp } from "../00examples/03gifs/GifApp";

import HomePage from "../home/HomePage";

import AboutMaster from "../about/AboutMaster";
import ApplicationPage from "../about/pages/ApplicationPage";
import DeveloperPage from "../about/pages/DeveloperPage";

import { Components, Events, Composition } from "../01components";
import { Http } from "../02http";

import ErrorPage from "../shared/page/ErrorPage";

export default createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
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
        { path: "events", element: <Events /> },
        { path: "composition", element: <Composition /> },
      ],
    },
    {
      path: "http",
      element: <Master />,
      children: [{ path: "basic", element: <Http /> }],
    },
  ],
  {
    basename: "/notes-react/",
  }
);
