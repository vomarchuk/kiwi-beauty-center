import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { PriceList } from "../components/PriceList";
import { CreateNewServiceModal } from "../components/Modal";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";
import { useGetAllServicesByCategoryIdQuery } from "../redux/services/servicesSlice";
export const Price = () => {
  const [isOpen, setOpen] = useState(false);
  const { category } = useParams();
  let currentCategory = "";

  const { data, isLoading } = useGetAllCategoriesQuery();
  const categories = data?.data;

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
      <div style={{ color: "black", paddingTop: "20px" }}>
        <GoBack />
        {servicesData && !isFetching && (
          <PriceList services={servicesData.data} name={category} />
        )}
        <Button
          name="ADD new service"
          typeBtn="button"
          variant="add_new_service"
          onClick={showMenu}
        />
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
