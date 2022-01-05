import s from "./Button.module.scss";
const Button = ({ name, style }) => {
  return (
    <button className={` ${s.button} ` + s[style]} type="button">
      {name}
    </button>
  );
};

export default Button;
