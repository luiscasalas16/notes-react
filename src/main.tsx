import React from "react";
import ReactDOM from "react-dom/client";

import { Components1, Components2, Components3, Components4, Components5, Components6 } from "./01components/Components";
import { Events1, Events2, Events3, Events4 } from "./01components/Events";
import { CounterApp } from "./00examples/CounterApp";

// import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterApp />

    <Events1 />
    <Events2 />
    <Events3 />
    <Events4 />

    <Components1></Components1>
    <Components2></Components2>
    <Components3 message="components"></Components3>
    <Components4 message="components"></Components4>
    <Components5 message="components"></Components5>
    <Components6 message="components"></Components6>
  </React.StrictMode>
);
