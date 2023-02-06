import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PriceList } from "../pages/PriceList";
import { ServiceSetup } from "../pages/ServiceSetup";

const HomePage = lazy(() => import("../pages"));
const Footer = lazy(() => import("../components/Footer"));

function App() {
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
