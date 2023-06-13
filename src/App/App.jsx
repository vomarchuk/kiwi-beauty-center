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

  // fetch('http://localhost:3030/api/services/62015a6a064b3770e9537426')
  //   .then((response) => response.json())
  //   .then((response) => console.log(response));

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
