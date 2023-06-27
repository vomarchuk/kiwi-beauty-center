import s from "./Button.module.scss";

const Button = ({ name, variant, typeBtn, onClick }) => {
  return (
    <button
      className={`${s["button"]}  ${s[variant]}`}
      type={typeBtn}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
