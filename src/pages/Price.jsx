import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as categorySelectors from "../redux/categories/selectors";
import * as servicesOperations from "../redux/services/servicesOperations";
import * as servicesSelectors from "../redux/services/selectors";

import Container from "../components/Container";
import PriceList from "../components/PriceList";
import { NewService } from "../components/Modal";
import Button from "../components/Button";
import { GoBack } from "../components/GoBack";

export const Price = () => {
  const [isOpen, setOpen] = useState(false);

  const showMenu = (e) => {
    if (!isOpen) setOpen(true);
    if (e.target.nodeName === "DIV") setOpen(false);
  };
  const closeModal = () => setOpen(false);

  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const categories = useSelector(categorySelectors.selectCategories);
  const currentCategory = categories.find((c) => c.category === categoryId);
  const services = useSelector(servicesSelectors.selectServices);

  useEffect(() => {
    if (categories.length > 0 && currentCategory)
      dispatch(
        servicesOperations.getServicesByCategory(currentCategory["_id"])
      );
  }, [categories, currentCategory, dispatch]);

  return (
    <Container>
      <div style={{ color: "black", paddingTop: "20px" }}>
        <GoBack />
        {services && <PriceList services={services} name={categoryId} />}
        <Button
          name="ADD new service"
          typeBtn="button"
          variant="add_new_service"
          onClick={showMenu}
        />
      </div>
      {isOpen && (
        <NewService
          toggle={showMenu}
          categoryId={currentCategory}
          closeModal={closeModal}
        />
      )}
    </Container>
  );
};
