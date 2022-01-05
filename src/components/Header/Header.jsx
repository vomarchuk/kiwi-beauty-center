import s from "./Header.module.scss";
import Button from "../Button";
import SocialList from "../SocialList";
import ContactList from "../ContactList";

const Header = () => {
  return (
    <header className={s.header}>
      <Button styles="reservation" name="Umów się na wizytę" />
      <SocialList />
      <ContactList />
    </header>
  );
};
export default Header;
