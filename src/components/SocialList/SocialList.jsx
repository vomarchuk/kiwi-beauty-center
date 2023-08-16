import { WrapperLink } from "../../wrappers";
import { LINKS } from "../../Constants";
import s from "./SocialList.module.scss";
import { InstagramIcon, FacebookIcon } from "../SVG";

const { INSTAGRAM, FACEBOOK } = LINKS;

const SocialList = ({ styles }) => {
  return (
    <ul className={`${s.social}  ${styles && s[`social--${styles}`]} `}>
      <li className={s.social__item}>
        <WrapperLink link={FACEBOOK} target="_blank" ariaLabel="facebook link">
          <FacebookIcon />
        </WrapperLink>
      </li>
      <li className={s.social__item}>
        <WrapperLink
          link={INSTAGRAM}
          target="_blank"
          ariaLabel="instagram link"
        >
          <InstagramIcon />
        </WrapperLink>
      </li>
    </ul>
  );
};

export default SocialList;
