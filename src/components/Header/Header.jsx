import s from "./Header.module.scss";
import Button from "../Button";
import SocialList from "../SocialList";
import ContactList from "../ContactList";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo styles="header" />
      <NavBar />
      <Hero />
      <Button variant="reservation" name="Umów się na wizytę" />
      <SocialList styles="header" />
      <ContactList styles="header" />
    </header>
  );
};
export default Header;
