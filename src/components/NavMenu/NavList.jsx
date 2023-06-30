import Logo from "../Logo";

// import services from '../../services/services.json';

import style from "./NavMenu.module.scss";
import { useSelector } from "react-redux";

const NavList = ({ toggle }) => {
  const categories = useSelector((state) => state.categories.entities);
  return (
    <div className={style.nav} onClick={toggle}>
      <Logo styles="nav" />
      <ul className={style["nav__list"]}>
        {categories &&
          categories.map(({ _id: id, category }) => {
            return (
              <li className={style["nav__item"]} key={id}>
                <a className={style["nav__link"]} href={category}>
                  {category}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default NavList;

// {
//   services.map(({ id, serviceName }) => {
//     return (
//       <li className={style['nav__item']} key={id}>
//         {/* <a className={style["nav__link"]} href={serviceName}> */}
//         <a className={style['nav__link']} href={id}>
//           {serviceName}
//         </a>
//       </li>
//     );
//   });
// }
