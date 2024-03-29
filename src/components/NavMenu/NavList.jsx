import { useGetAllCategoriesQuery } from "../../redux/categories/categoriesSlice";
import Logo from "../Logo";
import style from "./NavMenu.module.scss";
const NavList = ({ toggle }) => {
  const { data } = useGetAllCategoriesQuery();
  const categoriesNew = data;
  // console.log(isFetching);

  return (
    <div className={style.nav} onClick={toggle}>
      <Logo styles="nav" />
      <ul className={style["nav__list"]}>
        {categoriesNew &&
          categoriesNew.map(({ _id: id, category }) => {
            return (
              <li className={style["nav__item"]} key={id}>
                <a className={style["nav__link"]} href={category}>
                  {category} (server state)
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default NavList;
