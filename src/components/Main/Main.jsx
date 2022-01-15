import CarouselService from "./CarouselService";
import GalleryCarousel from "./GalleryCarousel";
import Container from "../Container";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.services}>
        <CarouselService />
      </section>
      <section className={s.salon}>
        <Container>
          <GalleryCarousel />
        </Container>
      </section>
      <section className={s.comments}>
        <h2>the third</h2>
        <p>Comments from our clients</p>
      </section>
    </main>
  );
};
export default Main;
