import PriceItem from "../PriceItem/PriceItem";

import s from "./PriceList.module.scss";
const PriceList = ({ services, name }) => {
  return (
    <table className={s.table}>
      <caption>{name}</caption>
      <thead className={s.table_header}>
        <tr>
          <th rowSpan="2">Zabieg</th>
          <th colSpan="2">Cena standard</th>
          {/* <th></th> */}
          <th colSpan="2">
            Cena z kartą <span>Kiwi Beauty Center</span>
          </th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        {services &&
          services.map((service) => {
            return <PriceItem key={service["_id"]} service={service} />;
          })}
      </tbody>
    </table>
  );
};

export default PriceList;
