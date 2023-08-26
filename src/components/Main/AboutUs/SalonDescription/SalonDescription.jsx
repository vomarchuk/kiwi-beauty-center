import s from "./SalonDescription.module.scss";

const SalonDescription = () => {
  return (
    <div className={s.salonDescription}>
      <h2 className={s.salonDescription__title}>
        <span className={s.accent}>Salon</span>
        kosmetyczny
      </h2>
      <p className={s.salonDescription__text}>
        Szanowni Państwo! Witamy serdecznie w naszym nowoczesnym
        <span className={s.accent}> Kiwi beauty center.</span> Piękne wnętrze,
        przytulna atmosfera, obsługa i troskliwe ręce profesjonalistów zadowolą
        najbardziej wymagającego klienta.
      </p>
      <p className={s.salonDescription__text}>
        Zespól <span className={s.accent}>Kiwi beauty center</span>, to
        wyszkolone kosmetyczki i kosmetolodzy które mają gust i wyczucie stylu
        aby stworzyć twój obraz. Naszym priorytetem jest sumienność, wysoka
        jakość i profesjonalizm,mający zapełnisz najwyższy poziom świadczonych
        przez nas usług.
      </p>
    </div>
  );
};

export default SalonDescription;
