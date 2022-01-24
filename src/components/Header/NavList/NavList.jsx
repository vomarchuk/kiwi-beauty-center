import s from "./NavList.module.scss";
import { IoDiamondOutline } from "react-icons/io5";
import services from "../../../services/services.json";
import Logo from "../../Logo";

const NavList = () => {
  return (
    <div className={s.nav}>
      <Logo styles="nav" />
      <ul className={s["nav__list"]}>
        {services.map(({ id, serviceName }) => {
          return (
            <li className={s["nav__item"]} key={id}>
              <a className={s["nav__link"]} href="/">
                {" "}
                <IoDiamondOutline className={s["nav__icon"]} />
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
