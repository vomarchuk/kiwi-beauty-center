import { lazy, Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const HeaderPage = lazy(() => import("../components/Header"));
console.log(HeaderPage);

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
