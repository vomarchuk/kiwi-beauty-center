import s from "./GalleryCarousel.module.scss";

import { COLORS } from "../../../../Constants";

import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const GalleryCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.galleryCarousel}>
      <Swiper
        style={{
          "--swiper-navigation-color": `$ {
          COLORS.accentColor
        }

        `,
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        className={s.mySwiper}
      >
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
            images
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="images"
          />
        </SwiperSlide>
        <SwiperSlide className={s.mySwiperBigSlide}>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="images"
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="small images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="small images"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
