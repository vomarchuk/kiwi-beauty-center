import { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "../../Logo";

import style from "./NavMenu.module.scss";

import services from "../../../services/services.json";

const NavBar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = (e) => {
    if (e.target.nodeName !== "A") setOpen(false);
  };
  return (
    <div className={style.NavBar}>
      <div className={style.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className={style.nav} onClick={toggleMenu}>
          <Logo styles="nav" />
          <ul className={style["nav__list"]}>
            {services.map(({ id, serviceName }) => {
              return (
                <li className={style["nav__item"]} key={id}>
                  <a className={style["nav__link"]} href="/">
                    {serviceName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
