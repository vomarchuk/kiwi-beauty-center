import style from './icons.module.scss';
import instagramIcon from '../../images/icons/instagram.svg';

export const InstagramIcon = () => {
  return (
    <img
      className={style.instagram}
      src={instagramIcon}
      alt="instagram icon"
      width={40}
      height={40}
    />
  );
};
