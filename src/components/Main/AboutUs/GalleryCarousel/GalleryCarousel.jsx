import s from './GalleryCarousel.module.scss';
import images from '../../../../services/images.json';
import { COLORS } from '../../../../Constants';
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const GalleryCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.galleryCarousel}>
      <Swiper
        style={{
          '--swiper-navigation-color': `${COLORS.accentColor}`,
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        pagination={true}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        className={s.mySwiper}
      >
        {images.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className={s.mySwiperBigSlide}>
            <img
              className={s.mySwiperBigImage}
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              width="1004px"
              height="1004px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className={s.mySwiperSlide}
      >
        {images.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <img
              className={s.mySwiperSlideSmallImage}
              loading="lazy"
              src={src}
              alt={alt}
              width="243px"
              height="243px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
