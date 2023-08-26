import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { GoBack } from "../components/GoBack";
import { LoginForm } from "../components/LoginForm";
import authSelectors from "../redux/auth/authSelectors";
export const AdminPanel = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <main style={{ color: "black" }}>
      <Container>
        <div className="mt-50">admin panel</div>
        <GoBack />
        {(isLoggedIn && <p>you are logged in</p>) || <LoginForm />}
      </Container>
    </main>
  );
};
