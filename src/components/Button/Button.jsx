import s from "./Button.module.scss";
const Button = ({ name, variant }) => {
  return (
    <button className={`${s["button"]}  ${s[variant]}`} type="button">
      {name}
    </button>
  );
};

export default Button;
