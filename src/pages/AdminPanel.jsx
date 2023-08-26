import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/Container";
import { GoBack } from "../components/GoBack";
import { LoginForm } from "../components/LoginForm";
import authSelectors from "../redux/auth/authSelectors";
import authOperations from "../redux/auth/authOperations";
export const AdminPanel = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <main style={{ color: "black" }}>
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
        <button
          className="border p-1"
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          logout
        </button>
      </div>
      <Container>
        <GoBack />

        {(isLoggedIn && <p>you are logged in</p>) || <LoginForm />}
      </Container>
    </main>
  );
};
