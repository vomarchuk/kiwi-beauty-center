import s from "./Button.module.scss";

const Button = ({ name, variant, typeBtn }) => {
  return (
    <button className={`${s["button"]}  ${s[variant]}`} type={typeBtn}>
      {name}
    </button>
  );
};

export default Button;
