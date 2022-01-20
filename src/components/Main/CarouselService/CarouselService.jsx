import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
import s from "./CarouselService.module.scss";
import { COLORS } from "../../../Constants";
import Logo from "../../Logo";
import Button from "../../Button";

import { BREAKPOINTS } from "../../../Constants";

SwiperCore.use([Pagination, Navigation]);

const CarouselService = () => {
  const { mobile, tablet, desktop } = BREAKPOINTS;

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": `${COLORS.dark}`,
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={3}
        className={s.swiper}
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
          <div className={s["swiperSlide__description"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Manicure</h2>

            <ul className={s["swiperSlide__list"]}>
              <li className={s["swiperSlide__item"]}>
                Manicure hybrydowy z bazą proteinową -
                <span className={s["swiperSlide__price"]}>130 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Manicure klasyczny -
                <span className={s["swiperSlide__price"]}>60 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Manicure hybrydowy French -
                <span className={s["swiperSlide__price"]}>140 płn</span>
              </li>
            </ul>
            <Button name="więcej usług" variant="more--service" />
          </div>

          <div
            className={`${s["swiperSlide__img"]} ${s["swiperSlide__img--manicure"]}`}
          ></div>
        </SwiperSlide>

        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__description"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Pedicure</h2>

            <ul className={s["swiperSlide__list"]}>
              <li className={s["swiperSlide__item"]}>
                Pedicure hybrydowy -
                <span className={s["swiperSlide__price"]}>160 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Pedicure Vinylux -
                <span className={s["swiperSlide__price"]}>140 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Pedicure klasyczny -
                <span className={s["swiperSlide__price"]}>130 płn</span>
              </li>
            </ul>
            <Button name="więcej usług" variant="more--service" />
          </div>

          <div
            className={`${s["swiperSlide__img"]} ${s["swiperSlide__img--pedicure"]}`}
          ></div>
        </SwiperSlide>

        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__description"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>
              Depilacja woskiem miękkim
            </h2>

            <ul className={s["swiperSlide__list"]}>
              <li className={s["swiperSlide__item"]}>
                Bikini brazylijskie -
                <span className={s["swiperSlide__price"]}>100 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Całe nogi -
                <span className={s["swiperSlide__price"]}>100 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Brwi / wąsik / policzki / broda -
                <span className={s["swiperSlide__price"]}>40 płn</span>
              </li>
            </ul>
            <Button name="więcej usług" variant="more--service" />
          </div>

          <div
            className={`${s["swiperSlide__img"]} ${s["swiperSlide__img--depilacja"]}`}
          ></div>
        </SwiperSlide>

        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__description"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Laser</h2>

            <ul className={s["swiperSlide__list"]}>
              <li className={s["swiperSlide__item"]}>
                Bikini brazylijskie -
                <span className={s["swiperSlide__price"]}>349 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Łydki + pachy -
                <span className={s["swiperSlide__price"]}>499 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Pachy -<span className={s["swiperSlide__price"]}>199 płn</span>
              </li>
            </ul>
            <Button name="więcej usług" variant="more--service" />
          </div>

          <div
            className={`${s["swiperSlide__img"]} ${s["swiperSlide__img--laser"]}`}
          ></div>
        </SwiperSlide>

        <SwiperSlide className={s["swiperSlide"]}>
          <div className={s["swiperSlide__description"]}>
            <Logo variant="black" styles="swiperSlide" />

            <h2 className={s["swiperSlide__title"]}>Zabiegi na twarz</h2>

            <ul className={s["swiperSlide__list"]}>
              <li className={s["swiperSlide__item"]}>
                Oczyszczanie manualne z maską Algową -
                <span className={s["swiperSlide__price"]}>220 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                Oczyszczanie Wodorowe 6 etapów -
                <span className={s["swiperSlide__price"]}>250 płn</span>
              </li>
              <li className={s["swiperSlide__item"]}>
                PRX-T33 + mezoterapia mikroigłowa -
                <span className={s["swiperSlide__price"]}>550 płn</span>
              </li>
            </ul>
            <Button name="więcej usług" variant="more--service" />
          </div>

          <div
            className={`${s["swiperSlide__img"]} ${s["swiperSlide__img--zabiegi_Na_Twarz"]}`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselService;
