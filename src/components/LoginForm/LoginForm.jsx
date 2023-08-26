import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import { Button } from "../Button";

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
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-[300px] py-[5px] px-[10px] outline-0 border-accentColor border rounded-[5px]"
          placeholder="e-mail"
          {...register("email", { required: true })}
        />
        <input
          className="w-[300px] mt-10 py-[5px] px-[10px] outline-0 border-accentColor border rounded-[5px]"
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
          <p className="mt-10 text-red before:content-['⚠']">
            {errors.password.message}
          </p>
        )}
        <Button name="LogIn" className="mt-10 w-300" typeBtn="submit" />
      </form>
    </div>
  );
};
