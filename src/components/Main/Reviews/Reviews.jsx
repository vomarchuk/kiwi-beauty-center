import { useGetReviewsQuery } from "../../../redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
import s from "./Reviews.module.scss";

SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  const { data = [], isLoading } = useGetReviewsQuery();

  if (isLoading) return <h2>Loading...</h2>;

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
        {data?.data.map(
          ({ author_name, profile_photo_url, rating, text, time }) => {
            return (
              <SwiperSlide key={time}>
                <h3 className={s.name}>{author_name}</h3>
                {/* <p className={s.date}>{time}</p> */}
                <p>{rating}</p>
                <p className={s.comment}>{text}</p>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
export default Reviews;
