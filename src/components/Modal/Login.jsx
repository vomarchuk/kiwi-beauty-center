import { useForm } from "react-hook-form";

import s from "./Login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <div className={s.background}></div>
      <div className={s.login}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="login"
            {...register("email", { required: true })}
          />
          <input
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
            <p className={s["notification--error"]}>
              {errors.password.message}
            </p>
          )}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
