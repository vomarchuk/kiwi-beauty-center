import { WrapperLink } from '../../wrappers';
// import { FacebookIcon, InstagramIcon } from '../Icons';
import { LINKS } from '../../Constants';
import s from './SocialList.module.scss';

const { INSTAGRAM, FACEBOOK } = LINKS;

const SocialList = ({ styles }) => {
  return (
    <ul className={`${s.social}  ${styles && s[`social--${styles}`]} `}>
      <li className={s.social__item}>
        <WrapperLink link={FACEBOOK} target="_blank">
          {/* <FacebookIcon /> */}
        </WrapperLink>
      </li>
      <li className={s.social__item}>
        <WrapperLink link={INSTAGRAM} target="_blank">
          {/* <InstagramIcon /> */}
        </WrapperLink>
      </li>
    </ul>
  );
};

export default SocialList;
