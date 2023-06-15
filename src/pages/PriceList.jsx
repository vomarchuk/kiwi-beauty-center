import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as categorySelectors from "../redux/categories/categoriesSelectors";
import * as servicesOperations from "../redux/services/servicesOperations";
import { useParams } from "react-router-dom";

export const PriceList = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const categories = useSelector(categorySelectors.getCategories);
  const currentCategory = categories.find((c) => c.category === categoryId);
  const services = useSelector((state) => state.services.entities);

  useEffect(() => {
    if (categories.length > 0) {
      dispatch(
        servicesOperations.fetchAllServicesByCategoryById(
          currentCategory["_id"]
        )
      );
    }
  }, [categories, dispatch]);

  return (
    <div style={{ color: "black" }}>
      <a href="/"> BACK HOME</a>
      {services.length > 0 &&
        services.map((service) => {
          return <p key={service["_id"]}>{service.name}</p>;
        })}
    </div>
  );
};
