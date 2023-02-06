import { lazy, useState } from "react";
import Hamburger from "hamburger-react";
import style from "./NavMenu.module.scss";
import { Suspense } from "react";
const LazyNavMenu = lazy(() => import("./NavList"));

const NavBar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const showMenu = (e) => {
    if (e.target.nodeName !== "A") setOpen(false);
  };
  return (
    <div className={style.NavBar}>
      <div className={style.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <Suspense fallback="Loading...">
          <LazyNavMenu toggle={showMenu} />
        </Suspense>
      )}
    </div>
  );
};

export default NavBar;
