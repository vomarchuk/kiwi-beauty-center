import s from "./Header.module.scss";
import { Button } from "../Button";
import SocialList from "../SocialList";
import ContactList from "../ContactList";
import NavMenu from "../NavMenu";
import Hero from "./Hero";
import Logo from "../Logo";
import { WrapperLink } from "../../wrappers";
import { LINKS } from "../../Constants";
const { RESERVATION_ONLINE } = LINKS;

const Header = () => {
  return (
    <header className={s.header}>
      <Logo styles="header" />
      <NavMenu />
      <Hero />
      <WrapperLink link={RESERVATION_ONLINE} target="_blank">
        <Button
          className="absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] text-textColor bg-accentColor"
          name="Umów się na wizytę"
        />
      </WrapperLink>
      <SocialList styles="header" />
      <ContactList styles="header" />
    </header>
  );
};
export default Header;
