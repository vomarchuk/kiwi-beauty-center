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
      <Container>
        <div className="mt-10 ">admin panel</div>
        <GoBack />
        <button
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          logout
        </button>
        {(isLoggedIn && <p>you are logged in</p>) || <LoginForm />}
      </Container>
    </main>
  );
};
