import { lazy } from "react";

const HomePage = lazy(() => import("../pages"));

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
