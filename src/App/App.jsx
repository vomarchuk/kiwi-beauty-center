import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as categoriesOperations from "../redux/categories/categoriesOperations";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PriceList } from "../pages/PriceList";
import { ServiceSetup } from "../pages/ServiceSetup";

const HomePage = lazy(() => import("../pages"));
const Footer = lazy(() => import("../components/Footer"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(categoriesOperations.fetchCategories()), [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Service Setup" element={<ServiceSetup />} />
        <Route path="/:categoryId" element={<PriceList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
