import s from "./Button.module.scss";
export const Button = ({ name, variant, typeBtn, onClick }) => {
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
