import s from "./Header.module.scss";
import Button from "../Button";
import SocialList from "../SocialList";
import ContactList from "../ContactList";
import NavBar from "./NavBar";
import Hero from "./Hero";
const Header = () => {
  return (
    <header className={s.header}>
      <NavBar />
      <Hero />
      <Button styles="reservation" name="Umów się na wizytę" />
      <SocialList />
      <ContactList />
    </header>
  );
};
export default Header;
