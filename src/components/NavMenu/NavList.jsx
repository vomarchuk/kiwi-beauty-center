import Logo from "../Logo";
import services from "../../services/services.json";

import style from "./NavMenu.module.scss";

const NavList = ({ toggle }) => {
  return (
    <div className={style.nav} onClick={toggle}>
      <Logo styles="nav" />
      <ul className={style["nav__list"]}>
        {services.map(({ id, serviceName }) => {
          return (
            <li className={style["nav__item"]} key={id}>
              <a className={style["nav__link"]} href={serviceName}>
                {serviceName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavList;
