import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={s.animatedTitle}>
      <div className={s.textTop}>
        <div>
          <span>Zacznij</span>
          <span>dzień</span>
        </div>
      </div>
      <div className={s.textBottom}>
        <div>od KIWI...</div>
      </div>
    </div>
  );
};

export default Hero;
