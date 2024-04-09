import React from "react";

import "./index.css";

import * as ReactDOMClient from "react-dom/client";

import Button from "container/Button";
import StoreProvider from "container/providers/StoreProvider";
console.log(Button);

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl text-blue-600">
    <div>Aplicacao Remota 02</div>
    <Button />
  </div>
);

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
