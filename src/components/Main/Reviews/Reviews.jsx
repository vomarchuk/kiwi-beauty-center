import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
import s from "./Reviews.module.scss";

SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  return (
    <div>
      <h2 className={s.title}>
        <span className={s.accent}>Opinie naszych</span> klientów
      </h2>
      <Swiper
        loop={true}
        pagination={true}
        navigation={true}
        className={s.swiper}
      >
        <SwiperSlide>
          <h3 className={s.name}>Veronika</h3>
          <p className={s.date}>10.12.20</p>
          <p>STARS</p>
          <p className={s.comment}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            hic! Laudantium eum quam commodi sint qui dolore, quos dignissimos
            vel assumenda ex rem dolorum reiciendis magnam illum praesentium.
            Blanditiis, ex!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className={s.name}>Natalia</h3>
          <p className={s.date}>10.12.20</p>
          <p>STARS</p>
          <p className={s.comment}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            hic! Laudantium eum quam commodi sint qui dolore, quos dignissimos
            vel assumenda ex rem dolorum reiciendis magnam illum praesentium.
            Blanditiis, ex!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className={s.name}>Anna</h3>
          <p className={s.date}>10.12.20</p>
          <p>STARS</p>
          <p className={s.comment}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            hic! Laudantium eum quam commodi sint qui dolore, quos dignissimos
            vel assumenda ex rem dolorum reiciendis magnam illum praesentium.
            Blanditiis, ex!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Reviews;
