import { TextField } from "@mui/material";
import s from "./Input.module.scss";
export const Input = ({ name, label, register, required, className, type }) => {
  return (
    <TextField
      type={type}
      className={`${s[`input--${className}`]}`}
      color="success"
      variant="outlined"
      label={label}
      autoComplete="off"
      sx={{ bgcolor: "#ffffff" }}
      {...register(`${name}`, { required })}
    />
  );
};
