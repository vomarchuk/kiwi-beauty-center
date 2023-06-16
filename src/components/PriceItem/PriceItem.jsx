import s from "./ProceItem.module.scss";
const PriceItem = ({ service }) => {
  return (
    <tr className={s.table_line}>
      <td>{service.name}</td>
      <td className={s.cost} colSpan="2">
        {service.price.woman.cost}zł
      </td>
      <td className={s.cost} colSpan="2">
        {service.price.woman.costByCart}zł
      </td>
      <td className={s.cost}>edit</td>
    </tr>
  );
};

export default PriceItem;
