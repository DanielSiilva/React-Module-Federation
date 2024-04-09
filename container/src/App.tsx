import React, { Suspense } from "react";
import * as ReactDOMClient from "react-dom/client";

import "./index.css";
import StoreProvider from "./providers/StoreProvider";
import { useStoreSelector } from "./hooks/useStoreSelector";
const TestPage = React.lazy(() => import("remote/TestPage"));
const TestPage02 = React.lazy(() => import("remote02/CartPage"));

const App = () => {
  const {
    counter: { value },
  } = useStoreSelector((state) => state);
  console.log("🚀 ~ App ~ counter:", value);

  return (
    <div className="max-w-6xl mx-auto mt-10 text-3xl text-red-600">
      <div>Aplicacao Container {value}</div>

      <Suspense fallback={<div>Loading...</div>}>
        <TestPage />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <TestPage02 />
      </Suspense>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
