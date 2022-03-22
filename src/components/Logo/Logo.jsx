import { ReactComponent as Img } from "../../images/logo.svg";

import s from "./Logo.module.scss";

const Logo = ({ styles }) => (
  <Img className={`${s.logo} ${s[`logo--${styles}`]}`} />
);

export default Logo;
