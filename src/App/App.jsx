import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as categoriesOperations from "../redux/categories/categoriesOperations";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Price } from "../pages/Price";
import { ServiceSetup } from "../pages/ServiceSetup";
// import axios from 'axios';

const HomePage = lazy(() => import("../pages"));

const Footer = lazy(() => import("../components/Footer"));

function App() {
  // axios.get('/api/category/').then(({ data }) => console.log(data.data));

  const dispatch = useDispatch();
  useEffect(() => dispatch(categoriesOperations.fetchCategories()), [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Service Setup" element={<ServiceSetup />} />
        <Route path="/:categoryId" element={<Price />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
