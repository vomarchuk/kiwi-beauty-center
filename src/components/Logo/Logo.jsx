import { ReactComponent as Img } from "../../images/logo.svg";
import { ReactComponent as ImgBlack } from "../../images/logo-black.svg";

import s from "./Logo.module.scss";

const Logo = ({ variant, styles }) => {
  if (variant === "black") {
    return (
      <>
        <ImgBlack className={(s.logo, s[`logo--${styles}`])} />
      </>
    );
  }
  if (variant === "white") {
    return (
      <>
        <Img className={s.logo} />
      </>
    );
  }
};
export default Logo;
