import s from "./ContactList.module.scss";

const ContactList = () => {
  return (
    <>
      <address className={s.contact}>
        <p className={s.contact__address}>Floriańska 6/u7, Warszawa</p>
        <a className={s.contact__phone} href="tel:+48577205500">
          +(48) 577 205 500
        </a>
        <ul className={s.contact__workTime}>
          <li className={s.workTime__item}>pon-pt 9:00-21:00</li>
          <li className={s.workTime__item}>sob 9:00-17:00</li>
        </ul>
      </address>
    </>
  );
};
export default ContactList;
