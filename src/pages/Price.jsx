import { useEffect, useState } from "react";
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
import { getPricePerGender2 } from "../helpers";

export const Price = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpen, setOpen] = useState(false);
  const [serviceByGender, setServiceByGender] = useState();
  const { category } = useParams();
  let currentCategory = "";

  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  if (!isLoading) {
    currentCategory = categories.find((c) => c.category === category);
  }
  const { data: servicesData, isFetching } = useGetAllServicesByCategoryIdQuery(
    currentCategory._id,
    {
      skip: currentCategory === "",
    }
  );
  useEffect(() => {
    if (servicesData) {
      setServiceByGender(getPricePerGender2(servicesData));
    }
  }, [isFetching, servicesData]);

  const showMenu = (e) => {
    if (!isOpen) setOpen(true);
    if (e.target.nodeName === "DIV") setOpen(false);
  };
  const closeModal = () => setOpen(false);
  return (
    <Container>
      <div className="pt-20">
        <GoBack />
        {serviceByGender && (
          <>
            <PriceList services={serviceByGender.woman} name={category} />
            <PriceList services={serviceByGender.man} name={category} />
          </>
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
