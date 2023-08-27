import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { PriceList } from "../components/PriceList";
import { CreateNewServiceModal } from "../components/Modal";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";
import { useGetAllServicesByCategoryIdQuery } from "../redux/services/servicesSlice";
import authSelectors from "../redux/auth/authSelectors";
export const Price = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpen, setOpen] = useState(false);
  const { category } = useParams();
  let currentCategory = "";

  const { data, isLoading } = useGetAllCategoriesQuery();
  const categories = data;

  if (!isLoading) {
    currentCategory = categories.find((c) => c.category === category);
  }

  const { data: servicesData, isFetching } = useGetAllServicesByCategoryIdQuery(
    currentCategory._id,
    {
      skip: currentCategory === "",
    }
  );

  const showMenu = (e) => {
    if (!isOpen) setOpen(true);
    if (e.target.nodeName === "DIV") setOpen(false);
  };

  const closeModal = () => setOpen(false);

  return (
    <Container>
      <div className="pt-20">
        <GoBack />
        {servicesData && !isFetching && (
          <PriceList services={servicesData} name={category} />
        )}
        {isLoggedIn && (
          <Button
            name="ADD new service"
            typeBtn="button"
            variant="add_new_service"
            onClick={showMenu}
          />
        )}
      </div>
      {isOpen && (
        <CreateNewServiceModal
          toggle={showMenu}
          categoryId={currentCategory}
          closeModal={closeModal}
        />
      )}
    </Container>
  );
};
