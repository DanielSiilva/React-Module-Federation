import React, { Suspense } from "react";
import * as ReactDOMClient from "react-dom/client";

import "./index.css";
import StoreProvider from "./providers/StoreProvider";
import { useStoreSelector } from "./hooks/useStoreSelector";
import { ShoppingCartOutlined } from "@ant-design/icons";
const TestPage = React.lazy(() => import("remote/TestPage"));
const CartPage = React.lazy(() => import("remote02/CartPage"));

const App = () => {
  const {
    counter: { value },
  } = useStoreSelector((state) => state);
  console.log("🚀 ~ App ~ counter:", value);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold">
          Shopping Cart Micro Front-end -- App Principal
        </h1>
        <div className="relative">
          <ShoppingCartOutlined className="text-xl cursor-pointer" />
          {value > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {value}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="w-72 h-full border-r border-gray-300 p-5 flex-shrink-0 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <CartPage />
          </Suspense>
        </div>

        <div className="flex-grow p-5 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <TestPage />
          </Suspense>
        </div>
      </div>
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
