import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Price, AdminPanel } from "../pages";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";
import authOperations from "../redux/auth/authOperations";

const HomePage = lazy(() => import("../pages"));
const Footer = lazy(() => import("../components/Footer"));

export function App() {
  const dispatch = useDispatch();
  useGetAllCategoriesQuery();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/:category" element={<Price />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
