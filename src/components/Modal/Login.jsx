import { useForm } from "react-hook-form";
import Button from "../Button";
import s from "./Modals.module.scss";

const Login = ({ toggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={s.background} onClick={toggle}>
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

export default Login;
