import style from './icons.module.scss';
import facebookIcon from '../../images/icons/facebook.svg';

export const FacebookIcon = () => {
  return (
    <img
      className={style.instagram}
      src={facebookIcon}
      alt="instagram icon"
      width={40}
      height={40}
    />
  );
};
