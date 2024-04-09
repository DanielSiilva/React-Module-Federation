import React, { Suspense, useState, useEffect } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./index.css";
import StoreProvider from "./providers/StoreProvider";
import { useStoreSelector } from "./hooks/useStoreSelector";
import AppRoutes from "./router/AppRoutes";

const TestPage = React.lazy(() => import("remote/TestPage"));
const CartPage = React.lazy(() => import("remote02/CartPage"));

const App = () => {
  const {
    counter: { value },
  } = useStoreSelector((state) => state);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (location.pathname === "/cart") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <Link to="/">
          <h1 className="text-lg font-semibold">
            Shopping Cart Micro Front-end -- App Principal
          </h1>
        </Link>

        <div className="relative">
          <Link to="/cart">
            <ShoppingCartOutlined className="text-xl cursor-pointer" />
          </Link>
          {value > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {value}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="flex-grow p-5 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <TestPage />
          </Suspense>
        </div>
      </div>
      <Modal
        title="Shopping Cart"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Suspense fallback={<div>Loading Cart...</div>}>
          <CartPage />
        </Suspense>
      </Modal>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);
root.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>
);
