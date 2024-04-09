// src/router/AppRoutes.tsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const CartPage = React.lazy(() => import("remote02/CartPage"));
const TestPage = React.lazy(() => import("remote/TestPage"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
