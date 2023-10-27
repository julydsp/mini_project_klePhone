import React from "react";
import { Route, Routes } from "react-router-dom";
import EditProductPage from "../pages/EditProductPage";
import { LoginPage } from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import AddProductPage from "../pages/addProductPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PrivateRoute } from "./privateRoute";
import HomePage from "../pages/HomePage";
import { Unauthorized } from "../pages/Unauthorized";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productPage" element={<ProductPage />}></Route>
        <Route path="/addproductPage" element={<AddProductPage />}></Route>
        <Route path="/editProductPage/:id" element={<EditProductPage />}></Route>
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/loginPage" element={<LoginPage />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}
