import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
import s from "./CarouselService.module.scss";
import Logo from "../../Logo";
import ImgManicure from "../../../images/ServicesImg/manicure.png";
import ImgPedicure from "../../../images/ServicesImg/pedicure.jpg";
import ImgDepilacja from "../../../images/ServicesImg/depilacja.jpg";

import { BREAKPOINTS } from "../../../Constants";

SwiperCore.use([Pagination, Navigation]);

const CarouselService = () => {
  const { mobile, tablet, desktop } = BREAKPOINTS;

  return (
    <>
      <Swiper
        slidesPerView={3}
        className={s.swiper}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        breakpoints={{
          [mobile]: {
            slidesPerView: 1,
          },

          [tablet]: {
            slidesPerView: 2,
          },

          [desktop]: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__container"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Manicure</h2>
            <ul className={s["swiperSlide__list"]}>
              <li>services 1</li> <li>services 2</li> <li>services 3</li>
            </ul>
            <button>więcej usług</button>
          </div>
          <div>
            <img
              className={s["swiperSlide__img"]}
              src={ImgManicure}
              alt="manicure service"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__container"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Pedicure</h2>
            <ul className={s["swiperSlide__list"]}>
              <li>services 1</li> <li>services 2</li> <li>services 3</li>
            </ul>
            <button>więcej usług</button>
            <div>
              <img src={ImgPedicure} alt="pedicure service" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__container"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Depilacja</h2>
            <ul className={s["swiperSlide__list"]}>
              <li>services 1</li> <li>services 2</li> <li>services 3</li>
            </ul>
            <button>więcej usług</button>
            <div>
              <img src={ImgDepilacja} alt="depilacja service" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__container"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Depilacja Laserowa</h2>
            <ul className={s["swiperSlide__list"]}>
              <li>services 1</li> <li>services 2</li> <li>services 3</li>
            </ul>
            <button>więcej usług</button>
          </div>
          <div></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselService;
