import Container from "../Container";
import CarouselService from "./CarouselService";
import AboutUs from "./AboutUs";
// import Reviews from './Reviews';

import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.services}>
        <CarouselService />
      </section>
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
