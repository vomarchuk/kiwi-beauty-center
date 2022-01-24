import { FaFacebookF, FaInstagram } from "react-icons/fa";
import s from "./SocialList.module.scss";

const SocialList = ({ styles }) => {
  return (
    <ul className={`${s.social}  ${styles && s[`social--${styles}`]} `}>
      <li className={s.social__item}>
        <a
          className={s.social__link}
          href="https://www.facebook.com/kiwibeautycenter/?modal=admin_todo_tour"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className={`${s.facebook}  ${s.icon}`} />
        </a>
      </li>
      <li className={s.social__item}>
        <a
          className={s.social__link}
          href="https://www.instagram.com/kiwi_beautycenter/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={`${s.instagram} ${s.icon}`} />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
