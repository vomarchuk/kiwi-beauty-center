import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import { Button } from "../Button";
import s from "../Modal/Modals.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    // watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(authOperations.logIn(data));
    reset();
  };

  return (
    // <div style={{ marginTop: '50px' }}>
    <div className="mt-10">
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={s.input}
          placeholder="e-mail"
          {...register("email", { required: true })}
        />
        <input
          className={s.input}
          type="password"
          autoComplete="off"
          placeholder="password"
          {...register("password", {
            required: "You must enter your password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className={s["notification--error"]}>{errors.password.message}</p>
        )}
        <Button name="LogIn" variant="logIn" typeBtn="submit" />
      </form>
    </div>
  );
};
