import ContactList from "../ContactList";
import SocialList from "../SocialList";
import Logo from "../Logo";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Logo styles="footer" />
      <section className={s.contactList}>
        <ContactList />
      </section>
      <section>
        <SocialList styles="footer" />
      </section>
    </footer>
  );
};
export default Footer;
