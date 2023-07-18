import React from "react";
import ReactDOM from "react-dom/client";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

import { GifMain } from "./00examples/03gifs/GifMain";
// import { CounterApp } from "./00examples/01counter/CounterApp";
// import { Http } from "./02http/Http";
// import { Composition1C, Composition2C } from "./01components/Composition";
// import { Events1, Events2, Events3, Events4 } from "./01components/Events";
// import { Components1, Components2, Components3, Components4, Components5, Components6 } from "./01components/Components";

// import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <GifMain />

      {/* <CounterApp />

      <Http />

      <Composition2C></Composition2C>
      <Composition1C></Composition1C>

      <Events1 />
      <Events2 />
      <Events3 />
      <Events4 />

      <Components1></Components1>
      <Components2></Components2>
      <Components3 message="components"></Components3>
      <Components4 message="components"></Components4>
      <Components5 message="components"></Components5>
      <Components6 message="components"></Components6> */}
    </div>
  </React.StrictMode>
);
