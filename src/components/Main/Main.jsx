import Container from "../Container";
// import CarouselService from './CarouselService';
import AboutUs from "./AboutUs";
// import Reviews from './Reviews';

import s from "./Main.module.scss";
const Main = () => {
  fetch("http://localhost:3030/api/services/62015a6a064b3770e9537426")
    .then((response) => response.json())
    .then((response) => {
      const result = response.data;
      result.map((i) => {
        console.log(i);
        // console.log(i.price.man);
        // console.log(i.price.man.cost);
      });
    });
  return (
    <main className={s.main}>
      <section className={s.services}>{/* <CarouselService /> */}</section>
      <section className={`${s.salon}  ${s.salonOverlay} `}>
        <Container>
          <AboutUs />
        </Container>
      </section>
      {/* <section className={`${s.reviews}  ${s.reviewsOverlay} `}> */}
      {/* <Container> */}
      {/* <Reviews /> */}
      {/* </Container> */}
      {/* </section> */}
    </main>
  );
};

export default Main;
