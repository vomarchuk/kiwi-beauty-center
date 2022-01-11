import s from "./Main.module.scss";
const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.services}>
        <h2>The first</h2>
        <p>Services list and price TOP categories</p>
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
