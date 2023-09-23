import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/Container";
import { GoBack } from "../components/GoBack";
import { LoginForm } from "../components/LoginForm";
import authSelectors from "../redux/auth/authSelectors";
import authOperations from "../redux/auth/authOperations";
import { useGetAllCategoriesQuery } from "../redux/categories/categoriesSlice";
import {
  // useDeleteServiceMutation,
  useGetAllServicesByCategoryIdQuery,
} from "../redux/services/servicesSlice";
import { StyledTableCell, StyledTableRow, getPricePerGender } from "../helpers";

const TestComponent = ({ categoryId }) => {
  const { data, isLoading } = useGetAllServicesByCategoryIdQuery(categoryId);

  if (!isLoading) {
    const man = getPricePerGender("man", data);
    const woman = getPricePerGender("woman", data);
    console.log(man);
    return (
      <>
        {man &&
          man.map(({ _id, name, gender, cost, costByCard }) => (
            <StyledTableRow key={_id}>
              <TableCell>
                {gender} {name}
              </TableCell>
              <TableCell sx={{ textAlign: "right" }}>{cost} zł</TableCell>
              <TableCell sx={{ textAlign: "right" }}>{costByCard} zł</TableCell>
              <TableCell sx={{ textAlign: "right" }}>
                <button onClick={() => console.log("update")}>update</button>
                <button onClick={() => console.log("click")}>
                  {/* Delete */}
                </button>
              </TableCell>
            </StyledTableRow>
          ))}
        {woman &&
          woman.map(({ _id, name, gender, cost, costByCard }) => (
            <StyledTableRow key={_id}>
              <TableCell>
                {gender} {name}
              </TableCell>
              <TableCell sx={{ textAlign: "right" }}>{cost} zł</TableCell>
              <TableCell sx={{ textAlign: "right" }}>{costByCard} zł</TableCell>
              <TableCell sx={{ textAlign: "right" }}>
                <button onClick={() => console.log("update")}>update</button>
                <button onClick={() => console.log("click")}>
                  {/* Delete */}
                </button>
              </TableCell>
            </StyledTableRow>
          ))}
      </>
    );
  }
  return <TableCell>Hello</TableCell>;
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
          <div className="flex border p-10">
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
          </div>
          <Container>
            <ul>
              {!isLoadingAllCategory &&
                allCategories.map(({ category, _id: categoryId }) => {
                  return (
                    <li key={categoryId} className="text-black">
                      <h2 className="bg-accentColor text-center">{category}</h2>
                      <TableContainer component={Paper} sx={{ mt: "30px" }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Zabieg</StyledTableCell>
                              <StyledTableCell sx={{ textAlign: "right" }}>
                                Cena standard
                              </StyledTableCell>
                              <StyledTableCell sx={{ textAlign: "right" }}>
                                Cena z kartą Kiwi Beauty Center
                              </StyledTableCell>
                              <StyledTableCell sx={{ textAlign: "right" }}>
                                edit
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TestComponent categoryId={categoryId} />
                          </TableBody>
                        </Table>
                      </TableContainer>
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
