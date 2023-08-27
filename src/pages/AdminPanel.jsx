import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/Container";
import { GoBack } from "../components/GoBack";
import { LoginForm } from "../components/LoginForm";
import authSelectors from "../redux/auth/authSelectors";
import authOperations from "../redux/auth/authOperations";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";
import { useGetAllServicesByCategoryIdQuery } from "../redux/services/servicesSlice";

const TestComponent = ({ categoryId }) => {
  const { data, isLoading } = useGetAllServicesByCategoryIdQuery(categoryId);
  console.log(data);
  const manCervice = data.filter((item) => item.price.man);
  return (
    <ul>
      {data &&
        data.map((item) => (
          <li>
            <h3>{item.name}</h3>
            {item.price.woman && <p className="bg-red">man</p>}
            {item.price.man && <p className="bg-blue">man</p>}
          </li>
        ))}
    </ul>
  );
};

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const logOutUser = () => dispatch(authOperations.logOut());

  const { data: allCategoriesData, isLoading: isLoadingAllCategory } =
    useGetAllCategoriesQuery();
  const allCategories = allCategoriesData;

  return (
    <main style={{ color: "black" }}>
      <GoBack />

      {(isLoggedIn && (
        <>
          {/* <div className="flex border p-10">
            <p>Admin panel</p>
            <ul className="flex">
              <li>Usługi</li>
              <li>Nowości</li>
              <li>Stale promocje</li>
              <li>Czasowe promocje</li>
              <li>O nas</li>
              <li>Kontakt</li>
            </ul>
            <button className="border p-1" onClick={logOutUser}>
              logout
            </button>
          </div> */}
          <Container>
            <ul>
              {allCategories &&
                allCategories.map(({ category, _id: categoryId }) => {
                  return (
                    <li key={categoryId} className="border">
                      <h2 className="bg-accentColor text-center">{category}</h2>
                      {categoryId && <TestComponent categoryId={categoryId} />}
                    </li>
                  );
                })}
            </ul>
          </Container>
        </>
      )) || <LoginForm />}
    </main>
  );
};
