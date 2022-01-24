import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiNavigation } from "react-icons/fi";
import s from "./ContactList.module.scss";

const ContactList = ({ styles }) => {
  return (
    <>
      <address
        className={`${s.contact}  ${styles && s[`contact--${styles}`]} `}
      >
        <p className={s.contact__address}>
          <FiNavigation className={s.contact__icon} />
          Floriańska 6/u7, Warszawa
        </p>
        <p className={s.contact__phone}>
          <a href="tel:+48577205500">
            <MdOutlinePhoneIphone className={s.contact__icon} />
            +(48) 577 205 500
          </a>
        </p>
        <ul className={s.contact__workTime}>
          <li className={s.workTime__item}>
            <AiOutlineClockCircle className={s.contact__icon} />
            pon-pt 9:00-21:00
          </li>
          <li className={s.workTime__item}>
            <AiOutlineClockCircle className={s.contact__icon} />
            sob 9:00-17:00
          </li>
        </ul>
      </address>
    </>
  );
};
export default ContactList;
