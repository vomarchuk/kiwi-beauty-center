import { useGetReviewsQuery } from "../../../redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { COLORS } from "../../../Constants";

import SwiperCore, { Pagination } from "swiper";
import s from "./Reviews.module.scss";

import ReactStars from "react-stars";

SwiperCore.use([Pagination]);

const Reviews = () => {
  const { data = [], isLoading } = useGetReviewsQuery();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h2 className={s.title}>
        <span className={s.accent}>Opinie naszych</span> klientów
      </h2>
      <Swiper loop={true} pagination={true} className={s.swiper}>
        {data?.data.map(({ author_name, rating, text, time }) => {
          return (
            <SwiperSlide key={time} className={s.review}>
              <h3 className={s["review__name"]}> {author_name}</h3>
              <ReactStars
                className={s["review__stars"]}
                count={5}
                value={rating}
                edit={false}
                size={25}
                color2={COLORS.accentColor}
              />
              <p className={s["review__comment"]}>{text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Reviews;
