import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as categorySelectors from "../redux/categories/categoriesSelectors";
import * as servicesOperations from "../redux/services/servicesOperations";

import Container from "../components/Container";
import PriceList from "../components/PriceList";

export const Price = () => {
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
  }, [categories, currentCategory, dispatch]);

  return (
    <Container>
      <div style={{ color: "black" }}>
        <a href="/"> BACK HOME</a>
        {services.length > 0 && (
          <PriceList services={services} name={categoryId} />
        )}
      </div>
      <button>ADD new service</button>
    </Container>
  );
};
