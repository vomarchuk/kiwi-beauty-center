import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as categorySelectors from "../redux/categories/selectors";
import * as servicesOperations from "../redux/services/servicesOperations";
import * as servicesSelectors from "../redux/services/selectors";

import Container from "../components/Container";
import PriceList from "../components/PriceList";
import { NewService } from "../components/Modal/NewService";

export const Price = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const categories = useSelector(categorySelectors.selectCategories);
  const currentCategory = categories.find((c) => c.category === categoryId);
  const services = useSelector(servicesSelectors.selectServices);

  useEffect(() => {
    if (categories.length > 0 && currentCategory) {
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
      <button
        onClick={() => {
          return console.log("open modal");
        }}
      >
        ADD new service
      </button>
      <NewService />
    </Container>
  );
};
