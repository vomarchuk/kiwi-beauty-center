import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Price, ServiceSetup } from "../pages";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";

const HomePage = lazy(() => import("../pages"));
const Footer = lazy(() => import("../components/Footer"));

function App() {
  useGetAllCategoriesQuery();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Service Setup" element={<ServiceSetup />} />
        <Route path="/:category" element={<Price />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
