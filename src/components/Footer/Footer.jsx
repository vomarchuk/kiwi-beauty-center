import ContactList from "../ContactList";
import SocialList from "../SocialList";
import Logo from "../Logo";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <Logo styles="footer" />
      <ContactList styles="footer" />
      <SocialList styles="footer" />
    </footer>
  );
};
export default Footer;
