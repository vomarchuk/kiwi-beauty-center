import s from "./Header.module.scss";
import Button from "../Button";
import SocialList from "../SocialList";
import ContactList from "../ContactList";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Logo from "../Logo";
import { WrapperLink } from "../../wrappers";
import { LINKS } from "../../Constants";

const { RESERVATION_ONLINE } = LINKS;

const Header = () => {
  return (
    <header className={s.header}>
      <Logo styles="header" />
      <NavBar />
      <Hero />
      <WrapperLink link={RESERVATION_ONLINE} target="_blank">
        <Button variant="reservation" name="Umów się na wizytę" />
      </WrapperLink>
      <SocialList styles="header" />
      <ContactList styles="header" />
    </header>
  );
};
export default Header;
