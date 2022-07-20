import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { WrapperLink } from "../../wrappers";
import { LINKS } from "../../Constants";

import s from "./SocialList.module.scss";

const { INSTAGRAM, FACEBOOK } = LINKS;

const SocialList = ({ styles }) => {
  return (
    <ul className={`${s.social}  ${styles && s[`social--${styles}`]} `}>
      <li className={s.social__item}>
        <WrapperLink link={FACEBOOK} target="_blank">
          <FaFacebookF className={`${s.facebook}  ${s.icon}`} />
        </WrapperLink>
      </li>
      <li className={s.social__item}>
        <WrapperLink link={INSTAGRAM} target="_blank">
          <FaInstagram className={`${s.instagram} ${s.icon}`} />
        </WrapperLink>
      </li>
    </ul>
  );
};

export default SocialList;
