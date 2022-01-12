import CarouselService from "./CarouselService";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.services}>
        <CarouselService />
      </section>
      <section className={s.salon}>
        <h2>The second</h2>
        <p>Salon description and photo carousel</p>
      </section>
      <section className={s.comments}>
        <h2>the third</h2>
        <p>Comments from our clients</p>
      </section>
    </main>
  );
};
export default Main;
