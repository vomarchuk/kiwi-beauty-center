import { ReactComponent as Img } from "../../images/logo.svg";
import { ReactComponent as ImgBlack } from "../../images/logo-black.svg";

import s from "./Logo.module.scss";

const Logo = ({ variant, styles }) => {
  return variant && variant === "black" ? (
    <>
      <ImgBlack className={s[`logo--${styles}`]} />
    </>
  ) : (
    <>
      <Img className={s[`logo--${styles}`]} />
    </>
  );
};
export default Logo;
