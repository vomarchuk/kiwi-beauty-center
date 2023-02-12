import Logo from "../Logo";

import services from "../../services/services.json";

import axios from "axios";
import { DEFAULT_URL } from "../../Constants";

import style from "./NavMenu.module.scss";

axios.defaults.baseURL = DEFAULT_URL;

const NavList = ({ toggle }) => {
  return (
    <div className={style.nav} onClick={toggle}>
      <Logo styles="nav" />
      <ul className={style["nav__list"]}>
        {/* {categories &&
          categories.map(({ _id: id, category }) => {
            return (
              <li className={style['nav__item']} key={id}>
                <a className={style['nav__link']} href={category}>
                  {category}
                </a>
              </li>
            );
          })} */}

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
