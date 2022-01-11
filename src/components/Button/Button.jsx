import s from "./Button.module.scss";
const Button = ({ name, styles }) => {
  return (
    <button className={` ${s.button} ` + s[styles]} type="button">
      {name}
    </button>
  );
};

export default Button;
