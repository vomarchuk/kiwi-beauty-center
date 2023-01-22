import s from './AboutUs.module.scss';

import SalonDescription from './SalonDescription';
import GalleryCarousel from './GalleryCarousel/GalleryCarousel';

const AboutUs = () => {
  return (
    <div className={s.aboutUs}>
      <SalonDescription />
      <GalleryCarousel />
    </div>
  );
};

export default AboutUs;
