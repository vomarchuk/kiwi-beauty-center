import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Price } from "../pages";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";

const HomePage = lazy(() => import("../pages"));
const Footer = lazy(() => import("../components/Footer"));

export function App() {
  useGetAllCategoriesQuery();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<Price />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
