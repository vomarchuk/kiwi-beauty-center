import { TextField } from "@mui/material";
import s from "./Input.module.scss";
export const Input = ({ name, label, register, required, className }) => {
  return (
    <TextField
      className={`${s[`input--${className}`]}`}
      color="success"
      variant="outlined"
      label={label}
      autoComplete="off"
      defaultValue=""
      sx={{ bgcolor: "#ffffff" }}
      {...register(`${name}`, { required })}
    />
  );
};
